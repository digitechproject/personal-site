import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the hero section', () => {
    render(<Hero lang="fr" />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero lang="fr" />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Fernando HOUSSOU');
  });

  it('renders the tagline in French', () => {
    render(<Hero lang="fr" />);
    expect(
      screen.getByText(/Je construis des solutions numériques/),
    ).toBeInTheDocument();
  });

  it('renders the tagline in English', () => {
    render(<Hero lang="en" />);
    expect(screen.getByText(/I build digital solutions/)).toBeInTheDocument();
  });

  it('displays hero chips for credentials', () => {
    render(<Hero lang="fr" />);

    expect(screen.getByText('Entrepreneur Tech')).toBeInTheDocument();
    expect(screen.getByText('Ahizan')).toBeInTheDocument();
    expect(screen.getByText('SOFITAR')).toBeInTheDocument();
    expect(screen.getByText('RestooGo')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct localized links in French', () => {
    render(<Hero lang="fr" />);

    const aboutButton = screen.getByRole('link', { name: /à mon sujet/i });
    expect(aboutButton).toHaveAttribute('href', '/fr/about');
    expect(aboutButton).toHaveClass('button-primary');

    const resumeButton = screen.getByRole('link', { name: /voir mon cv/i });
    expect(resumeButton).toHaveAttribute('href', '/fr/resume');
    expect(resumeButton).toHaveClass('button-secondary');

    const eventButton = screen.getByRole('link', { name: /événements/i });
    expect(eventButton).toHaveAttribute('href', '/fr/event');
    expect(eventButton).toHaveClass('button-secondary');
  });

  it('renders CTA buttons with correct localized links in English', () => {
    render(<Hero lang="en" />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/en/about');
    expect(aboutButton).toHaveClass('button-primary');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/en/resume');
    expect(resumeButton).toHaveClass('button-secondary');

    const eventButton = screen.getByRole('link', { name: /events/i });
    expect(eventButton).toHaveAttribute('href', '/en/event');
    expect(eventButton).toHaveClass('button-secondary');
  });

  it('has decorative background elements', () => {
    render(<Hero lang="fr" />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
