export interface Course {
  titleFr: string;
  titleEn: string;
  number: string;
  link: string;
  university: string;
  detailsFr?: string[];
  detailsEn?: string[];
}

const courses: Course[] = [
  {
    titleFr: 'Développement Laravel & PHP Moderne',
    titleEn: 'Laravel & Modern PHP Development',
    number: 'Laracasts Path',
    link: 'https://laracasts.com',
    university: 'Laracasts',
    detailsFr: ['Formation via YouTube', 'Autoformation', 'Mise en pratique sur projets réels'],
    detailsEn: ['Training via YouTube', 'Self-taught', 'Hands-on practice on real projects']
  },
  {
    titleFr: 'Masterclass UI/UX Design & Prototypage',
    titleEn: 'UI/UX Design Masterclass & Prototyping',
    number: 'Figma Path',
    link: 'https://www.interaction-design.org',
    university: 'Interaction Design Foundation',
    detailsFr: ['Formation via YouTube', 'Autoformation', 'Mise en pratique sur projets réels'],
    detailsEn: ['Training via YouTube', 'Self-taught', 'Hands-on practice on real projects']
  },
  {
    titleFr: 'Stratégies SEO Avancées & Marketing Digital',
    titleEn: 'Advanced SEO & Digital Marketing Strategies',
    number: 'HubSpot SEO',
    link: 'https://academy.hubspot.com',
    university: 'HubSpot Academy',
    detailsFr: ['Formation via YouTube', 'Autoformation', 'Mise en pratique sur projets réels'],
    detailsEn: ['Training via YouTube', 'Self-taught', 'Hands-on practice on real projects']
  },
  {
    titleFr: "Prompt Engineering & Intégrations d'IA",
    titleEn: 'Prompt Engineering & AI Integrations',
    number: 'DeepLearning AI',
    link: 'https://www.deeplearning.ai',
    university: 'DeepLearning.AI',
    detailsFr: ['Formation via YouTube', 'Autoformation', 'Mise en pratique sur projets réels'],
    detailsEn: ['Training via YouTube', 'Self-taught', 'Hands-on practice on real projects']
  },
  {
    titleFr: 'Réseaux Informatiques & Administration Hotspot',
    titleEn: 'Computer Networking & Hotspot Administration',
    number: 'MikroTik MTCNA',
    link: 'https://mikrotik.com',
    university: 'MikroTik RouterOS',
    detailsFr: ['Formation via YouTube', 'Autoformation', 'Mise en pratique sur projets réels'],
    detailsEn: ['Training via YouTube', 'Self-taught', 'Hands-on practice on real projects']
  },
  {
    titleFr: 'IBM Artificial Intelligence Fundamentals',
    titleEn: 'IBM Artificial Intelligence Fundamentals',
    number: 'Cert. IBM',
    link: 'https://www.credly.com',
    university: 'IBM',
    detailsFr: ['Certification officielle IBM sur les bases de l\'IA et du Machine Learning.'],
    detailsEn: ['Official IBM certification on AI basics and Machine Learning.']
  },
  {
    titleFr: 'Google AI Essentials',
    titleEn: 'Google AI Essentials',
    number: 'Cert. Google',
    link: 'https://grow.google',
    university: 'Google',
    detailsFr: ['Certification officielle Google sur l\'utilisation de l\'IA générative au quotidien.'],
    detailsEn: ['Official Google certification on everyday usage of generative AI.']
  }
];

export default courses;
