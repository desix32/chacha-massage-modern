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

export const App: React.FC = () => {
  // State for active branch across the entire experience
  const [activeBranch, setActiveBranch] = useState<Branch>(BRANCHES[0]);

  // State for booking modal
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number>(60);

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
        onSelectBranch={setActiveBranch}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Main Experience */}
      <main>
        {/* Siam Zen Hero */}
        <Hero
          activeBranch={activeBranch}
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Treatment Menu with Dynamic Pricing & Durations */}
        <TreatmentMenu
          activeBranch={activeBranch}
          onSelectTreatment={handleSelectTreatment}
        />

        {/* 4 Sukhumvit Branches Interactive Explorer */}
        <BranchPicker
          activeBranch={activeBranch}
          onSelectBranch={setActiveBranch}
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
        onSelectBranch={setActiveBranch}
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
    </div>
  );
};

export default App;
