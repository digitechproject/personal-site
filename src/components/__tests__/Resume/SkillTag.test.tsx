import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SkillTag from '../../Resume/Skills/SkillTag';

const mockCategories = [
  { name: 'Languages', color: '#6968b3', textColor: 'light' as const },
  { name: 'ML Engineering', color: '#37b1f5', textColor: 'dark' as const },
];

describe('SkillTag', () => {
  it('renders the skill title in English', () => {
    const skill = {
      titleFr: 'Python_FR',
      titleEn: 'Python_EN',
      competency: 5,
      category: ['Languages'],
    };

    render(<SkillTag data={skill} categories={mockCategories} lang="en" />);

    expect(screen.getByText('Python_EN')).toBeInTheDocument();
  });

  it('renders the skill title in French', () => {
    const skill = {
      titleFr: 'Python_FR',
      titleEn: 'Python_EN',
      competency: 5,
      category: ['Languages'],
    };

    render(<SkillTag data={skill} categories={mockCategories} lang="fr" />);

    expect(screen.getByText('Python_FR')).toBeInTheDocument();
  });

  it('applies large size class for competency 5', () => {
    const skill = {
      titleFr: 'Python',
      titleEn: 'Python',
      competency: 5,
      category: ['Languages'],
    };

    render(<SkillTag data={skill} categories={mockCategories} />);

    const tag = document.querySelector('.skill-tag');
    expect(tag).toHaveClass('skill-tag--lg');
  });

  it('applies medium size class for competency 4', () => {
    const skill = {
      titleFr: 'JavaScript',
      titleEn: 'JavaScript',
      competency: 4,
      category: ['Languages'],
    };

    render(<SkillTag data={skill} categories={mockCategories} />);

    const tag = document.querySelector('.skill-tag');
    expect(tag).toHaveClass('skill-tag--md');
  });

  it('applies small size class for competency 3 or below', () => {
    const skill = {
      titleFr: 'Ruby',
      titleEn: 'Ruby',
      competency: 3,
      category: ['Languages'],
    };

    render(<SkillTag data={skill} categories={mockCategories} />);

    const tag = document.querySelector('.skill-tag');
    expect(tag).toHaveClass('skill-tag--sm');
  });

  it('sets category color as CSS variable', () => {
    const skill = {
      titleFr: 'Python',
      titleEn: 'Python',
      competency: 5,
      category: ['Languages'],
    };

    render(<SkillTag data={skill} categories={mockCategories} />);

    const tag = document.querySelector('.skill-tag') as HTMLElement;
    expect(tag.style.getPropertyValue('--tag-color')).toBe('#6968b3');
  });

  it('uses first matching category color for multi-category skills', () => {
    const skill = {
      titleFr: 'Python',
      titleEn: 'Python',
      competency: 5,
      category: ['Languages', 'ML Engineering'],
    };

    render(<SkillTag data={skill} categories={mockCategories} />);

    const tag = document.querySelector('.skill-tag') as HTMLElement;
    // Should use Languages color since it's first in categories list
    expect(tag.style.getPropertyValue('--tag-color')).toBe('#6968b3');
  });
});
