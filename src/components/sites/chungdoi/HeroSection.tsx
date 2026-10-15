'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  invitationText?: string;
  onOpenInvitation?: (e?: React.MouseEvent) => void;
  isOpening?: boolean;
}

// Subtle romantic floating hearts in the background
const BACKGROUND_HEARTS = [
  { top: '12%', left: '10%', size: 10, color: '#d48888', opacity: 0.25, duration: 7, delay: 0, rotate: -15 },
  { top: '24%', left: '31%', size: 8, color: '#a84c56', opacity: 0.22, duration: 8.5, delay: 1.2, rotate: 10 },
  { top: '38%', left: '26%', size: 12, color: '#6e1d27', opacity: 0.35, duration: 9, delay: 2.5, rotate: -12 },
  { top: '53%', left: '9%', size: 11, color: '#d9a39f', opacity: 0.3, duration: 9, delay: 3, rotate: -25 },
  { top: '64%', left: '19%', size: 9, color: '#e8bebe', opacity: 0.28, duration: 7.8, delay: 1.8, rotate: -8 },
  { top: '69%', left: '17%', size: 13, color: '#f3d3cf', opacity: 0.35, duration: 7.5, delay: 0.5, rotate: 15 },
  { top: '92%', left: '26%', size: 10, color: '#caa27e', opacity: 0.32, duration: 9.5, delay: 4, rotate: 20 },
  { top: '17%', right: '29%', size: 9, color: '#caa27e', opacity: 0.28, duration: 8.2, delay: 1, rotate: 30 },
  { top: '42%', right: '17%', size: 12, color: '#caa27e', opacity: 0.38, duration: 7.2, delay: 2.2, rotate: -20 },
  { top: '58%', right: '30%', size: 10, color: '#caa27e', opacity: 0.3, duration: 8.6, delay: 3.5, rotate: 12 },
];

export function HeroSection({
  groomName = 'Minh Hùng',
  brideName = 'Hương Lan',
  date = '25 tháng 10, 2026',
  invitationText = 'Thân Mời',
  onOpenInvitation,
  isOpening = false,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-10 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #460f19 0%, #340a12 55%, #220408 100%)',
      }}
    >
      {/* Floating subtle romantic hearts in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {BACKGROUND_HEARTS.map((h, i) => (
          <div
            key={i}
            className="absolute animate-gentle-float"
            style={{
              top: h.top,
              left: h.left,
              right: h.right,
              width: `${h.size}px`,
              height: `${h.size}px`,
              color: h.color,
              opacity: h.opacity,
              transform: `rotate(${h.rotate}deg)`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
            }}
          >
            <Heart fill="currentColor" stroke="none" className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* Main invitation card */}
      <div
        className={`relative z-10 w-full max-w-[390px] sm:max-w-[580px] md:max-w-[620px] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 ${
          isOpening ? 'animate-card-opening' : 'animate-card-fade-in'
        }`}
        style={{
          background: 'linear-gradient(175deg, #FCF9F3 0%, #FAF5EE 55%, #F4ECE0 100%)',
          boxShadow: isOpening
            ? '0 0 80px rgba(212, 175, 55, 0.45), 0 30px 80px -10px rgba(66, 13, 22, 0.6), inset 0 0 40px rgba(212, 175, 55, 0.25)'
            : '0 25px 60px -12px rgba(0, 0, 0, 0.75), 0 12px 28px -8px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.7)',
        }}
      >
        {/* Left floral bouquet decoration */}
        <div className="absolute -left-5 sm:-left-3 md:left-0 top-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-44 h-[94%] sm:h-[96%] pointer-events-none select-none z-10 flex items-center">
          <Image
            src="/sites/chungdoi/images/flower2-decoration.webp"
            alt="Họa tiết hoa thiệp cưới"
            width={466}
            height={1000}
            priority
            className="w-full h-full object-contain object-left drop-shadow-[2px_6px_14px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* Right floral bouquet decoration (mirrored) */}
        <div className="absolute -right-5 sm:-right-3 md:right-0 top-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-44 h-[94%] sm:h-[96%] pointer-events-none select-none z-10 flex items-center">
          <Image
            src="/sites/chungdoi/images/flower2-decoration.webp"
            alt="Họa tiết hoa thiệp cưới"
            width={466}
            height={1000}
            priority
            className="w-full h-full object-contain object-left scale-x-[-1] drop-shadow-[-2px_6px_14px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* Card inner content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 sm:px-16 py-8 sm:py-10 md:py-12">
          {/* Top Heart Medallion */}
          <div
            className={`w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-[0_4px_14px_rgba(66,13,22,0.35)] ring-4 ring-[#420d16]/10 transition-all duration-500 hover:scale-105 ${
              isOpening ? 'scale-110 shadow-[0_0_24px_rgba(212,175,55,0.7)] ring-[#d4af37]/40' : ''
            }`}
            style={{ backgroundColor: '#420d16' }}
          >
            <Heart
              className={`w-5 h-5 sm:w-6 sm:h-6 text-white fill-white transition-all duration-300 ${
                isOpening ? 'animate-heart-pulse text-[#ffd700] fill-[#ffd700]' : ''
              }`}
            />
          </div>

          {/* Couple Names */}
          <div className="font-cormorant text-[#3e0d16] flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-[34px] font-normal leading-tight tracking-[0.02em]">
              {groomName}
            </h1>
            <span className="text-base sm:text-lg text-[#3e0d16]/75 italic my-0.5">
              &
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-normal leading-tight tracking-[0.02em]">
              {brideName}
            </h2>
          </div>

          {/* Delicate Ornamental Botanical Flourish Divider */}
          <div className="flex items-center justify-center my-2 sm:my-3">
            <svg
              width="130"
              height="16"
              viewBox="0 0 130 16"
              fill="none"
              className="text-[#3e0d16]/55"
              aria-hidden="true"
            >
              {/* Left tapering horizontal rule */}
              <path
                d="M12 8H48"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                opacity="0.65"
              />
              {/* Left floral curve */}
              <path
                d="M48 8C52 8 54 5 57 7.5C58.5 8.8 57 10.5 54 9.5"
                stroke="currentColor"
                strokeWidth="0.7"
                strokeLinecap="round"
                fill="none"
              />
              {/* Central bud / heart motif */}
              <path
                d="M65 3.5C63.5 3.5 62 4.8 62 6.5C62 8.8 65 11 65 11C65 11 68 8.8 68 6.5C68 4.8 66.5 3.5 65 3.5Z"
                fill="currentColor"
              />
              {/* Right floral curve */}
              <path
                d="M82 8C78 8 76 5 73 7.5C71.5 8.8 73 10.5 76 9.5"
                stroke="currentColor"
                strokeWidth="0.7"
                strokeLinecap="round"
                fill="none"
              />
              {/* Right tapering horizontal rule */}
              <path
                d="M82 8H118"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                opacity="0.65"
              />
            </svg>
          </div>

          {/* Wedding Date */}
          <p className="font-cormorant text-sm sm:text-[15px] font-normal tracking-wide text-[#6b353d]">
            {date}
          </p>

          {/* Invitation text */}
          <p className="font-cormorant text-xs sm:text-sm font-medium tracking-[0.1em] text-[#6b353d] mt-2.5 sm:mt-3 mb-5 sm:mb-6">
            {invitationText}
          </p>

          {/* Open invitation button */}
          <button
            type="button"
            onClick={onOpenInvitation}
            disabled={isOpening}
            className={`group relative inline-flex items-center justify-center px-8 sm:px-11 py-2.5 sm:py-3 rounded-full font-cormorant text-sm sm:text-[16px] font-medium tracking-wider text-[#FAF5EE] shadow-[0_4px_18px_rgba(66,13,22,0.38)] hover:shadow-[0_8px_28px_rgba(66,13,22,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden ${
              isOpening
                ? 'scale-105 ring-4 ring-[#ffd700]/50 shadow-[0_0_30px_rgba(212,175,55,0.6)] cursor-default'
                : ''
            }`}
            style={{ backgroundColor: '#420d16' }}
            aria-label="Mở thiệp cưới"
          >
            {/* Shimmer light sweep across button */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <span className="relative z-10 flex items-center gap-2">
              <Heart
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                  isOpening
                    ? 'text-[#ffd700] fill-[#ffd700] animate-ping'
                    : 'text-[#e8bebe] fill-[#e8bebe] group-hover:scale-125'
                }`}
              />
              <span className="tracking-widest">
                {isOpening ? 'Đang mở thiệp...' : 'Mở thiệp'}
              </span>
              <Heart
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                  isOpening
                    ? 'text-[#ffd700] fill-[#ffd700] animate-ping'
                    : 'text-[#e8bebe] fill-[#e8bebe] group-hover:scale-125'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(4deg);
          }
        }
        @keyframes cardFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes cardOpening {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          40% {
            opacity: 1;
            transform: scale(1.02) translateY(-4px);
          }
          100% {
            opacity: 0;
            transform: scale(1.06) translateY(-16px);
            filter: blur(6px);
          }
        }
        @keyframes heartPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
        }
        .animate-gentle-float {
          animation: gentleFloat 8s ease-in-out infinite;
        }
        .animate-card-fade-in {
          animation: cardFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-card-opening {
          animation: cardOpening 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-heart-pulse {
          animation: heartPulse 0.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
