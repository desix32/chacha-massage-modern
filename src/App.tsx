import React, { useState } from 'react';
import { BRANCHES } from './data/branches';
import type { Branch } from './data/branches';
import type { Treatment } from './data/treatments';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TreatmentMenu } from './components/TreatmentMenu';
import { BranchPicker } from './components/BranchPicker';
import { AboutHeritage } from './components/AboutHeritage';
import { GalleryLightbox } from './components/GalleryLightbox';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileActionDock } from './components/MobileActionDock';
import { BookingModal } from './components/BookingModal';
import { WelcomeGateway } from './components/WelcomeGateway';

export const App: React.FC = () => {
  // Determine initial branch from URL params (?branch=soi13) or localStorage
  const [activeBranch, setActiveBranch] = useState<Branch>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const branchParam = params.get('branch');
      if (branchParam) {
        const found = BRANCHES.find(b => 
          b.id.toLowerCase() === branchParam.toLowerCase() || 
          b.id.replace('-', '').toLowerCase() === branchParam.replace('-', '').toLowerCase()
        );
        if (found) return found;
      }
      const saved = localStorage.getItem('chacha_selected_branch');
      if (saved) {
        const found = BRANCHES.find(b => b.id === saved);
        if (found) return found;
      }
    }
    return BRANCHES[0];
  });

  // Welcome Gateway opens on initial visit (or if ?gateway=1 is present)
  const [isGatewayOpen, setIsGatewayOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('gateway') === '1' || params.get('gateway') === 'true') {
        return true;
      }
      if (params.has('branch')) {
        return false;
      }
      const saved = localStorage.getItem('chacha_selected_branch');
      return !saved;
    }
    return false;
  });

  // State for booking modal
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number>(60);

  // Sync branch changes to localStorage
  const handleSelectBranch = (branch: Branch) => {
    setActiveBranch(branch);
    try {
      localStorage.setItem('chacha_selected_branch', branch.id);
    } catch {
      // ignore
    }
  };

  // Open booking modal with specific treatment & duration
  const handleSelectTreatment = (treatment: Treatment, duration: number) => {
    setSelectedTreatment(treatment);
    setSelectedDuration(duration);
    setIsBookingOpen(true);
  };

  // Open generic booking modal
  const handleOpenGeneralBooking = () => {
    setSelectedTreatment(null);
    setSelectedDuration(60);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const scrollToBranches = () => {
    const el = document.getElementById('branches');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="spa-app">
      {/* Top Header & Navigation */}
      <Navbar
        activeBranch={activeBranch}
        onSelectBranch={handleSelectBranch}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenGateway={() => setIsGatewayOpen(true)}
      />

      {/* Main Experience */}
      <main>
        {/* Siam Zen Hero */}
        <Hero
          activeBranch={activeBranch}
          onOpenBooking={handleOpenGeneralBooking}
          onOpenGateway={() => setIsGatewayOpen(true)}
        />

        {/* Treatment Menu with Dynamic Pricing & Durations */}
        <TreatmentMenu
          activeBranch={activeBranch}
          onSelectTreatment={handleSelectTreatment}
        />

        {/* 4 Sukhumvit Branches Interactive Explorer */}
        <BranchPicker
          activeBranch={activeBranch}
          onSelectBranch={handleSelectBranch}
          onBookNow={handleOpenGeneralBooking}
        />

        {/* Heritage & 23-Year Mastery */}
        <AboutHeritage />

        {/* Full Ambiance Photo Gallery & Lightbox */}
        <GalleryLightbox />

        {/* Customer Reviews & Google Ratings */}
        <Testimonials />

        {/* FAQs */}
        <FaqSection activeBranch={activeBranch} />
      </main>

      {/* Footer */}
      <Footer
        onSelectBranch={handleSelectBranch}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Mobile Sticky Quick Action Dock (Visible only on mobile/tablet) */}
      <MobileActionDock
        activeBranch={activeBranch}
        onOpenBooking={handleOpenGeneralBooking}
        onScrollToBranches={scrollToBranches}
      />

      {/* Universal Booking & WhatsApp Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialBranch={activeBranch}
        initialTreatment={selectedTreatment}
        initialDuration={selectedDuration}
      />

      {/* Welcome Gateway Modal / Overlay */}
      <WelcomeGateway
        isOpen={isGatewayOpen}
        onClose={() => setIsGatewayOpen(false)}
        activeBranch={activeBranch}
        onSelectBranch={handleSelectBranch}
      />
    </div>
  );
};

export default App;
