import type { Metadata } from 'next';

import Personal from '@/components/Stats/Personal';
import Site from '@/components/Stats/Site';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslation, Language } from '@/data/translations';

interface StatsPageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({ params }: StatsPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: lang === 'en' ? 'Stats' : 'Stats',
    description:
      lang === 'en'
        ? 'Some statistics about Fernando HOUSSOU and his personal website.'
        : 'Quelques statistiques sur Fernando HOUSSOU et son site personnel.',
    path: `/${lang}/stats/`,
  });
}

export default async function StatsPage({ params }: StatsPageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  return (
    <PageWrapper>
      <section className="stats-page">
        <header className="stats-header">
          <h1 className="stats-title">{t['stats.title']}</h1>
          <p className="stats-subtitle">{t['stats.subtitle']}</p>
        </header>
        <div className="stats-content">
          <section>
            <h2 className="stats-section-title">{t['stats.aboutMe']}</h2>
            <Personal lang={lang} />
          </section>
          <section>
            <h2 className="stats-section-title">{t['stats.thisSite']}</h2>
            <Site lang={lang} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
