'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import routes from '../../data/routes';
import { getTranslation, Language } from '@/data/translations';
import SlideMenu from './SlideMenu';

const MENU_ID = 'mobile-nav-menu';

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Extract the active language from the pathname (defaulting to 'fr')
  const lang: Language =
    pathname?.startsWith('/en/') || pathname === '/en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  const getLocalizedPath = (path: string) => {
    if (path === '/') return `/${lang}/`;
    return `/${lang}${path}`;
  };

  const getRouteLabel = (label: string) => {
    const key = `nav.${label.toLowerCase()}` as keyof ReturnType<
      typeof getTranslation
    >;
    return t[key] || label;
  };

  const mainRoutes = routes.filter((l) => l.menu === 'main');
  const plusRoutes = routes.filter((l) => l.menu === 'plus');
  const indexRoute = routes.find((l) => l.index);

  const slideMenu = (
    <SlideMenu id={MENU_ID} isOpen={open} onClose={closeMenu} position="right">
      <ul className="hamburger-ul">
        {indexRoute && (
          <li key={indexRoute.label}>
            <Link href={getLocalizedPath(indexRoute.path)} onClick={closeMenu}>
              <h3 className="index-li">{getRouteLabel(indexRoute.label)}</h3>
            </Link>
          </li>
        )}

        {mainRoutes.map((l) => (
          <li key={l.label}>
            <Link href={getLocalizedPath(l.path)} onClick={closeMenu}>
              <h3>{getRouteLabel(l.label)}</h3>
            </Link>
          </li>
        ))}

        {plusRoutes.length > 0 && (
          <>
            <li className="hamburger-separator" />
            <li className="hamburger-submenu-title">
              {lang === 'en' ? 'More' : 'Plus'}
            </li>
            {plusRoutes.map((l) => (
              <li key={l.label} className="hamburger-submenu-item">
                <Link href={getLocalizedPath(l.path)} onClick={closeMenu}>
                  <h4>{getRouteLabel(l.label)}</h4>
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </SlideMenu>
  );

  return (
    <>
      <div className="hamburger-container">
        <nav className="main" id="hamburger-nav">
          <ul>
            <li className="menu">
              <button
                type="button"
                onClick={toggleMenu}
                className="hamburger-button"
                aria-label={
                  open ? 'Close navigation menu' : 'Open navigation menu'
                }
                aria-expanded={open}
                aria-controls={MENU_ID}
              >
                {/* CSS-based hamburger/close icon for cross-platform consistency */}
                <span
                  className={`hamburger-icon${open ? ' hamburger-icon--open' : ''}`}
                >
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {mounted && createPortal(slideMenu, document.body)}
    </>
  );
}
