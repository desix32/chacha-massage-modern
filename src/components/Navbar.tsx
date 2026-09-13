import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BRANCHES } from '../data/branches';
import type { Branch } from '../data/branches';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import './Navbar.css';

interface NavbarProps {
  activeBranch: Branch;
  onSelectBranch: (branch: Branch) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeBranch, onSelectBranch, onOpenBooking }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <span>✨ <strong>CHACHA MASSAGE</strong> Bangkok • Traditional Thai & Sanctuary Spa</span>
          <a href="#treatments" className="announcement-link">{t('nav_treatments')} →</a>
        </div>
      </div>

      <header className={`modern-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#" className="nav-brand">
            <img src="./images/logo.jpg" alt="Chacha Massage Bangkok" className="brand-logo-img" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-links">
            <a href="#treatments" className="nav-link">{t('nav_treatments')}</a>
            <a href="#branches" className="nav-link">{t('nav_locations')}</a>
            <a href="#about" className="nav-link">{t('nav_heritage')}</a>
            <a href="#gallery" className="nav-link">{t('nav_gallery')}</a>
            <a href="#reviews" className="nav-link">{t('nav_reviews')}</a>
            <a href="#faq" className="nav-link">{t('nav_faq')}</a>
          </nav>

          {/* Right Actions: Branch Quick Selector, Language Selector & Booking */}
          <div className="nav-right-actions">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Branch Dropdown */}
            <div className="branch-dropdown-wrapper">
              <button 
                type="button"
                className="branch-selector-btn"
                onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                aria-expanded={branchDropdownOpen}
              >
                <MapPin size={16} className="text-terracotta" />
                <span className="branch-name">{activeBranch.shortName}</span>
                <span className="dropdown-arrow">▾</span>
              </button>

              {branchDropdownOpen && (
                <div className="branch-dropdown-menu">
                  <div className="dropdown-header">Select Bangkok Branch:</div>
                  {BRANCHES.map(b => (
                    <button
                      key={b.id}
                      type="button"
                      className={`dropdown-item ${b.id === activeBranch.id ? 'active' : ''}`}
                      onClick={() => {
                        onSelectBranch(b);
                        setBranchDropdownOpen(false);
                      }}
                    >
                      <span className="item-title">{b.shortName}</span>
                      <span className="item-sub">{b.bts}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop WhatsApp Quick Book */}
            <a 
              href={activeBranch.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp nav-whatsapp-btn"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            {/* Book Now Button */}
            <button 
              type="button"
              className="btn btn-primary nav-book-btn"
              onClick={onOpenBooking}
            >
              <Sparkles size={16} />
              <span>{t('nav_book')}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-branch-bar">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div className="mobile-branch-label">Language / ภาษา:</div>
                <LanguageSelector compact />
              </div>
              <div className="mobile-branch-label">Active Branch:</div>
              <div className="mobile-branch-chips">
                {BRANCHES.map(b => (
                  <button
                    key={b.id}
                    type="button"
                    className={`branch-chip ${b.id === activeBranch.id ? 'active' : ''}`}
                    onClick={() => {
                      onSelectBranch(b);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {b.shortName}
                  </button>
                ))}
              </div>
            </div>

            <nav className="mobile-links-list">
              <a href="#treatments" onClick={() => setMobileMenuOpen(false)}>{t('nav_treatments')}</a>
              <a href="#branches" onClick={() => setMobileMenuOpen(false)}>{t('nav_locations')}</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t('nav_heritage')}</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>{t('nav_gallery')}</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>{t('nav_reviews')}</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>{t('nav_faq')}</a>
            </nav>

            <div className="mobile-drawer-footer">
              <a 
                href={activeBranch.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full"
              >
                <MessageCircle size={18} />
                <span>WhatsApp ({activeBranch.shortName})</span>
              </a>
              <a 
                href={`tel:${activeBranch.phoneRaw}`}
                className="btn btn-secondary w-full"
              >
                <Phone size={18} />
                <span>{t('dock_call')} ({activeBranch.phone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
