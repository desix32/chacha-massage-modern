import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { BRANCHES } from '../data/branches';
import type { Branch } from '../data/branches';
import { TREATMENTS } from '../data/treatments';
import type { Treatment } from '../data/treatments';
import { useLanguage } from '../context/LanguageContext';
import { PaymentBadges } from './PaymentBadges';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranch: Branch;
  initialTreatment?: Treatment | null;
  initialDuration?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialBranch,
  initialTreatment,
  initialDuration = 60
}) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(initialBranch.id);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    initialTreatment ? initialTreatment.id : TREATMENTS[0].id
  );
  const [selectedDuration, setSelectedDuration] = useState<number>(initialDuration);
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [pressureLevel, setPressureLevel] = useState<string>('Medium');
  const [bookingDate, setBookingDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [bookingTime, setBookingTime] = useState<string>('14:00');
  const [guestName, setGuestName] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Sync props when opened with a specific treatment
  useEffect(() => {
    if (initialBranch) setSelectedBranchId(initialBranch.id);
    if (initialTreatment) setSelectedTreatmentId(initialTreatment.id);
    if (initialDuration) setSelectedDuration(initialDuration);
    setIsSuccess(false);
  }, [initialBranch, initialTreatment, initialDuration, isOpen]);

  if (!isOpen) return null;

  const currentBranch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];
  const currentTreatment = TREATMENTS.find(t => t.id === selectedTreatmentId) || TREATMENTS[0];
  const currentDurationObj = currentTreatment.durations.find(d => d.minutes === selectedDuration) || currentTreatment.durations[0];
  const totalPriceTHB = currentDurationObj.priceTHB * guestsCount;

  // Build WhatsApp pre-filled message
  const generateWhatsAppMessage = () => {
    const lines = [
      `*Chacha Massage Reservation Request*`,
      `📍 *Branch:* ${currentBranch.name}`,
      `💆 *Therapy:* ${currentTreatment.name}`,
      `⏱️ *Duration:* ${selectedDuration} Minutes`,
      `👥 *Guests:* ${guestsCount} Person${guestsCount > 1 ? 's' : ''}`,
      `📅 *Date:* ${bookingDate}`,
      `⏰ *Preferred Time:* ${bookingTime}`,
      `💪 *Pressure:* ${pressureLevel}`,
      guestName ? `👤 *Guest Name:* ${guestName}` : '',
      specialNotes ? `📝 *Notes:* ${specialNotes}` : '',
      `💰 *Estimated Total:* THB ${totalPriceTHB.toLocaleString()}`
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    const waUrl = `https://wa.me/${currentBranch.phoneRaw.replace('+', '')}?text=${encoded}`;
    window.open(waUrl, '_blank');
    setIsSuccess(true);
  };

  const { t, getTreatmentInfo } = useLanguage();

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {isSuccess ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} className="success-check-icon" />
            </div>
            <h2>Reservation Inquiry Sent!</h2>
            <p>
              Your booking request for <strong>{currentBranch.name}</strong> was created.
              Our concierge will confirm your room within a few minutes.
            </p>
            <div className="success-summary-box">
              <div><strong>Treatment:</strong> {getTreatmentInfo(currentTreatment.id).name} ({selectedDuration} {t('mins')})</div>
              <div><strong>Date & Time:</strong> {bookingDate} at {bookingTime}</div>
              <div><strong>Guests:</strong> {guestsCount}</div>
              <div><strong>Total:</strong> THB {totalPriceTHB.toLocaleString()} (Pay at branch)</div>
            </div>
            <button type="button" className="btn btn-primary close-success-btn" onClick={onClose}>
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleWhatsAppSubmit}>
            <div className="modal-header">
              <div className="section-tag">{t('nav_book')}</div>
              <h2 className="modal-title">{t('booking_title')}</h2>
              <p className="modal-desc">
                {t('booking_subtitle')}
              </p>
            </div>

            <div className="form-body">
              {/* Branch Selector */}
              <div className="form-group">
                <label className="form-label">{t('step_branch')}</label>
                <div className="branch-pills-row">
                  {BRANCHES.map(b => (
                    <button
                      key={b.id}
                      type="button"
                      className={`branch-pill ${selectedBranchId === b.id ? 'active' : ''}`}
                      onClick={() => setSelectedBranchId(b.id)}
                    >
                      <span>{b.shortName}</span>
                      <small>{b.bts.split('(')[0].trim()}</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Treatment Selector */}
              <div className="form-group">
                <label htmlFor="treatment-select" className="form-label">{t('step_therapy')}</label>
                <select
                  id="treatment-select"
                  className="form-select"
                  value={selectedTreatmentId}
                  onChange={e => {
                    setSelectedTreatmentId(e.target.value);
                    // Reset duration to first available
                    const t = TREATMENTS.find(item => item.id === e.target.value);
                    if (t) setSelectedDuration(t.durations[0].minutes);
                  }}
                >
                  {TREATMENTS.map(treat => (
                    <option key={treat.id} value={treat.id}>
                      {getTreatmentInfo(treat.id).name} (from THB {treat.durations[0].priceTHB})
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Pills */}
              <div className="form-group">
                <label className="form-label">{t('step_duration')}</label>
                <div className="duration-options">
                  {currentTreatment.durations.map(dur => (
                    <button
                      key={dur.minutes}
                      type="button"
                      className={`duration-opt-btn ${selectedDuration === dur.minutes ? 'active' : ''}`}
                      onClick={() => setSelectedDuration(dur.minutes)}
                    >
                      <Clock size={14} />
                      <span className="dur-text">{dur.minutes} {t('mins')}</span>
                      <span className="dur-price">THB {dur.priceTHB.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="booking-date" className="form-label">
                    <Calendar size={14} /> {t('step_datetime')}
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    className="form-input"
                    value={bookingDate}
                    onChange={e => setBookingDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-time" className="form-label">
                    <Clock size={14} /> Time
                  </label>
                  <select
                    id="booking-time"
                    className="form-select"
                    value={bookingTime}
                    onChange={e => setBookingTime(e.target.value)}
                  >
                    {[
                      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '14:00', 
                      '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', 
                      '21:00', '22:00', '22:30', '23:00'
                    ].map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number of Guests & Pressure */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <Users size={14} /> {t('step_guests')}
                  </label>
                  <div className="guests-toggle">
                    {[
                      { count: 1, label: t('guest_1') },
                      { count: 2, label: t('guest_2') },
                      { count: 3, label: t('guest_group') }
                    ].map(g => (
                      <button
                        key={g.count}
                        type="button"
                        className={`guest-opt-btn ${guestsCount === g.count ? 'active' : ''}`}
                        onClick={() => setGuestsCount(g.count)}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t('step_pressure')}</label>
                  <div className="pressure-toggle">
                    {[
                      { id: 'Soft', label: t('pressure_soft') },
                      { id: 'Medium', label: t('pressure_medium') },
                      { id: 'Strong', label: t('pressure_strong') }
                    ].map(p => (
                      <button
                        key={p.id}
                        type="button"
                        className={`pressure-btn ${pressureLevel === p.id ? 'active' : ''}`}
                        onClick={() => setPressureLevel(p.id)}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="form-group">
                <label htmlFor="guest-name" className="form-label">Your Name (Optional)</label>
                <input
                  id="guest-name"
                  type="text"
                  placeholder="e.g. John Smith"
                  className="form-input"
                  value={guestName}
                  onChange={e => setGuestName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="special-notes" className="form-label">Special Requests (Optional)</label>
                <input
                  id="special-notes"
                  type="text"
                  placeholder="e.g. Focus on neck & shoulders, quiet room"
                  className="form-input"
                  value={specialNotes}
                  onChange={e => setSpecialNotes(e.target.value)}
                />
              </div>

              {/* Live Price Summary Bar */}
              <div className="modal-total-bar">
                <div>
                  <span className="total-label">{t('price_for')} ({guestsCount} person):</span>
                  <div className="total-amount">
                    <span>THB {totalPriceTHB.toLocaleString()}</span>
                    <small>({guestsCount} x {selectedDuration} {t('mins')})</small>
                  </div>
                </div>
                <div className="no-prepayment-badge">
                  <span>{t('net_fees')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <button type="submit" className="btn btn-whatsapp modal-submit-wa">
                  <MessageCircle size={20} />
                  <span>{t('whatsapp_confirm_btn')}</span>
                </button>

                <a
                  href={`tel:${currentBranch.phoneRaw}`}
                  className="btn btn-outline modal-call-btn"
                >
                  <Phone size={18} />
                  <span>Call {currentBranch.shortName}</span>
                </a>
              </div>

              {/* Accepted Payment Badges */}
              <PaymentBadges compact />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
