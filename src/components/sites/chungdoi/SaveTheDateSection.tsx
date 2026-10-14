'use client';

import { useState, useEffect } from 'react';
import { Maximize2, X, Sparkles, Image as ImageIcon } from 'lucide-react';

interface SaveTheDateSectionProps {
  initialPhoto?: string;
}

const AVAILABLE_PHOTOS = [
  {
    id: 'thao-1',
    label: 'Ảnh cưới cô dâu chú rể',
    src: '/images/anh_cuoi_thao/PL_06859_optimized.webp',
  },
  {
    id: 'demo-couple',
    label: 'Ảnh mẫu từ thiết kế (Demo)',
    src: '/sites/chungdoi/images/hero-couple.webp',
  },
  {
    id: 'thao-2',
    label: 'Ảnh cưới đen trắng',
    src: '/images/anh_cuoi_thao/PL_06884_optimized.webp',
  },
];

export function SaveTheDateSection({ initialPhoto }: SaveTheDateSectionProps) {
  const [currentPhoto, setCurrentPhoto] = useState(
    initialPhoto || AVAILABLE_PHOTOS[0].src
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleTogglePhoto = () => {
    const nextIdx = (photoIndex + 1) % AVAILABLE_PHOTOS.length;
    setPhotoIndex(nextIdx);
    setCurrentPhoto(AVAILABLE_PHOTOS[nextIdx].src);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="main-content"
      className="relative z-10 flex flex-col items-center overflow-x-clip px-6 pt-12 md:pt-16 pb-14 text-center select-none"
    >
      {/* Castle Architectural Watermark Background */}
      <img
        src="/sites/chungdoi/images/castle-background.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute max-w-none object-contain opacity-[0.11] left-1/2 top-[22%] w-[165%] md:w-[130%] -translate-x-1/2 select-none"
      />

      {/* Top Title: SAVE THE DATE */}
      <p
        className="relative z-10 whitespace-pre-line text-[15px] uppercase md:text-[18px] font-semibold tracking-[0.24em] transition-all duration-300"
        style={{
          fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
          color: 'rgb(89, 3, 16)',
        }}
      >
        Save The Date
      </p>

      {/* Envelope Interactive Composition */}
      <div className="relative z-10 mt-20 md:mt-24 w-[84%] max-w-[330px] md:max-w-[420px]">
        <div className="relative aspect-[333/384]">
          {/* Layer 1: Envelope Background & Lace Trim (Back) */}
          <img
            src="/sites/chungdoi/images/envelope-background.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 w-full h-full object-contain select-none"
          />

          {/* Layer 2: Floating Polaroid Photo (Middle) */}
          <div
            className="absolute left-[33%] top-[-2%] z-20 w-[64%]"
            style={{
              animation:
                'envelopeSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards, drFloat 6.5s ease-in-out 0.9s infinite normal none running',
              willChange: 'transform',
            }}
          >
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="group aspect-[221/309] rotate-[12deg] border-[6px] md:border-[8px] border-white bg-white shadow-[0_12px_28px_rgba(0,0,0,0.24)] rounded-[2px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-[9deg] hover:shadow-[0_16px_36px_rgba(0,0,0,0.32)] active:scale-95"
              title="Bấm để xem ảnh phóng to"
            >
              <img
                src={currentPhoto}
                alt="Ảnh cưới cô dâu chú rể"
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Zoom Badge */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="p-2.5 rounded-full bg-white/90 text-[#511419] shadow-lg backdrop-blur-xs transform transition-transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Layer 3: Lush Flower Bouquet Decoration (Left Accent) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute block -left-[2%] -top-[12%] z-[25] w-[42%] select-none"
          >
            <span
              className="block"
              style={{
                animation:
                  'drFloat 5s ease-in-out 0.2s infinite normal none running',
                willChange: 'transform',
              }}
            >
              <img
                src="/sites/chungdoi/images/flower2-decoration.webp"
                alt=""
                className="block w-full max-w-none object-contain drop-shadow-[3px_6px_8px_rgba(0,0,0,0.35)] -rotate-[17deg]"
              />
            </span>
          </span>

          {/* Layer 4: Envelope Cover Flaps with Golden Heart Wax Seal (Front) */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-full select-none">
            <img
              src="/sites/chungdoi/images/envelope-cover.webp"
              alt=""
              aria-hidden="true"
              className="w-full max-w-none drop-shadow-[0_14px_28px_rgba(81,20,25,0.22)]"
            />

            {/* Subtle Golden Glow / Shimmer on the Golden Heart Wax Seal */}
            <div
              className="absolute left-1/2 top-[51%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full pointer-events-none"
              style={{
                animation: 'sealShine 3.2s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Small Subtle Photo Switcher Button */}
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={handleTogglePhoto}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-medium text-[#511419]/70 hover:text-[#511419] bg-white/60 hover:bg-white/90 border border-[#511419]/15 shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
            title="Bấm để đổi góc ảnh khác"
          >
            <ImageIcon className="w-3 h-3 text-[#511419]" />
            <span>Đổi ảnh ({photoIndex + 1}/{AVAILABLE_PHOTOS.length})</span>
          </button>
        </div>
      </div>

      {/* Couple Names Section with Luxury Watermark & */}
      <div className="relative z-10 mt-12 md:mt-16 flex flex-col items-center gap-[18px] md:gap-[22px]">
        <p
          className="text-[clamp(38px,11vw,46px)] leading-none md:text-[58px]"
          style={{
            fontFamily: '"Viaoda Libre", "The Nautigal", cursive',
            color: 'rgb(81, 20, 25)',
          }}
        >
          Minh Hùng
        </p>

        {/* Watermark Script Ampersand */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[37%] -translate-y-1/2 translate-x-[0px] text-[92px] leading-none md:text-[120px] select-none"
          style={{
            fontFamily: '"The Nautigal", cursive',
            color: 'rgba(81, 20, 25, 0.15)',
          }}
        >
          &
        </span>

        <p
          className="text-[clamp(38px,11vw,46px)] leading-none md:text-[58px]"
          style={{
            fontFamily: '"Viaoda Libre", "The Nautigal", cursive',
            color: 'rgb(81, 20, 25)',
          }}
        >
          Hương Lan
        </p>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between w-full max-w-4xl mx-auto z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white/80 font-serif text-sm tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{AVAILABLE_PHOTOS[photoIndex].label}</span>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              title="Đóng (Esc)"
              aria-label="Đóng"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Lightbox Main Image */}
          <div
            className="relative flex-1 w-full max-w-4xl mx-auto flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[78vh] max-w-full flex items-center justify-center">
              <img
                src={currentPhoto}
                alt="Ảnh cưới phóng to"
                className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
              />
            </div>
          </div>

          {/* Lightbox Footer Switcher */}
          <div
            className="w-full max-w-md mx-auto z-20 py-2 flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {AVAILABLE_PHOTOS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setPhotoIndex(idx);
                  setCurrentPhoto(item.src);
                }}
                className={`relative w-12 h-16 rounded-md overflow-hidden transition-all duration-200 cursor-pointer ${
                  photoIndex === idx
                    ? 'ring-2 ring-white scale-105 opacity-100 shadow-md'
                    : 'opacity-40 hover:opacity-80 scale-95'
                }`}
                title={item.label}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
