import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as an object with fr and en keys', () => {
    expect(typeof aboutMarkdown).toBe('object');
    expect(typeof aboutMarkdown.fr).toBe('string');
    expect(typeof aboutMarkdown.en).toBe('string');
    expect(aboutMarkdown.fr.length).toBeGreaterThan(0);
    expect(aboutMarkdown.en.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown.fr).toContain('# Intro');
    expect(aboutMarkdown.fr).toContain('béninois');
    expect(aboutMarkdown.en).toContain('# Intro');
    expect(aboutMarkdown.en).toContain('Beninese');
  });

  it('contains the vision section', () => {
    expect(aboutMarkdown.fr).toContain('# Ma Vision');
    expect(aboutMarkdown.fr).toContain('Afrique');
    expect(aboutMarkdown.en).toContain('# My Vision');
    expect(aboutMarkdown.en).toContain('Africa');
  });

  it('contains the history section', () => {
    expect(aboutMarkdown.fr).toContain('# Mon Histoire / Timeline');
    expect(aboutMarkdown.fr).toContain('Baccalauréat');
    expect(aboutMarkdown.en).toContain('# My Story / Timeline');
    expect(aboutMarkdown.en).toContain('Baccalaureate');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown.fr).toContain("# J'aime / Centres d'intérêt");
    expect(aboutMarkdown.fr).toContain('Design');
    expect(aboutMarkdown.en).toContain('# Likes / Interests');
    expect(aboutMarkdown.en).toContain('Design');
  });

  it('contains valid markdown links', () => {
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const linksFr = aboutMarkdown.fr.match(linkRegex);
    const linksEn = aboutMarkdown.en.match(linkRegex);

    expect(linksFr).not.toBeNull();
    expect(linksFr!.length).toBeGreaterThan(0);
    expect(linksEn).not.toBeNull();
    expect(linksEn!.length).toBeGreaterThan(0);
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headersFr = aboutMarkdown.fr.match(headerRegex);
    const headersEn = aboutMarkdown.en.match(headerRegex);

    expect(headersFr).not.toBeNull();
    expect(headersFr!.length).toBeGreaterThanOrEqual(4);
    expect(headersEn).not.toBeNull();
    expect(headersEn!.length).toBeGreaterThanOrEqual(4);
  });
});

