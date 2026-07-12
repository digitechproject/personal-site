import Link from 'next/link';

import ThemePortrait from './ThemePortrait';
import { getTranslation, Language } from '@/data/translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = getTranslation(lang);

  const getLocalizedPath = (path: string) => {
    return `/${lang}${path}`;
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Fernando HOUSSOU</span>
        </h1>

        <p className="hero-tagline">{t['hero.tagline']}</p>

        <div className="hero-chips">
          <span className="hero-chip">Entrepreneur Tech</span>
          <span className="hero-chip">Ahizan</span>
          <span className="hero-chip">SOFITAR</span>
          <span className="hero-chip">RestooGo</span>
        </div>

        <div className="hero-cta">
          <Link
            href={getLocalizedPath('/about/')}
            className="button button-primary"
          >
            {t['hero.about']}
          </Link>
          <Link
            href={getLocalizedPath('/resume/')}
            className="button button-secondary"
          >
            {t['hero.resume']}
          </Link>
          <Link
            href={getLocalizedPath('/event/')}
            className="button button-secondary"
          >
            {t['hero.event']}
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
