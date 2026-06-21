'use client';

import data from '../../data/stats/personal';
import Table from './Table';
import { getTranslation, Language } from '@/data/translations';

interface PersonalStatsProps {
  lang: Language;
}

export default function PersonalStats({ lang }: PersonalStatsProps) {
  const t = getTranslation(lang);

  const translatedData = data.map((item) => ({
    ...item,
    label:
      t[`stats.label.${item.key}` as keyof ReturnType<typeof getTranslation>] || item.label,
  }));

  return <Table data={translatedData} />;
}
