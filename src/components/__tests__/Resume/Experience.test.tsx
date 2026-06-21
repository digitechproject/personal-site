import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Experience from '../../Resume/Experience';

const mockJobs = [
  {
    name: 'Acme Corp',
    positionFr: 'Ingénieur Sénior',
    positionEn: 'Senior Engineer',
    url: 'https://acme.com',
    startDate: '2020-01-01',
    endDate: '2023-06-30',
    summaryFr: 'Équipe managée.',
    summaryEn: 'Led engineering team.',
    highlightsFr: ['Fonctionnalités créées', 'Performance améliorée'],
    highlightsEn: ['Built features', 'Improved performance'],
  },
  {
    name: 'Startup Inc',
    positionFr: 'Développeur Logiciel',
    positionEn: 'Software Engineer',
    url: 'https://startup.com',
    startDate: '2018-01-01',
    endDate: '2019-12-31',
    summaryFr: 'Code rédigé.',
    summaryEn: 'Wrote code.',
    highlightsFr: ['Code écrit'],
    highlightsEn: ['Wrote code'],
  },
];

describe('Experience', () => {
  it('renders the experience section with localized title', () => {
    render(<Experience data={mockJobs} lang="en" />);
    expect(
      screen.getByRole('heading', { name: /experience/i }),
    ).toBeInTheDocument();

    render(<Experience data={mockJobs} lang="fr" />);
    expect(
      screen.getByRole('heading', { name: /expérience/i }),
    ).toBeInTheDocument();
  });

  it('renders all jobs', () => {
    render(<Experience data={mockJobs} lang="en" />);

    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    expect(screen.getByText('Startup Inc')).toBeInTheDocument();
  });

  it('renders job positions based on lang', () => {
    render(<Experience data={mockJobs} lang="en" />);
    expect(screen.getByText(/Senior Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();

    render(<Experience data={mockJobs} lang="fr" />);
    expect(screen.getByText(/Ingénieur Sénior/)).toBeInTheDocument();
    expect(screen.getByText(/Développeur Logiciel/)).toBeInTheDocument();
  });

  it('has anchor link for navigation', () => {
    render(<Experience data={mockJobs} lang="en" />);

    const anchor = document.getElementById('experience');
    expect(anchor).toBeInTheDocument();
  });

  it('renders jobs with company links', () => {
    render(<Experience data={mockJobs} lang="en" />);

    const links = screen.getAllByRole('link');
    expect(
      links.some((l) => l.getAttribute('href') === 'https://acme.com'),
    ).toBe(true);
    expect(
      links.some((l) => l.getAttribute('href') === 'https://startup.com'),
    ).toBe(true);
  });

  it('handles empty jobs array', () => {
    render(<Experience data={[]} lang="en" />);

    expect(
      screen.getByRole('heading', { name: /experience/i }),
    ).toBeInTheDocument();
    // No job articles
    const articles = document.querySelectorAll('.jobs-container');
    expect(articles.length).toBe(0);
  });
});
