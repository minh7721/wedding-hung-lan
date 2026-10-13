'use client';

import { MapPin, Navigation } from 'lucide-react';

export function VenueLocationSection() {
  const address = 'Số 1 Châu Văn Liêm, Phường Ô Chợ Dừa, Quận Đống Đa, Hà Nội';
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const handleGetDirections = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative z-10 flex w-full flex-col items-center px-6 py-12">
      <div className="w-full max-w-[448px]">
        {/* Section title */}
        <h3
          className="uppercase text-center text-base md:text-lg mb-6 tracking-widest font-bold"
          style={{ color: '#511419', fontFamily: 'Times New Roman, serif', letterSpacing: '0.12em' }}
        >
          Tiệc cưới tổ chức tại
        </h3>

        {/* Venue card */}
        <div className="rounded-3xl p-6 md:p-8 shadow-xl" style={{ backgroundColor: '#F5F1E8' }}>
          <div className="text-center mb-6">
            <div className="flex items-start justify-center gap-2 text-sm mb-4" style={{ color: '#8B6F47' }}>
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#511419' }} />
              <p className="text-base font-medium" style={{ color: '#511419' }}>
                {address}
              </p>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=16`}
            />
          </div>

          {/* Directions button */}
          <button
            onClick={handleGetDirections}
            className="w-full px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#511419', color: '#ECE4D8' }}
          >
            <Navigation className="w-4 h-4" />
            Chỉ đường
          </button>
        </div>
      </div>
    </section>
  );
}
