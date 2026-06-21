import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SkillBar from '../../Resume/Skills/SkillBar';

const mockCategories = [
  { name: 'Languages', color: '#6968b3', textColor: 'light' as const },
  { name: 'ML Engineering', color: '#37b1f5', textColor: 'dark' as const },
];

describe('SkillBar', () => {
  it('renders the skill title in French by default', () => {
    const skill = { titleFr: 'Python_FR', titleEn: 'Python_EN', competency: 5, category: ['Languages'] };

    render(<SkillBar data={skill} categories={mockCategories} />);

    expect(screen.getByText('Python_FR')).toBeInTheDocument();
  });

  it('renders the skill title in English', () => {
    const skill = { titleFr: 'Python_FR', titleEn: 'Python_EN', competency: 5, category: ['Languages'] };

    render(<SkillBar data={skill} categories={mockCategories} lang="en" />);

    expect(screen.getByText('Python_EN')).toBeInTheDocument();
  });

  it('displays competency as fraction', () => {
    const skill = { titleFr: 'Python', titleEn: 'Python', competency: 4, category: ['Languages'] };

    render(<SkillBar data={skill} categories={mockCategories} />);

    expect(screen.getByText('4 / 5')).toBeInTheDocument();
  });

  it('calculates bar width based on competency (5 = 100%)', () => {
    const skill = { titleFr: 'Python', titleEn: 'Python', competency: 5, category: ['Languages'] };

    render(<SkillBar data={skill} categories={mockCategories} />);

    const bar = document.querySelector('.skillbar-bar') as HTMLElement;
    expect(bar.style.width).toBe('100%');
  });

  it('calculates bar width based on competency (4 = 80%)', () => {
    const skill = {
      titleFr: 'JavaScript',
      titleEn: 'JavaScript',
      competency: 4,
      category: ['Languages'],
    };

    render(<SkillBar data={skill} categories={mockCategories} />);

    const bar = document.querySelector('.skillbar-bar') as HTMLElement;
    expect(bar.style.width).toBe('80%');
  });

  it('calculates bar width based on competency (3 = 60%)', () => {
    const skill = { titleFr: 'Ruby', titleEn: 'Ruby', competency: 3, category: ['Languages'] };

    render(<SkillBar data={skill} categories={mockCategories} />);

    const bar = document.querySelector('.skillbar-bar') as HTMLElement;
    expect(bar.style.width).toBe('60%');
  });

  it('applies category color via CSS custom property', () => {
    const skill = { titleFr: 'Python', titleEn: 'Python', competency: 5, category: ['Languages'] };

    render(<SkillBar data={skill} categories={mockCategories} />);

    // Color is now passed via CSS custom property on the parent skillbar
    const skillbar = document.querySelector('.skillbar') as HTMLElement;
    expect(skillbar.style.getPropertyValue('--skillbar-color')).toBe('#6968b3');
  });

  it('clamps width between 0% and 100%', () => {
    // Test with very high competency (shouldn't exceed 100%)
    const highSkill = {
      titleFr: 'Expert',
      titleEn: 'Expert',
      competency: 10,
      category: ['Languages'],
    };

    render(<SkillBar data={highSkill} categories={mockCategories} />);

    const bar = document.querySelector('.skillbar-bar') as HTMLElement;
    expect(bar.style.width).toBe('100%');
  });
});

