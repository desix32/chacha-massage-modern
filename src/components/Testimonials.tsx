import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Guest Experiences</div>
          <h2 className="section-title">Loved by Travelers & Locals Alike</h2>
          <p className="section-subtitle center-sub">
            Over 20+ years of authentic bodywork excellence. Read honest reviews from our international guests.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS.map(rev => (
            <div className="review-card" key={rev.id}>
              <div className="review-header">
                <div className="stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon" fill="currentColor" />
                  ))}
                </div>
                <Quote size={24} className="quote-watermark" />
              </div>

              <p className="review-comment">"{rev.comment}"</p>

              <div className="review-meta">
                <div className="review-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div className="review-author-info">
                  <div className="author-name-row">
                    <strong>{rev.name}</strong>
                    <span title="Verified Guest" style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <CheckCircle size={14} className="verified-icon" />
                    </span>
                  </div>
                  <span className="author-location">{rev.country}</span>
                  <span className="treatment-tag">{rev.treatment} • {rev.branch}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="ratings-summary-bar">
          <div className="rating-stat">
            <span className="stat-number">4.9 / 5.0</span>
            <span className="stat-label">Google Maps Average</span>
          </div>
          <div className="divider-line" />
          <div className="rating-stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="divider-line" />
          <div className="rating-stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Licensed Therapists</span>
          </div>
          <div className="divider-line" />
          <div className="rating-stat">
            <span className="stat-number">50k+</span>
            <span className="stat-label">Happy Guests Served</span>
          </div>
        </div>
      </div>
    </section>
  );
};
