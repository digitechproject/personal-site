import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';

import { generateMetadata } from './page';

describe('writing post metadata', () => {
  it('uses a trailing-slash canonical URL for French posts', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lang: 'fr', slug: 'bienvenue-sur-mon-site' }),
    });

    expect(metadata.openGraph?.url).toBe(
      `${SITE_URL}/fr/writing/bienvenue-sur-mon-site/`,
    );
  });

  it('uses a trailing-slash canonical URL for English posts', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lang: 'en', slug: 'welcome-to-my-site' }),
    });

    expect(metadata.openGraph?.url).toBe(
      `${SITE_URL}/en/writing/welcome-to-my-site/`,
    );
  });
});
