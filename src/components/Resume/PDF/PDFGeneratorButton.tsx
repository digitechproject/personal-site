'use client';

import { useState } from 'react';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import languages from '@/data/resume/languages';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { getTranslation, Language } from '@/data/translations';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import { themes } from './styles';
import type { ResumeData } from './types';

interface PDFGeneratorButtonProps {
  lang: Language;
}

export default function PDFGeneratorButton({ lang }: PDFGeneratorButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = getTranslation(lang);
  const isEn = lang === 'en';

  const handleDownload = async () => {
    try {
      setIsLoading(true);

      // Lazy load react-pdf renderer client-side only
      const { pdf } = await import('@react-pdf/renderer');

      // Lazy load our PDF Document
      const PDFDocument = (await import('./PDFDocument')).default;

      // Map site data to clean structured ResumeData
      const resumeData: ResumeData = {
        personal: {
          name: AUTHOR_NAME,
          title: isEn
            ? 'Tech Entrepreneur | UI/UX Designer | Laravel Developer'
            : 'Entrepreneur Tech | Designer UI/UX | Développeur Laravel',
          summary: t['resume.summary'] || '',
          avatarUrl: `${SITE_URL}/images/me.jpg`, // Absolute URL for reliable react-pdf image loading
          location: 'Cotonou, Bénin',
          email: 'fernandohoussou@gmail.com',
          phone: '+229 55 93 43 91',
          website: 'me.itikets.com',
        },
        socials: [
          {
            platform: 'Linkedin',
            username: 'linkedin.com/in/fernandohoussou',
            url: 'https://linkedin.com/in/fernandohoussou',
          },
          {
            platform: 'Github',
            username: 'github.com/digitechproject',
            url: 'https://github.com/digitechproject',
          },
        ],
        experience: work,
        education: degrees,
        skills: skills,
        skillCategories: categories,
        courses: courses,
        languages: languages.map((l) => ({
          name: isEn ? l.nameEn : l.nameFr,
          level: isEn ? l.levelEn : l.levelFr,
        })),
        interests: isEn
          ? [
              { name: 'Design & Branding', icon: '🎨' },
              { name: 'New Tech & AI', icon: '🤖' },
              { name: 'Entrepreneurship', icon: '💼' },
            ]
          : [
              { name: 'Design & Branding', icon: '🎨' },
              { name: 'Nouvelles technologies & IA', icon: '🤖' },
              { name: 'Entrepreneuriat', icon: '💼' },
            ],
      };

      // Select template layout and color theme
      const theme = themes.modernClassic;
      const templateId = 'modern'; // Default Canva-like template

      // Generate the PDF document as a Blob
      const doc = (
        <PDFDocument
          data={resumeData}
          theme={theme}
          templateId={templateId}
          lang={lang}
        />
      );

      const blob = await pdf(doc).toBlob();

      // Trigger standard browser download
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `CV_Fernando_HOUSSOU_${lang.toUpperCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to generate CV PDF:', error);
      alert(
        isEn
          ? 'Failed to generate PDF. Please try again.'
          : 'Erreur de génération du PDF. Veuillez réessayer.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isLoading}
      className={`resume-download-btn ${isLoading ? 'loading' : ''}`}
      aria-label={t['resume.download']}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke="currentColor"
            strokeWidth="3"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>{isEn ? 'Generating PDF...' : 'Génération du PDF...'}</span>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="btn-icon"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>{t['resume.download']}</span>
        </>
      )}
    </button>
  );
}
