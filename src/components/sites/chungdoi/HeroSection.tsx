'use client';

import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

export function HeroSection({ onOpenInvitation }: HeroSectionProps) {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden" style={{ backgroundColor: '#511419' }}>
      {/* Floating hearts background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-3 h-3 text-[#DED9D7]/30">
          <Heart fill="currentColor" className="w-full h-full animate-float" />
        </div>
        <div className="absolute top-[70%] right-[20%] w-4 h-4 text-[#DED9D7]/20">
          <Heart fill="currentColor" className="w-full h-full animate-float-delayed" />
        </div>
        <div className="absolute bottom-[20%] left-[25%] w-3 h-3 text-[#DED9D7]/25">
          <Heart fill="currentColor" className="w-full h-full" />
        </div>
        <div className="absolute top-[40%] right-[10%] w-3 h-3 text-[#DED9D7]/20">
          <Heart fill="currentColor" className="w-full h-full animate-float" />
        </div>
      </div>

      {/* Main invitation card */}
      <div className="relative w-full max-w-[342px] rounded-3xl p-8 pt-12 pb-10" style={{ backgroundColor: '#ECE4D8' }}>
        {/* Floral decoration - top left corner */}
        <div className="absolute top-4 left-4 w-20 h-20">
          <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            {/* Burgundy roses and branches */}
            <circle cx="20" cy="20" r="12" fill="#511419" opacity="0.9" />
            <circle cx="18" cy="22" r="8" fill="#6B2429" opacity="0.8" />
            <circle cx="30" cy="32" r="10" fill="#511419" opacity="0.85" />
            <path d="M35 35 L50 45 L55 50" stroke="#8B7355" strokeWidth="1.5" fill="none" />
            <path d="M20 20 L30 25 L35 30" stroke="#8B7355" strokeWidth="1.5" fill="none" />
            <ellipse cx="52" cy="48" rx="3" ry="5" fill="#A89968" opacity="0.7" />
            <ellipse cx="56" cy="52" rx="2.5" ry="4" fill="#C4B998" opacity="0.6" />
          </svg>
        </div>

        {/* Floral decoration - bottom right corner */}
        <div className="absolute bottom-4 right-4 w-20 h-20">
          <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            {/* Burgundy roses and branches (mirrored) */}
            <circle cx="60" cy="60" r="12" fill="#511419" opacity="0.9" />
            <circle cx="62" cy="58" r="8" fill="#6B2429" opacity="0.8" />
            <circle cx="50" cy="48" r="10" fill="#511419" opacity="0.85" />
            <path d="M45 45 L30 35 L25 30" stroke="#8B7355" strokeWidth="1.5" fill="none" />
            <path d="M60 60 L50 55 L45 50" stroke="#8B7355" strokeWidth="1.5" fill="none" />
            <ellipse cx="28" cy="32" rx="3" ry="5" fill="#A89968" opacity="0.7" />
            <ellipse cx="24" cy="28" rx="2.5" ry="4" fill="#C4B998" opacity="0.6" />
          </svg>
        </div>

        {/* Heart icon circle */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#511419' }}>
          <Heart className="w-7 h-7 text-white" fill="white" />
        </div>

        {/* Card content */}
        <div className="relative z-10 text-center">
          {/* Names */}
          <h1 className="font-viaoda text-[32px] leading-[38px]" style={{ color: '#511419' }}>
            Hoàng Long
            <br />
            <span className="text-[20px]">&</span>
            <br />
            Bảo Ngọc
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-px w-14" style={{ backgroundColor: '#511419', opacity: 0.3 }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#511419', opacity: 0.5 }} />
            <div className="h-px w-14" style={{ backgroundColor: '#511419', opacity: 0.3 }} />
          </div>

          {/* Date */}
          <p className="font-inter text-sm mt-2" style={{ color: '#6b4423' }}>
            3 tháng 1, 2026
          </p>

          {/* Invitation text */}
          <p className="font-inter text-sm mt-4 mb-6" style={{ color: '#6b4423' }}>
            Thân Mời
          </p>

          {/* Open invitation button */}
          <button
            onClick={onOpenInvitation}
            className="px-6 py-2 rounded-full font-inter text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: '#511419', color: '#ECE4D8' }}
          >
            Mở thiệp
          </button>
        </div>
      </div>

      {/* Messenger button - floating bottom right */}
      <a
        href="https://m.me/your-messenger-id"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center z-50 shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#FF006E' }}
        aria-label="Chat on Messenger"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M12,2C6.36,2 2,6.13 2,11.7C2,14.61 3.19,17.14 5.14,18.87C5.3,19 5.4,19.22 5.41,19.44L5.46,21.22C5.5,21.79 6.07,22.16 6.59,21.93L8.57,21.06C8.74,21 8.93,20.97 9.1,21C10,21.27 11,21.4 12,21.4C17.64,21.4 22,17.27 22,11.7C22,6.13 17.64,2 12,2M18,9.46L15.07,14.13C14.6,14.86 13.6,15.05 12.9,14.5L10.56,12.77C10.35,12.61 10.05,12.61 9.84,12.77L6.68,15.17C6.26,15.5 5.71,15 6,14.54L8.93,9.87C9.4,9.14 10.4,8.95 11.1,9.5L13.44,11.23C13.65,11.39 13.95,11.39 14.16,11.23L17.32,8.83C17.74,8.5 18.29,9 18,9.46Z" />
        </svg>
      </a>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}
