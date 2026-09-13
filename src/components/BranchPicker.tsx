import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BRANCHES } from '../data/branches';
import type { Branch } from '../data/branches';
import { useLanguage } from '../context/LanguageContext';
import './BranchPicker.css';

interface BranchPickerProps {
  activeBranch: Branch;
  onSelectBranch: (branch: Branch) => void;
  onBookNow: () => void;
}

export const BranchPicker: React.FC<BranchPickerProps> = ({
  activeBranch,
  onSelectBranch,
  onBookNow
}) => {
  const { t } = useLanguage();

  return (
    <section className="branches-section" id="branches">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">{t('nav_locations')}</div>
          <h2 className="section-title">{t('branches_title')}</h2>
          <p className="section-subtitle center-sub">
            {t('branches_subtitle')}
          </p>
        </div>

        {/* Branch Selection Cards */}
        <div className="branches-grid">
          {BRANCHES.map(branch => {
            const isSelected = branch.id === activeBranch.id;

            return (
              <div 
                key={branch.id} 
                className={`branch-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectBranch(branch)}
              >
                <div className="branch-card-img-wrap">
                  <img src={branch.image} alt={branch.name} className="branch-card-img" loading="lazy" />
                  <span className="branch-tagline-badge">{branch.tagline}</span>
                  {isSelected && (
                    <div className="active-badge">
                      <CheckCircle2 size={16} />
                      <span>{t('selected_badge')}</span>
                    </div>
                  )}
                </div>

                <div className="branch-card-body">
                  <div className="branch-card-header">
                    <div>
                      <h3 className="branch-card-name">{branch.name}</h3>
                      <span className="branch-card-district">{branch.district}</span>
                    </div>
                  </div>

                  <div className="branch-details-list">
                    <div className="branch-detail-item">
                      <MapPin size={16} className="detail-icon" />
                      <div>
                        <strong>{t('address_label')}:</strong>
                        <span>{branch.address}</span>
                      </div>
                    </div>

                    <div className="branch-detail-item">
                      <Navigation size={16} className="detail-icon" />
                      <div>
                        <strong>{t('nearest_station')}:</strong>
                        <span className="bts-highlight">{branch.bts}</span>
                      </div>
                    </div>

                    <div className="branch-detail-item">
                      <Clock size={16} className="detail-icon" />
                      <div>
                        <strong>{t('opening_hours')}:</strong>
                        <span>{branch.hours}</span>
                      </div>
                    </div>

                    <div className="branch-detail-item">
                      <Phone size={16} className="detail-icon" />
                      <div>
                        <strong>{t('direct_phone')}:</strong>
                        <a href={`tel:${branch.phoneRaw}`} onClick={e => e.stopPropagation()}>
                          {branch.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="branch-card-actions" onClick={e => e.stopPropagation()}>
                    <button
                      type="button"
                      className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'} select-btn`}
                      onClick={() => {
                        onSelectBranch(branch);
                        onBookNow();
                      }}
                    >
                      {isSelected ? t('book_this_branch') : t('book_this_branch')}
                    </button>

                    <a
                      href={branch.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="branch-action-link branch-wa-link"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle size={18} />
                      <span>{t('nav_whatsapp')}</span>
                    </a>

                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="branch-action-link branch-map-link"
                      title="Open Google Maps"
                    >
                      <Navigation size={18} />
                      <span>{t('get_directions')}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
