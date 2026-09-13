import React from 'react';
import { MessageCircle, Phone, CalendarCheck, MapPin } from 'lucide-react';
import type { Branch } from '../data/branches';
import { useLanguage } from '../context/LanguageContext';
import './MobileActionDock.css';

interface MobileActionDockProps {
  activeBranch: Branch;
  onOpenBooking: () => void;
  onScrollToBranches: () => void;
}

export const MobileActionDock: React.FC<MobileActionDockProps> = ({
  activeBranch,
  onOpenBooking,
  onScrollToBranches
}) => {
  const { t } = useLanguage();

  return (
    <aside className="mobile-action-dock" aria-label="Quick mobile booking actions">
      <div className="dock-branch-indicator" onClick={onScrollToBranches}>
        <MapPin size={13} className="dock-pin-icon" />
        <span className="dock-branch-text">
          {activeBranch.shortName} <span className="dock-switch">{t('dock_switch_branch')}</span>
        </span>
      </div>

      <div className="dock-buttons">
        <a
          href={`tel:${activeBranch.phoneRaw}`}
          className="dock-btn dock-call"
          aria-label={`Call ${activeBranch.name}`}
        >
          <Phone size={18} />
          <span>{t('dock_call')}</span>
        </a>

        <a
          href={activeBranch.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-btn dock-whatsapp"
          aria-label="WhatsApp quick chat"
        >
          <MessageCircle size={18} />
          <span>{t('dock_whatsapp')}</span>
        </a>

        <button
          type="button"
          className="dock-btn dock-book"
          onClick={onOpenBooking}
          aria-label="Book a massage appointment"
        >
          <CalendarCheck size={18} />
          <span>{t('dock_book')}</span>
        </button>
      </div>
    </aside>
  );
};
