import type { Metadata } from 'next';

import ProjectsClient from '@/components/Projects/ProjectsClient';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslation, Language } from '@/data/translations';

interface ProjectsPageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: lang === 'en' ? 'Projects' : 'Projets',
    description:
      lang === 'en'
        ? 'Discover the projects, platforms, and digital solutions created by Fernando HOUSSOU.'
        : 'Découvrez les projets, plateformes et solutions numériques créés par Fernando HOUSSOU.',
    path: `/${lang}/projects/`,
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">{t['projects.title']}</h1>
          <p className="page-subtitle">{t['projects.subtitle']}</p>
        </header>

        <ProjectsClient lang={lang} />
      </section>
    </PageWrapper>
  );
}
