import initialData from '../../data/stats/site';
import Table from './Table';
import { getTranslation, Language } from '@/data/translations';
import dayjs from 'dayjs';

type GitHubCacheKey =
  | 'stargazers_count'
  | 'subscribers_count'
  | 'forks'
  | 'open_issues_count'
  | 'pushed_at';

interface GitHubData {
  stargazers_count: number;
  subscribers_count: number;
  forks: number;
  open_issues_count: number;
  pushed_at: string;
}

// Static fallback values used when GitHub API is unavailable
const FALLBACK_DATA: GitHubData = {
  stargazers_count: 1610,
  subscribers_count: 23,
  forks: 948,
  open_issues_count: 1,
  pushed_at: '2026-01-04T00:00:00Z',
};

async function fetchGitHubStats(): Promise<GitHubData> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/fernandohoussou/personal-site',
      {
        headers: { Accept: 'application/vnd.github.v3+json' },
        next: { revalidate: false },
      },
    );

    if (!response.ok) {
      console.warn(`GitHub API returned ${response.status}, using fallback`);
      return FALLBACK_DATA;
    }

    const data = await response.json();
    return {
      stargazers_count: data.stargazers_count,
      subscribers_count: data.subscribers_count,
      forks: data.forks,
      open_issues_count: data.open_issues_count,
      pushed_at: data.pushed_at,
    };
  } catch (error) {
    console.warn('Failed to fetch GitHub stats, using fallback:', error);
    return FALLBACK_DATA;
  }
}

interface SiteStatsProps {
  lang: Language;
}

export default async function SiteStats({ lang }: SiteStatsProps) {
  const githubData = await fetchGitHubStats();
  const t = getTranslation(lang);

  const getTranslationKey = (label: string, key?: string): string => {
    if (key) return `stats.label.${key}`;
    if (label.toLowerCase().includes('spoon')) return 'stats.label.spoons';
    if (label.toLowerCase().includes('linter')) return 'stats.label.linter';
    if (label.toLowerCase().includes('lines')) return 'stats.label.lines';
    return '';
  };

  const data = initialData.map((field) => {
    const rawValue =
      field.key && field.key in githubData
        ? (githubData[field.key as GitHubCacheKey] ?? field.value)
        : field.value;

    let value = field.format ? field.format(rawValue) : rawValue;

    // Localize pushed_at date formatting based on language
    if (field.key === 'pushed_at') {
      const formatStr = lang === 'en' ? 'MMMM DD, YYYY' : 'DD MMMM YYYY';
      value = dayjs(rawValue as string).format(formatStr);
    }

    const translationKey = getTranslationKey(field.label, field.key);
    const label =
      t[translationKey as keyof ReturnType<typeof getTranslation>] ||
      field.label;

    return {
      label,
      value,
      link: field.link,
    };
  });

  return <Table data={data} />;
}
