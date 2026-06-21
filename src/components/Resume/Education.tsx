import type { Degree as DegreeType } from '@/data/resume/degrees';
import Degree from './Education/Degree';
import { getTranslation, Language } from '@/data/translations';

interface EducationProps {
  data: DegreeType[];
  lang: Language;
}

export default function Education({ data, lang }: EducationProps) {
  const t = getTranslation(lang);

  return (
    <div className="education">
      <div className="link-to" id="education" />
      <div className="title">
        <h3>{t['resume.nav.education']}</h3>
      </div>
      {data.map((degree) => (
        <Degree data={degree} key={degree.school} lang={lang} />
      ))}
    </div>
  );
}
