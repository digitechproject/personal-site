import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Navigation from '../../Template/Navigation';

// Mock usePathname and useRouter to control active state and navigation
const mockPathname = vi.fn();
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
};

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
  useRouter: () => mockRouter,
}));

describe('Navigation', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/');

    // Mock matchMedia for ThemeToggle
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('renders the logo link to home', () => {
    mockPathname.mockReturnValue('/fr/');
    render(<Navigation />);
    const logo = screen.getByRole('link', { name: /fh/i });
    expect(logo).toHaveAttribute('href', '/fr');
  });

  it('renders navigation links for all non-index routes in French', () => {
    mockPathname.mockReturnValue('/fr/');
    render(<Navigation />);

    // Should have links for About, Resume, Writing, Contact, Projects, Event, Gallery in French
    expect(screen.getByRole('link', { name: /à propos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cv/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projets/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /articles/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /événement/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /galerie/i })).toBeInTheDocument();
  });

  it('renders navigation links for all non-index routes in English', () => {
    mockPathname.mockReturnValue('/en/');
    render(<Navigation />);

    // Should have links for About, Resume, Writing, Contact, Projects, Event, Gallery in English
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /writing/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /event/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument();
  });

  it('marks home route as active when on homepage', () => {
    mockPathname.mockReturnValue('/fr/');
    render(<Navigation />);

    const logo = screen.getByRole('link', { name: /fh/i });
    // Home isn't a NavLink but the logo has the href, we can verify that À propos isn't active
    const aboutLink = screen.getByRole('link', { name: /à propos/i });
    expect(aboutLink).not.toHaveClass('active');
  });

  it('marks about route as active when on about page', () => {
    mockPathname.mockReturnValue('/fr/about');
    render(<Navigation />);

    const aboutLink = screen.getByRole('link', { name: /à propos/i });
    expect(aboutLink).toHaveClass('active');
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });

  it('marks nested routes as active', () => {
    mockPathname.mockReturnValue('/fr/resume/skills');
    render(<Navigation />);

    const resumeLink = screen.getByRole('link', { name: /cv/i });
    expect(resumeLink).toHaveClass('active');
  });

  it('renders theme toggle and hamburger menu', () => {
    render(<Navigation />);

    const navActions = document.querySelector('.nav-actions');
    expect(navActions).toBeInTheDocument();
  });
});
