'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Determine current language from pathname (defaulting to French)
  const isEnglish = pathname?.startsWith('/en/');

  const toggleLanguage = useCallback(() => {
    if (!pathname) return;

    let targetPath = '/fr/';
    if (isEnglish) {
      targetPath = pathname.replace(/^\/en\//, '/fr/');
    } else if (pathname.startsWith('/fr/')) {
      targetPath = pathname.replace(/^\/fr\//, '/en/');
    } else {
      // Fallback if pathname has no locale prefix
      targetPath = isEnglish ? '/fr/' : '/en/';
    }

    // Ensure trailing slash is preserved
    if (!targetPath.endsWith('/')) {
      targetPath = `${targetPath}/`;
    }

    router.push(targetPath);
  }, [pathname, isEnglish, router]);

  return (
    <button
      type="button"
      className="lang-switcher"
      onClick={toggleLanguage}
      aria-label={isEnglish ? 'Passer en Français' : 'Switch to English'}
      title={isEnglish ? 'Passer en Français' : 'Switch to English'}
    >
      <span className="lang-switcher-text">{isEnglish ? 'FR' : 'EN'}</span>
    </button>
  );
}
