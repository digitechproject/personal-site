'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import routes from '@/data/routes';
import { getTranslation, Language } from '@/data/translations';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const pathname = usePathname();

  // Extract the active language from the pathname (defaulting to 'fr')
  const lang: Language =
    pathname?.startsWith('/en/') || pathname === '/en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  const getLocalizedPath = (path: string) => {
    if (path === '/') return `/${lang}/`;
    return `/${lang}${path}`;
  };

  const isActive = (path: string) => {
    const localizedPath = getLocalizedPath(path);
    const cleanPathname = pathname?.replace(/\/$/, '') || '';
    const cleanLocalized = localizedPath.replace(/\/$/, '');

    if (path === '/') {
      return cleanPathname === cleanLocalized;
    }
    return (
      cleanPathname === cleanLocalized ||
      cleanPathname.startsWith(cleanLocalized + '/')
    );
  };

  const mainRoutes = routes.filter((l) => l.menu === 'main');
  const plusRoutes = routes.filter((l) => l.menu === 'plus');

  const getRouteLabel = (label: string) => {
    const key = `nav.${label.toLowerCase()}` as keyof ReturnType<
      typeof getTranslation
    >;
    return t[key] || label;
  };

  return (
    <header className="site-header">
      <Link href={getLocalizedPath('/')} className="site-logo">
        <span className="logo-text">FH</span>
      </Link>

      <nav className="nav-links">
        {mainRoutes.map((l) => (
          <Link
            key={l.label}
            href={getLocalizedPath(l.path)}
            className={`nav-link ${isActive(l.path) ? 'active' : ''}`}
            aria-current={isActive(l.path) ? 'page' : undefined}
          >
            {getRouteLabel(l.label)}
          </Link>
        ))}

        {plusRoutes.length > 0 && (
          <div className="nav-dropdown">
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${plusRoutes.some((r) => isActive(r.path)) ? 'active' : ''}`}
              aria-haspopup="true"
            >
              {lang === 'en' ? 'More \u25be' : 'Plus \u25be'}
            </button>
            <div className="nav-dropdown-menu">
              {plusRoutes.map((l) => (
                <Link
                  key={l.label}
                  href={getLocalizedPath(l.path)}
                  className={`nav-dropdown-item ${isActive(l.path) ? 'active' : ''}`}
                >
                  {getRouteLabel(l.label)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="nav-actions">
        <LanguageSwitcher />
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}
