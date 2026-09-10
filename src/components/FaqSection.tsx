import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/reviews';
import type { Branch } from '../data/branches';
import './FaqSection.css';

interface FaqSectionProps {
  activeBranch: Branch;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ activeBranch }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Got Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle center-sub">
            Everything you need to know about your spa experience, payment options, and visiting our branches.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-accordion">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">
                      <HelpCircle size={18} className="faq-icon" />
                      {item.question}
                    </span>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-help-box">
            <h3>Still have questions?</h3>
            <p>Our concierge team at {activeBranch.shortName} is available 10 AM to late evening to help you customize your treatment.</p>
            <a
              href={activeBranch.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp faq-wa-btn"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
