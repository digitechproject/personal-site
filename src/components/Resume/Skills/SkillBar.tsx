import type { CSSProperties } from 'react';

import type { Category, Skill } from '@/data/resume/skills';
import { MAX_COMPETENCY } from '@/lib/utils';
import { Language } from '@/data/translations';

interface SkillBarProps {
  data: Skill;
  categories: Category[];
  lang?: Language;
}

export default function SkillBar({ data, categories, lang = 'fr' }: SkillBarProps) {
  const { category, competency, titleFr, titleEn } = data;

  const title = lang === 'en' ? titleEn : titleFr;

  // Get the primary category for styling (color and pre-computed text contrast)
  const primaryCategory = categories.find((cat) => category.includes(cat.name));
  const categoryColor = primaryCategory?.color;

  // Use pre-computed text color from category data
  const textColorClass = primaryCategory
    ? primaryCategory.textColor === 'light'
      ? 'skillbar-title--light'
      : 'skillbar-title--dark'
    : '';

  const percentage = Math.min(
    100,
    Math.max((competency / MAX_COMPETENCY) * 100, 0),
  );

  const outOfText = lang === 'en' ? 'out of' : 'sur';

  // Pass color via CSS custom property for design system consistency
  const skillbarStyle = {
    '--skillbar-color': categoryColor,
  } as CSSProperties;

  return (
    <div
      className="skillbar"
      role="progressbar"
      aria-valuenow={competency}
      aria-valuemin={1}
      aria-valuemax={MAX_COMPETENCY}
      aria-label={`${title}: ${competency} ${outOfText} ${MAX_COMPETENCY}`}
      style={skillbarStyle}
    >
      <div className={`skillbar-title ${textColorClass}`}>
        <span>{title}</span>
      </div>
      <div className="skillbar-bar" style={{ width: `${percentage}%` }} />
      <div className="skill-bar-percent">
        {competency} / {MAX_COMPETENCY}
      </div>
    </div>
  );
}
