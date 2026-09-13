import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../i18n/types';
import './LanguageSelector.css';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`lang-selector-container ${compact ? 'compact' : ''}`} ref={dropdownRef}>
      <button 
        type="button"
        className="lang-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe size={16} className="lang-globe-icon" />
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-code-text">{compact ? currentLang.code.toUpperCase() : currentLang.nativeName}</span>
        <ChevronDown size={14} className={`lang-chevron ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu">
          <div className="lang-dropdown-header">
            <span>Select Language / เลือกภาษา</span>
          </div>
          <div className="lang-list">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={`lang-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                >
                  <span className="lang-opt-flag">{lang.flag}</span>
                  <div className="lang-opt-names">
                    <span className="lang-opt-native">{lang.nativeName}</span>
                    <span className="lang-opt-english">{lang.name}</span>
                  </div>
                  {isSelected && <Check size={16} className="lang-opt-check" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
