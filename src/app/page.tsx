'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sites/chungdoi/HeroSection';
import { SaveTheDateSection } from '@/components/sites/chungdoi/SaveTheDateSection';
import { WeddingInfoCard } from '@/components/sites/chungdoi/WeddingInfoCard';
import { PhotoGallerySection } from '@/components/sites/chungdoi/PhotoGallerySection';
import { ReceptionDetailsCard } from '@/components/sites/chungdoi/ReceptionDetailsCard';
import { VenueLocationSection } from '@/components/sites/chungdoi/VenueLocationSection';
import { DressCodeSection } from '@/components/sites/chungdoi/DressCodeSection';
import { TimelineSection } from '@/components/sites/chungdoi/TimelineSection';
import { GuestbookSection } from '@/components/sites/chungdoi/GuestbookSection';
import { GiftBoxSection } from '@/components/sites/chungdoi/GiftBoxSection';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#ECE4D8' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 58C14.5 58 2 45.5 2 30S14.5 2 30 2s28 12.5 28 28-12.5 28-28 28z' fill='%23511419' fill-opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* Cover screen */}
      {!isOpen && <HeroSection onOpenInvitation={handleOpenInvitation} />}

      {/* Main content - shown after opening */}
      {isOpen && (
        <div className="relative z-10 animate-fade-in">
          <SaveTheDateSection />
          <WeddingInfoCard />
          <PhotoGallerySection />
          <ReceptionDetailsCard />
          <VenueLocationSection />
          <DressCodeSection />
          <TimelineSection />
          <GuestbookSection />
          <GiftBoxSection />
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
