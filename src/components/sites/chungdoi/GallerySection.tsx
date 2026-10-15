'use client';

import { useState } from 'react';

const gallery = [
  '/images/anh_cuoi_hung_lan/optimized/SM_02608_1.webp',
  '/images/anh_cuoi_hung_lan/optimized/IMG_9126.webp',
  '/images/anh_cuoi_hung_lan/optimized/SM_02854_1.webp',
  '/images/anh_cuoi_hung_lan/optimized/SM_02642_1.webp',
  '/images/anh_cuoi_hung_lan/optimized/SM_03507_1.webp',
  '/images/anh_cuoi_hung_lan/optimized/Untitled-1.webp',
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-[#ECE4D8]">
      <div className="max-w-md mx-auto">
        <h2 className="font-viaoda text-[43px] leading-[60px] text-center text-[#511419] mb-12">
          Album ảnh
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#ECE4D8] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
