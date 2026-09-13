import React, { createContext, useContext, useState, useEffect } from 'react';
import type { SupportedLanguage } from '../i18n/types';
import { LANGUAGES } from '../i18n/types';
import { UI_TRANSLATIONS, type UIStrings } from '../i18n/translations';
import { TREATMENT_TRANSLATIONS, type TreatmentTranslation } from '../i18n/treatmentTranslations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: keyof UIStrings) => string;
  getTreatmentInfo: (id: string, defaultName?: string, defaultDesc?: string, defaultTag?: string) => TreatmentTranslation;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';
  
  // 1. Check local storage
  const saved = localStorage.getItem('chacha_lang') as SupportedLanguage;
  if (saved && LANGUAGES.some(l => l.code === saved)) {
    return saved;
  }

  // 2. Check browser navigator language
  const navLang = (navigator.language || '').toLowerCase();
  if (navLang.startsWith('th')) return 'th';
  if (navLang.startsWith('ja')) return 'ja';
  if (navLang.startsWith('zh')) return 'zh';
  if (navLang.startsWith('ko')) return 'ko';
  if (navLang.startsWith('hi')) return 'hi';
  if (navLang.startsWith('ta')) return 'ta';
  if (navLang.startsWith('ar')) return 'ar';
  if (navLang.startsWith('ru')) return 'ru';
  if (navLang.startsWith('de')) return 'de';
  if (navLang.startsWith('fr')) return 'fr';

  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    const detected = detectBrowserLanguage();
    setLanguageState(detected);
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('chacha_lang', lang);
    } catch {
      // ignore
    }
  };

  const currentLangInfo = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const dir = currentLangInfo.dir || 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const t = (key: keyof UIStrings): string => {
    const dict = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
    return dict[key] || UI_TRANSLATIONS.en[key] || key;
  };

  const getTreatmentInfo = (id: string, defaultName?: string, defaultDesc?: string, defaultTag?: string): TreatmentTranslation => {
    const trans = TREATMENT_TRANSLATIONS[id];
    if (trans) {
      if (trans[language]) return trans[language];
      if (trans.en) return trans.en;
    }
    return {
      name: defaultName || id,
      shortDescription: defaultDesc || '',
      tag: defaultTag
    };
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getTreatmentInfo, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
