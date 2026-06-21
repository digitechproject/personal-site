import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Education from '../../Resume/Education';
import Degree from '../../Resume/Education/Degree';

const mockDegrees = [
  {
    school: 'Stanford University',
    degreeFr: 'Master en Informatique',
    degreeEn: 'M.S. Computer Science',
    link: 'https://stanford.edu',
    year: 2020,
  },
  {
    school: 'MIT',
    degreeFr: 'Licence en Informatique',
    degreeEn: 'B.S. Computer Science',
    link: 'https://mit.edu',
    year: 2016,
  },
];

describe('Education', () => {
  it('renders the education section with localized title', () => {
    render(<Education data={mockDegrees} lang="en" />);
    expect(
      screen.getByRole('heading', { name: /education/i }),
    ).toBeInTheDocument();

    render(<Education data={mockDegrees} lang="fr" />);
    expect(
      screen.getByRole('heading', { name: /diplômes/i }),
    ).toBeInTheDocument();
  });

  it('renders all degrees based on lang', () => {
    render(<Education data={mockDegrees} lang="en" />);
    expect(screen.getByText('M.S. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('B.S. Computer Science')).toBeInTheDocument();

    render(<Education data={mockDegrees} lang="fr" />);
    expect(screen.getByText('Master en Informatique')).toBeInTheDocument();
    expect(screen.getByText('Licence en Informatique')).toBeInTheDocument();
  });

  it('renders school links', () => {
    render(<Education data={mockDegrees} lang="en" />);

    const stanfordLink = screen.getByRole('link', { name: /stanford/i });
    expect(stanfordLink).toHaveAttribute('href', 'https://stanford.edu');

    const mitLink = screen.getByRole('link', { name: /mit/i });
    expect(mitLink).toHaveAttribute('href', 'https://mit.edu');
  });

  it('has anchor link for navigation', () => {
    render(<Education data={mockDegrees} lang="en" />);

    const anchor = document.getElementById('education');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Degree', () => {
  const mockDegree = {
    school: 'Stanford University',
    degreeFr: 'Master en Informatique',
    degreeEn: 'M.S. Computer Science',
    link: 'https://stanford.edu',
    year: 2020,
  };

  it('renders degree title in English', () => {
    render(<Degree data={mockDegree} lang="en" />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'M.S. Computer Science',
    );
  });

  it('renders degree title in French', () => {
    render(<Degree data={mockDegree} lang="fr" />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'Master en Informatique',
    );
  });

  it('renders school name with link', () => {
    render(<Degree data={mockDegree} lang="en" />);

    const link = screen.getByRole('link', { name: /stanford/i });
    expect(link).toHaveAttribute('href', 'https://stanford.edu');
  });

  it('displays year', () => {
    render(<Degree data={mockDegree} lang="en" />);

    expect(screen.getByText(/2020/)).toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Degree data={mockDegree} lang="en" />);

    const article = document.querySelector('article.degree-container');
    expect(article).toBeInTheDocument();
  });
});
