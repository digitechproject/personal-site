import dayjs from 'dayjs';

import type { Position } from '@/data/resume/work';
import { Language } from '@/data/translations';
import JobSummary from './JobSummary';

interface JobProps {
  data: Position;
  lang?: Language;
}

export default function Job({ data, lang = 'fr' }: JobProps) {
  const {
    name,
    positionFr,
    positionEn,
    url,
    startDate,
    endDate,
    summaryFr,
    summaryEn,
    highlightsFr,
    highlightsEn,
  } = data;

  const position = lang === 'en' ? positionEn : positionFr;
  const summary = lang === 'en' ? summaryEn : summaryFr;
  const highlights = lang === 'en' ? highlightsEn : highlightsFr;

  return (
    <article className="jobs-container">
      <header>
        <h4>
          <a href={url}>{name}</a> - {position}
        </h4>
        <p className="daterange">
          {' '}
          <time dateTime={startDate}>
            {dayjs(startDate).format('MMMM YYYY')}
          </time>{' '}
          -{' '}
          {endDate ? (
            <time dateTime={endDate}>{dayjs(endDate).format('MMMM YYYY')}</time>
          ) : lang === 'en' ? (
            'Present'
          ) : (
            'Aujourd’hui'
          )}
        </p>
      </header>
      {summary ? <JobSummary summary={summary} /> : null}
      {highlights ? (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
