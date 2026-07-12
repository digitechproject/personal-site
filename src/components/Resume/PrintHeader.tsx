import { Language } from '@/data/translations';
import { AUTHOR_NAME } from '@/lib/utils';

interface PrintHeaderProps {
  lang: Language;
}

export default function PrintHeader({ lang }: PrintHeaderProps) {
  return (
    <div className="resume-print-header" aria-hidden="true">
      <div className="print-header-top">
        <div className="print-header-info">
          <h1 className="print-name">{AUTHOR_NAME}</h1>
          <p className="print-title">
            {lang === 'en'
              ? 'Tech Entrepreneur | UI/UX Designer | Laravel Developer'
              : 'Entrepreneur Tech | Designer UI/UX | Développeur Laravel'}
          </p>
          <div className="print-contact-grid">
            <span className="contact-item">
              <span className="contact-icon">📍</span> Cotonou, Bénin
            </span>
            <span className="contact-item">
              <span className="contact-icon">✉️</span>{' '}
              <a href="mailto:fernandohoussou@gmail.com">
                fernandohoussou@gmail.com
              </a>
            </span>
            <span className="contact-item">
              <span className="contact-icon">📞</span>{' '}
              <a href="tel:+22955934391">+229 55 93 43 91</a>
            </span>
            <span className="contact-item">
              <span className="contact-icon">🌐</span>{' '}
              <a href="https://me.itikets.com">me.itikets.com</a>
            </span>
            <span className="contact-item">
              <span className="contact-icon">🔗</span>{' '}
              <a
                href="https://linkedin.com/in/fernandohoussou"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/fernandohoussou
              </a>
            </span>
            <span className="contact-item">
              <span className="contact-icon">💻</span>{' '}
              <a
                href="https://github.com/digitechproject"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/digitechproject
              </a>
            </span>
          </div>
        </div>
        <div className="print-header-photo">
          {/* biome-ignore lint/performance/noImgElement: Using native img to avoid next/image runtime overhead for static export */}
          <img
            src="/images/me.jpg"
            alt={AUTHOR_NAME}
            className="print-avatar"
            width={90}
            height={90}
          />
        </div>
      </div>
    </div>
  );
}
