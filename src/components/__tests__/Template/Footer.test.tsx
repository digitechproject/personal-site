import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Footer from '../../Template/Footer';

// Mock usePathname
const mockPathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
}));

describe('Footer', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/fr/');
  });

  it('renders the footer with correct structure', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('displays the name and role in French by default', () => {
    render(<Footer />);

    expect(screen.getByText("Fernando HOUSSOU")).toBeInTheDocument();
    expect(
      screen.getByText('Fondateur & Directeur at SOFITAR'),
    ).toBeInTheDocument();
  });

  it('displays the name and role in English', () => {
    mockPathname.mockReturnValue('/en/');
    render(<Footer />);

    expect(screen.getByText("Fernando HOUSSOU")).toBeInTheDocument();
    expect(
      screen.getByText('Founder & Director at SOFITAR'),
    ).toBeInTheDocument();
  });

  it('displays the current year in copyright', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`© ${currentYear}`)),
    ).toBeInTheDocument();
  });

  it('renders navigation links in French', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /à propos/i })).toHaveAttribute(
      'href',
      '/fr/about',
    );
    expect(screen.getByRole('link', { name: /cv/i })).toHaveAttribute(
      'href',
      '/fr/resume',
    );
    expect(screen.getByRole('link', { name: /projets/i })).toHaveAttribute(
      'href',
      '/fr/projects',
    );
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/fr/contact',
    );
  });

  it('renders navigation links in English', () => {
    mockPathname.mockReturnValue('/en/');
    render(<Footer />);

    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '/en/about',
    );
    expect(screen.getByRole('link', { name: /resume/i })).toHaveAttribute(
      'href',
      '/en/resume',
    );
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute(
      'href',
      '/en/projects',
    );
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/en/contact',
    );
  });

  it('renders contact icons section', () => {
    render(<Footer />);

    // Contact icons are rendered via ContactIcons component
    const socialSection = document.querySelector('.footer-social');
    expect(socialSection).toBeInTheDocument();
    expect(screen.getByText('Réseaux')).toBeInTheDocument();
  });

  it('has link to home from avatar', () => {
    render(<Footer />);

    const avatarLink = document.querySelector('.footer-avatar');
    expect(avatarLink).toHaveAttribute('href', '/fr');
  });
});

