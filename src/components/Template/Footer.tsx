'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '@/components/Contact/ContactIcons';
import work from '@/data/resume/work';
import { AUTHOR_NAME } from '@/lib/utils';
import { getTranslation, Language } from '@/data/translations';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  const pathname = usePathname();
  const lang: Language = pathname?.startsWith('/en/') || pathname === '/en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  const position = lang === 'en' ? work[0].positionEn : work[0].positionFr;
  const currentRole = `${position} at ${work[0].name}`;

  const getLocalizedPath = (path: string) => {
    if (path === '/') return `/${lang}/`;
    return `/${lang}${path}`;
  };

  const getRouteLabel = (label: string) => {
    const key = `nav.${label.toLowerCase()}` as keyof ReturnType<typeof getTranslation>;
    return t[key] || label;
  };

  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href={getLocalizedPath('/')} className="footer-avatar">
            <ThemePortrait width={80} height={80} />
          </Link>
          <div className="footer-info">
            <h3>{AUTHOR_NAME}</h3>
            <p className="footer-role">{currentRole}</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} ·{' '}
              <a
                href="https://github.com/fernandohoussou/personal-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="footer-links-label">
              {lang === 'en' ? 'Explore' : 'Explorer'}
            </h4>
            <div className="footer-links-grid">
              <Link href={getLocalizedPath('/about/')}>{getRouteLabel('About')}</Link>
              <Link href={getLocalizedPath('/resume/')}>{getRouteLabel('Resume')}</Link>
              <Link href={getLocalizedPath('/projects/')}>{getRouteLabel('Projects')}</Link>
              <Link href={getLocalizedPath('/contact/')}>{getRouteLabel('Contact')}</Link>
            </div>
          </nav>

          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <h4 id="footer-social-heading" className="footer-social-label">
              {lang === 'en' ? 'Connect' : 'Réseaux'}
            </h4>
            <ContactIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
