import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DownloadButton from '@/components/Resume/DownloadButton';

describe('DownloadButton', () => {
  it('renders correctly in French', () => {
    render(<DownloadButton lang="fr" />);
    const button = screen.getByRole('button', {
      name: /Télécharger le CV \(PDF\)/,
    });
    expect(button).toBeInTheDocument();
  });

  it('renders correctly in English', () => {
    render(<DownloadButton lang="en" />);
    const button = screen.getByRole('button', { name: /Download CV \(PDF\)/ });
    expect(button).toBeInTheDocument();
  });

  it('calls window.print when clicked', () => {
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});
    render(<DownloadButton lang="fr" />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(printSpy).toHaveBeenCalledOnce();
    printSpy.mockRestore();
  });
});
