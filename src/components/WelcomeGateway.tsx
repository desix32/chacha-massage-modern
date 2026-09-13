import React, { useState } from 'react';
import { Sparkles, MapPin, Clock, Check, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRANCHES } from '../data/branches';
import type { Branch } from '../data/branches';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../i18n/types';
import type { SupportedLanguage } from '../i18n/types';
import './WelcomeGateway.css';

interface WelcomeGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  activeBranch: Branch;
  onSelectBranch: (branch: Branch) => void;
}

export const WelcomeGateway: React.FC<WelcomeGatewayProps> = ({
  isOpen,
  onClose,
  activeBranch,
  onSelectBranch
}) => {
  const { language, setLanguage } = useLanguage();
  const [selectedBranchId, setSelectedBranchId] = useState<string>(activeBranch.id);

  if (!isOpen) return null;

  const handleConfirm = () => {
    const branch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];
    onSelectBranch(branch);
    try {
      localStorage.setItem('chacha_selected_branch', branch.id);
    } catch {
      // ignore
    }
    onClose();
  };

  const selectedBranch = BRANCHES.find(b => b.id === selectedBranchId) || activeBranch;

  return (
    <div className="gateway-backdrop" role="dialog" aria-modal="true">
      <div className="gateway-modal">
        {/* Close Button for returning users */}
        <button 
          type="button" 
          className="gateway-close-btn" 
          onClick={onClose}
          aria-label="Close welcome screen"
        >
          <X size={20} />
        </button>

        {/* Ambient Top Glow & Header */}
        <div className="gateway-header text-center">
          <div className="gateway-crown">
            <span className="gateway-sparkle">✦</span>
            <span>CHACHA MASSAGE BANGKOK</span>
            <span className="gateway-sparkle">✦</span>
          </div>

          <h1 className="gateway-title">
            Welcome to Your Sukhumvit Sanctuary
          </h1>
          <p className="gateway-subtitle">
            Authentic Royal Thai Bodywork & Healing Arts Since 2002.
            Select your language and preferred branch for tailored pricing, special offers, and direct concierge.
          </p>
        </div>

        <div className="gateway-body">
          {/* STEP 1: Language Selector */}
          <div className="gateway-section">
            <div className="gateway-section-title">
              <span className="step-num">1</span>
              <span>Select Language / เลือกภาษา</span>
            </div>

            <div className="gateway-languages-grid">
              {LANGUAGES.map(lang => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    className={`gateway-lang-chip ${isSelected ? 'active' : ''}`}
                    onClick={() => setLanguage(lang.code as SupportedLanguage)}
                  >
                    <span className="chip-flag">{lang.flag}</span>
                    <span className="chip-native">{lang.nativeName}</span>
                    {isSelected && <Check size={14} className="chip-check" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Branch Selector */}
          <div className="gateway-section">
            <div className="gateway-section-title">
              <span className="step-num">2</span>
              <span>Select Location & Tailored Offers / เลือกสาขา</span>
            </div>

            <div className="gateway-branches-grid">
              {BRANCHES.map(b => {
                const isSelected = b.id === selectedBranchId;
                return (
                  <div
                    key={b.id}
                    className={`gateway-branch-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedBranchId(b.id)}
                  >
                    <div className="gb-img-wrap">
                      <img src={b.image} alt={b.name} className="gb-img" loading="lazy" />
                      <div className="gb-radio-indicator">
                        {isSelected ? <Check size={14} /> : null}
                      </div>
                      {b.specialOffer && (
                        <div className="gb-offer-badge">
                          <Sparkles size={12} />
                          <span>{b.specialOffer.badge}</span>
                        </div>
                      )}
                    </div>

                    <div className="gb-content">
                      <h3 className="gb-name">{b.name}</h3>
                      <div className="gb-bts">
                        <MapPin size={13} />
                        <span>{b.bts}</span>
                      </div>
                      <div className="gb-hours">
                        <Clock size={13} />
                        <span>{b.hours}</span>
                      </div>

                      {b.specialOffer && (
                        <div className="gb-offer-box">
                          <strong className="gb-offer-highlight">{b.specialOffer.highlight}</strong>
                          <p className="gb-offer-desc">{b.specialOffer.promoText}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="gateway-footer">
          <div className="gateway-guarantee">
            <ShieldCheck size={16} />
            <span>Wat Pho Certified Therapists • Net Transparent Prices • No Hidden Fees</span>
          </div>

          <button
            type="button"
            className="btn btn-primary gateway-submit-btn"
            onClick={handleConfirm}
          >
            <span>Enter Sanctuary ({selectedBranch.shortName})</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
