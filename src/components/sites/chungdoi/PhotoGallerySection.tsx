'use client';

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X, Play, Pause, Sparkles, Film, Heart } from 'lucide-react';

import { FeaturedMomentsCollage } from './FeaturedMomentsCollage';

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  title: string;
  caption?: string;
  objectPosition?: string;
}

export const photos: GalleryPhoto[] = [
  {
    id: 1,
    src: '/images/anh_cuoi_hung_lan/optimized/Untitled-1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Dải phim kỷ niệm 3 khoảnh khắc chung đôi',
    title: 'Dải Phim Kỷ Niệm',
    caption: '3 khoảnh khắc ngọt ngào dưới tấm voan cưới',
    objectPosition: 'center center',
  },
  {
    id: 2,
    src: '/images/anh_cuoi_hung_lan/optimized/IMG_9126.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Nhẫn cưới hạnh phúc',
    title: 'Nhẫn Cưới Hạnh Phúc',
    caption: 'Ngón tay đeo nhẫn, hẹn ước trăm năm',
    objectPosition: 'center 18%',
  },
  {
    id: 3,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02608_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Khoảnh khắc ngọt ngào bên nhau',
    title: 'Khoảnh Khắc Ngọt Ngào',
    caption: 'Ôm trọn yêu thương giữa thiên nhiên xanh ngát',
    objectPosition: 'center 20%',
  },
  {
    id: 4,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02854_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Lễ phục sang trọng bên rèm nhung đỏ',
    title: 'Lễ Phục Sang Trọng',
    caption: 'Suit trắng lịch lãm & váy cưới đuôi cá kiêu sa',
    objectPosition: 'center 15%',
  },
  {
    id: 5,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02642_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Điệu khiêu vũ tình yêu trên thảm cỏ',
    title: 'Điệu Khiêu Vũ Tình Yêu',
    caption: 'Xoay tròn trong vũ khúc hạnh phúc',
    objectPosition: 'center 22%',
  },
  {
    id: 6,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_03507_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Áo dài Song Hỷ cát tường',
    title: 'Song Hỷ Cát Tường',
    caption: 'Áo dài truyền thống rạng rỡ chữ Song Hỷ 囍',
    objectPosition: 'center 22%',
  },
  {
    id: 7,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02631_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Nụ hôn vầng trán dịu dàng',
    title: 'Nụ Hôn Vầng Trán',
    caption: 'Dịu dàng nâng niu từng phút giây',
    objectPosition: 'center 18%',
  },
  {
    id: 8,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02633_2.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Lời hẹn ước trọn đời',
    title: 'Lời Hẹn Ước Trọn Đời',
    caption: 'Love is such a powerful force...',
    objectPosition: 'center 20%',
  },
  {
    id: 9,
    src: '/images/anh_cuoi_hung_lan/optimized/IMG_9125.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Cùng bước chung đôi',
    title: 'Cùng Bước Chung Đôi',
    caption: 'Nắm tay em đi qua mọi thăng trầm',
    objectPosition: 'center 18%',
  },
  {
    id: 10,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02840.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Lời thề nguyện His & Her Vows',
    title: 'Lời Thề Nguyện (His & Her Vows)',
    caption: 'Sổ thề nguyện thắt nơ đỏ thiêng liêng',
    objectPosition: 'center 20%',
  },
  {
    id: 11,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_03579_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Nụ cười rạng rỡ cô dâu Hương Lan',
    title: 'Nàng Dâu Duyên Dáng',
    caption: 'Góc nghiêng kiều diễm bên quạt hoa đỏ',
    objectPosition: 'center 18%',
  },
  {
    id: 12,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02723.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Khoảnh khắc hồn nhiên cùng chiếc máy ảnh',
    title: 'Khoảnh Khắc Hồn Nhiên',
    caption: 'Nụ cười rạng rỡ khi cùng xem lại bức hình vừa chụp',
    objectPosition: 'center 20%',
  },
  {
    id: 13,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02795_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Nàng thơ kiều diễm trong tà voan trắng',
    title: 'Nàng Thơ Trong Nắng',
    caption: 'Tà voan cưới bồng bềnh phủ tràn thảm cỏ',
    objectPosition: 'center 22%',
  },
  {
    id: 14,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02908.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Nhiếp ảnh gia của riêng em',
    title: 'Nhiếp Ảnh Gia Của Em',
    caption: 'Ghi lại mọi khoảnh khắc lung linh nhất của em',
    objectPosition: 'center 22%',
  },
  {
    id: 15,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02959_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Bên nhau bình yên',
    title: 'Bên Nhau Bình Yên',
    caption: 'Ánh nhìn ấm áp thắp sáng mọi yêu thương',
    objectPosition: 'center 22%',
  },
  {
    id: 16,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02991.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Khăn voan e ấp dưới ánh đèn',
    title: 'Khăn Voan E Ấp',
    caption: 'Dưới ánh đèn sân khấu lung linh ngập tràn hạnh phúc',
    objectPosition: 'center 18%',
  },
  {
    id: 17,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_03461_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Áo dài trắng bên thư pháp Nhà Có Hỷ',
    title: 'Nhà Có Hỷ',
    caption: 'Áo dài lụa trắng bên thư pháp mừng đại hỷ',
    objectPosition: 'center 20%',
  },
  {
    id: 18,
    src: '/images/anh_cuoi_hung_lan/optimized/IMG_9147.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Pháo hoa giấy chào đón ngày trọng đại',
    title: 'Chào Đón Ngày Chung Đôi',
    caption: 'Cánh hoa giấy rơi rộn ràng trong tiếng cười hạnh phúc',
    objectPosition: 'center 20%',
  },
  {
    id: 19,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_03525_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Hân hoan ngày đại hỷ',
    title: 'Hân Hoan Ngày Đại Hỷ',
    caption: 'Mở rộng vòng tay đón chào tương lai rạng ngời',
    objectPosition: 'center 20%',
  },
  {
    id: 20,
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02730_1.webp',
    alt: 'Ảnh cưới Minh Hùng & Hương Lan - Ngọt ngào dưới tà voan cưới',
    title: 'Dưới Tà Voan Cưới',
    caption: 'Hạnh phúc đong đầy trong vòng tay yêu thương',
    objectPosition: 'center 25%',
  },
];

const AUTOPLAY_DURATION = 2000; // ms per slide

export function PhotoGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const mounted = useMounted();

  // Dragging & Swipe state
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const hasDragged = useRef(false);

  // Auto-advance progress
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Thumbnails ref for auto-scrolling
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation handlers with timer reset
  const resetTimer = useCallback(() => {
    setProgress(0);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    resetTimer();
  }, [resetTimer]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    resetTimer();
  }, [resetTimer]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    resetTimer();
  }, [resetTimer]);

  // Autoplay timer with progress bar
  useEffect(() => {
    if (!isPlaying || isHovered || isDragging || isLightboxOpen) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, isHovered, isDragging, isLightboxOpen, goToNext]);

  // Scroll active thumbnail inside its container only (without scrolling the page)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const container = thumbnailsRef.current;
    if (!container) return;
    const activeEl = container.children[currentIndex] as HTMLElement | undefined;
    if (activeEl) {
      const containerWidth = container.offsetWidth;
      const elLeft = activeEl.offsetLeft;
      const elWidth = activeEl.offsetWidth;
      const targetScrollLeft = elLeft - containerWidth / 2 + elWidth / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') setIsLightboxOpen(false);
        if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % photos.length);
        if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
        return;
      }
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goToNext, goToPrevious]);

  // Lightbox scroll lock
  useEffect(() => {
    if (isLightboxOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isLightboxOpen]);

  // Open / Close Lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    // sync current carousel position
    setCurrentIndex(lightboxIndex);
    resetTimer();
  };

  // Touch & Pointer Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragStartX.current = clientX;
    dragStartY.current = clientY;
    isHorizontalSwipe.current = null;
    hasDragged.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const deltaX = clientX - dragStartX.current;
    const deltaY = clientY - dragStartY.current;

    // Detect gesture direction
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          isHorizontalSwipe.current = true;
        } else {
          isHorizontalSwipe.current = false;
        }
      }
    }

    // Only drag horizontally if dominant
    if (isHorizontalSwipe.current === true) {
      if ('touches' in e) {
        // Prevent accidental vertical scroll during carousel swipe
        if (e.cancelable) e.preventDefault();
      }
      hasDragged.current = true;
      setDragOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = isMobile ? 35 : 50;
    if (dragOffset < -threshold) {
      goToNext();
    } else if (dragOffset > threshold) {
      goToPrevious();
    }

    setDragOffset(0);
    isHorizontalSwipe.current = null;

    // Small delay before clearing hasDragged to prevent click event triggering
    setTimeout(() => {
      hasDragged.current = false;
    }, 50);
  };

  // 3D Coverflow positioning calculation
  const getSlideStyle = (index: number) => {
    const total = photos.length;
    let offset = index - currentIndex;
    while (offset > total / 2) offset -= total;
    while (offset < -total / 2) offset += total;

    const xSpacing = isMobile ? 135 : 240;
    const zSpacing = isMobile ? 60 : 90;
    const rotAngle = isMobile ? 18 : 22;
    const stageWidth = isMobile ? 240 : 340;

    const dragProgress = isDragging ? dragOffset / stageWidth : 0;
    const effectiveOffset = offset + dragProgress;
    const absOffset = Math.abs(effectiveOffset);

    // Outside visible rendering bounds
    if (absOffset > 2.3) {
      return {
        transform: `translate(-50%, -50%) translate3d(${Math.sign(effectiveOffset || 1) * xSpacing * 2.8}px, 0, -260px) scale(0.6)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
        visibility: 'hidden' as const,
        transition: isDragging
          ? 'none'
          : 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 480ms ease, filter 480ms ease',
      };
    }

    let translateX = 0;
    let translateZ = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let filter = 'none';

    if (absOffset <= 1) {
      translateX = effectiveOffset * xSpacing;
      translateZ = -absOffset * zSpacing;
      rotateY = -effectiveOffset * rotAngle;
      scale = 1 - absOffset * 0.15;
      opacity = 1 - absOffset * 0.45;
      zIndex = Math.round(20 - absOffset * 10);
      if (absOffset > 0.05) {
        filter = `brightness(${1 - absOffset * 0.12})`;
      }
    } else {
      const extra = absOffset - 1;
      const sign = Math.sign(effectiveOffset);
      translateX = sign * (xSpacing + extra * (xSpacing * 0.75));
      translateZ = -zSpacing - extra * 120;
      rotateY = -sign * (rotAngle + extra * 8);
      scale = 0.85 - extra * 0.15;
      opacity = Math.max(0, 0.55 - extra * 0.55);
      zIndex = Math.max(1, Math.round(10 - extra * 6));
      filter = 'brightness(0.75)';
    }

    return {
      transform: `translate(-50%, -50%) translate3d(${translateX.toFixed(1)}px, 0, ${translateZ.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${scale.toFixed(3)})`,
      opacity: Number(opacity.toFixed(3)),
      filter,
      zIndex,
      pointerEvents: (absOffset < 0.6 ? 'auto' : absOffset <= 1.4 ? 'auto' : 'none') as 'auto' | 'none',
      visibility: opacity <= 0.01 ? ('hidden' as const) : ('visible' as const),
      transition: isDragging
        ? 'none'
        : 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms ease',
    };
  };

  const handleCardClick = (index: number) => {
    if (hasDragged.current) return;

    let offset = index - currentIndex;
    while (offset > photos.length / 2) offset -= photos.length;
    while (offset < -photos.length / 2) offset += photos.length;

    if (offset === 0) {
      openLightbox(index);
    } else if (offset > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 md:py-20 select-none">
      {/* Decorative Title Header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-8 sm:w-12 bg-[#511419]/30" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#511419]/70 font-sans font-medium">
            Kỷ Niệm Của Chúng Mình
          </span>
          <span className="h-px w-8 sm:w-12 bg-[#511419]/30" />
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold tracking-wide"
          style={{ color: '#511419', fontFamily: 'Times New Roman, serif' }}
        >
          Album Ảnh
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-[#6b4423]/75 italic max-w-sm mx-auto">
          Từng nụ cười, từng ánh mắt đong đầy yêu thương
        </p>
      </div>

      {/* Featured Editorial Collage Section (Inspired by d_template.jpg) */}
      <div className="mb-12 sm:mb-16 md:mb-18">
        <FeaturedMomentsCollage onPhotoClick={openLightbox} />
      </div>

      {/* Dedicated Photostrip Highlight Section: Dải Phim Hạnh Phúc (Untitled-1.jpeg) */}
      <div className="mb-14 sm:mb-18 md:mb-20 max-w-[580px] mx-auto px-2 sm:px-4">
        <div
          className="relative rounded-3xl sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-[#511419]/15 shadow-[0_22px_55px_-12px_rgba(81,20,25,0.18)] overflow-hidden text-center"
          style={{
            backgroundColor: '#FAF7F2',
            backgroundImage: 'url(/sites/chungdoi/images/paper-texture.webp)',
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px',
          }}
        >
          {/* Ambient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20 pointer-events-none" />

          {/* Section Badge */}
          <div className="relative z-10 inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#511419]/10 border border-[#511419]/15 text-[#511419] text-[11px] sm:text-xs font-serif tracking-[0.18em] uppercase mb-3 backdrop-blur-xs">
            <Film className="w-3.5 h-3.5 text-[#511419]" />
            <span className="font-medium">Khoảnh Khắc Kỷ Niệm • Photostrip</span>
          </div>

          {/* Title */}
          <h3
            className="relative z-10 text-2xl sm:text-3xl md:text-[32px] font-normal leading-tight tracking-[0.02em] text-[#511419] mb-2"
            style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
          >
            Dải Phim Hạnh Phúc
          </h3>

          <p className="relative z-10 text-xs sm:text-sm text-[#6b4423]/80 italic max-w-md mx-auto mb-6 leading-relaxed">
            Ba khoảnh khắc e ấp dưới tấm voan cưới dịu dàng, lưu giữ trọn vẹn từng cung bậc ngọt ngào và ánh mắt yêu thương của Minh Hùng & Hương Lan.
          </p>

          {/* The Vintage Filmstrip Photo Frame */}
          <div className="relative z-10 max-w-[340px] sm:max-w-[390px] mx-auto">
            {/* Top Golden Heart Seal Pin */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f7e7a9] to-[#aa8010] shadow-[0_4px_10px_rgba(81,20,25,0.35)] ring-2 ring-white flex items-center justify-center">
              <Heart className="w-4 h-4 text-[#511419] fill-[#511419]" />
            </div>

            {/* Clickable Photostrip Card */}
            <div
              onClick={() => openLightbox(0)}
              className="group relative rounded-2xl bg-white p-2.5 sm:p-3 pt-5 sm:pt-6 shadow-[0_16px_38px_rgba(81,20,25,0.18),0_4px_12px_rgba(0,0,0,0.08)] ring-1 ring-black/5 cursor-pointer transition-all duration-500 hover:shadow-[0_24px_50px_rgba(81,20,25,0.28)] hover:-translate-y-1.5 active:scale-[0.99]"
              title="Bấm để xem dải phim phóng to chi tiết"
            >
              {/* Photo Container preserving exact aspect ratio 1285/1800 (~0.714) */}
              <div className="relative w-full aspect-[1285/1800] rounded-xl overflow-hidden bg-[#220408]">
                <Image
                  src="/images/anh_cuoi_hung_lan/optimized/Untitled-1.webp"
                  alt="Dải phim kỷ niệm 3 khoảnh khắc cưới của Minh Hùng & Hương Lan"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, 420px"
                  className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />

                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transform duration-1000 transition-transform" />

                {/* Floating Zoom Action Badge */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 px-4 py-1.5 rounded-full bg-white/95 text-[#511419] text-xs font-serif font-medium shadow-lg backdrop-blur-xs flex items-center gap-1.5 whitespace-nowrap">
                  <Maximize2 className="w-3.5 h-3.5 text-[#511419]" />
                  <span>Phóng to xem trọn vẹn 3 ảnh</span>
                </div>
              </div>

              {/* Filmstrip Footer Label */}
              <div className="pt-3 pb-1 flex items-center justify-between px-2 text-[10px] sm:text-[11px] font-sans tracking-widest text-[#511419]/60 uppercase">
                <span>Hùng & Lan</span>
                <span className="font-serif italic capitalize text-[#511419]/80">Perfect Wedding Photo</span>
                <span>25 • 10 • 2026</span>
              </div>
            </div>
          </div>

          {/* Delicate Divider & Quote */}
          <div className="relative z-10 mt-6 pt-2 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-2 opacity-50">
              <span className="h-px w-6 sm:w-8 bg-[#511419]" />
              <Sparkles className="w-3 h-3 text-[#511419]" />
              <span className="h-px w-6 sm:w-8 bg-[#511419]" />
            </div>
            <p
              className="text-xs sm:text-sm italic tracking-wide"
              style={{ color: '#511419', fontFamily: 'Times New Roman, serif' }}
            >
              &ldquo;Từng khoảnh khắc trôi qua, tình yêu ta trao nhau càng thêm sâu đậm.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Full Carousel Section Header & Transition */}
      <div className="text-center mb-8 md:mb-10">
        <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 border border-[#511419]/15 backdrop-blur-sm shadow-2xs mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#511419] animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#511419] font-medium font-sans">
            Bộ Sưu Tập Trọn Vẹn ({photos.length} Khoảnh Khắc)
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#6b4423]/75 italic">
          Vuốt ngang hoặc chọn ảnh bên dưới để ngắm nhìn chi tiết
        </p>
      </div>

      {/* Main Carousel Wrapper */}
      <div
        className="max-w-[960px] mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (isDragging) handleTouchEnd();
        }}
      >
        {/* Top Control Bar: Counter + Autoplay Toggle */}
        <div className="flex items-center justify-between max-w-[340px] md:max-w-[420px] mx-auto mb-4 px-2">
          {/* Photo Counter Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#511419]/15 backdrop-blur-sm shadow-xs">
            <span className="text-xs font-serif font-bold text-[#511419]">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-[#511419]/40">/</span>
            <span className="text-xs font-serif text-[#511419]/60">
              {String(photos.length).padStart(2, '0')}
            </span>
          </div>

          {/* Autoplay Progress & Play/Pause Button */}
          <div className="flex items-center gap-2">
            {/* Progress line */}
            <div className="w-16 sm:w-24 h-1.5 rounded-full bg-[#511419]/15 overflow-hidden">
              <div
                className="h-full bg-[#511419] rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="p-1.5 rounded-full bg-white/70 hover:bg-white text-[#511419] border border-[#511419]/15 shadow-xs transition-transform hover:scale-110 active:scale-95"
              title={isPlaying ? 'Tạm dừng tự động chạy' : 'Tiếp tục tự động chạy'}
              aria-label={isPlaying ? 'Tạm dừng' : 'Tự động chạy'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          </div>
        </div>

        {/* 3D Stage Container */}
        <div
          className="relative h-[400px] sm:h-[460px] md:h-[530px] flex items-center justify-center overflow-hidden touch-pan-y"
          style={{
            perspective: '1100px',
            transformStyle: 'preserve-3d',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 sm:left-4 md:left-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ECE4D8]/90 hover:bg-white text-[#511419] shadow-[0_8px_20px_rgba(81,20,25,0.18)] border border-[#511419]/15 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm cursor-pointer"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-4 md:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ECE4D8]/90 hover:bg-white text-[#511419] shadow-[0_8px_20px_rgba(81,20,25,0.18)] border border-[#511419]/15 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm cursor-pointer"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* All Persistent 3D Slide Cards */}
          {photos.map((photo, idx) => {
            const style = getSlideStyle(idx);
            let offset = idx - currentIndex;
            while (offset > photos.length / 2) offset -= photos.length;
            while (offset < -photos.length / 2) offset += photos.length;
            const isCurrent = offset === 0;

            return (
              <div
                key={photo.id}
                onClick={() => handleCardClick(idx)}
                className="absolute left-1/2 top-1/2 w-[240px] sm:w-[280px] md:w-[340px] h-[340px] sm:h-[400px] md:h-[480px] will-change-transform select-none"
                style={{
                  ...style,
                  cursor: isCurrent ? 'pointer' : 'pointer',
                  transformOrigin: 'center center',
                }}
              >
                {/* Photo Frame with Shadow and Border */}
                <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(81,20,25,0.22)] bg-neutral-200 ring-1 ring-white/60">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 360px"
                    priority={Math.abs(offset) <= 1}
                    className="object-cover pointer-events-none select-none transition-transform duration-700 hover:scale-105"
                    style={{ objectPosition: photo.objectPosition || 'center 20%' }}
                  />

                  {/* Dim overlay for non-active side cards */}
                  <div
                    className="absolute inset-0 bg-[#511419]/25 transition-opacity duration-300 pointer-events-none"
                    style={{ opacity: isCurrent ? 0 : 0.4 }}
                  />

                  {/* Center Card Zoom Icon Badge */}
                  {isCurrent && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(idx);
                      }}
                      className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1.5 rounded-full bg-black/45 hover:bg-black/65 text-white text-[11px] font-sans flex items-center gap-1.5 backdrop-blur-md shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                      title="Phóng to xem chi tiết"
                      aria-label="Phóng to xem chi tiết"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Phóng to</span>
                    </button>
                  )}

                  {/* Soft Vignette and Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl shadow-[inset_0_0_20px_rgba(0,0,0,0.15)] pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe Hint for Mobile */}
        <p className="md:hidden text-center text-[11px] text-[#511419]/50 mt-2 font-sans italic">
          Vuốt trái / phải hoặc bấm vào ảnh để xem
        </p>

        {/* Thumbnail Preview Strip */}
        <div className="mt-6 md:mt-8">
          <div
            ref={thumbnailsRef}
            className="flex items-center justify-start md:justify-center gap-2 sm:gap-2.5 overflow-x-auto py-2 px-4 max-w-full scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((photo, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={photo.id}
                  onClick={() => goToSlide(idx)}
                  className={`relative shrink-0 w-12 sm:w-14 h-16 sm:h-20 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'ring-2 ring-[#511419] ring-offset-2 ring-offset-[#ECE4D8] scale-105 shadow-md opacity-100'
                      : 'opacity-40 hover:opacity-85 scale-95 hover:scale-100'
                  }`}
                  aria-label={`Chuyển đến ảnh ${idx + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="60px"
                    className="object-cover pointer-events-none"
                  />
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-[#511419]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Pagination Pill Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 bg-[#511419]'
                    : 'w-1.5 bg-[#511419]/30 hover:bg-[#511419]/60'
                }`}
                aria-label={`Chuyển đến ảnh ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {mounted &&
        isLightboxOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Xem ảnh bộ sưu tập phóng to"
            className="fixed inset-0 z-[99999] w-screen h-screen min-h-dvh bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in select-none"
            onClick={closeLightbox}
          >
            {/* Top Bar inside Lightbox */}
            <div
              className="flex items-center justify-between w-full max-w-5xl mx-auto z-20 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white/80 font-serif text-sm tracking-wider">
                Khoảnh khắc {lightboxIndex + 1} / {photos.length}
              </div>

              <button
                onClick={closeLightbox}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all cursor-pointer shadow-md backdrop-blur-sm"
                title="Đóng (Esc)"
                aria-label="Đóng"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Main Photo View in Lightbox */}
            <div
              className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center min-h-0 my-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Lightbox Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length)
                }
                className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm shadow-xl"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Lightbox Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev + 1) % photos.length)
                }
                className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm shadow-xl"
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image Container */}
              <div className="relative w-full h-[68vh] sm:h-[75vh] flex items-center justify-center">
                <Image
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  fill
                  sizes="(max-width: 768px) 95vw, 1200px"
                  className="object-contain rounded-xl shadow-2xl transition-all duration-300 animate-zoom-in"
                  priority
                />
              </div>
            </div>

            {/* Bottom Thumbnails inside Lightbox */}
            <div
              className="w-full max-w-3xl mx-auto z-20 shrink-0 overflow-x-auto py-2 no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center gap-2">
                {photos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative shrink-0 w-10 h-14 rounded-md overflow-hidden transition-all duration-200 cursor-pointer ${
                      lightboxIndex === idx
                        ? 'ring-2 ring-white scale-110 opacity-100'
                        : 'opacity-40 hover:opacity-80 scale-95'
                    }`}
                    aria-label={`Xem ảnh ${idx + 1}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="48px"
                      className="object-cover pointer-events-none"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes zoomIn {
          from {
            opacity: 0.6;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
