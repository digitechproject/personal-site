import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslation, Language } from '@/data/translations';

interface ResumePageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({ params }: ResumePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: lang === 'en' ? 'Resume' : 'CV',
    description:
      lang === 'en'
        ? 'Resume of Fernando HOUSSOU. Tech Entrepreneur, UI/UX Designer, Laravel Developer, Cotonou, Benin.'
        : 'Le CV de Fernando HOUSSOU. Entrepreneur Tech, Designer UI/UX, Développeur Laravel, Cotonou, Bénin.',
    path: `/${lang}/resume/`,
  });
}

export default async function ResumePage({ params }: ResumePageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">{t['resume.title']}</h1>
          <p className="resume-summary">
            {t['resume.summary']}
          </p>
        </header>

        <ResumeNav lang={lang} />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} lang={lang} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} lang={lang} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} lang={lang} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} lang={lang} />
          </section>

          <section id="references" className="resume-section">
            <References lang={lang} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
