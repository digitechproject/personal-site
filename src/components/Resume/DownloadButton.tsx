'use client';

import { getTranslation, Language } from '@/data/translations';

interface DownloadButtonProps {
  lang: Language;
}

export default function DownloadButton({ lang }: DownloadButtonProps) {
  const t = getTranslation(lang);

  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="resume-download-btn"
      aria-label={t['resume.download']}
    >
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
    </button>
  );
}
