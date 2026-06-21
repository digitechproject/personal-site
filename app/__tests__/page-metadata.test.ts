import { describe, expect, it } from 'vitest';

import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import { generateMetadata as generateAboutMetadata } from '../[lang]/about/page';
import { generateMetadata as generateContactMetadata } from '../[lang]/contact/page';
import { metadata as notFoundMetadata } from '../not-found';
import { generateMetadata as generateProjectsMetadata } from '../[lang]/projects/page';
import { generateMetadata as generateResumeMetadata } from '../[lang]/resume/page';
import { generateMetadata as generateStatsMetadata } from '../[lang]/stats/page';
import { generateMetadata as generateWritingMetadata } from '../[lang]/writing/page';

describe('page metadata', () => {
  it('generates page-specific metadata for English', async () => {
    const params = { lang: 'en' };
    const aboutMetadata = await generateAboutMetadata({ params });
    const contactMetadata = await generateContactMetadata({ params });
    const projectsMetadata = await generateProjectsMetadata({ params });
    const resumeMetadata = await generateResumeMetadata({ params });
    const statsMetadata = await generateStatsMetadata({ params });
    const writingMetadata = await generateWritingMetadata({ params });

    const pages = [
      ['about', aboutMetadata, `${SITE_URL}/en/about/`],
      ['contact', contactMetadata, `${SITE_URL}/en/contact/`],
      ['archive', projectsMetadata, `${SITE_URL}/en/projects/`],
      ['resume', resumeMetadata, `${SITE_URL}/en/resume/`],
      ['stats', statsMetadata, `${SITE_URL}/en/stats/`],
      ['writing', writingMetadata, `${SITE_URL}/en/writing/`],
    ] as const;

    for (const [_, metadata, url] of pages) {
      expect(metadata.openGraph?.url).toBe(url);
      expect(metadata.openGraph?.description).toBe(metadata.description);
      expect(metadata.openGraph?.title).toBe(
        `${metadata.title} | ${AUTHOR_NAME}`,
      );
      expect(metadata.twitter?.description).toBe(metadata.description);
      expect(metadata.twitter?.title).toBe(`${metadata.title} | ${AUTHOR_NAME}`);
    }
  });

  it('generates page-specific metadata for French', async () => {
    const params = { lang: 'fr' };
    const aboutMetadata = await generateAboutMetadata({ params });
    const contactMetadata = await generateContactMetadata({ params });
    const projectsMetadata = await generateProjectsMetadata({ params });
    const resumeMetadata = await generateResumeMetadata({ params });
    const statsMetadata = await generateStatsMetadata({ params });
    const writingMetadata = await generateWritingMetadata({ params });

    const pages = [
      ['about', aboutMetadata, `${SITE_URL}/fr/about/`],
      ['contact', contactMetadata, `${SITE_URL}/fr/contact/`],
      ['archive', projectsMetadata, `${SITE_URL}/fr/projects/`],
      ['resume', resumeMetadata, `${SITE_URL}/fr/resume/`],
      ['stats', statsMetadata, `${SITE_URL}/fr/stats/`],
      ['writing', writingMetadata, `${SITE_URL}/fr/writing/`],
    ] as const;

    for (const [_, metadata, url] of pages) {
      expect(metadata.openGraph?.url).toBe(url);
      expect(metadata.openGraph?.description).toBe(metadata.description);
      expect(metadata.openGraph?.title).toBe(
        `${metadata.title} | ${AUTHOR_NAME}`,
      );
      expect(metadata.twitter?.description).toBe(metadata.description);
      expect(metadata.twitter?.title).toBe(`${metadata.title} | ${AUTHOR_NAME}`);
    }
  });

  it('overrides 404 share metadata without inventing a canonical url', () => {
    expect(notFoundMetadata.openGraph?.url).toBeUndefined();
    expect(notFoundMetadata.openGraph?.description).toBe(
      notFoundMetadata.description,
    );
    expect(notFoundMetadata.openGraph?.title).toBe(
      `${notFoundMetadata.title} | ${AUTHOR_NAME}`,
    );
    expect(notFoundMetadata.twitter?.description).toBe(
      notFoundMetadata.description,
    );
    expect(notFoundMetadata.twitter?.title).toBe(
      `${notFoundMetadata.title} | ${AUTHOR_NAME}`,
    );
  });

  it('preserves the writing rss alternate', async () => {
    const writingMetadata = await generateWritingMetadata({ params: { lang: 'en' } });
    expect(writingMetadata.alternates?.types?.['application/rss+xml']).toBe(
      '/feed.xml',
    );
  });
});
