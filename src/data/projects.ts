export interface Project {
  title: string;
  subtitleFr: string;
  subtitleEn: string;
  link?: string;
  image: string;
  date: string;
  descFr: string;
  descEn: string;
  tech?: string[];
  featured?: boolean;
  category: string[];
}

const data: Project[] = [
  {
    title: 'itiket',
    subtitleFr: 'Plateforme de billetterie locale',
    subtitleEn: 'Local ticketing platform',
    link: 'https://itikets.com',
    image: '/images/projects/itiket.jpg',
    date: '2024-03-01',
    descFr: 'Plateforme de billetterie en ligne pour les événements au Bénin, incluant une application mobile de validation de tickets par QR code.',
    descEn: 'Online ticketing platform for events in Benin, including a mobile validation application using QR codes.',
    tech: ['PHP', 'Laravel', 'Mobile validation app', 'QR Codes', 'Mobile Money APIs'],
    featured: true,
    category: ['SaaS', 'Mobile'],
  },
  {
    title: 'Ahizan (ex LGA Bénin)',
    subtitleFr: 'Marketplace locale & terrain',
    subtitleEn: 'Local & field marketplace',
    link: 'https://ahizan.com',
    image: '/images/projects/lga.jpg',
    date: '2021-06-15',
    descFr: "LGA Bénin a officiellement évolué vers Ahizan.com en décembre 2025 dans le cadre de l'évolution et du repositionnement de la plateforme. Nous y avons adapté et développé la marketplace béninoise pour connecter vendeurs et acheteurs en favorisant la confiance locale.",
    descEn: 'LGA Bénin officially evolved into Ahizan.com in December 2025 as part of the platform\'s growth and repositioning. We adapted and operationally developed the Beninese marketplace connecting buyers and sellers by fostering local trust.',
    tech: ['UX Design', 'Branding', 'Laravel', 'Vendeurs terrain', 'Stratégie commerciale'],
    featured: true,
    category: ['Marketplace', 'SaaS'],
  },
  {
    title: 'RestooGo',
    subtitleFr: 'Digitalisation de menus & commandes',
    subtitleEn: 'Digital menus & ordering solution',
    link: 'https://restaurant-hoteldulac.com',
    image: '/images/projects/restoogo.jpg',
    date: '2022-09-01',
    descFr: "Solution SaaS pour restaurants permettant d'accéder à un menu digital par QR code, de passer commande et d'améliorer la visibilité client.",
    descEn: 'SaaS solution for restaurants offering digital menu access via QR code, order placement, and improved customer visibility.',
    tech: ['SaaS', 'QR Menu', 'UI/UX Design', 'PHP', 'Commandes en ligne'],
    featured: true,
    category: ['SaaS'],
  },
  {
    title: 'SOFITAR',
    subtitleFr: 'Solutions digitales & Communication',
    subtitleEn: 'Digital solutions & Communication',
    link: 'https://www.behance.net/sofitarbj',
    image: '/images/projects/sofita.jpg',
    date: '2025-01-10',
    descFr: "Écosystème technologique pour accompagner la transition numérique et professionnaliser la communication des PME en Afrique de l'Est.",
    descEn: 'Technological ecosystem to support digital transition and professionalize communication for SMEs in West Africa.',
    tech: ['Laravel', 'IA Automation', 'Branding', 'Montage vidéo', 'Direction artistique'],
    featured: true,
    category: ['Communication', 'IA'],
  },
  {
    title: 'PubFric',
    subtitleFr: 'Régie publicitaire communautaire',
    subtitleEn: 'Community-based advertising platform',
    link: 'https://github.com/digitechproject',
    image: '/images/projects/pubfric.png',
    date: '2025-11-01',
    descFr: 'Régie publicitaire numérique basée sur la communauté. Projet actuellement en développement local et non encore publié sur GitHub.',
    descEn: 'Community-based digital advertising platform. Project currently in local development and not yet published on GitHub.',
    tech: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'Vercel'],
    featured: true,
    category: ['SaaS', 'Communication'],
  },
  {
    title: 'Afribiz Suite',
    subtitleFr: 'ERP Cloud pour PME africaines',
    subtitleEn: 'Cloud ERP for African SMEs',
    link: 'https://github.com/digitechproject',
    image: '/images/projects/afribiz.png',
    date: '2025-08-01',
    descFr: 'ERP Cloud conçu pour les réalités africaines (Gestion commerciale, Comptabilité, RH, CRM, Gestion de projets, Gestion documentaire, Modules métiers). Projet actuellement en développement local et non encore publié sur GitHub.',
    descEn: 'Cloud ERP tailored to African realities (Sales, Accounting, HR, CRM, Project management, Document management). Project currently in local development and not yet published on GitHub.',
    tech: ['Next.js', 'React.js', 'Supabase', 'Vercel', 'ERP modules'],
    featured: true,
    category: ['SaaS', 'ERP'],
  },
  {
    title: 'FastNetLite',
    subtitleFr: 'Gestionnaire Hotspot MikroTik',
    subtitleEn: 'MikroTik Hotspot Manager',
    link: 'https://fastnet.itikets.com',
    image: '/images/projects/fastnetlite.jpg',
    date: '2023-05-15',
    descFr: "Système d'automatisation d'accès internet Wi-Fi par tickets, connecté à un routeur MikroTik via VPN et API avec passerelle locale.",
    descEn: 'Wi-Fi ticket access automation system, connected to a MikroTik router via VPN and API with a local gateway.',
    tech: ['MikroTik RouterOS', 'VPN setup', 'Linux Shell', 'Laravel API'],
    category: ['Réseaux & Infrastructure', 'SaaS'],
  },
  {
    title: 'SSO Ahizan (ex SSO LGA)',
    subtitleFr: 'Authentification centralisée multi-portails',
    subtitleEn: 'Centralized multi-portal authentication',
    link: 'https://auth.ahizan.com',
    image: '/images/projects/sso.jpg',
    date: '2024-07-20',
    descFr: "Conception d'un serveur central d'authentification (Single Sign-On) pour fluidifier le parcours des utilisateurs et des marchands.",
    descEn: 'Design of a Single Sign-On central authentication server to streamline user and merchant journeys.',
    tech: ['Laravel', 'OAuth2', 'Web Security', 'Multi-portal UX'],
    category: ['SaaS'],
  },
  {
    title: 'SymbioPlay (Streaming Multitenant)',
    subtitleFr: 'SaaS Laravel confidentiel',
    subtitleEn: 'Confidential Laravel SaaS',
    link: 'https://symbioplay.com',
    image: '/images/projects/streaming.jpg',
    date: '2023-11-10',
    descFr: "Développement d'une architecture multitenant permettant à des créateurs de niche d'avoir leur propre espace de diffusion de contenu.",
    descEn: 'Development of a multitenant architecture allowing niche creators to host their own video streaming spaces.',
    tech: ['Laravel', 'Multitenancy', 'SaaS', 'Video streaming backend'],
    category: ['SaaS'],
  },
];

export default data;
