import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses canonical trailing-slash links for writing pages', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/writing/`);
    expect(xml).toContain(`${SITE_URL}/fr/writing/bienvenue-sur-mon-site/`);
    expect(xml).toContain(`${SITE_URL}/en/writing/welcome-to-my-site/`);
    expect(xml).toContain('#coming-soon');
  });

  it('keeps the feed self link file-like', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });
});
