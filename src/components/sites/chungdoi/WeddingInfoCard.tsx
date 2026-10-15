export function WeddingInfoCard() {
  return (
    <section className="relative z-10 mx-auto w-[88%] max-w-[420px] md:max-w-[560px] my-10 sm:my-14">
      {/* Floral bouquet decoration - Right side */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute block -right-[15%] sm:-right-[18%] md:-right-[22%] bottom-[24%] sm:bottom-[28%] md:bottom-[30%] z-20 w-[38%] sm:w-[40%]"
        style={{ willChange: 'transform' }}
      >
        <span
          className="block"
          style={{
            animation: 'drFloat 5.5s ease-in-out 0.6s infinite normal none running',
            willChange: 'transform',
          }}
        >
          <img
            src="/sites/chungdoi/images/flower2-decoration.webp"
            alt="Họa tiết hoa lễ cưới"
            className="block w-full max-w-none object-contain drop-shadow-[4px_8px_16px_rgba(0,0,0,0.4)]"
          />
        </span>
      </span>

      {/* Large burgundy card with wedding information */}
      <div className="relative overflow-hidden rounded-[14px] md:rounded-2xl px-5 py-9 md:px-8 md:py-10 text-center shadow-[4px_6px_20px_rgba(0,0,0,0.3)]">
        {/* Deep burgundy background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[14px] md:rounded-2xl"
          style={{ backgroundColor: '#511419' }}
        />

        {/* Paper texture overlay */}
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover mix-blend-multiply opacity-40 rounded-[14px] md:rounded-2xl"
          src="/sites/chungdoi/images/paper.webp"
        />

        <div className="relative z-10 text-center" style={{ color: '#ECE4D8' }}>
          {/* Section title */}
          <h2
            className="uppercase text-base md:text-lg font-bold mb-6 tracking-widest"
            style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}
          >
            Thông Tin Lễ Cưới
          </h2>

          {/* Parents info - 2 columns with vertical separator */}
          <div className="grid grid-cols-2 relative mb-6">
            {/* Groom's family */}
            <div className="text-center pr-3">
              <p className="text-[10px] md:text-xs uppercase opacity-70 mb-1.5 tracking-wider">Ông Bà</p>
              <p className="font-bold text-xs md:text-sm mb-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>
                Phan Minh Đức
              </p>
              <p className="font-bold text-xs md:text-sm mb-1" style={{ fontFamily: 'Times New Roman, serif' }}>
                Phan Thị Hạnh
              </p>
            </div>

            {/* Vertical divider */}
            <div className="absolute left-1/2 top-1 bottom-1 w-px bg-[#ECE4D8]/20 -translate-x-1/2" />

            {/* Bride's family */}
            <div className="text-center pl-3">
              <p className="text-[10px] md:text-xs uppercase opacity-70 mb-1.5 tracking-wider">Ông Bà</p>
              <p className="font-bold text-xs md:text-sm mb-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>
                Nguyễn Văn Hồng
              </p>
              <p className="font-bold text-xs md:text-sm mb-1" style={{ fontFamily: 'Times New Roman, serif' }}>
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
          <div className="my-5">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-2 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Trân trọng báo tin
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Lễ thành hôn của con chúng tôi
            </p>

            {/* Groom name */}
            <h3 className="font-viaoda text-3xl md:text-4xl my-2 leading-tight" style={{ lineHeight: '1.2' }}>
              Phan Minh Hùng
            </h3>

            <p className="text-[10px] uppercase tracking-widest opacity-70 my-1" style={{ letterSpacing: '0.15em' }}>
              Trưởng Nam
            </p>

            {/* Ampersand with delicate lines */}
            <div className="flex items-center justify-center gap-3 my-3">
              <div className="h-px w-12 bg-[#ECE4D8] opacity-20" />
              <span className="text-xl font-serif italic opacity-80">&</span>
              <div className="h-px w-12 bg-[#ECE4D8] opacity-20" />
            </div>

            {/* Bride name */}
            <h3 className="font-viaoda text-3xl md:text-4xl my-2 leading-tight" style={{ lineHeight: '1.2' }}>
              Nguyễn Hương Lan
            </h3>

            <p className="text-[10px] uppercase tracking-widest opacity-70 my-1" style={{ letterSpacing: '0.15em' }}>
              Út Nữ
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
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-1 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Lễ thành hôn được cử hành tại
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-80" style={{ letterSpacing: '0.12em' }}>
              Tư gia
            </p>

            {/* Time and date */}
            <div className="mb-2">
              <p className="text-[10px] md:text-xs uppercase opacity-75 mb-3 tracking-wider">
                Vào lúc 13:30 Chủ Nhật
              </p>

              {/* Large date display with vertical separator */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-bold leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>
                  25
                </span>
                <div className="h-10 w-px bg-[#ECE4D8]/30 mx-1" />
                <div className="text-left leading-tight">
                  <p className="text-xs md:text-sm uppercase font-semibold tracking-wider">Tháng 10</p>
                  <p className="text-xs md:text-sm uppercase font-semibold tracking-wider opacity-80">2026</p>
                </div>
              </div>

              <p className="text-[10px] md:text-xs opacity-60 mt-3">
                (Tức ngày 16 tháng 09 năm Bính Ngọ)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
