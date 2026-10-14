'use client';

import { useState, useRef, useCallback } from 'react';
import { HeroSection } from '@/components/sites/chungdoi/HeroSection';
import { SaveTheDateSection } from '@/components/sites/chungdoi/SaveTheDateSection';
import { WeddingInfoCard } from '@/components/sites/chungdoi/WeddingInfoCard';
import { PhotoGallerySection } from '@/components/sites/chungdoi/PhotoGallerySection';
import { ReceptionDetailsCard } from '@/components/sites/chungdoi/ReceptionDetailsCard';
import { VenueLocationSection } from '@/components/sites/chungdoi/VenueLocationSection';
import { GuestbookSection } from '@/components/sites/chungdoi/GuestbookSection';
import { GiftBoxSection } from '@/components/sites/chungdoi/GiftBoxSection';
import { RisingHearts, RisingHeartsHandle } from '@/components/sites/chungdoi/RisingHearts';
import { FloatingMusicPlayer } from '@/components/sites/chungdoi/FloatingMusicPlayer';
import { triggerGrandCelebration } from '@/lib/celebration';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const risingHeartsRef = useRef<RisingHeartsHandle>(null);

  const handleOpenInvitation = useCallback(() => {
    if (isOpening || isOpen) return;

    // 1. Enter opening transition state
    setIsOpening(true);

    // 2. Play romantic wedding music immediately
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Audio playback failed or blocked:', error);
      });
    }

    // 3. Trigger immediate grand fireworks & confetti explosion from the card button
    triggerGrandCelebration(0.5, 0.62);

    // 4. Shoot first surge of romantic rising hearts upwards into the sky
    risingHeartsRef.current?.shoot(50, 62, 40);

    // 5. Staggered secondary surge of hearts as the card opens
    setTimeout(() => {
      risingHeartsRef.current?.shoot(50, 64, 25);
    }, 350);

    // 6. Smoothly reveal main invitation content at the peak of the celebration
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 720);
  }, [isOpening, isOpen]);

  // Re-trigger celebration when guest clicks the "Chúc mừng" button
  const handleReplayCelebration = useCallback(() => {
    triggerGrandCelebration(0.5, 0.5);
    risingHeartsRef.current?.shoot(50, 75, 35);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-clip" style={{ backgroundColor: '#ECE4D8' }}>
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 58C14.5 58 2 45.5 2 30S14.5 2 30 2s28 12.5 28 28-12.5 28-28 28z' fill='%23511419' fill-opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating upward romantic hearts particle engine */}
      <RisingHearts ref={risingHeartsRef} />

      {/* Floating Music & Celebration Controller */}
      <FloatingMusicPlayer
        audioRef={audioRef}
        onTriggerCelebration={handleReplayCelebration}
        isInvitationOpen={isOpen}
      />

      {/* Cover screen */}
      {!isOpen && (
        <HeroSection
          groomName="Minh Hùng"
          brideName="Hương Lan"
          date="25 tháng 10, 2026"
          invitationText="Thân Mời"
          onOpenInvitation={handleOpenInvitation}
          isOpening={isOpening}
        />
      )}

      {/* Main content - shown after opening */}
      {isOpen && (
        <div className="relative z-10 animate-fade-in">
          <SaveTheDateSection />
          <WeddingInfoCard />
          <PhotoGallerySection />
          <ReceptionDetailsCard />
          <VenueLocationSection />
          <GuestbookSection />
          <GiftBoxSection />
        </div>
      )}

      {/* Background music */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/ido-911.mp3" type="audio/mpeg" />
      </audio>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
