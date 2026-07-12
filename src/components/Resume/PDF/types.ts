import type { Course } from '@/data/resume/courses';
import type { Degree } from '@/data/resume/degrees';
import type { Category, Skill } from '@/data/resume/skills';
import type { Position } from '@/data/resume/work';

export interface LanguageItem {
  name: string;
  level: string;
}

export interface InterestItem {
  name: string;
  icon?: string;
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    summary: string;
    avatarUrl: string;
    location: string;
    email: string;
    phone: string;
    website: string;
  };
  socials: Array<{
    platform: string;
    username: string;
    url: string;
  }>;
  experience: Position[];
  education: Degree[];
  skills: Skill[];
  skillCategories: Category[];
  courses: Course[];
  languages: LanguageItem[];
  interests: InterestItem[];
}

export interface PDFTheme {
  accent: string;
  accentSecondary: string;
  bgLight: string;
  bgDark: string;
  textDark: string;
  textLight: string;
  textMuted: string;
  border: string;
}

export type TemplateId = 'modern' | 'minimal';

export interface PDFTemplateProps {
  data: ResumeData;
  theme: PDFTheme;
  lang: 'fr' | 'en';
}
