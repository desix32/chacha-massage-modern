import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Award, MapPin, Clock } from 'lucide-react';
import type { Branch } from '../data/branches';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

interface HeroProps {
  activeBranch: Branch;
  onOpenBooking: () => void;
  onOpenGateway?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ activeBranch, onOpenBooking, onOpenGateway }) => {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      {/* Ambient background with overlay */}
      <div className="hero-bg-container">
        <img src="./images/hero.jpg" alt="Chacha Massage Bangkok Sanctuary" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-badge">
            <Sparkles size={16} className="text-coral" />
            <span>{t('hero_badge')}</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            {t('hero_title_1')} <br />
            <span className="text-serif-italic">{t('hero_title_2')}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-desc">
            {t('hero_desc')}
          </p>

          {/* Active Branch Callout Card with tailored offer */}
          <div className="hero-branch-pill">
            <div className="branch-pill-left">
              <span className="pill-status-dot" />
              <div>
                <strong className="branch-pill-name">{activeBranch.name}</strong>
                <span className="branch-pill-sub">{activeBranch.bts} • {t('hero_open_daily')}</span>
                {activeBranch.specialOffer && (
                  <div style={{ marginTop: '4px', fontSize: '0.78rem', color: '#d4af37', fontWeight: 600 }}>
                    ✦ {activeBranch.specialOffer.badge}: {activeBranch.specialOffer.highlight}
                  </div>
                )}
              </div>
            </div>
            <button 
              type="button" 
              className="branch-pill-switch" 
              onClick={onOpenGateway ? onOpenGateway : undefined}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {t('hero_change_branch')}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary hero-btn-main"
              onClick={onOpenBooking}
            >
              <Sparkles size={18} />
              <span>{t('hero_cta')}</span>
            </button>

            <a 
              href={activeBranch.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn-sub"
            >
              <MessageCircle size={20} />
              <span>{t('whatsapp_confirm_btn')}</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <Award size={20} className="trust-icon" />
              <span>{t('trust_experience')}</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>{t('trust_hygiene')}</span>
            </div>
            <div className="trust-item">
              <MapPin size={20} className="trust-icon" />
              <span>{t('trust_bts')}</span>
            </div>
            <div className="trust-item">
              <Clock size={20} className="trust-icon" />
              <span>{t('net_fees')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
