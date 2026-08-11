export interface Skill {
  titleFr: string;
  titleEn: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Development
  {
    titleFr: 'PHP',
    titleEn: 'PHP',
    competency: 5,
    category: ['Development'],
  },
  {
    titleFr: 'Laravel',
    titleEn: 'Laravel',
    competency: 5,
    category: ['Development'],
  },
  {
    titleFr: 'Next.js',
    titleEn: 'Next.js',
    competency: 5,
    category: ['Development'],
  },
  {
    titleFr: 'React.js',
    titleEn: 'React.js',
    competency: 5,
    category: ['Development'],
  },
  {
    titleFr: 'React Native',
    titleEn: 'React Native',
    competency: 4,
    category: ['Development'],
  },
  {
    titleFr: 'Expo Go',
    titleEn: 'Expo Go',
    competency: 4,
    category: ['Development'],
  },
  {
    titleFr: 'Supabase',
    titleEn: 'Supabase',
    competency: 4,
    category: ['Development'],
  },
  {
    titleFr: 'Vercel',
    titleEn: 'Vercel',
    competency: 4,
    category: ['Development', 'Infrastructure'],
  },
  {
    titleFr: 'JavaScript',
    titleEn: 'JavaScript',
    competency: 4,
    category: ['Development'],
  },
  {
    titleFr: 'HTML & CSS',
    titleEn: 'HTML & CSS',
    competency: 5,
    category: ['Development'],
  },
  {
    titleFr: 'MySQL',
    titleEn: 'MySQL',
    competency: 4,
    category: ['Development', 'Infrastructure'],
  },
  {
    titleFr: 'PrestaShop',
    titleEn: 'PrestaShop',
    competency: 4,
    category: ['Development'],
  },
  {
    titleFr: 'Intégration API & SSO',
    titleEn: 'API & SSO Integration',
    competency: 4,
    category: ['Development'],
  },
  // Design & UI/UX
  {
    titleFr: 'Figma (UI/UX)',
    titleEn: 'Figma (UI/UX)',
    competency: 5,
    category: ['Design & UI/UX'],
  },
  {
    titleFr: 'Adobe Photoshop',
    titleEn: 'Adobe Photoshop',
    competency: 5,
    category: ['Design & UI/UX'],
  },
  {
    titleFr: 'Adobe Illustrator',
    titleEn: 'Adobe Illustrator',
    competency: 4,
    category: ['Design & UI/UX'],
  },
  {
    titleFr: 'Adobe Premiere Pro',
    titleEn: 'Adobe Premiere Pro',
    competency: 4,
    category: ['Design & UI/UX'],
  },
  {
    titleFr: 'Adobe After Effects',
    titleEn: 'Adobe After Effects',
    competency: 4,
    category: ['Design & UI/UX'],
  },
  {
    titleFr: 'Blender',
    titleEn: 'Blender',
    competency: 3,
    category: ['Design & UI/UX'],
  },
  {
    titleFr: 'Design de marque & Logos',
    titleEn: 'Branding & Logo Design',
    competency: 5,
    category: ['Design & UI/UX'],
  },
  // Marketing & Growth
  {
    titleFr: 'Stratégie SEO',
    titleEn: 'SEO Strategy',
    competency: 5,
    category: ['Marketing & Growth'],
  },
  {
    titleFr: 'Tunnels de vente',
    titleEn: 'Sales Funnels',
    competency: 5,
    category: ['Marketing & Growth'],
  },
  {
    titleFr: 'Marketing réseaux sociaux',
    titleEn: 'Social Media Marketing',
    competency: 5,
    category: ['Marketing & Growth'],
  },
  {
    titleFr: 'Copywriting & Contenu',
    titleEn: 'Copywriting & Content Strategy',
    competency: 4,
    category: ['Marketing & Growth'],
  },
  // AI & Automation
  {
    titleFr: 'Prompt Engineering',
    titleEn: 'Prompt Engineering',
    competency: 5,
    category: ['AI & Automation'],
  },
  {
    titleFr: 'Agents IA',
    titleEn: 'AI Agents',
    competency: 4,
    category: ['AI & Automation'],
  },
  {
    titleFr: 'Automatisation',
    titleEn: 'Task Automation',
    competency: 4,
    category: ['AI & Automation'],
  },
  // Infrastructure & Operations
  {
    titleFr: 'MikroTik & Hotspots',
    titleEn: 'MikroTik Hotspot RouterOS',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    titleFr: 'Systèmes Linux & VPN',
    titleEn: 'Linux Systems & VPN',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    titleFr: 'Gestion de projet',
    titleEn: 'Project Management',
    competency: 4,
    category: ['Operations & Leadership'],
  },
  {
    titleFr: 'Coordination d’équipe',
    titleEn: 'Team Coordination',
    competency: 4,
    category: ['Operations & Leadership'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
