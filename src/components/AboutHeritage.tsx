import React from 'react';
import { Award, Leaf, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './AboutHeritage.css';

export const AboutHeritage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column with layered images */}
          <div className="about-images-col">
            <div className="about-main-img-wrap">
              <img
                src="./images/photoshoot/team-full-reception.jpg"
                alt="Chacha Massage Master Therapists & Concierge Team"
                className="about-main-img"
                loading="lazy"
              />
              <div className="about-experience-badge">
                <span className="exp-number">23+</span>
                <span className="exp-label">Years of Healing Arts in Bangkok</span>
              </div>
            </div>
            <div className="about-sub-img-wrap">
              <img
                src="./images/photoshoot/neon-sign-ambient.jpg"
                alt="Chacha Massage Bangkok Sanctuary Sign"
                className="about-sub-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-col">
            <div className="section-tag">{t('about_tag')}</div>
            <h2 className="section-title">{t('about_title')}</h2>
            <p className="about-lead">
              {t('about_desc_1')}
            </p>
            <p className="about-body">
              {t('about_desc_2')}
            </p>

            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <Award size={20} />
                </div>
                <div>
                  <strong>Wat Pho & Ministry Certified</strong>
                  <p>Every therapist undergoes rigorous certification in traditional orthopedics and acupressure.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <Leaf size={20} />
                </div>
                <div>
                  <strong>Pure Botanical Formulations</strong>
                  <p>100% natural cold-pressed coconut oil, sweet almond oil, and steamed lemongrass compresses.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong>Hygienic Private Suites</strong>
                  <p>Fresh organic cotton linens, sterilized equipment, and peaceful temperature-controlled rooms.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <strong>Respectful & Honest Care</strong>
                  <p>Transparent pricing, welcoming hospitality, and zero pressure for upsells or hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
