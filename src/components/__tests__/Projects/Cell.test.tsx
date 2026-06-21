import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Cell from '../../Projects/Cell';

describe('Cell', () => {
  const mockProject = {
    title: 'Test Project',
    subtitleFr: 'Un sous-titre de test',
    subtitleEn: 'A test subtitle',
    image: '/images/test.jpg',
    date: '2023-01-01',
    descFr: 'Ceci est une description de test en français',
    descEn: 'This is a test project description',
    link: 'https://example.com',
    category: ['SaaS'],
  };

  it('renders project as a clickable card with link', () => {
    render(<Cell data={mockProject} lang="en" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockProject.link);
    expect(link).toHaveClass('project-card-link');
  });

  it('renders project description based on lang prop', () => {
    render(<Cell data={mockProject} lang="en" />);
    expect(screen.getByText(mockProject.descEn)).toBeInTheDocument();

    render(<Cell data={mockProject} lang="fr" />);
    expect(screen.getByText(mockProject.descFr)).toBeInTheDocument();
  });

  it('renders project date in correct format', () => {
    render(<Cell data={mockProject} lang="en" />);
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  it('renders project image with alt text', () => {
    render(<Cell data={mockProject} lang="en" />);
    const image = screen.getByAltText(mockProject.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('test.jpg'));
  });
});
