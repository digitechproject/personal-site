import { getTranslation, Language } from '@/data/translations';

interface CategoryButtonProps {
  label: string;
  handleClick: (label: string) => void;
  isActive: boolean;
  lang?: Language;
}

export default function CategoryButton({
  handleClick,
  isActive,
  label,
  lang = 'fr',
}: CategoryButtonProps) {
  const t = getTranslation(lang);

  const displayLabel =
    t[`skill.category.${label.toLowerCase()}` as keyof ReturnType<typeof getTranslation>] || label;

  return (
    <button
      className={`skillbutton ${isActive ? 'skillbutton-active' : ''}`}
      type="button"
      onClick={() => handleClick(label)}
      aria-pressed={isActive}
    >
      {displayLabel}
    </button>
  );
}
