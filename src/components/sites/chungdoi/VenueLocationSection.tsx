'use client';

import { MapPin, Navigation } from 'lucide-react';

export function VenueLocationSection() {
  const address = 'Vật lại, Ba Vì, Hà Nội';
  const googleMapsUrl = 'https://www.google.com/maps?q=21%C2%B013%2732.3%22N+105%C2%B025%2743.5%22E';

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
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start justify-center gap-2 text-sm mb-4 group transition-opacity hover:opacity-80"
              style={{ color: '#8B6F47' }}
            >
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#511419' }} />
              <p className="text-base font-medium underline-offset-4 group-hover:underline" style={{ color: '#511419' }}>
                {address}
              </p>
            </a>
          </div>

          {/* Google Maps embed */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3719.156307328785!2d105.42616217526205!3d21.22564948047344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzMyLjMiTiAxMDXCsDI1JzQzLjUiRQ!5e0!3m2!1svi!2s!4v1792122526777!5m2!1svi!2s"
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
