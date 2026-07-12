export interface LanguageSkill {
  nameFr: string;
  nameEn: string;
  levelFr: string;
  levelEn: string;
}

const languages: LanguageSkill[] = [
  {
    nameFr: 'Français',
    nameEn: 'French',
    levelFr: 'Langue maternelle',
    levelEn: 'Native',
  },
  {
    nameFr: 'Anglais',
    nameEn: 'English',
    levelFr: 'Professionnel (C1)',
    levelEn: 'Professional (C1)',
  },
];

export default languages;
