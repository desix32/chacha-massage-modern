import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './GalleryLightbox.css';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: './images/photoshoot/team-full-reception.jpg', title: 'Our Dedicated Master Therapists & Reception Team', category: 'ambiance' },
  { id: 2, src: './images/photoshoot/thai-stretch-back.jpg', title: 'Royal Thai Passive Yogic Back Stretch', category: 'wellness' },
  { id: 3, src: './images/photoshoot/neon-sign-ambient.jpg', title: 'Chacha Massage Signature Ambient Wall', category: 'ambiance' },
  { id: 4, src: './images/photoshoot/thai-hall-curtains.jpg', title: 'Traditional Thai Floor Hall with Privacy Curtains', category: 'rooms' },
  { id: 5, src: './images/photoshoot/private-suite-bed.jpg', title: 'Private Aromatherapy & Herbal Suite', category: 'rooms' },
  { id: 6, src: './images/photoshoot/thai-stretch-shoulder.jpg', title: 'Therapeutic Cervical & Scapula Acupressure', category: 'wellness' },
  { id: 7, src: './images/photoshoot/essential-oil-flower.jpg', title: 'Cold-Pressed Botanical Massage Oils & Frangipani', category: 'wellness' },
  { id: 8, src: './images/photoshoot/spa-lotions-towels.jpg', title: 'Fresh Sanitized Linens & Botanical Lotions', category: 'facilities' },
  { id: 9, src: './images/gallery-3.jpg', title: 'Sukhumvit Foot Reflexology Lounge', category: 'facilities' },
  { id: 10, src: './images/soi11-room.jpg', title: 'Deluxe Private Suite @ Soi 11', category: 'rooms' },
  { id: 11, src: './images/gallery-7.jpg', title: 'Steamed Traditional Thai Herbal Compresses', category: 'wellness' },
  { id: 12, src: './images/soi15-gallery.jpg', title: 'Sukhumvit 15 Flagship Entryway', category: 'facilities' }
];

export const GalleryLightbox: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Sanctuary Atmosphere</div>
          <h2 className="section-title">Step Inside Our Peaceful Haven</h2>
          <p className="section-subtitle center-sub">
            Designed for deep rest and mental tranquility. Soft organic earth tones, 
            calming aromas, and pristine hygienic conditions across all suites.
          </p>
        </div>

        {/* Filters */}
        <div className="gallery-filter-tabs">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'rooms', label: 'Private Suites' },
            { id: 'facilities', label: 'Lounge & Reflexology' },
            { id: 'ambiance', label: 'Ambiance' },
            { id: 'wellness', label: 'Herbs & Botanicals' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              className={`gallery-tab ${activeCategory === tab.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-grid-item"
              onClick={() => setLightboxIndex(idx)}
            >
              <img src={item.src} alt={item.title} className="gallery-thumb" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-item-title">{item.title}</span>
                <span className="gallery-zoom-icon">
                  <Maximize2 size={18} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image viewer"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <span>{filteredItems[lightboxIndex].title}</span>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};
