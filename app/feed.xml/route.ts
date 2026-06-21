import writing from '@/data/writing';
import { getAllPosts } from '@/lib/posts';
import { SITE_URL } from '@/lib/utils';

export const dynamic = 'force-static';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatRssDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(`${dateStr}T12:00:00Z`);
  return date.toUTCString();
}

interface FeedItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

export async function GET() {
  // Get internal posts with localized URLs
  const internalPosts = getAllPosts();
  const internalItems: FeedItem[] = internalPosts.map((post) => {
    const lang = post.lang || 'fr';
    return {
      title: post.title,
      url: `${SITE_URL}/${lang}/writing/${post.slug}/`,
      date: post.date,
      description: post.description,
    };
  });

  // Get external articles
  const externalItems: FeedItem[] = writing
    .filter((item) => item.date)
    .map((item) => ({
      title: item.title,
      url: item.url,
      date: item.date,
      description: item.description,
    }));

  // Merge and sort by date descending
  const items = [...internalItems, ...externalItems]
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const rssItems = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${formatRssDate(item.date)}</pubDate>
      <guid isPermaLink="true">${escapeXml(item.url)}</guid>
    </item>`,
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Fernando HOUSSOU - Writing</title>
    <link>${SITE_URL}/writing/</link>
    <description>Articles sur le design, le développement web, l'IA et l'entrepreneuriat par Fernando HOUSSOU.</description>
    <language>fr-fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
