import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Job from '../../Resume/Experience/Job';

describe('Job', () => {
  const mockJob = {
    name: 'Acme Corp',
    positionFr: 'Ingénieur Sénior',
    positionEn: 'Senior Engineer',
    url: 'https://acme.com',
    startDate: '2020-01-15',
    endDate: '2023-06-30',
    summaryFr: 'Développement de **systèmes critiques** managé.',
    summaryEn: 'Led development of **critical systems**.',
    highlightsFr: ['Module X livré', 'Performance améliorée de 50%'],
    highlightsEn: ['Shipped feature X', 'Improved performance by 50%'],
  };

  it('renders company name with link', () => {
    render(<Job data={mockJob} lang="en" />);

    const link = screen.getByRole('link', { name: /acme corp/i });
    expect(link).toHaveAttribute('href', 'https://acme.com');
  });

  it('renders position title in English', () => {
    render(<Job data={mockJob} lang="en" />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'Senior Engineer',
    );
  });

  it('renders position title in French', () => {
    render(<Job data={mockJob} lang="fr" />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'Ingénieur Sénior',
    );
  });

  it('formats date range correctly', () => {
    render(<Job data={mockJob} lang="en" />);

    expect(screen.getByText(/january 2020/i)).toBeInTheDocument();
    expect(screen.getByText(/june 2023/i)).toBeInTheDocument();
  });

  it('shows Present for current job in English', () => {
    const currentJob = {
      ...mockJob,
      endDate: undefined,
    };

    render(<Job data={currentJob} lang="en" />);
    expect(screen.getByText(/present/i)).toBeInTheDocument();
  });

  it('shows Aujourd’hui for current job in French', () => {
    const currentJob = {
      ...mockJob,
      endDate: undefined,
    };

    render(<Job data={currentJob} lang="fr" />);
    expect(screen.getByText(/aujourd’hui/i)).toBeInTheDocument();
  });

  it('renders summary in English', () => {
    render(<Job data={mockJob} lang="en" />);
    expect(screen.getByText(/led development of/i)).toBeInTheDocument();
  });

  it('renders summary in French', () => {
    render(<Job data={mockJob} lang="fr" />);
    expect(screen.getByText(/développement de/i)).toBeInTheDocument();
  });

  it('renders highlights in English', () => {
    render(<Job data={mockJob} lang="en" />);
    expect(screen.getByText('Shipped feature X')).toBeInTheDocument();
    expect(screen.getByText('Improved performance by 50%')).toBeInTheDocument();
  });

  it('renders highlights in French', () => {
    render(<Job data={mockJob} lang="fr" />);
    expect(screen.getByText('Module X livré')).toBeInTheDocument();
    expect(screen.getByText('Performance améliorée de 50%')).toBeInTheDocument();
  });

  it('handles missing summary gracefully', () => {
    const jobWithoutSummary = {
      ...mockJob,
      summaryFr: undefined,
      summaryEn: undefined,
    };

    render(<Job data={jobWithoutSummary} lang="en" />);
    expect(screen.getByText('Shipped feature X')).toBeInTheDocument();
  });

  it('handles missing highlights gracefully', () => {
    const jobWithoutHighlights = {
      ...mockJob,
      highlightsFr: undefined,
      highlightsEn: undefined,
    };

    render(<Job data={jobWithoutHighlights} lang="en" />);
    expect(screen.getByText(/led development/i)).toBeInTheDocument();

    const list = document.querySelector('.points');
    expect(list).not.toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Job data={mockJob} lang="en" />);

    const article = document.querySelector('article.jobs-container');
    expect(article).toBeInTheDocument();
  });
});
