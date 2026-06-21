import type { Position } from '@/data/resume/work';
import Job from './Experience/Job';
import { getTranslation, Language } from '@/data/translations';

interface ExperienceProps {
  data: Position[];
  lang: Language;
}

export default function Experience({ data, lang }: ExperienceProps) {
  const t = getTranslation(lang);

  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h3>{t['resume.nav.experience']}</h3>
      </div>
      {data.map((job) => (
        <Job data={job} key={`${job.name}-${job.positionFr}`} lang={lang} />
      ))}
    </div>
  );
}
