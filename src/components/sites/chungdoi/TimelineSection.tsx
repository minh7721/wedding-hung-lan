const timelineEvents = [
  { time: '17:00', event: 'Đón khách' },
  { time: '18:00', event: 'Khai tiệc' },
  { time: '18:30', event: 'Nghi thức cưới' },
  { time: '19:00', event: 'Cắt bánh & nâng ly' },
  { time: '20:30', event: 'Kết thúc tiệc' },
];

export function TimelineSection() {
  return (
    <section className="relative z-10 mx-auto w-[88%] max-w-[420px] md:max-w-[560px] my-10 sm:my-14">
      {/* Floral bouquet decoration - Right side */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute block -right-[15%] sm:-right-[18%] md:-right-[20%] top-[8%] sm:top-[10%] z-20 w-[28%] sm:w-[30%]"
        style={{ willChange: 'transform' }}
      >
        <span
          className="block"
          style={{
            animation: 'drFloat 5.2s ease-in-out 0.9s infinite normal none running',
            willChange: 'transform',
          }}
        >
          <img
            src="/sites/chungdoi/images/flower2-decoration.webp"
            alt=""
            className="block w-full max-w-none object-contain drop-shadow-[4px_8px_16px_rgba(0,0,0,0.4)]"
          />
        </span>
      </span>

      {/* Burgundy card */}
      <div className="relative overflow-hidden rounded-[14px] md:rounded-2xl px-5 py-9 md:px-8 md:py-10 shadow-[4px_6px_20px_rgba(0,0,0,0.3)]">
        {/* Burgundy background */}
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

        <div className="relative z-10" style={{ color: '#ECE4D8' }}>
          {/* Title */}
          <h2 className="uppercase text-center text-base md:text-lg font-bold mb-6 tracking-widest" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}>
            Lịch Trình Ngày Cưới
          </h2>

          {/* Timeline events - vertical timeline with connecting line */}
          <div className="relative space-y-5 pl-0">
            {/* Vertical connecting line - positioned at dot center */}
            <div
              className="absolute w-px opacity-30"
              style={{
                backgroundColor: '#ECE4D8',
                left: '72px',
                top: '8px',
                bottom: '-8px',
                height: 'calc(100% + 16px)'
              }}
            />

            {timelineEvents.map((item, idx) => {
              return (
                <div key={idx} className="relative flex items-center gap-3">
                  {/* Time */}
                  <div className="flex-shrink-0 w-14 text-right">
                    <span className="text-sm md:text-base font-semibold" style={{ fontFamily: 'Times New Roman, serif' }}>
                      {item.time}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#ECE4D8' }}
                    />
                  </div>

                  {/* Event name */}
                  <div className="flex-1">
                    <p className="text-sm md:text-base" style={{ fontFamily: 'Times New Roman, serif' }}>
                      {item.event}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
