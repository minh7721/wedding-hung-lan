'use client';

import { Home, Calendar, Heart } from 'lucide-react';

export function MobileNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#ECE4D8]/95 backdrop-blur-lg border-t border-[#511419]/20 pb-safe z-50 lg:hidden">
      <div className="flex justify-around items-center h-14 max-w-md mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors text-[#511419]"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-inter font-medium">Trang chủ</span>
        </button>

        <button
          onClick={() => scrollToSection('event')}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors text-[#511419]/60 active:text-[#511419]"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-inter font-medium">Sự kiện</span>
        </button>

        <button
          onClick={() => scrollToSection('rsvp')}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors text-[#511419]/60 active:text-[#511419]"
        >
          <Heart className="w-5 h-5" />
          <span className="text-[10px] font-inter font-medium">RSVP</span>
        </button>
      </div>
    </nav>
  );
}
