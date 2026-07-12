import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { createPageMetadata } from '@/lib/metadata';
import { Language } from '@/data/translations';

interface AboutPageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: lang === 'en' ? 'About' : 'À Propos',
    description:
      lang === 'en'
        ? 'Learn more about Fernando HOUSSOU, digital solutions builder and communication strategist in Africa.'
        : 'Découvrez le parcours de Fernando HOUSSOU, builder de solutions digitales et de systèmes de communication pour l’Afrique.',
    path: `/${lang}/about/`,
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return (
    <PageWrapper mainClassName="page-main--wide">
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">{lang === 'en' ? 'About' : 'À Propos'}</h1>
        </header>
        <AboutContent markdown={aboutMarkdown[lang]} />
      </section>
    </PageWrapper>
  );
}
