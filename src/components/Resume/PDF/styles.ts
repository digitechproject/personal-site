import { Font, StyleSheet } from '@react-pdf/renderer';
import type { PDFTheme } from './types';

// Register Outfit font family exclusively (using secure and reliable Google Font TTF URLs)
Font.register({
  family: 'Outfit',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4W61O4a0Fg.ttf',
      fontWeight: 300,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4a0Fg.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4QK1O4a0Fg.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4e6yO4a0Fg.ttf',
      fontWeight: 600,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4deyO4a0Fg.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4bCyO4a0Fg.ttf',
      fontWeight: 800,
    },
  ],
});

// Premium Color Themes matching site identity
export const themes: Record<string, PDFTheme> = {
  modernClassic: {
    accent: '#2e59ba', // Core Brand Blue
    accentSecondary: '#4a6fa5',
    bgLight: '#f8fafc', // Slate 50
    bgDark: '#0f172a', // Slate 900
    textDark: '#1e293b', // Slate 800
    textLight: '#ffffff',
    textMuted: '#64748b', // Slate 500
    border: '#cbd5e1', // Slate 300
  },
  emeraldGreen: {
    accent: '#059669', // Emerald Green
    accentSecondary: '#10b981',
    bgLight: '#f9fafb',
    bgDark: '#064e3b',
    textDark: '#111827',
    textLight: '#ffffff',
    textMuted: '#6b7280',
    border: '#d1d5db',
  },
  minimalCharcoal: {
    accent: '#2563eb', // Indigo Blue
    accentSecondary: '#4b5563',
    bgLight: '#ffffff',
    bgDark: '#1f2937', // Gray 800
    textDark: '#111827',
    textLight: '#ffffff',
    textMuted: '#4b5563',
    border: '#e5e7eb',
  },
};

// Base layout styles
export const baseStyles = StyleSheet.create({
  page: {
    fontFamily: 'Outfit',
    fontSize: 9,
    lineHeight: 1.4,
    color: '#1e293b',
    backgroundColor: '#ffffff',
  },
});
