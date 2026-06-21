import type { Course as CourseType } from '@/data/resume/courses';
import { Language } from '@/data/translations';

interface CourseProps {
  data: CourseType;
  lang?: Language;
}

export default function Course({ data, lang = 'fr' }: CourseProps) {
  const title = lang === 'en' ? data.titleEn : data.titleFr;
  const details = lang === 'en' ? data.detailsEn : data.detailsFr;

  return (
    <li className="course-container">
      <a href={data.link} target="_blank" rel="noopener noreferrer" className="course-link">
        <div className="course-header-row">
          <h4 className="course-number">{data.number}:</h4>
          <span className="course-university">{data.university}</span>
        </div>
        <p className="course-name">{title}</p>
        {details && details.length > 0 && (
          <ul className="course-details-list">
            {details.map((d, i) => (
              <li key={i} className="course-detail-item">{d}</li>
            ))}
          </ul>
        )}
      </a>
    </li>
  );
}
