import { describe, expect, it } from 'vitest';

import degrees from '../resume/degrees';

describe('degrees data', () => {
  it('exports an array of degrees', () => {
    expect(Array.isArray(degrees)).toBe(true);
    expect(degrees.length).toBeGreaterThan(0);
  });

  it('each degree has required properties', () => {
    for (const degree of degrees) {
      expect(degree).toHaveProperty('school');
      expect(degree).toHaveProperty('degreeFr');
      expect(degree).toHaveProperty('degreeEn');
      expect(degree).toHaveProperty('link');
      expect(degree).toHaveProperty('year');

      expect(typeof degree.school).toBe('string');
      expect(typeof degree.degreeFr).toBe('string');
      expect(typeof degree.degreeEn).toBe('string');
      expect(typeof degree.link).toBe('string');
      expect(['number', 'string']).toContain(typeof degree.year);
    }
  });

  it('degree years are reasonable (between 1950 and current year + 10)', () => {
    const currentYear = new Date().getFullYear();

    for (const degree of degrees) {
      const yearNum = typeof degree.year === 'number' 
        ? degree.year 
        : parseInt(degree.year.split('-').pop()?.trim() || '0', 10);
      expect(yearNum).toBeGreaterThanOrEqual(1950);
      expect(yearNum).toBeLessThanOrEqual(currentYear + 10);
    }
  });

  it('links are valid URLs', () => {
    const urlRegex = /^(https?:\/\/.+|#.*)$/;

    for (const degree of degrees) {
      expect(degree.link).toMatch(urlRegex);
    }
  });

  it('degrees are ordered by year (most recent first)', () => {
    for (let i = 0; i < degrees.length - 1; i++) {
      const yearI = typeof degrees[i].year === 'number' 
        ? (degrees[i].year as number) 
        : parseInt(degrees[i].year.toString().split('-').pop()?.trim() || '0', 10);
      const yearI1 = typeof degrees[i + 1].year === 'number' 
        ? (degrees[i + 1].year as number) 
        : parseInt(degrees[i + 1].year.toString().split('-').pop()?.trim() || '0', 10);
      expect(yearI).toBeGreaterThanOrEqual(yearI1);
    }
  });

  it('has unique school entries', () => {
    const schools = degrees.map((d) => d.school);
    const uniqueSchools = new Set(schools);

    expect(uniqueSchools.size).toBe(schools.length);
  });

  it('each degree has a non-empty degree name', () => {
    for (const degree of degrees) {
      expect(degree.degreeFr.trim().length).toBeGreaterThan(0);
      expect(degree.degreeEn.trim().length).toBeGreaterThan(0);
    }
  });
});
