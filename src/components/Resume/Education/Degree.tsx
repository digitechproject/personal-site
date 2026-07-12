import type { Degree as DegreeType } from '@/data/resume/degrees';
import { Language } from '@/data/translations';

interface DegreeProps {
  data: DegreeType;
  lang?: Language;
}

export default function Degree({ data, lang = 'fr' }: DegreeProps) {
  const degree = lang === 'en' ? data.degreeEn : data.degreeFr;
  const details = lang === 'en' ? data.detailsEn : data.detailsFr;

  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{degree}</h4>
        <p className="school">
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            {data.school}
          </a>
          , <time dateTime={String(data.year)}>{data.period || data.year}</time>
        </p>
      </header>
      {details && details.length > 0 && (
        <ul className="degree-details">
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
