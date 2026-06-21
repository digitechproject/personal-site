import type { Metadata } from 'next';
import Image from 'next/image';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import Countdown from '@/components/Event/Countdown';
import { Language } from '@/data/translations';

interface EventPageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: lang === 'en' ? 'IA Webinar - Fernando HOUSSOU' : 'Webinaire IA - Fernando HOUSSOU',
    description:
      lang === 'en'
        ? 'Learn how to integrate AI into your profession, save time, and unlock new opportunities.'
        : 'Apprends à intégrer l’IA dans ton métier, gagner du temps et développer de nouvelles opportunités.',
    path: `/${lang}/event/`,
  });
}

export default async function EventPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  const eventLink = 'https://tally.so/r/PdXKRP';
  const whatsappLink = 'https://wa.me/22955934391';

  // Localized texts
  const content = {
    fr: {
      title: "Dominez l'Intelligence Artificielle dans votre domaine",
      subtitle: "Webinaire gratuit en direct",
      tagline: "Apprends à intégrer l'IA dans ton métier et à gagner du temps, améliorer ta productivité et développer de nouvelles opportunités professionnelles.",
      dateLabel: "Chaque samedi",
      timeLabel: "19h00 (Heure du Bénin)",
      locationLabel: "En ligne sur Google Meet",
      priceLabel: "Gratuit",
      btnRegister: "S'inscrire gratuitement",
      btnWhatsapp: "Rejoindre le groupe WhatsApp",
      aboutTitle: "À propos du webinaire",
      aboutIntro: "L'intelligence artificielle transforme déjà tous les secteurs d'activité.",
      aboutBody1: "Que vous soyez :",
      professions: [
        "Graphiste",
        "Comptable",
        "Juriste",
        "Secrétaire",
        "Marketeur digital",
        "Entrepreneur",
        "Étudiant",
        "Professionnel"
      ],
      aboutBody2: "ce webinaire vous permettra de découvrir comment utiliser concrètement l'IA dans votre domaine afin d'améliorer votre efficacité, automatiser certaines tâches et créer davantage de valeur.",
      aboutBody3: "Chaque semaine, Fernando HOUSSOU partage des méthodes pratiques, des outils accessibles et des cas réels d'utilisation adaptés aux réalités africaines.",
      learnTitle: "Ce que vous allez apprendre",
      learnTagline: "Un programme structuré pour passer du curieux à l'expert IA dans votre pratique quotidienne.",
      learnItems: [
        {
          num: "01",
          color: "color-p1",
          title: "Comprendre l'IA simplement",
          desc: "Découvrez ce qu'est réellement l'intelligence artificielle et comment elle fonctionne sans jargon technique complexe.",
          // Brain icon
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )
        },
        {
          num: "02",
          color: "color-s1",
          title: "Utiliser ChatGPT efficacement",
          desc: "Apprenez à obtenir de meilleurs résultats grâce aux bonnes méthodes de prompting et à l'ingénierie conversationnelle.",
          // Chat icon
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )
        },
        {
          num: "03",
          color: "color-t1",
          title: "Les meilleurs outils IA du moment",
          desc: "Découvrez les outils adaptés à votre métier pour la création d'images, de vidéos, et l'analyse de données.",
          // Tool/Architecture icon
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v1zm4 10a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2h8a2 2 0 012 2v1z" />
            </svg>
          )
        },
        {
          num: "04",
          color: "color-p1",
          title: "Automatiser certaines tâches",
          desc: "Gagnez plusieurs heures par semaine grâce à l'automatisation des processus répétitifs et fastidieux.",
          // Sparkles/Auto icon
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          num: "05",
          color: "color-s1",
          title: "Cas pratiques par métier",
          desc: "Applications concrètes pour graphistes, comptables, juristes, secrétaires, marketeurs et entrepreneurs.",
          // Briefcase icon
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          num: "06",
          color: "color-t1",
          title: "Session Questions / Réponses",
          desc: "Posez directement vos questions et obtenez des solutions personnalisées pour votre secteur d'activité.",
          // Question answer icon
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          )
        }
      ],
      themeTitle: "Le thème de cette semaine",
      themeQuote: "L'IA ne va pas te remplacer... Mais quelqu'un qui l'utilise pourrait te remplacer.",
      themeText: "Apprends à utiliser l'IA dans ton métier pour rester compétitif et développer de nouvelles compétences stratégiques.",
      trainerLabel: "VOTRE FORMATEUR",
      trainerTitle: "Votre formateur",
      trainerName: "Fernando HOUSSOU",
      trainerRole: "Spécialiste en productivité numérique, automatisation et intégration de l'intelligence artificielle dans les métiers.",
      trainerBio1: "Fondateur et dirigeant de plusieurs projets digitaux en Afrique, il accompagne les professionnels et les entreprises dans leur transformation numérique.",
      trainerBio2: "Chaque semaine, il partage des méthodes pratiques, des outils accessibles et des cas réels d'utilisation adaptés aux réalités africaines.",
      faqTitle: "Questions Fréquentes",
      faqTagline: "Tout ce que vous devez savoir avant de nous rejoindre.",
      faqItems: [
        {
          q: "Est-ce gratuit ?",
          a: "Oui, l'accès au direct est entièrement gratuit pour permettre à un maximum de professionnels de s'initier à ces technologies révolutionnaires."
        },
        {
          q: "Dois-je être expert en informatique ?",
          a: "Non, les méthodes présentées sont accessibles à tous, sans compétences techniques préalables. Nous mettons un point d'honneur à simplifier les concepts."
        },
        {
          q: "Comment vais-je recevoir le lien Google Meet ?",
          a: "Le lien de connexion vous sera envoyé par e-mail et sur le groupe WhatsApp communautaire 30 minutes avant le début de la session."
        },
        {
          q: "Puis-je poser mes questions ?",
          a: "Absolument ! Une session dédiée de 20 minutes est prévue à la fin de chaque présentation pour répondre aux problématiques spécifiques des participants."
        }
      ],
      nextSessionTitle: "Prochaine session",
      nextSessionDay: "Samedi prochain",
      nextSessionTime: "19h00 (GMT+1)",
      ctaFinalTitle: "Prêt à transformer votre carrière ?",
      ctaFinalText: "Rejoignez des centaines de professionnels africains qui domptent déjà l'IA.",
      ctaFinalBtn: "Réserver ma place gratuite",
      ctaFinalLimit: "Places limitées à 250 participants par session",
      testimonialsTitle: "Témoignages",
      testimonialsText: "Témoignages à venir. Participez aux premières éditions pour donner votre avis !",
      galleryTitle: "Éditions précédentes",
      galleryText: "Les captures des sessions d'ateliers, replays et moments forts des éditions précédentes seront affichés ici très prochainement."
    },
    en: {
      title: "Master Artificial Intelligence in your field",
      subtitle: "Free live webinar",
      tagline: "Learn how to integrate AI into your profession to save time, boost your productivity, and develop new career opportunities.",
      dateLabel: "Every Saturday",
      timeLabel: "19:00 (Benin Time)",
      locationLabel: "Online on Google Meet",
      priceLabel: "Free",
      btnRegister: "Register for free",
      btnWhatsapp: "Join WhatsApp Group",
      aboutTitle: "About the Webinar",
      aboutIntro: "Artificial intelligence is already transforming all sectors of activity.",
      aboutBody1: "Whether you are a:",
      professions: [
        "Graphic Designer",
        "Accountant",
        "Lawyer",
        "Secretary",
        "Digital Marketer",
        "Entrepreneur",
        "Student",
        "Professional"
      ],
      aboutBody2: "this webinar will allow you to discover how to concretely use AI in your domain to improve efficiency, automate tasks, and create more value.",
      aboutBody3: "Every week, Fernando HOUSSOU shares practical methods, accessible tools, and real-life use cases adapted to African realities.",
      learnTitle: "What you will learn",
      learnTagline: "A structured curriculum to go from curious to AI expert in your daily business workflows.",
      learnItems: [
        {
          num: "01",
          color: "color-p1",
          title: "Understand AI simply",
          desc: "Discover what artificial intelligence really is and how it works without complex technical jargon.",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )
        },
        {
          num: "02",
          color: "color-s1",
          title: "Use ChatGPT effectively",
          desc: "Learn how to get better results using good prompting methodologies and conversational engineering.",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )
        },
        {
          num: "03",
          color: "color-t1",
          title: "Best current AI tools",
          desc: "Discover tools adapted to your profession for image and video creation, and data analysis.",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v1zm4 10a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2h8a2 2 0 012 2v1z" />
            </svg>
          )
        },
        {
          num: "04",
          color: "color-p1",
          title: "Automate specific tasks",
          desc: "Save several hours a week by automating repetitive, manual, and time-consuming tasks.",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          num: "05",
          color: "color-s1",
          title: "Use cases by profession",
          desc: "Concrete applications for designers, accountants, lawyers, secretaries, digital marketers, and entrepreneurs.",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          num: "06",
          color: "color-t1",
          title: "Q&A Session",
          desc: "Ask your questions directly and get customized solutions for your business field.",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          )
        }
      ],
      themeTitle: "This week's theme",
      themeQuote: "AI will not replace you... But someone using AI will replace you.",
      themeText: "Learn how to use AI in your job to stay competitive and develop new strategic skills.",
      trainerLabel: "YOUR INSTRUCTOR",
      trainerTitle: "Your Instructor",
      trainerName: "Fernando HOUSSOU",
      trainerRole: "Specialist in digital productivity, automation, and artificial intelligence integration in business domains.",
      trainerBio1: "Founder and director of several digital projects in Africa, he supports professionals and companies in their digital transformation.",
      trainerBio2: "Every week, he shares practical methods, accessible tools, and real-life use cases adapted to African realities.",
      faqTitle: "Frequently Asked Questions",
      faqTagline: "Everything you need to know before joining us.",
      faqItems: [
        {
          q: "Is it free?",
          a: "Yes, access to the live session is completely free to allow as many professionals as possible to discover these revolutionary technologies."
        },
        {
          q: "Do I need to be a tech expert?",
          a: "No, the methods shown are accessible to anyone without technical backgrounds. We make it a priority to simplify concepts."
        },
        {
          q: "How will I receive the Google Meet link?",
          a: "The connection link will be sent to you by email and on the community WhatsApp group 30 minutes before the start of the session."
        },
        {
          q: "Can I ask questions?",
          a: "Absolutely! A dedicated 20-minute Q&A session is scheduled at the end of each presentation to address participants' specific questions."
        }
      ],
      nextSessionTitle: "Next Session",
      nextSessionDay: "Next Saturday",
      nextSessionTime: "19:00 (GMT+1)",
      ctaFinalTitle: "Ready to transform your career?",
      ctaFinalText: "Join hundreds of African professionals who are already mastering AI.",
      ctaFinalBtn: "Book my free seat",
      ctaFinalLimit: "Seats limited to 250 participants per session",
      testimonialsTitle: "Testimonials",
      testimonialsText: "Testimonials coming soon. Participate in the first editions to share your feedback!",
      galleryTitle: "Previous Editions",
      galleryText: "Workshop session screenshots, replays, and key moments from previous editions will be displayed here soon."
    }
  };

  const t = content[lang] || content.fr;

  return (
    <PageWrapper>
      <div className="nebula-bg" aria-hidden="true" />
      <section className="event-page">
        {/* Main Webinar Hero */}
        <header className="event-header webinar-hero">
          <div className="webinar-badge">
            <span className="webinar-badge-dot animate-pulse" />
            <span>{t.subtitle}</span>
          </div>
          <h1 className="page-title main-webinar-title">{t.title}</h1>
          <p className="page-subtitle main-webinar-tagline">{t.tagline}</p>
          
          <div className="webinar-quick-details">
            <div className="detail-pill">
              <span className="sidebar-emoji">📅</span>
              <span>{t.dateLabel}</span>
            </div>
            <div className="detail-pill">
              <span className="sidebar-emoji">🕖</span>
              <span>{t.timeLabel}</span>
            </div>
            <div className="detail-pill">
              <span className="sidebar-emoji">💻</span>
              <span>{t.locationLabel}</span>
            </div>
          </div>

          <div className="hero-cta-buttons">
            <a
              href={eventLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary cta-main-register primary-glow"
            >
              {t.btnRegister}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary cta-whatsapp"
            >
              <span className="sidebar-emoji">💬</span>
              <span>{t.btnWhatsapp}</span>
            </a>
          </div>
        </header>

        <div className="event-container webinar-layout">
          {/* Official Banner Image (Dashboard Preview style) */}
          <div className="mt-8 mb-20 max-w-container-max mx-auto">
            <div className="glass-panel p-2 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <Image
                src="/images/event_banner.png"
                alt={t.title}
                width={1000}
                height={562}
                className="w-full h-auto rounded-[1.5rem] object-cover aspect-video"
                priority
              />
            </div>
          </div>

          <div className="event-grid webinar-grid">
            <div className="event-details-main webinar-main-content">
              {/* About the Webinar */}
              <section className="webinar-section">
                <h2>{t.aboutTitle}</h2>
                <p>{t.aboutIntro}</p>
                <p>{t.aboutBody1}</p>
                <ul className="webinar-professions-list">
                  {t.professions.map((prof, i) => (
                    <li key={i} className="profession-item">✓ {prof}</li>
                  ))}
                </ul>
                <p>{t.aboutBody2}</p>
                <p>{t.aboutBody3}</p>
              </section>
            </div>

            {/* Sticky Sidebar (with Countdown integrated) */}
            <div className="event-sidebar webinar-sidebar">
              <div className="event-card webinar-sticky-card glass-panel">
                <h3>{t.nextSessionTitle}</h3>
                
                <div className="event-info-item">
                  <div className="info-icon-wrapper">
                    <span className="sidebar-emoji">📅</span>
                    <span className="info-label">{lang === 'en' ? 'Schedule:' : 'Date :'}</span>
                  </div>
                  <span className="info-value">{t.dateLabel}</span>
                </div>

                <div className="event-info-item">
                  <div className="info-icon-wrapper">
                    <span className="sidebar-emoji">🕖</span>
                    <span className="info-label">{lang === 'en' ? 'Time:' : 'Heure :'}</span>
                  </div>
                  <span className="info-value">{t.timeLabel}</span>
                </div>

                <div className="event-info-item">
                  <div className="info-icon-wrapper">
                    <span className="sidebar-emoji">💻</span>
                    <span className="info-label">{lang === 'en' ? 'Access:' : 'Lieu :'}</span>
                  </div>
                  <span className="info-value">{t.locationLabel}</span>
                </div>

                <div className="event-info-item">
                  <div className="info-icon-wrapper">
                    <span className="sidebar-emoji">💵</span>
                    <span className="info-label">{lang === 'en' ? 'Price:' : 'Tarif :'}</span>
                  </div>
                  <span className="info-value highlight-value">{t.priceLabel}</span>
                </div>

                <div className="my-6">
                  <Countdown lang={lang} />
                </div>

                <a
                  href={eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary event-cta-button sidebar-register-btn primary-glow"
                >
                  {t.btnRegister}
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary event-cta-button sidebar-whatsapp-btn"
                >
                  {t.btnWhatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Extended content taking full width below the grid */}
          <div className="webinar-extended-content">
            {/* What you will learn (Bento Grid) */}
            <section className="webinar-section">
              <h2 className="text-center mb-4">{t.learnTitle}</h2>
              <p className="text-center text-on-surface-variant mb-12 max-w-xl mx-auto">{t.learnTagline}</p>
              
              <div className="bento-grid">
                {t.learnItems.map((item, i) => (
                  <div className="glass-panel bento-card" key={i}>
                    <div className={`bento-card-number ${item.color}`}>{item.num}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="bento-icon-wrapper">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote & Theme Section */}
            <section className="webinar-section relative py-12">
              <div className="nebula-glow" aria-hidden="true" />
              <div className="glass-panel p-12 rounded-[2.5rem] text-center relative overflow-hidden">
                <span className="theme-accent-tag">{t.themeTitle}</span>
                <blockquote>
                  &ldquo;{t.themeQuote}&rdquo;
                </blockquote>
                <p className="theme-explanation">{t.themeText}</p>
                <a
                  href={eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary theme-card-cta"
                >
                  {t.btnRegister}
                </a>
              </div>
            </section>

            {/* Instructor Presentation (Stitch 3D visual look) */}
            <section className="webinar-section">
              <h2>{t.trainerTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-8">
                <div className="md:col-span-5">
                  <div className="instructor-photo-container">
                    <div className="instructor-photo-bg" />
                    <div className="instructor-photo-wrapper">
                      <Image
                        src="/images/me.jpg"
                        alt={t.trainerName}
                        width={320}
                        height={320}
                        className="trainer-photo"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div className="trainer-card glass-panel">
                    <h4 className="font-label-caps text-accent mb-2 text-sm font-bold tracking-wider">{t.trainerLabel}</h4>
                    <h3 className="text-3xl font-extrabold mb-4">{t.trainerName}</h3>
                    <p className="text-on-surface font-bold text-lg mb-6">{t.trainerRole}</p>
                    <div className="space-y-4 text-on-surface-variant text-base">
                      <p>{t.trainerBio1}</p>
                      <p>{t.trainerBio2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ (Accordion Details) */}
            <section className="webinar-section">
              <h2 className="text-center mb-4">{t.faqTitle}</h2>
              <p className="text-center text-on-surface-variant mb-12">{t.faqTagline}</p>
              <div className="space-y-4 max-w-[800px] mx-auto">
                {t.faqItems.map((item, i) => (
                  <details className="faq-details group" key={i} open={i === 0 ? true : undefined}>
                    <summary className="faq-summary">
                      <div className="faq-question-box">
                        <span className="faq-q-badge">?</span>
                        <span>{item.q}</span>
                      </div>
                      <span className="faq-arrow">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="faq-answer-box">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Testimonials Placeholder */}
            <section className="webinar-section">
              <h2>{t.testimonialsTitle}</h2>
              <div className="testimonials-box-placeholder mt-6">
                <p>{t.testimonialsText}</p>
              </div>
            </section>

            {/* Past Editions / Gallery Placeholder */}
            <section className="webinar-section">
              <h2>{t.galleryTitle}</h2>
              <div className="gallery-box-placeholder mt-6">
                <p>{t.galleryText}</p>
                <div className="gallery-grid-mockup">
                  <div className="mock-item">Replay #1</div>
                  <div className="mock-item">Replay #2</div>
                  <div className="mock-item">Replay #3</div>
                </div>
              </div>
            </section>

            {/* Final Inscription Card */}
            <section className="py-12 text-center relative mt-16">
              <div className="max-w-[800px] mx-auto py-16 px-8 rounded-[3rem] bg-gradient-to-b from-surface-container-high to-surface-container-lowest border border-white/5 relative overflow-hidden glass-panel">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-secondary/5 blur-[80px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[80px] rounded-full" />
                <h2 className="text-3xl font-extrabold mb-4">{t.ctaFinalTitle}</h2>
                <p className="text-on-surface-variant mb-10 max-w-lg mx-auto">{t.ctaFinalText}</p>
                <a
                  href={eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary px-12 py-5 rounded-2xl text-xl font-extrabold primary-glow inline-block"
                >
                  {t.ctaFinalBtn}
                </a>
                <p className="text-xs text-on-surface-variant/60 tracking-widest uppercase mt-6">{t.ctaFinalLimit}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
