import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import PDFGeneratorButton from '@/components/Resume/PDF/PDFGeneratorButton';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { getTranslation, Language } from '@/data/translations';
import { createPageMetadata } from '@/lib/metadata';

interface ResumePageProps {
  // biome-ignore lint/suspicious/noExplicitAny: Next.js page params type
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({
  params,
}: ResumePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: lang === 'en' ? 'Resume' : 'CV',
    description:
      lang === 'en'
        ? 'Resume of Fernando HOUSSOU. Tech Entrepreneur, UI/UX Designer, Fullstack Developer, Cotonou, Benin.'
        : 'Le CV de Fernando HOUSSOU. Entrepreneur Tech, Designer UI/UX, Développeur Fullstack, Cotonou, Bénin.',
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
          <p className="resume-summary">{t['resume.summary']}</p>
          <div className="resume-actions no-print">
            <PDFGeneratorButton lang={lang} />
          </div>
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
