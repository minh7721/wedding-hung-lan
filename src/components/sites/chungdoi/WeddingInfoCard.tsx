export function WeddingInfoCard() {
  return (
    <section className="relative z-10 mx-auto w-[88%] max-w-[448px] my-8">
      {/* Large burgundy card with wedding information */}
      <div className="relative rounded-3xl p-6 md:p-10 shadow-xl" style={{ backgroundColor: '#511419' }}>
        {/* Decorative corner florals - left */}
        <div className="absolute top-6 left-6 w-20 h-28 opacity-40">
          <svg viewBox="0 0 96 128" fill="none">
            {/* Burgundy roses */}
            <circle cx="20" cy="25" r="14" fill="#8B2834" opacity="0.8" />
            <circle cx="18" cy="28" r="10" fill="#A83845" opacity="0.7" />
            <circle cx="32" cy="40" r="12" fill="#8B2834" opacity="0.75" />
            {/* Stems and leaves */}
            <path d="M35 42 L48 58 L55 70" stroke="#7A5C48" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M20 25 L28 35 L35 42" stroke="#7A5C48" strokeWidth="2" fill="none" opacity="0.6" />
            {/* Cream flowers */}
            <circle cx="50" cy="60" r="8" fill="#E8DCC8" opacity="0.5" />
            <circle cx="58" cy="72" r="6" fill="#D4C4A8" opacity="0.4" />
            {/* Leaves */}
            <ellipse cx="52" cy="65" rx="4" ry="7" fill="#9B8368" opacity="0.4" />
            <ellipse cx="60" cy="75" rx="3" ry="6" fill="#B8A080" opacity="0.3" />
          </svg>
        </div>

        {/* Decorative corner florals - right */}
        <div className="absolute bottom-6 right-6 w-20 h-28 opacity-40 transform rotate-180">
          <svg viewBox="0 0 96 128" fill="none">
            {/* Burgundy roses */}
            <circle cx="20" cy="25" r="14" fill="#8B2834" opacity="0.8" />
            <circle cx="18" cy="28" r="10" fill="#A83845" opacity="0.7" />
            <circle cx="32" cy="40" r="12" fill="#8B2834" opacity="0.75" />
            {/* Stems and leaves */}
            <path d="M35 42 L48 58 L55 70" stroke="#7A5C48" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M20 25 L28 35 L35 42" stroke="#7A5C48" strokeWidth="2" fill="none" opacity="0.6" />
            {/* Cream flowers */}
            <circle cx="50" cy="60" r="8" fill="#E8DCC8" opacity="0.5" />
            <circle cx="58" cy="72" r="6" fill="#D4C4A8" opacity="0.4" />
            {/* Leaves */}
            <ellipse cx="52" cy="65" rx="4" ry="7" fill="#9B8368" opacity="0.4" />
            <ellipse cx="60" cy="75" rx="3" ry="6" fill="#B8A080" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 text-center" style={{ color: '#ECE4D8' }}>
          {/* Section title */}
          <h2 className="uppercase text-base md:text-lg font-bold mb-5 tracking-widest" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}>
            Thông Tin Lễ Cưới
          </h2>

          {/* Parents info - always 2 columns */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {/* Groom's family */}
            <div className="text-center">
              <p className="text-[10px] uppercase opacity-70 mb-1.5 tracking-wider">Ông Bà</p>
              <p className="font-bold text-xs md:text-sm mb-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>
                Phan Minh Đức
              </p>
              <p className="font-bold text-xs md:text-sm mb-1.5" style={{ fontFamily: 'Times New Roman, serif' }}>
                Phan Thị Hạnh
              </p>
            </div>

            {/* Bride's family */}
            <div className="text-center">
              <p className="text-[10px] uppercase opacity-70 mb-1.5 tracking-wider">Ông Bà</p>
              <p className="font-bold text-xs md:text-sm mb-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>
                Nguyễn Văn Hồng
              </p>
              <p className="font-bold text-xs md:text-sm mb-1.5" style={{ fontFamily: 'Times New Roman, serif' }}>
                Trần Thị Nhã
              </p>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ECE4D8] opacity-40" />
            <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
          </div>

          {/* Main announcement */}
          <div className="my-4">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-3 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Trân trọng báo tin
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Lễ thành hôn của con chúng tôi
            </p>

            {/* Groom name */}
            <h3 className="font-viaoda text-3xl md:text-4xl my-3 leading-tight" style={{ lineHeight: '1.2' }}>
              Phan Minh Hùng
            </h3>

            <p className="text-[10px] uppercase tracking-widest opacity-70 my-2" style={{ letterSpacing: '0.15em' }}>
              &nbsp;
            </p>

            {/* Ampersand with decorative lines */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-12 bg-[#ECE4D8] opacity-20" />
              <span className="text-xl font-serif italic opacity-80">&</span>
              <div className="h-px w-12 bg-[#ECE4D8] opacity-20" />
            </div>

            {/* Bride name */}
            <h3 className="font-viaoda text-3xl md:text-4xl my-3 leading-tight" style={{ lineHeight: '1.2' }}>
              Nguyễn Hương Lan
            </h3>

            <p className="text-[10px] uppercase tracking-widest opacity-70 my-2" style={{ letterSpacing: '0.15em' }}>
              &nbsp;
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ECE4D8] opacity-40" />
            <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
          </div>

          {/* Wedding ceremony info */}
          <div className="mt-5">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Lễ thành hôn được cử hành tại
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Tư gia
            </p>

            {/* Time and date */}
            <div className="mb-4">
              <p className="text-[10px] uppercase opacity-70 mb-1.5 tracking-wider">Vào lúc 13:30</p>
              <p className="text-[10px] uppercase opacity-70 mb-3 tracking-wider">Chủ Nhật</p>

              {/* Large date */}
              <div className="flex items-end justify-center gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-bold leading-none">25</span>
                <div className="text-left pb-1">
                  <p className="text-xs md:text-sm uppercase font-semibold leading-tight">Tháng 10</p>
                  <p className="text-xs md:text-sm uppercase font-semibold leading-tight">2026</p>
                </div>
              </div>

              <p className="text-[10px] opacity-60 mt-2">
                (Tức ngày 16 tháng 09 năm Bính Ngọ)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
