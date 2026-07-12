'use client';

import { useState } from 'react';
import projectsData, { Project } from '@/data/projects';
import Cell from './Cell';
import { getTranslation, Language } from '@/data/translations';

interface ProjectsClientProps {
  lang: Language;
}

export default function ProjectsClient({ lang }: ProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = getTranslation(lang);

  const categories = [
    { key: 'all', labelKey: 'projects.category.all' },
    { key: 'saas', labelKey: 'projects.category.saas' },
    { key: 'marketplace', labelKey: 'projects.category.marketplace' },
    { key: 'ia', labelKey: 'projects.category.ia' },
    { key: 'erp', labelKey: 'projects.category.erp' },
    { key: 'communication', labelKey: 'projects.category.communication' },
    { key: 'mobile', labelKey: 'projects.category.mobile' },
    { key: 'networks', labelKey: 'projects.category.networks' },
    { key: 'opensource', labelKey: 'projects.category.opensource' },
  ];

  // Filter projects dynamically based on category key
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;

    // Map activeCategory keys to database strings inside project.category
    const searchMap: { [key: string]: string } = {
      saas: 'SaaS',
      marketplace: 'Marketplace',
      ia: 'IA',
      erp: 'ERP',
      communication: 'Communication',
      mobile: 'Mobile',
      networks: 'Réseaux & Infrastructure',
      opensource: 'Open Source',
    };

    const targetCategory = searchMap[activeCategory];
    return project.category && project.category.includes(targetCategory);
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="projects-container">
      {/* Category Filter Tabs (Pills) */}
      <div className="projects-categories-wrapper">
        <div className="projects-categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`projects-category-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {t[cat.labelKey as keyof ReturnType<typeof getTranslation>] ||
                cat.key}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Render */}
      {filteredProjects.length === 0 ? (
        <div className="projects-empty">
          <p>
            {lang === 'en'
              ? 'No projects found in this category.'
              : 'Aucun projet trouvé dans cette catégorie.'}
          </p>
        </div>
      ) : (
        <>
          {featuredProjects.length > 0 && (
            <section className="projects-featured">
              <h2 className="projects-section-title">
                {t['projects.featured']}
              </h2>
              <div className="projects-grid projects-grid--featured">
                {featuredProjects.map((project) => (
                  <Cell data={project} key={project.title} lang={lang} />
                ))}
              </div>
            </section>
          )}

          {otherProjects.length > 0 && (
            <section className="projects-other">
              <h2 className="projects-section-title">{t['projects.other']}</h2>
              <div className="projects-grid">
                {otherProjects.map((project) => (
                  <Cell data={project} key={project.title} lang={lang} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
