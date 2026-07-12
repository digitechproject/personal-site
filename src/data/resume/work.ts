export interface Position {
  name: string;
  positionFr: string;
  positionEn: string;
  url: string;
  startDate: string;
  endDate?: string;
  summaryFr?: string;
  summaryEn?: string;
  highlightsFr?: string[];
  highlightsEn?: string[];
}

const work: Position[] = [
  {
    name: 'SOFITAR',
    positionFr: 'Fondateur & Directeur',
    positionEn: 'Founder & Director',
    url: '#',
    startDate: '2025-01-01',
    summaryFr: `Création et structuration d'une entreprise orientée solutions digitales,
    communication professionnelle, intégrations de l'IA et développement de produits numériques.
    SOFITAR est composée de deux branches : SOFITAR Digital (développement web, automatisation)
    et SOFITAR Communication (branding, identité de marque, direction artistique).`,
    summaryEn: `Creation and structuring of a digital solutions company, offering
    professional communication, AI integrations, and digital product development.
    SOFITAR consists of two branches: SOFITAR Digital (web development, automation)
    and SOFITAR Communication (branding, brand identity, art direction).`,
    highlightsFr: [
      "Supervision de la vision globale de l'entreprise et coordination des équipes pluridisciplinaires.",
      "Développement de produits numériques internes et accompagnement technique/opérationnel d'entreprises locales.",
      "Mise en place de systèmes d'automatisation basés sur l'intelligence artificielle pour optimiser les workflows.",
    ],
    highlightsEn: [
      "Supervising the company's overall vision and coordinating multidisciplinary teams.",
      'Developing internal digital products and providing technical/operational support to local businesses.',
      'Implementing AI-based automation systems to optimize workflows.',
    ],
  },
  {
    name: 'Digital Marketing Academy (DMA)',
    positionFr: 'Formateur & Animateur WordPress & Montage Vidéo',
    positionEn: 'WordPress & Video Editing Trainer',
    url: '#',
    startDate: '2025-01-01',
    summaryFr: `Animation de sessions de formation pratique destinées à des professionnels et étudiants pour maîtriser la création de sites web WordPress et le montage vidéo publicitaire professionnel.`,
    summaryEn: `Leading practical training sessions for professionals and students to master WordPress website creation and professional marketing video editing.`,
    highlightsFr: [
      'Formation complète sur la création de sites web WordPress : prise en main de LocalWP, de l’interface d’administration et conception de pages modernes avec Elementor.',
      'Formation pratique au montage vidéo publicitaire professionnel avec CapCut et Filmora, axée sur la création de contenus marketing à fort impact.',
      'Accompagnement personnalisé et ateliers de mise en situation réelle pour les étudiants.',
    ],
    highlightsEn: [
      'Comprehensive training on WordPress website creation: mastering LocalWP, administration interface, and modern page design with Elementor.',
      'Hands-on training in professional marketing video editing with CapCut and Filmora, focused on high-impact promotional content.',
      'Personalized coaching and real-world practical workshops for students.',
    ],
  },
  {
    name: 'LGA Bénin / Ahizan.com',
    positionFr: 'Directeur Opérationnel & Stratège UX/UI',
    positionEn: 'Chief Operating Officer & UX/UI Strategist',
    url: 'https://ahizan.com',
    startDate: '2022-05-01',
    summaryFr: `Les Grandes Affaires (LGA) est une marketplace locale conçue pour rapprocher les vendeurs et acheteurs au Bénin. LGA Bénin a officiellement évolué vers Ahizan.com en décembre 2025 dans le cadre de l'évolution et du repositionnement de la plateforme. J'y ai supervisé l'évolution produit, l'expérience utilisateur, le branding et la stratégie commerciale pour adapter la plateforme aux réalités et contraintes du marché africain.`,
    summaryEn: `Les Grandes Affaires (LGA) is a local marketplace designed to connect buyers and sellers in Benin. LGA Bénin officially evolved into Ahizan.com in December 2025 as part of the platform's growth and repositioning. I supervised product evolution, user experience, branding, and commercial strategy to adapt the platform to the realities and constraints of the African market.`,
    highlightsFr: [
      "Conception et optimisation de l'UI/UX de la plateforme web et de l'architecture multi-portails (vendeurs, clients).",
      "Coordination d'une équipe opérationnelle sur le terrain pour le recrutement et l'accompagnement des marchands peu digitalisés.",
      'Branding, design social media et élaboration de campagnes de communication locales pour renforcer la confiance.',
      "Mise en place de solutions d'authentification centralisée (SSO) pour l'écosystème LGA.",
    ],
    highlightsEn: [
      'Designing and optimizing UI/UX for the web platform and the multi-portal architecture (merchants, customers).',
      'Coordinating a field operations team to recruit and support under-digitalized merchants.',
      'Branding, social media design, and executing local communication campaigns to foster trust.',
      'Implementing Centralized Single Sign-On (SSO) authentication solutions for the LGA ecosystem.',
    ],
  },
  {
    name: 'RestooGo',
    positionFr: 'Fondateur & Concepteur Produit',
    positionEn: 'Founder & Product Designer',
    url: 'https://restaurant-hoteldulac.com',
    startDate: '2022-09-01',
    summaryFr: `RestooGo est une solution SaaS pensée pour aider les restaurants à digitaliser leur carte,
    faciliter la commande par QR code, améliorer l'expérience client et accroître leur visibilité en ligne.`,
    summaryEn: `RestooGo is a SaaS solution designed to help restaurants digitize their menus,
    facilitate QR code ordering, enhance the customer experience, and grow their online visibility.`,
    highlightsFr: [
      "Conception de l'architecture produit et du design des interfaces utilisateur (menus interactifs, prise de commande).",
      'Développement de prototypes fonctionnels et validation terrain auprès de restaurants et lounges à Cotonou.',
      "Stratégie de positionnement marketing et d'acquisition de restaurants partenaires.",
    ],
    highlightsEn: [
      'Designing the product architecture and user interfaces (interactive menus, order capture).',
      'Developing functional prototypes and conducting field validation with lounges and restaurants in Cotonou.',
      'Creating marketing positioning and partnership acquisition strategies for restaurants.',
    ],
  },
  {
    name: 'Digital Olayemi / Digiola Com & Pub',
    positionFr: 'Chef Opérationnel',
    positionEn: 'Operations Lead',
    url: '#',
    startDate: '2021-01-01',
    endDate: '2024-05-31',
    summaryFr: `Digiola est une agence de communication et de publicité. J'y ai piloté l'organisation client,
    l'accompagnement opérationnel de projets de communication digitale et la gestion des activités terrain.`,
    summaryEn: `Digiola is a communication and advertising agency. I managed client onboarding,
    digital communication campaign execution, and local field activities.`,
    highlightsFr: [
      'Supervision opérationnelle des campagnes publicitaires et de la production de contenus digitaux.',
      'Prospection commerciale, relations clients et gestion des prestations logistiques et techniques.',
    ],
    highlightsEn: [
      'Operational supervision of advertising campaigns and digital content production.',
      'Sales prospection, client relations, and logistics/technical delivery management.',
    ],
  },
  {
    name: 'Freelance',
    positionFr: 'Designer UI/UX, Monteur Vidéo & Développeur Laravel',
    positionEn: 'UI/UX Designer, Video Editor & Laravel Developer',
    url: 'https://www.behance.net/fernandohoussou',
    startDate: '2020-01-01',
    summaryFr: `Prestations de services numériques en freelance. Clients physiques et clients internationaux en ligne via Upwork, ComeUp et Fiverr, en complément de missions réalisées directement avec des entreprises et entrepreneurs locaux (branding, montage vidéo, développement PHP/Laravel).`,
    summaryEn: `Freelance digital services. Physical clients and international online clients via Upwork, ComeUp, and Fiverr, in addition to direct contracts with local businesses and entrepreneurs (branding, video editing, PHP/Laravel development).`,
    highlightsFr: [
      "Création de chartes graphiques et d'interfaces pour des startups et PME d'Afrique de l'Ouest.",
      'Production de vidéos publicitaires dynamiques pour réseaux sociaux avec Premiere Pro, After Effects et Blender.',
      "Développement de fonctionnalités web sur-mesure (modules, intégrations d'API).",
    ],
    highlightsEn: [
      'Creating brand guidelines and UI interfaces for West African startups and SMEs.',
      'Producing dynamic social media ad videos using Premiere Pro, After Effects, and Blender.',
      'Developing tailored web features (custom modules, API integrations).',
    ],
  },
];

export default work;
