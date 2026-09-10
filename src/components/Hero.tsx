import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Award, MapPin, Clock } from 'lucide-react';
import type { Branch } from '../data/branches';
import './Hero.css';

interface HeroProps {
  activeBranch: Branch;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ activeBranch, onOpenBooking }) => {
  return (
    <section className="hero-section">
      {/* Ambient background with overlay */}
      <div className="hero-bg-container">
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-badge">
            <Sparkles size={16} className="text-coral" />
            <span>Authentic Thai Healing Since 2002 • 23 Years of Mastery</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Rebalance Your Body. <br />
            <span className="text-serif-italic">Awaken Your Serenity.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-desc">
            Escape Bangkok’s bustling energy. Experience authentic Royal Thai acupressure, 
            restorative herbal heat therapies, and customized botanical oil treatments in our tranquil private sanctuaries.
          </p>

          {/* Active Branch Callout Card */}
          <div className="hero-branch-pill">
            <div className="branch-pill-left">
              <span className="pill-status-dot" />
              <div>
                <strong className="branch-pill-name">{activeBranch.name}</strong>
                <span className="branch-pill-sub">{activeBranch.bts} • Open {activeBranch.hours}</span>
              </div>
            </div>
            <a href="#branches" className="branch-pill-switch">Change Branch ▾</a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary hero-btn-main"
              onClick={onOpenBooking}
            >
              <Sparkles size={18} />
              <span>Book Your Sanctuary Session</span>
            </button>

            <a 
              href={activeBranch.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn-sub"
            >
              <MessageCircle size={20} />
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <Award size={20} className="trust-icon" />
              <span>23+ Years Master Therapists</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>Pristine Private Suites</span>
            </div>
            <div className="trust-item">
              <MapPin size={20} className="trust-icon" />
              <span>4 Sukhumvit Prime Locations</span>
            </div>
            <div className="trust-item">
              <Clock size={20} className="trust-icon" />
              <span>Zero Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
