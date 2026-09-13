import React, { useState } from 'react';
import { Clock, Sparkles, Check, MessageCircle } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import type { Treatment } from '../data/treatments';
import type { Branch } from '../data/branches';
import { useLanguage } from '../context/LanguageContext';
import './TreatmentMenu.css';

interface TreatmentMenuProps {
  activeBranch: Branch;
  onSelectTreatment: (treatment: Treatment, duration: number, price: number) => void;
}

export const TreatmentMenu: React.FC<TreatmentMenuProps> = ({ activeBranch, onSelectTreatment }) => {
  const { t, getTreatmentInfo } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // Store selected duration index per treatment: { [treatmentId]: minutes }
  const [selectedDurations, setSelectedDurations] = useState<{ [id: string]: number }>(() => {
    const initial: { [id: string]: number } = {};
    TREATMENTS.forEach(t => {
      // default to popular duration or first duration
      const pop = t.durations.find(d => d.popular) || t.durations[0];
      initial[t.id] = pop.minutes;
    });
    return initial;
  });

  const categories = [
    { id: 'all', label: t('cat_all') },
    { id: 'massage', label: t('cat_massage') },
    { id: 'oil', label: t('cat_oil') },
    { id: 'specialty', label: t('cat_specialty') },
    { id: 'packages', label: t('cat_packages') }
  ];

  const filteredTreatments = activeCategory === 'all' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === activeCategory);

  const handleDurationChange = (treatmentId: string, minutes: number) => {
    setSelectedDurations(prev => ({ ...prev, [treatmentId]: minutes }));
  };

  return (
    <section className="treatments-section" id="treatments">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-tag">{t('nav_treatments')}</div>
          <h2 className="section-title">Authentic Therapies & Transparent Pricing</h2>
          <p className="section-subtitle center-sub">
            Tailored pressure, licensed master therapists, and pure botanical balms. 
            Select your preferred duration below for instant pricing at {activeBranch.shortName}.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="category-tabs-container">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="treatments-grid">
          {filteredTreatments.map(tItem => {
            const currentMinutes = selectedDurations[tItem.id] || tItem.durations[0].minutes;
            const currentDurationObj = tItem.durations.find(d => d.minutes === currentMinutes) || tItem.durations[0];
            const trans = getTreatmentInfo(tItem.id, tItem.name, tItem.shortDescription, tItem.tag);

            return (
              <article className="treatment-card" key={tItem.id}>
                {/* Image & Badge */}
                <div className="treatment-img-wrap">
                  <img src={tItem.image} alt={trans.name} className="treatment-img" loading="lazy" />
                  {trans.tag && <span className="treatment-badge">{trans.tag}</span>}
                </div>

                <div className="treatment-body">
                  <h3 className="treatment-name">{trans.name}</h3>
                  <p className="treatment-desc">{trans.shortDescription}</p>

                  {/* Benefits checklist */}
                  <ul className="treatment-benefits">
                    {tItem.benefits.map((b, i) => (
                      <li key={i}>
                        <Check size={14} className="check-icon" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Duration Toggle Matrix */}
                  <div className="duration-matrix">
                    <span className="duration-label">{t('select_duration')}</span>
                    <div className="duration-pills">
                      {tItem.durations.map(dur => (
                        <button
                          key={dur.minutes}
                          type="button"
                          className={`duration-pill ${dur.minutes === currentMinutes ? 'active' : ''}`}
                          onClick={() => handleDurationChange(tItem.id, dur.minutes)}
                        >
                          <Clock size={13} />
                          <span>{dur.minutes} {t('mins')}</span>
                          {dur.popular && <span className="pill-star">★</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="treatment-footer">
                    <div className="price-display">
                      <span className="price-label">{t('price_for')} {currentMinutes} {t('mins')}:</span>
                      <div className="price-amount">
                        <span className="currency">THB</span>
                        <span className="number">{currentDurationObj.priceTHB.toLocaleString()}</span>
                        <span className="vat-note">{t('net_fees')}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary book-treatment-btn"
                      onClick={() => onSelectTreatment(tItem, currentMinutes, currentDurationObj.priceTHB)}
                    >
                      <Sparkles size={16} />
                      <span>{t('book_session')}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="pricing-guarantee-banner">
          <div className="guarantee-left">
            <span className="guarantee-icon">🛡️</span>
            <div>
              <strong>100% Satisfaction & Hygiene Guarantee</strong>
              <p>Fresh organic linen, sanitized private suites, and complimentary herbal refreshments with every visit.</p>
            </div>
          </div>
          <a 
            href={activeBranch.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Ask Us Anything via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
