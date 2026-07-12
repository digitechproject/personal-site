import type { CSSProperties } from 'react';

import type { Category, Skill } from '@/data/resume/skills';
import { MAX_COMPETENCY } from '@/lib/utils';
import { Language } from '@/data/translations';

interface SkillTagProps {
  data: Skill;
  categories: Category[];
  lang?: Language;
}

export default function SkillTag({
  data,
  categories,
  lang = 'fr',
}: SkillTagProps) {
  const { category, competency, titleFr, titleEn } = data;

  const title = lang === 'en' ? titleEn : titleFr;

  // Get the primary category color
  const categoryColor = categories.find((cat) =>
    category.includes(cat.name),
  )?.color;

  // Size based on competency (5 = large, 4 = medium, 3 = small)
  const sizeClass =
    competency >= 5
      ? 'skill-tag--lg'
      : competency >= 4
        ? 'skill-tag--md'
        : 'skill-tag--sm';

  const outOfText = lang === 'en' ? 'out of' : 'sur';
  const profText = lang === 'en' ? 'proficiency' : 'niveau';

  return (
    <span
      className={`skill-tag ${sizeClass}`}
      style={
        {
          '--tag-color': categoryColor,
        } as CSSProperties
      }
      title={`${title}: ${competency} ${outOfText} ${MAX_COMPETENCY}`}
      aria-label={`${title}: ${profText} ${competency} ${outOfText} ${MAX_COMPETENCY}`}
    >
      <span className="skill-tag-name">{title}</span>
    </span>
  );
}
