import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import References from '../../Resume/References';

describe('References', () => {
  it('renders the references section in English', () => {
    render(<References lang="en" />);
    expect(screen.getByText(/References are available/i)).toBeInTheDocument();
  });

  it('renders the references section in French', () => {
    render(<References lang="fr" />);
    expect(screen.getByText(/Références disponibles/i)).toBeInTheDocument();
  });

  it('has a link to the contact page in English', () => {
    render(<References lang="en" />);
    const linkEn = screen.getByRole('link', {
      name: /get in touch/i,
    });
    expect(linkEn).toHaveAttribute('href', '/en/contact');
  });

  it('has a link to the contact page in French', () => {
    render(<References lang="fr" />);
    const linkFr = screen.getByRole('link', {
      name: /entrer en contact/i,
    });
    expect(linkFr).toHaveAttribute('href', '/fr/contact');
  });

  it('has an anchor for navigation', () => {
    render(<References lang="en" />);

    const anchor = document.getElementById('references');
    expect(anchor).toBeInTheDocument();
  });

  it('displays as minimal inline text', () => {
    render(<References lang="en" />);

    const paragraph = screen
      .getByText(/References are available/i)
      .closest('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph?.tagName).toBe('P');
  });
});
