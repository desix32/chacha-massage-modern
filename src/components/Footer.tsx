import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';
import { BRANCHES } from '../data/branches';
import type { Branch } from '../data/branches';
import './Footer.css';

interface FooterProps {
  onSelectBranch: (branch: Branch) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectBranch, onOpenBooking }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-chacha">CHACHA</span>
              <span className="logo-massage">MASSAGE</span>
              <span className="logo-bangkok">BANGKOK • EST. 2004</span>
            </div>
            <p className="footer-about">
              Dedicated to authentic Thai healing arts, certified masseuses, and pure organic botanicals. 
              Escape urban tension in 5 serene central Sukhumvit sanctuaries.
            </p>
            <div className="footer-cta-row">
              <button type="button" className="btn btn-primary footer-book-btn" onClick={onOpenBooking}>
                <Sparkles size={16} />
                <span>Reserve a Session</span>
              </button>
            </div>
          </div>

          {/* Locations */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our 5 Sanctuaries</h4>
            <ul className="footer-links-list">
              {BRANCHES.map(branch => (
                <li key={branch.id}>
                  <button
                    type="button"
                    className="footer-branch-btn"
                    onClick={() => {
                      onSelectBranch(branch);
                      document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <MapPin size={14} className="f-icon" />
                    <span>{branch.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="footer-col">
            <h4 className="footer-col-title">Signature Therapies</h4>
            <ul className="footer-links-list">
              <li><a href="#treatments">Traditional Royal Thai Massage</a></li>
              <li><a href="#treatments">Deep Tissue Aroma Oil Massage</a></li>
              <li><a href="#treatments">Warm Herbal Compress Therapy</a></li>
              <li><a href="#treatments">Authentic Foot Reflexology</a></li>
              <li><a href="#treatments">Siam Zen Complete Harmony</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-col">
            <h4 className="footer-col-title">Hours & Contact</h4>
            <div className="footer-contact-info">
              <p><strong>Open Daily:</strong> 9:00 AM – Midnight</p>
              <div style={{ margin: '8px 0 12px 0', fontSize: '0.82rem', lineHeight: '1.6' }}>
                <strong style={{ color: '#d4af37', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                  <Phone size={13} /> Direct Branch Lines:
                </strong>
                <div>• Soi 13: <a href="tel:+66804530982" style={{ color: '#cbd5e1' }}>080 453 0982</a></div>
                <div>• Soi 11: <a href="tel:+6620825468" style={{ color: '#cbd5e1' }}>02 082 5468</a> / <a href="tel:+66928285468" style={{ color: '#cbd5e1' }}>092 828 5468</a></div>
                <div>• Ambassador: <a href="tel:+6622558499" style={{ color: '#cbd5e1' }}>02 255 8499</a></div>
                <div>• Soi 15: <a href="tel:+6620017659" style={{ color: '#cbd5e1' }}>02 001 7659</a> / <a href="tel:+66816965982" style={{ color: '#cbd5e1' }}>081 696 5982</a></div>
                <div>• Asoke (21): <a href="tel:+6621204061" style={{ color: '#cbd5e1' }}>02 120 4061</a></div>
              </div>
              <a
                href="https://wa.me/66804530982?text=Hello%20Chacha%20Massage,%20I%20would%20like%20to%20inquire%20about%20a%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp footer-wa-btn"
              >
                <MessageCircle size={16} />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Chacha Massage Bangkok. All Rights Reserved.</p>
          <p className="footer-credit">
            Crafted with <Heart size={13} className="heart-icon" /> Siam Zen Aesthetic
          </p>
        </div>
      </div>
    </footer>
  );
};
