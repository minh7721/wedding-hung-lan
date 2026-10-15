'use client';

import Image from 'next/image';
import { Maximize2, Heart, Sparkles } from 'lucide-react';

export interface FeaturedPhotoItem {
  id: string;
  src: string;
  alt: string;
  galleryIndex: number;
  caption: string;
  tag?: string;
  objectPosition?: string;
}

export const FEATURED_COLLAGE_ITEMS: {
  topLeft: FeaturedPhotoItem;
  middle: FeaturedPhotoItem;
  heroTall: FeaturedPhotoItem;
  bottomLeft: FeaturedPhotoItem;
  bottomRight: FeaturedPhotoItem;
} = {
  topLeft: {
    id: 'top-left',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02723.webp',
    alt: 'Minh Hùng & Hương Lan - Khoảnh khắc hồn nhiên cùng chiếc máy ảnh',
    galleryIndex: 11,
    caption: 'Khoảnh khắc hồn nhiên',
    tag: 'Rạng rỡ',
    objectPosition: 'center 18%',
  },
  middle: {
    id: 'middle',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02631_1.webp',
    alt: 'Minh Hùng & Hương Lan - Nụ hôn vầng trán dịu dàng',
    galleryIndex: 6,
    caption: 'Nụ hôn vầng trán',
    tag: 'Dịu dàng',
    objectPosition: 'center 20%',
  },
  heroTall: {
    id: 'hero-tall',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02608_1.webp',
    alt: 'Minh Hùng & Hương Lan - Khoảnh khắc ngọt ngào ôm trọn yêu thương',
    galleryIndex: 2,
    caption: 'Ôm trọn yêu thương',
    tag: 'Khoảnh khắc ngọt ngào',
    objectPosition: 'center 18%',
  },
  bottomLeft: {
    id: 'bottom-left',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02642_1.webp',
    alt: 'Minh Hùng & Hương Lan - Điệu khiêu vũ tình yêu',
    galleryIndex: 4,
    caption: 'Khiêu vũ dưới trời xanh',
    tag: 'Hạnh phúc',
    objectPosition: 'center 22%',
  },
  bottomRight: {
    id: 'bottom-right',
    src: '/images/anh_cuoi_hung_lan/optimized/SM_02840.webp',
    alt: 'Minh Hùng & Hương Lan - Lời thề nguyện His & Her Vows',
    galleryIndex: 9,
    caption: 'Lời thề trăm năm',
    tag: 'Thề nguyện',
    objectPosition: 'center 24%',
  },
};

interface FeaturedMomentsCollageProps {
  onPhotoClick?: (galleryIndex: number) => void;
  className?: string;
}

export function FeaturedMomentsCollage({
  onPhotoClick,
  className = '',
}: FeaturedMomentsCollageProps) {
  const handleCardClick = (galleryIndex: number) => {
    if (onPhotoClick) {
      onPhotoClick(galleryIndex);
    }
  };

  const { topLeft, middle, heroTall, bottomLeft, bottomRight } = FEATURED_COLLAGE_ITEMS;

  return (
    <div className={`relative max-w-[680px] lg:max-w-[760px] mx-auto select-none ${className}`}>
      {/* Editorial Textured Canvas Container */}
      <div
        className="relative rounded-3xl md:rounded-[36px] p-4 sm:p-6 md:p-8 border border-[#511419]/15 shadow-[0_25px_60px_-15px_rgba(81,20,25,0.12),0_10px_25px_-5px_rgba(81,20,25,0.06)] ring-1 ring-white/90 overflow-hidden"
        style={{
          backgroundColor: '#FAF7F2',
          backgroundImage: 'url(/sites/chungdoi/images/paper-texture.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
        }}
      >
        {/* Soft Ambient Inner Vignette & Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#511419]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#511419]/5 blur-3xl pointer-events-none" />

        {/* 1. TOP MONOGRAM HEADER (LO + Story with Heart Baseline) */}
        <div className="relative w-full mb-3 sm:mb-4">
          <div className="relative w-full aspect-[942/396] max-h-[170px] sm:max-h-[210px] md:max-h-[240px]">
            <Image
              src="/sites/chungdoi/images/love-story-lo.webp"
              alt="LOVE Story - Minh Hùng & Hương Lan"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 680px, 760px"
              className="object-contain object-center drop-shadow-[0_2px_4px_rgba(81,20,25,0.1)] transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* 2. UPPER ASYMMETRIC BLOCK (3 Columns) */}
        <div className="flex gap-2 sm:gap-3 md:gap-3.5 items-stretch relative z-10">
          {/* Column 1: Top Left Photo + Romantic Quote (width: 35.6%) */}
          <div className="w-[35.6%] flex flex-col justify-between shrink-0">
            {/* Top Left Photo */}
            <div
              onClick={() => handleCardClick(topLeft.galleryIndex)}
              className="group relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(81,20,25,0.12)] cursor-pointer ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-[#ECE4D8]"
              title="Bấm để xem ảnh phóng to"
            >
              <Image
                src={topLeft.src}
                alt={topLeft.alt}
                fill
                priority
                sizes="(max-width: 640px) 140px, 260px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ objectPosition: topLeft.objectPosition }}
              />

              {/* Shimmer light sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transform duration-1000 transition-transform" />

              {/* Hover Badge */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 p-1.5 rounded-full bg-black/55 text-white backdrop-blur-xs">
                <Maximize2 className="w-3 h-3" />
              </div>

              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/40 pointer-events-none" />
            </div>

            {/* Editorial Quote Box */}
            <div className="mt-auto pt-3 pb-1 sm:pt-4 sm:pb-2 text-center flex flex-col items-center justify-center">
              <p
                className="font-serif italic text-xs sm:text-sm md:text-base leading-snug tracking-wide"
                style={{ color: '#511419', fontFamily: 'Times New Roman, serif' }}
              >
                Có công mài sắt<br />có ngày nên Duyên
              </p>
              <div className="mt-2 sm:mt-2.5 flex items-center justify-center gap-1.5 opacity-60">
                <span className="h-px w-3 sm:w-4 bg-[#511419]" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#511419] font-sans font-medium">
                  H & L
                </span>
                <span className="h-px w-3 sm:w-4 bg-[#511419]" />
              </div>
            </div>
          </div>

          {/* Column 2: 'VE' Monogram + Middle Photo (width: 22%) */}
          <div className="w-[22%] flex flex-col justify-between shrink-0">
            {/* 'VE' Letters Image */}
            <div className="relative w-full aspect-[195/139] mb-1 sm:mb-2 flex items-center justify-center">
              <Image
                src="/sites/chungdoi/images/love-story-ve.webp"
                alt="VE Typography"
                fill
                priority
                sizes="(max-width: 640px) 80px, 160px"
                className="object-contain object-center drop-shadow-[0_2px_4px_rgba(81,20,25,0.12)]"
              />
            </div>

            {/* Middle Photo (Intimate Hand-Kissing Crop) */}
            <div
              onClick={() => handleCardClick(middle.galleryIndex)}
              className="group relative aspect-[3/4.2] sm:aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(81,20,25,0.12)] cursor-pointer ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-[#ECE4D8]"
              title="Bấm để xem ảnh phóng to"
            >
              <Image
                src={middle.src}
                alt={middle.alt}
                fill
                priority
                sizes="(max-width: 640px) 90px, 160px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ objectPosition: middle.objectPosition }}
              />

              {/* Shimmer light sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transform duration-1000 transition-transform" />

              {/* Hover Badge */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 p-1.5 rounded-full bg-black/55 text-white backdrop-blur-xs">
                <Maximize2 className="w-3 h-3" />
              </div>

              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/40 pointer-events-none" />
            </div>

            {/* Balanced bottom spacing / romantic sparkle icon */}
            <div className="mt-auto py-2 sm:py-3 flex items-center justify-center opacity-40">
              <Sparkles className="w-3.5 h-3.5 text-[#511419]" />
            </div>
          </div>

          {/* Column 3: Tall Hero Photo (Kiss on temple with Champagne) (width: 41%) */}
          <div className="w-[41%] flex flex-col shrink-0">
            <div
              onClick={() => handleCardClick(heroTall.galleryIndex)}
              className="group relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(81,20,25,0.16)] cursor-pointer ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-[#ECE4D8]"
              title="Bấm để xem ảnh phóng to"
            >
              <Image
                src={heroTall.src}
                alt={heroTall.alt}
                fill
                priority
                sizes="(max-width: 640px) 160px, 320px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: heroTall.objectPosition }}
              />

              {/* Soft Gradient Overlay at bottom for romance */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#511419]/45 via-transparent to-transparent pointer-events-none" />

              {/* Corner Pill Tag */}
              <div className="absolute top-2.5 right-2.5 z-10 px-2 sm:px-2.5 py-1 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-sans flex items-center gap-1 shadow-xs transition-colors">
                <Heart className="w-2.5 h-2.5 fill-red-400 text-red-400" />
                <span className="hidden sm:inline">Khoảnh khắc ngọt ngào</span>
                <span className="sm:hidden">Yêu thương</span>
              </div>

              {/* Hover Zoom Prompt */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white/95 text-[#511419] text-[11px] font-serif font-medium shadow-md backdrop-blur-xs">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Xem chi tiết ảnh</span>
              </div>

              {/* Shimmer light sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transform duration-1000 transition-transform" />

              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 3. LOWER ASYMMETRIC BLOCK (2 Columns, Aligned at Bottom) */}
        <div className="flex gap-2 sm:gap-3 md:gap-3.5 items-end mt-2.5 sm:mt-3 md:mt-3.5 relative z-10">
          {/* Column 1: Prominent Couple Portrait (Tuxedo & Veil) (width: 58%) */}
          <div className="w-[58%] shrink-0">
            <div
              onClick={() => handleCardClick(bottomLeft.galleryIndex)}
              className="group relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(81,20,25,0.14)] cursor-pointer ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-[#ECE4D8]"
              title="Bấm để xem ảnh phóng to"
            >
              <Image
                src={bottomLeft.src}
                alt={bottomLeft.alt}
                fill
                priority
                sizes="(max-width: 640px) 240px, 440px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                style={{ objectPosition: bottomLeft.objectPosition }}
              />

              {/* Soft bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#511419]/40 to-transparent pointer-events-none" />

              {/* Caption Tag */}
              <div className="absolute bottom-2.5 left-2.5 z-10 px-2.5 py-1 rounded-md bg-white/85 backdrop-blur-xs text-[#511419] text-[10px] sm:text-xs font-serif italic shadow-xs">
                Minh Hùng & Hương Lan
              </div>

              {/* Hover Badge */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 p-1.5 rounded-full bg-black/55 text-white backdrop-blur-xs">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Shimmer light sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transform duration-1000 transition-transform" />

              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/40 pointer-events-none" />
            </div>
          </div>

          {/* Column 2: Romantic Stamp + Red Double Happiness Backdrop (width: 41%) */}
          <div className="w-[41%] flex flex-col justify-end shrink-0">
            {/* Romantic Stamp Badge in Negative Space */}
            <div className="mb-2 sm:mb-3 flex flex-col items-center justify-center text-center p-2 sm:p-2.5 rounded-xl bg-white/75 border border-[#511419]/12 backdrop-blur-xs shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-[#511419] fill-[#511419]/25 mb-1" />
              <span
                className="text-[10px] sm:text-xs font-serif italic text-[#511419]"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                Hạnh Phúc Bắt Đầu
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-widest text-[#511419]/60 font-sans uppercase">
                25 • 10 • 2026
              </span>
            </div>

            {/* Bottom Right Photo */}
            <div
              onClick={() => handleCardClick(bottomRight.galleryIndex)}
              className="group relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(81,20,25,0.14)] cursor-pointer ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-[#ECE4D8]"
              title="Bấm để xem ảnh phóng to"
            >
              <Image
                src={bottomRight.src}
                alt={bottomRight.alt}
                fill
                priority
                sizes="(max-width: 640px) 160px, 320px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ objectPosition: bottomRight.objectPosition }}
              />

              {/* Shimmer light sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transform duration-1000 transition-transform" />

              {/* Hover Badge */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 p-1.5 rounded-full bg-black/55 text-white backdrop-blur-xs">
                <Maximize2 className="w-3 h-3" />
              </div>

              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
