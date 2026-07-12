import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';
import writing from '@/data/writing';
import { createPageMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { getTranslation, Language } from '@/data/translations';

interface WritingPageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  const baseMetadata = createPageMetadata({
    title: lang === 'en' ? 'Writing' : 'Articles',
    description:
      lang === 'en'
        ? 'Articles and feedback from Fernando HOUSSOU on technology, web design, and digital solutions in Africa.'
        : 'Articles et retours d’expérience de Fernando HOUSSOU sur la technologie, le design web et les solutions numériques en Afrique.',
    path: `/${lang}/writing/`,
  });

  return {
    ...baseMetadata,
    alternates: {
      types: {
        'application/rss+xml': '/feed.xml',
      },
    },
  };
}

interface UnifiedItem {
  title: string;
  url: string;
  date: string;
  description: string;
  isExternal: boolean;
}

interface WritingItemProps {
  item: UnifiedItem;
  showDate?: boolean;
}

function WritingItem({ item, showDate = true }: WritingItemProps) {
  const content = (
    <>
      {showDate && item.date && (
        <time className="writing-date" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
      )}
      <h2 className="writing-title">{item.title}</h2>
      <p className="writing-description">{item.description}</p>
      {item.isExternal && (
        <span className="writing-external" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );

  if (item.isExternal) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="writing-item"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.url} className="writing-item">
      {content}
    </Link>
  );
}

export default async function WritingPage({ params }: WritingPageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  // Get and filter internal posts from markdown files
  const internalPosts = getAllPosts().filter((post) => post.lang === lang);
  const internalItems: UnifiedItem[] = internalPosts.map((post) => ({
    title: post.title,
    url: `/${lang}/writing/${post.slug}/`,
    date: post.date,
    description: post.description,
    isExternal: false,
  }));

  // Get and filter external articles from data file
  const externalItems: UnifiedItem[] = writing
    .filter((item) => item.lang === lang)
    .map((item) => ({
      title: item.title,
      url: item.url,
      date: item.date,
      description: item.description,
      isExternal: true,
    }));

  // Merge and sort all items
  const allItems = [...internalItems, ...externalItems];
  const dated = allItems
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const undated = allItems.filter((item) => !item.date);

  return (
    <PageWrapper>
      <article className="writing-page">
        <header className="writing-header">
          <div className="writing-header-row">
            <h1 className="page-title">{t['writing.title']}</h1>
            <a
              href="/feed.xml"
              className="writing-rss-link"
              title={t['writing.rss']}
              aria-label={t['writing.rss']}
            >
              RSS
            </a>
          </div>
        </header>

        <div className="writing-list">
          {dated.length > 0 ? (
            dated.map((item) => <WritingItem key={item.url} item={item} />)
          ) : (
            <p className="writing-empty">{t['writing.empty']}</p>
          )}

          {undated.length > 0 && (
            <>
              <div className="writing-section-label">{t['writing.guides']}</div>
              {undated.map((item) => (
                <WritingItem key={item.url} item={item} showDate={false} />
              ))}
            </>
          )}
        </div>
      </article>
    </PageWrapper>
  );
}
