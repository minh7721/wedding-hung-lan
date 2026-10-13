import { Camera, Cake, Wine, Gift, Music } from 'lucide-react';

const timelineEvents = [
  { time: '17:00', event: 'Đón khách', icon: Music },
  { time: '18:00', event: 'Khai tiệc', icon: Wine },
  { time: '18:30', event: 'Nghi thức cưới', icon: Gift },
  { time: '19:00', event: 'Cắt bánh & nâng ly', icon: Cake },
  { time: '20:30', event: 'Kết thúc tiệc', icon: Camera },
];

export function TimelineSection() {
  return (
    <section className="relative z-10 mx-auto w-[88%] max-w-[448px] my-8">
      {/* Burgundy card */}
      <div className="relative rounded-3xl p-6 md:p-10 shadow-xl" style={{ backgroundColor: '#511419' }}>
        {/* Decorative corner florals - right side */}
        <div className="absolute top-6 right-6 w-20 h-28 opacity-30">
          <svg viewBox="0 0 96 128" fill="none">
            {/* Burgundy roses */}
            <circle cx="78" cy="24" r="14" fill="#8B2834" opacity="0.8" />
            <circle cx="76" cy="28" r="10" fill="#A83845" opacity="0.7" />
            <circle cx="68" cy="42" r="12" fill="#8B2834" opacity="0.75" />
            {/* Stems and leaves */}
            <path d="M68 42 L58 56 L52 68" stroke="#7A5C48" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M78 24 L72 36 L68 42" stroke="#7A5C48" strokeWidth="2" fill="none" opacity="0.6" />
            {/* Cream flowers */}
            <circle cx="54" cy="60" r="8" fill="#E8DCC8" opacity="0.5" />
            <circle cx="48" cy="70" r="6" fill="#D4C4A8" opacity="0.4" />
            {/* Leaves */}
            <ellipse cx="56" cy="64" rx="4" ry="7" fill="#9B8368" opacity="0.4" />
            <ellipse cx="50" cy="73" rx="3" ry="6" fill="#B8A080" opacity="0.3" />
          </svg>
        </div>

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
              const Icon = item.icon;
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
