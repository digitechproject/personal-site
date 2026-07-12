import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the personal stats table', () => {
    render(<Personal lang="en" />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('displays digital solutions built in English', () => {
    render(<Personal lang="en" />);
    expect(screen.getByText('Digital solutions built')).toBeInTheDocument();
    expect(screen.getByText('7+')).toBeInTheDocument();
  });

  it('displays digital solutions built in French', () => {
    render(<Personal lang="fr" />);
    expect(screen.getByText('Solutions digitales créées')).toBeInTheDocument();
    expect(screen.getByText('7+')).toBeInTheDocument();
  });

  it('displays current city in English', () => {
    render(<Personal lang="en" />);
    expect(screen.getByText('Current city')).toBeInTheDocument();
    expect(screen.getByText('Cotonou, Bénin')).toBeInTheDocument();
  });

  it('displays current city in French', () => {
    render(<Personal lang="fr" />);
    expect(screen.getByText('Ville actuelle')).toBeInTheDocument();
    expect(screen.getByText('Cotonou, Bénin')).toBeInTheDocument();
  });
});
