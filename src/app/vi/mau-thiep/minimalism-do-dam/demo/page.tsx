'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sites/chungdoi/HeroSection';
import { StorySection } from '@/components/sites/chungdoi/StorySection';
import { EventSection } from '@/components/sites/chungdoi/EventSection';
import { GallerySection } from '@/components/sites/chungdoi/GallerySection';
import { RSVPSection } from '@/components/sites/chungdoi/RSVPSection';
import { MobileNav } from '@/components/sites/chungdoi/MobileNav';

export default function ChungDoiWeddingPage() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <HeroSection onOpenInvitation={handleOpenInvitation} />
      {isInvitationOpen && (
        <>
          <StorySection />
          <EventSection />
          <GallerySection />
          <RSVPSection />
        </>
      )}
      <MobileNav />

      {/* Footer */}
      <footer className="py-12 text-center text-[#511419]/60 font-inter text-sm pb-24 lg:pb-12">
        <p>Made with ❤️ for our special day</p>
        <p className="mt-2">© 2024 Chungdoi.com</p>
      </footer>
    </main>
  );
}
