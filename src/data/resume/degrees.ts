export interface Degree {
  school: string;
  degreeFr: string;
  degreeEn: string;
  link: string;
  year: number | string;
  period?: string;
  detailsFr?: string[];
  detailsEn?: string[];
}

const degrees: Degree[] = [
  {
    school: "ENEAM (École Nationale d'Économie Appliquée et de Management)",
    degreeFr: 'Gestion des Banques et Assurances (GBA) — Spécialité : Marchés Financiers',
    degreeEn: 'Bank & Insurance Management (GBA) — Specialty: Financial Markets',
    link: 'https://eneam.uac.bj',
    year: '2019 - 2022',
    period: '2019 – 2022',
    detailsFr: [
      'Première inscription en 2019.',
      'Première année validée avec une moyenne de 14/20.',
      'Année invalidée administrativement suite à une réforme liée aux procédures d\'inscription des étudiants orientés par sponsoring.',
      'Reprise de la première année en 2020.',
      'Deuxième année en 2021.',
      'Troisième année en 2022.',
      'Parcours interrompu avant l\'obtention de la licence pour raisons financières et familiales.',
      'Réorientation vers l\'entrepreneuriat numérique avec la volonté de reprendre ultérieurement les études dans de meilleures conditions.'
    ],
    detailsEn: [
      'First enrollment in 2019.',
      'First year completed successfully with a 14/20 GPA average.',
      'Year administratively invalidated following a registration reform regarding sponsored students.',
      'Restart of the first year in 2020.',
      'Second year in 2021.',
      'Third year in 2022.',
      'Curriculum interrupted before graduating due to financial and family constraints.',
      'Pivot to digital entrepreneurship with the intention of resuming studies in the future under better conditions.'
    ]
  },
  {
    school: 'Collège Robert Djidonou (Porto-Novo, Bénin)',
    degreeFr: 'Baccalauréat Scientifique – Série C',
    degreeEn: 'Scientific Baccalaureate – C Series',
    link: '#',
    year: 2018,
    period: '2018'
  }
];

export default degrees;
