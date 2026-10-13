export function SaveTheDateSection() {
  return (
    <section id="main-content" className="relative z-10 mx-auto w-[88%] max-w-[420px] md:max-w-[560px] py-12">
      {/* Decorative frame with couple photo */}
      <div className="relative">
        {/* Envelope-style decorative frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#F5F1E8' }}>
          {/* Top floral decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-40 z-10">
            <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
              {/* Burgundy florals */}
              <circle cx="90" cy="30" r="18" fill="#6B1C23" opacity="0.8" />
              <circle cx="70" cy="20" r="14" fill="#8B2429" opacity="0.7" />
              <circle cx="80" cy="45" r="12" fill="#6B1C23" opacity="0.75" />
              <path d="M60 50 L40 60 L30 70" stroke="#8B6F47" strokeWidth="2" fill="none" />
              <ellipse cx="35" cy="65" rx="4" ry="7" fill="#D4AF37" opacity="0.6" />
            </svg>
          </div>

          {/* Hero photo */}
          <div className="relative w-full aspect-[3/4]">
            <img
              src="/images/anh_cuoi_thao/PL_06859.JPG"
              alt="Wedding Photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom floral decoration */}
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-40 z-10">
            <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
              {/* Burgundy florals (mirrored) */}
              <circle cx="30" cy="90" r="18" fill="#6B1C23" opacity="0.8" />
              <circle cx="50" cy="100" r="14" fill="#8B2429" opacity="0.7" />
              <circle cx="40" cy="75" r="12" fill="#6B1C23" opacity="0.75" />
              <path d="M60 70 L80 60 L90 50" stroke="#8B6F47" strokeWidth="2" fill="none" />
              <ellipse cx="85" cy="55" rx="4" ry="7" fill="#D4AF37" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Save the Date text overlay */}
        <div className="text-center mt-8">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#8B6F47' }}>
            Save The Date
          </p>

          <h2 className="font-viaoda text-4xl mb-2" style={{ color: '#6B1C23' }}>
            Hoàng Long
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-px w-12" style={{ backgroundColor: '#6B1C23', opacity: 0.3 }} />
            <span className="text-2xl" style={{ color: '#6B1C23' }}>&</span>
            <div className="h-px w-12" style={{ backgroundColor: '#6B1C23', opacity: 0.3 }} />
          </div>

          <h2 className="font-viaoda text-4xl" style={{ color: '#6B1C23' }}>
            Bảo Ngọc
          </h2>
        </div>
      </div>
    </section>
  );
}
