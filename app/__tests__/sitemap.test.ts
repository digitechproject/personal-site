import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('uses trailing slashes for exported page routes in both languages', () => {
    const entries = sitemap();

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${SITE_URL}/fr/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/en/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/fr/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/en/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/fr/projects/` }),
        expect.objectContaining({ url: `${SITE_URL}/en/projects/` }),
        expect.objectContaining({ url: `${SITE_URL}/fr/writing/` }),
        expect.objectContaining({ url: `${SITE_URL}/en/writing/` }),
        expect.objectContaining({ url: `${SITE_URL}/fr/stats/` }),
        expect.objectContaining({ url: `${SITE_URL}/en/stats/` }),
        expect.objectContaining({ url: `${SITE_URL}/fr/contact/` }),
        expect.objectContaining({ url: `${SITE_URL}/en/contact/` }),
      ]),
    );
  });

  it('uses trailing slashes for post routes', () => {
    const entries = sitemap();
    const postEntries = entries.filter(
      (entry) =>
        (entry.url.startsWith(`${SITE_URL}/fr/writing/`) ||
          entry.url.startsWith(`${SITE_URL}/en/writing/`)) &&
        entry.url !== `${SITE_URL}/fr/writing/` &&
        entry.url !== `${SITE_URL}/en/writing/`,
    );

    expect(postEntries.length).toBeGreaterThan(0);
    expect(postEntries.every((entry) => entry.url.endsWith('/'))).toBe(true);
  });
});
