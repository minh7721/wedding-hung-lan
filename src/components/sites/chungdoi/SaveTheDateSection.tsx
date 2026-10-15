'use client';

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { Maximize2, X, Sparkles, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

interface SaveTheDateSectionProps {
  initialPhoto?: string;
}

const AVAILABLE_PHOTOS = [
  {
    id: 'hung-lan-sweet',
    label: 'Khoảnh khắc ngọt ngào',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02608_1.webp',
  },
  {
    id: 'hung-lan-photostrip',
    label: 'Dải phim kỷ niệm (3 khoảnh khắc)',
    src: '/images/anh_cuoi_hung_lan/optimized/Untitled-1.webp',
  },
  {
    id: 'hung-lan-ring',
    label: 'Nhẫn cưới hạnh phúc',
    src: '/images/anh_cuoi_hung_lan/optimized/IMG_9126.webp',
  },
  {
    id: 'hung-lan-formal',
    label: 'Lễ phục sang trọng',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02854_1.webp',
  },
  {
    id: 'hung-lan-aodai',
    label: 'Áo dài Song Hỷ',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_03507_1.webp',
  },
];

export function SaveTheDateSection({ initialPhoto }: SaveTheDateSectionProps) {
  const [currentPhoto, setCurrentPhoto] = useState(
    initialPhoto || AVAILABLE_PHOTOS[0].src
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const mounted = useMounted();
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handlePrevPhoto = useCallback(() => {
    setPhotoIndex((prev) => {
      const nextIdx = (prev - 1 + AVAILABLE_PHOTOS.length) % AVAILABLE_PHOTOS.length;
      setCurrentPhoto(AVAILABLE_PHOTOS[nextIdx].src);
      return nextIdx;
    });
  }, []);

  const handleNextPhoto = useCallback(() => {
    setPhotoIndex((prev) => {
      const nextIdx = (prev + 1) % AVAILABLE_PHOTOS.length;
      setCurrentPhoto(AVAILABLE_PHOTOS[nextIdx].src);
      return nextIdx;
    });
  }, []);

  const handleSelectPhoto = (idx: number) => {
    setPhotoIndex(idx);
    setCurrentPhoto(AVAILABLE_PHOTOS[idx].src);
  };

  const handleTogglePhoto = () => {
    handleNextPhoto();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNextPhoto();
    } else if (diff < -45) {
      handlePrevPhoto();
    }
    setTouchStartX(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isLightboxOpen, handlePrevPhoto, handleNextPhoto]);

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
                alt="Ảnh cưới Minh Hùng & Hương Lan"
                className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  currentPhoto.includes('Untitled-1') ? 'object-center' : 'object-[center_18%]'
                }`}
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

      {/* Fullscreen Lightbox Modal mounted via React Portal to document.body */}
      {mounted &&
        isLightboxOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Xem ảnh cưới phóng to"
            className="fixed inset-0 z-[99999] w-screen h-screen min-h-dvh bg-black/92 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none animate-fade-in"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Lightbox Header */}
            <div
              className="flex items-center justify-between w-full max-w-4xl mx-auto z-20 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white/90 font-serif text-sm sm:text-base tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="font-medium">{AVAILABLE_PHOTOS[photoIndex].label}</span>
                <span className="text-white/40 text-xs font-sans">
                  ({photoIndex + 1}/{AVAILABLE_PHOTOS.length})
                </span>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all cursor-pointer shadow-md backdrop-blur-sm"
                title="Đóng (Esc)"
                aria-label="Đóng"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Lightbox Main Image */}
            <div
              className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center min-h-0 my-2 touch-pan-y"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Prev Lightbox Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-1 sm:left-4 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm shadow-xl"
                aria-label="Ảnh trước"
                title="Ảnh trước (Phím mũi tên trái)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Lightbox Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-1 sm:right-4 z-30 p-2.5 sm:p-3.5 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm shadow-xl"
                aria-label="Ảnh tiếp theo"
                title="Ảnh tiếp theo (Phím mũi tên phải)"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="relative h-full w-full flex items-center justify-center p-2 sm:p-4">
                <img
                  key={AVAILABLE_PHOTOS[photoIndex].id}
                  src={AVAILABLE_PHOTOS[photoIndex].src}
                  alt={AVAILABLE_PHOTOS[photoIndex].label}
                  className="max-h-[72vh] sm:max-h-[78vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-300"
                />
              </div>
            </div>

            {/* Lightbox Footer Switcher */}
            <div
              className="w-full max-w-md mx-auto z-20 shrink-0 py-2 flex flex-col items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center gap-2.5">
                {AVAILABLE_PHOTOS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectPhoto(idx)}
                    className={`relative w-12 sm:w-14 h-16 sm:h-18 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
                      photoIndex === idx
                        ? 'ring-2 ring-amber-300 scale-105 opacity-100 shadow-lg'
                        : 'opacity-40 hover:opacity-80 scale-95 border border-white/20'
                    }`}
                    title={item.label}
                    aria-label={item.label}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="text-white/40 text-[11px] font-sans tracking-wide">
                Bấm ra ngoài hoặc phím Esc để đóng
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
