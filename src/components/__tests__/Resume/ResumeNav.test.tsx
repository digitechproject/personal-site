import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ResumeNav from '../../Resume/ResumeNav';

describe('ResumeNav', () => {
  it('renders navigation element', () => {
    render(<ResumeNav lang="en" />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders links to all resume sections in English', () => {
    render(<ResumeNav lang="en" />);

    expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute(
      'href',
      '#experience',
    );
    expect(screen.getByRole('link', { name: /education/i })).toHaveAttribute(
      'href',
      '#education',
    );
    expect(screen.getByRole('link', { name: /skills/i })).toHaveAttribute(
      'href',
      '#skills',
    );
    expect(screen.getByRole('link', { name: /courses/i })).toHaveAttribute(
      'href',
      '#courses',
    );
    expect(screen.getByRole('link', { name: /references/i })).toHaveAttribute(
      'href',
      '#references',
    );
  });

  it('renders links to all resume sections in French', () => {
    render(<ResumeNav lang="fr" />);

    expect(screen.getByRole('link', { name: /expérience/i })).toHaveAttribute(
      'href',
      '#experience',
    );
    expect(screen.getByRole('link', { name: /diplômes/i })).toHaveAttribute(
      'href',
      '#education',
    );
    expect(screen.getByRole('link', { name: /compétences/i })).toHaveAttribute(
      'href',
      '#skills',
    );
    expect(screen.getByRole('link', { name: /formations/i })).toHaveAttribute(
      'href',
      '#courses',
    );
    expect(screen.getByRole('link', { name: /références/i })).toHaveAttribute(
      'href',
      '#references',
    );
  });

  it('renders 5 navigation links', () => {
    render(<ResumeNav lang="en" />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(5);
  });

  it('has correct CSS class', () => {
    render(<ResumeNav lang="en" />);

    const nav = document.querySelector('.resume-nav');
    expect(nav).toBeInTheDocument();
  });

  it('experience link is active by default', () => {
    render(<ResumeNav lang="en" />);

    const experienceLink = screen.getByRole('link', { name: /experience/i });
    expect(experienceLink).toHaveClass('active');
  });
});
