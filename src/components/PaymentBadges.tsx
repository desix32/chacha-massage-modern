import React from 'react';
import { CreditCard, QrCode, Banknote, ShieldCheck } from 'lucide-react';
import './PaymentBadges.css';

interface PaymentBadgesProps {
  className?: string;
  compact?: boolean;
}

const RupayIcon: React.FC = () => (
  <svg width="20" height="13" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rupay-svg-icon" aria-label="RuPay Logo">
    {/* RuPay Orange Stripe */}
    <path d="M5 16L12 2H7L0 16H5Z" fill="#F47920" />
    {/* RuPay Cyan Stripe */}
    <path d="M13 16L20 2H15L8 16H13Z" fill="#0079C1" />
    {/* RuPay Green Stripe */}
    <path d="M21 16L28 2H23L16 16H21Z" fill="#00A651" />
  </svg>
);

export const PaymentBadges: React.FC<PaymentBadgesProps> = ({ className = '', compact = false }) => {
  return (
    <div className={`payment-badges-wrapper ${compact ? 'compact' : ''} ${className}`}>
      <div className="payment-badges-header">
        <ShieldCheck size={16} className="payment-shield-icon" />
        <span className="payment-title">Accepted Payment Methods &amp; Zero Surcharge</span>
      </div>

      <div className="payment-badges-grid">
        {/* PromptPay / Thai QR */}
        <div className="payment-badge-pill badge-promptpay" title="PromptPay Thai QR Payment">
          <QrCode size={15} />
          <span className="badge-text"><strong>PromptPay</strong> / Thai QR</span>
        </div>

        {/* RuPay & UPI */}
        <div className="payment-badge-pill badge-rupay" title="RuPay &amp; UPI (India) Accepted">
          <RupayIcon />
          <span className="badge-text"><strong>RuPay</strong> / UPI</span>
        </div>

        {/* Alipay */}
        <div className="payment-badge-pill badge-alipay" title="Alipay 支付宝">
          <span className="badge-icon-custom alipay-icon">支</span>
          <span className="badge-text"><strong>Alipay</strong> 支付宝</span>
        </div>

        {/* WeChat Pay */}
        <div className="payment-badge-pill badge-wechat" title="WeChat Pay 微信支付">
          <span className="badge-icon-custom wechat-icon">微</span>
          <span className="badge-text"><strong>WeChat Pay</strong> 微信支付</span>
        </div>

        {/* Credit & Debit Cards */}
        <div className="payment-badge-pill badge-cards" title="Visa, Mastercard, JCB Accepted">
          <CreditCard size={15} />
          <span className="badge-text"><strong>Visa / MC</strong> / JCB</span>
        </div>

        {/* Cash */}
        <div className="payment-badge-pill badge-cash" title="Cash Accepted in Thai Baht (THB)">
          <Banknote size={15} />
          <span className="badge-text"><strong>Cash (THB)</strong></span>
        </div>
      </div>

      <div className="payment-sub-note">
        <span>✨ All rates are NET. Zero credit card surcharge, no hidden taxes.</span>
      </div>
    </div>
  );
};
