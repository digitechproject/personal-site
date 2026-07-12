'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    // Detect preferred browser language (defaulting to French)
    const userLang =
      navigator.language || (navigator as any).userLanguage || 'fr';
    const lang = userLang.startsWith('en') ? 'en' : 'fr';
    window.location.replace(`/${lang}/`);
  }, []);

  return null;
}
