// @ts-nocheck

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import PDFGeneratorButton from '@/components/Resume/PDF/PDFGeneratorButton';

// Mock react-pdf/renderer to avoid loading the heavy layout engine in test JSDOM environment
vi.mock('@react-pdf/renderer', () => {
  // biome-ignore lint/suspicious/noExplicitAny: React mock component props
  const MockComponent = ({ children }: any) => <>{children}</>;
  return {
    pdf: vi.fn().mockReturnValue({
      toBlob: vi
        .fn()
        .mockResolvedValue(
          new Blob(['mock pdf content'], { type: 'application/pdf' }),
        ),
    }),
    Font: {
      register: vi.fn(),
    },
    StyleSheet: {
      create: vi.fn((styles) => styles),
    },
    Document: MockComponent,
    Page: MockComponent,
    View: MockComponent,
    Text: MockComponent,
    Image: MockComponent,
  };
});

// Mock URL.createObjectURL and URL.revokeObjectURL
const createObjectURLMock = vi.fn().mockReturnValue('blob:mock-url');
const revokeObjectURLMock = vi.fn();
global.URL.createObjectURL = createObjectURLMock;
global.URL.revokeObjectURL = revokeObjectURLMock;

describe('PDFGeneratorButton', () => {
  it('renders correctly in French', () => {
    render(<PDFGeneratorButton lang="fr" />);
    const button = screen.getByRole('button', {
      name: /Télécharger le CV \(PDF\)/,
    });
    expect(button).toBeInTheDocument();
  });

  it('renders correctly in English', () => {
    render(<PDFGeneratorButton lang="en" />);
    const button = screen.getByRole('button', { name: /Download CV \(PDF\)/ });
    expect(button).toBeInTheDocument();
  });

  it('triggers PDF generation and download on click', async () => {
    window.alert = vi.fn();

    // Spy on document.createElement and body.appendChild
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(document.body, 'removeChild');

    render(<PDFGeneratorButton lang="fr" />);
    const button = screen.getByRole('button');

    // Click to download
    fireEvent.click(button);

    // Expect spinner to appear
    expect(screen.getByText(/Génération du PDF.../)).toBeInTheDocument();

    // Wait for the async generation to complete (waiting for the download trigger)
    await waitFor(() => {
      expect(createObjectURLMock).toHaveBeenCalled();
    });

    expect(createObjectURLMock).toHaveBeenCalledOnce();
    expect(appendSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();

    appendSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
