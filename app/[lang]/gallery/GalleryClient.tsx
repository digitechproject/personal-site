'use client';

import { useState } from 'react';
import Image from 'next/image';
import galleryData, { GalleryItem } from '@/data/gallery';
import { Language } from '@/data/translations';

interface GalleryClientProps {
  lang: Language;
}

export default function GalleryClient({ lang }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', labelFr: 'Tout', labelEn: 'All' },
    { key: 'wordpress', labelFr: 'WordPress (DMA)', labelEn: 'WordPress (DMA)' },
    { key: 'video', labelFr: 'Montage Vidéo (DMA)', labelEn: 'Video Editing (DMA)' },
    { key: 'event', labelFr: 'Événements', labelEn: 'Events' },
  ];

  const filteredData = galleryData.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = filteredData.findIndex((item) => item.id === selectedImage.id);
    let newIndex = currentIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredData.length;
    } else {
      newIndex = (currentIndex - 1 + filteredData.length) % filteredData.length;
    }
    setSelectedImage(filteredData[newIndex]);
  };

  return (
    <section className="gallery-page">
      <header className="gallery-header">
        <h1 className="page-title">
          {lang === 'en' ? 'Photo Gallery' : 'Galerie Photo'}
        </h1>
        <p className="page-subtitle">
          {lang === 'en'
            ? 'Moments from WordPress and video editing classes at DMA, and tech events.'
            : 'Retour en images sur les formations WordPress, montage vidéo au DMA et événements tech.'}
        </p>
      </header>

      {/* Categories Switcher */}
      <div className="gallery-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`gallery-category-btn ${activeCategory === cat.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {lang === 'en' ? cat.labelEn : cat.labelFr}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredData.map((item) => {
          const title = lang === 'en' ? item.titleEn : item.titleFr;
          return (
            <div
              key={item.id}
              className="gallery-item-card"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image-wrapper">
                <Image
                  src={item.image}
                  alt={title}
                  width={400}
                  height={300}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <span className="gallery-view-icon">👁</span>
                </div>
              </div>
              <div className="gallery-item-info">
                <h3>{title}</h3>
                <p className="gallery-item-desc">
                  {lang === 'en' ? item.descriptionEn : item.descriptionFr}
                </p>
                <time className="gallery-item-date">{item.date}</time>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Visionneuse */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button type="button" className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
          >
            ‹
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.image}
              alt={lang === 'en' ? selectedImage.titleEn : selectedImage.titleFr}
              width={800}
              height={600}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3>{lang === 'en' ? selectedImage.titleEn : selectedImage.titleFr}</h3>
              <p>{lang === 'en' ? selectedImage.descriptionEn : selectedImage.descriptionFr}</p>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
