import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import PostContent from '@/components/Writing/PostContent';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { AUTHOR_NAME, formatDate, SITE_URL } from '@/lib/utils';

interface PageProps {
  params: Promise<{ lang: string; slug: string }> | any;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    lang: post.lang || 'fr',
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  const post = getPostBySlug(slug);

  if (!post || post.lang !== lang) {
    return {
      title: 'Post Not Found',
    };
  }

  const url = `${SITE_URL}/${lang}/writing/${post.slug}/`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [AUTHOR_NAME],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  const post = getPostBySlug(slug);

  // If the post does not exist or its language does not match the active locale
  if (!post || post.lang !== lang) {
    notFound();
  }

  return (
    <PageWrapper>
      <ArticleSchema post={post} />
      <article className="post-page">
        <header className="post-header">
          <time className="post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-description">{post.description}</p>
        </header>
        <div className="post-content prose">
          <PostContent content={post.content} />
        </div>
      </article>
    </PageWrapper>
  );
}
