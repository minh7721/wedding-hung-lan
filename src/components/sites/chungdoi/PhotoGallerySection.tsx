'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { id: 1, src: '/images/anh_cuoi_thao/PL_06859.JPG', alt: 'Wedding photo 1' },
  { id: 2, src: '/images/anh_cuoi_thao/PL_06884.JPG', alt: 'Wedding photo 2' },
  { id: 3, src: '/images/anh_cuoi_thao/PL_06945.JPG', alt: 'Wedding photo 3' },
  { id: 4, src: '/images/anh_cuoi_thao/PL_06955.JPG', alt: 'Wedding photo 4' },
  { id: 5, src: '/images/anh_cuoi_thao/PL_06963.JPG', alt: 'Wedding photo 5' },
  { id: 6, src: '/images/anh_cuoi_thao/PL_06974.JPG', alt: 'Wedding photo 6' },
  { id: 7, src: '/images/anh_cuoi_thao/PL_07029.JPG', alt: 'Wedding photo 7' },
];

export function PhotoGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Get visible slides: previous, current, next
  const getPreviousIndex = () => (currentIndex - 1 + photos.length) % photos.length;
  const getNextIndex = () => (currentIndex + 1) % photos.length;

  return (
    <section className="relative z-10 px-6 py-16">
      {/* Section title */}
      <h2
        className="uppercase text-center text-xl font-bold mb-12 tracking-wide"
        style={{ color: '#511419', fontFamily: 'Times New Roman, serif' }}
      >
        Album Ảnh
      </h2>

      {/* Carousel container */}
      <div className="max-w-[900px] mx-auto">
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          {/* Previous slide - left side, tilted */}
          <div
            className="absolute left-0 md:left-[10%] w-[120px] md:w-[200px] h-[280px] md:h-[400px] cursor-pointer carousel-slide slide-left"
            style={{
              transform: 'perspective(800px) rotateY(15deg) scale(0.85)',
              opacity: 0.5,
              zIndex: 1,
            }}
            onClick={goToPrevious}
          >
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <img
                src={photos[getPreviousIndex()].src}
                alt={photos[getPreviousIndex()].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Current slide - center, prominent */}
          <div
            key={currentIndex}
            className="relative w-[180px] md:w-[320px] h-[320px] md:h-[480px] carousel-slide"
            style={{
              transform: 'scale(1)',
              opacity: 1,
              zIndex: 10,
            }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl animate-photo-fade">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Next slide - right side, tilted */}
          <div
            className="absolute right-0 md:right-[10%] w-[120px] md:w-[200px] h-[280px] md:h-[400px] cursor-pointer carousel-slide slide-right"
            style={{
              transform: 'perspective(800px) rotateY(-15deg) scale(0.85)',
              opacity: 0.5,
              zIndex: 1,
            }}
            onClick={goToNext}
          >
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <img
                src={photos[getNextIndex()].src}
                alt={photos[getNextIndex()].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 z-20 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white transition-all shadow-lg"
            style={{ color: '#511419' }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 z-20 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white transition-all shadow-lg"
            style={{ color: '#511419' }}
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: '#511419',
                opacity: currentIndex === idx ? 1 : 0.3,
                transform: currentIndex === idx ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.3s ease-in-out',
              }}
              aria-label={`Go to photo ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes photo-fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-in-left {
          from {
            transform: perspective(800px) rotateY(25deg) scale(0.75);
            opacity: 0.3;
          }
          to {
            transform: perspective(800px) rotateY(15deg) scale(0.85);
            opacity: 0.5;
          }
        }

        @keyframes slide-in-right {
          from {
            transform: perspective(800px) rotateY(-25deg) scale(0.75);
            opacity: 0.3;
          }
          to {
            transform: perspective(800px) rotateY(-15deg) scale(0.85);
            opacity: 0.5;
          }
        }

        .carousel-slide {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform-origin: center;
        }

        .animate-photo-fade {
          animation: photo-fade-in 0.7s cubic-bezier(0.23, 1, 0.320, 1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .slide-left {
          animation: slide-in-left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .slide-right {
          animation: slide-in-right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
}
