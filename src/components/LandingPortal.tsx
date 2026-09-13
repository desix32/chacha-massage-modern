import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ArrowRight, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { BRANCHES } from '../data/branches';
import type { Branch } from '../data/branches';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import './LandingPortal.css';

interface LandingPortalProps {
  onSelectBranch: (branch: Branch) => void;
}

export const LandingPortal: React.FC<LandingPortalProps> = ({ onSelectBranch }) => {
  const { t } = useLanguage();

  return (
    <div className="portal-page">
      {/* Top Navigation */}
      <header className="portal-navbar">
        <div className="container portal-nav-container">
          <div className="portal-brand">
            <img src="./images/logo.jpg" alt="Chacha Massage Bangkok" className="portal-logo" />
            <div className="portal-brand-text">
              <span className="brand-name">CHACHA MASSAGE</span>
              <span className="brand-sub">BANGKOK SANCTUARY</span>
            </div>
          </div>

          <div className="portal-nav-right">
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Hero Welcome Banner */}
      <section className="portal-hero">
        <div className="portal-hero-bg">
          <img src="./images/hero.jpg" alt="Chacha Massage Bangkok Sanctuary" className="portal-hero-img" />
          <div className="portal-hero-overlay" />
        </div>

        <div className="container portal-hero-content text-center">
          <div className="portal-crown-badge">
            <Sparkles size={15} />
            <span>AUTHENTIC ROYAL THAI HEALING SINCE 2002</span>
            <Sparkles size={15} />
          </div>

          <h1 className="portal-title">
            {t('branches_title')}
          </h1>
          <p className="portal-subtitle">
            {t('branches_subtitle')}
          </p>

          <div className="portal-guarantees">
            <div className="guarantee-chip">
              <Award size={16} />
              <span>{t('trust_licensed')}</span>
            </div>
            <div className="guarantee-chip">
              <ShieldCheck size={16} />
              <span>{t('trust_hygiene')}</span>
            </div>
            <div className="guarantee-chip">
              <Sparkles size={16} />
              <span>{t('net_fees')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Branch Sanctuaries Grid */}
      <main className="portal-branches-section">
        <div className="container">
          <div className="portal-grid">
            {BRANCHES.map(branch => (
              <article 
                key={branch.id} 
                className="portal-card"
                onClick={() => onSelectBranch(branch)}
              >
                {/* Branch Image with Badges */}
                <div className="portal-card-img-wrap">
                  <img src={branch.image} alt={branch.name} className="portal-card-img" loading="lazy" />
                  <div className="portal-tagline-badge">{branch.tagline}</div>
                  {branch.specialOffer && (
                    <div className="portal-offer-pill">
                      <Sparkles size={13} />
                      <span>{branch.specialOffer.badge}</span>
                    </div>
                  )}
                </div>

                {/* Branch Info */}
                <div className="portal-card-body">
                  <div className="portal-card-header">
                    <h2 className="portal-branch-name">{branch.name}</h2>
                    <span className="portal-district-tag">{branch.district}</span>
                  </div>

                  {/* Special Offer Highlight Box */}
                  {branch.specialOffer && (
                    <div className="portal-special-offer-box">
                      <strong className="portal-offer-title">{branch.specialOffer.highlight}</strong>
                      <p className="portal-offer-text">{branch.specialOffer.promoText}</p>
                    </div>
                  )}

                  {/* Key Metadata */}
                  <div className="portal-details-list">
                    <div className="portal-detail-row">
                      <Phone size={16} className="detail-icon" />
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="portal-phone-text-link"
                        onClick={e => e.stopPropagation()}
                        title={`Direct Phone: ${branch.phone}`}
                      >
                        <strong>{branch.phone}</strong>
                      </a>
                    </div>

                    <div className="portal-detail-row">
                      <Navigation size={16} className="detail-icon" />
                      <span>{branch.bts}</span>
                    </div>

                    <div className="portal-detail-row">
                      <Clock size={16} className="detail-icon" />
                      <span>{branch.hours}</span>
                    </div>

                    <div className="portal-detail-row">
                      <MapPin size={16} className="detail-icon" />
                      <span className="portal-address-text">{branch.address}</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="portal-card-actions" onClick={e => e.stopPropagation()}>
                    {branch.isComingSoon ? (
                      <a
                        href={branch.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary portal-enter-btn portal-coming-soon-btn"
                        style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#fff', border: 'none' }}
                      >
                        <MessageCircle size={18} />
                        <span>VIP Pre-Opening Inquiries</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary portal-enter-btn"
                        onClick={() => onSelectBranch(branch)}
                      >
                        <span>{t('book_this_branch')}</span>
                        <ArrowRight size={18} />
                      </button>
                    )}

                    <div className="portal-secondary-links">
                      <a
                        href={branch.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portal-link-btn portal-wa-btn"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={16} />
                        <span>{t('nav_whatsapp')}</span>
                      </a>

                      {!branch.isComingSoon && (
                        <a
                          href={branch.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portal-link-btn portal-map-btn"
                          title="Google Maps Directions"
                        >
                          <Navigation size={16} />
                          <span>{t('get_directions')}</span>
                        </a>
                      )}

                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="portal-link-btn portal-phone-btn"
                        title={`Call ${branch.phone}`}
                      >
                        <Phone size={16} />
                        <span>{t('dock_call')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="portal-footer">
        <div className="container text-center">
          <p className="portal-footer-tag">
            CHACHA MASSAGE BANGKOK • 5 SANCTUARIES ALONG SUKHUMVIT
          </p>
          <p className="portal-footer-copy">
            © 2002 – 2026 Chacha Massage. All rights reserved. Master Licensed Practitioners.
          </p>
        </div>
      </footer>
    </div>
  );
};
