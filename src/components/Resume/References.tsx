import Link from 'next/link';
import { getTranslation, Language } from '@/data/translations';

interface ReferencesProps {
  lang: Language;
}

export default function References({ lang }: ReferencesProps) {
  const t = getTranslation(lang);

  return (
    <div className="references">
      <div className="link-to" id="references" />
      <p className="text-sm text-[var(--color-fg-light)] text-center">
        {t['resume.references.text']}{' '}
        <Link
          href={`/${lang}/contact/`}
          className="font-medium text-[var(--color-accent)] hover:text-[var(--color-fg-bold)] transition-colors duration-150"
        >
          {lang === 'en' ? 'Get in touch →' : 'Entrer en contact →'}
        </Link>
      </p>
    </div>
  );
}
