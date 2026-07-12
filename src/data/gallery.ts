export interface GalleryItem {
  id: string;
  image: string;
  category: 'wordpress' | 'video' | 'event';
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  date: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 'wordpress-dma',
    image: '/images/gallery/wordpress_class.png',
    category: 'wordpress',
    titleFr: 'Formation WordPress au DMA',
    titleEn: 'WordPress Training at DMA',
    descriptionFr:
      'Session pratique sur la configuration de LocalWP, la découverte de l’interface WordPress et la conception de pages modernes avec Elementor pour les étudiants de la Digital Marketing Academy.',
    descriptionEn:
      'Hands-on session covering LocalWP setup, WordPress interface, and modern page building using Elementor for Digital Marketing Academy students.',
    date: '2025-10-15',
  },
  {
    id: 'video-dma',
    image: '/images/gallery/video_editing_class.png',
    category: 'video',
    titleFr: 'Atelier de Montage Vidéo Professionnel',
    titleEn: 'Professional Video Editing Workshop',
    descriptionFr:
      'Apprentissage du montage vidéo publicitaire avec CapCut et Filmora. Les étudiants apprennent à rythmer leurs vidéos, ajouter des effets sonores et optimiser les visuels pour le marketing digital.',
    descriptionEn:
      'Learning promotional video editing with CapCut and Filmora. Students learn pacing, sound design, and visual optimization for digital marketing.',
    date: '2026-03-20',
  },
  {
    id: 'tech-event',
    image: '/images/event_banner.png',
    category: 'event',
    titleFr: 'Bannière de l’événement Masterclass Tech',
    titleEn: 'Tech Masterclass Event Banner',
    descriptionFr:
      'Support visuel officiel de notre événement spécialisé sur l’entrepreneuriat numérique et les opportunités technologiques en Afrique.',
    descriptionEn:
      'Official visual support for our specialized event on digital entrepreneurship and tech opportunities in Africa.',
    date: '2026-06-25',
  },
];

export default galleryData;
