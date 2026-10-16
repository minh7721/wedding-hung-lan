'use client';

import { useState } from 'react';
import { RSVPModal } from './RSVPModal';

export function ReceptionDetailsCard() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Tiệc Cưới: Minh Hùng & Hương Lan'
  )}&dates=20261024T103000Z/20261024T143000Z&details=${encodeURIComponent(
    'Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày vui trọng đại!'
  )}&location=${encodeURIComponent('Vật lại, Ba Vì, Hà Nội')}`;

  return (
    <>
      <section className="relative z-10 mx-auto w-[88%] max-w-[420px] md:max-w-[560px] my-10 sm:my-14">
        {/* Floral bouquet decoration - Left side (mirrored) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute block -left-[14%] sm:-left-[16%] md:-left-[18%] top-[8%] sm:top-[10%] z-20 w-[26%] sm:w-[28%] md:w-[30%]"
          style={{ willChange: 'transform' }}
        >
          <span
            className="block"
            style={{
              animation: 'drFloat 6s ease-in-out 0.3s infinite normal none running',
              willChange: 'transform',
            }}
          >
            <img
              src="/sites/chungdoi/images/flower2-decoration.webp"
              alt="Họa tiết hoa tiệc cưới"
              className="block w-full max-w-none object-contain scale-x-[-1] drop-shadow-[-4px_8px_16px_rgba(0,0,0,0.4)]"
            />
          </span>
        </span>

        {/* Main burgundy card */}
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
            {/* Title */}
            <h2
              className="uppercase text-base md:text-lg font-bold mb-3 tracking-widest"
              style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}
            >
              Thông Tin Tiệc Cưới
            </h2>

            <h3
              className="uppercase text-xs md:text-sm mb-4 opacity-80 tracking-widest"
              style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.12em' }}
            >
              Tiệc cưới sẽ diễn ra vào lúc:
            </h3>

            {/* Main time and day */}
            <div className="my-2">
              <p className="text-xs md:text-sm uppercase tracking-wider opacity-75">
                16:30 THỨ BẢY
              </p>
            </div>

            {/* Large date display with vertical separator */}
            <div className="flex items-center justify-center gap-3 my-3">
              <span className="text-5xl md:text-6xl font-bold leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>
                24
              </span>
              <div className="h-10 w-px bg-[#ECE4D8]/30 mx-1" />
              <div className="text-left leading-tight">
                <p className="text-xs md:text-sm uppercase font-semibold tracking-wider">Tháng 10</p>
                <p className="text-xs md:text-sm uppercase font-semibold tracking-wider opacity-80">2026</p>
              </div>
            </div>

            <p className="text-[10px] md:text-xs uppercase tracking-wider opacity-60 my-2">
              (Tức ngày 15 tháng 09 năm Bính Ngọ)
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#ECE4D8] opacity-40" />
              <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
            </div>

            {/* Event schedule boxes */}
            <div className="grid grid-cols-2 gap-3 my-5 max-w-[320px] mx-auto">
              <div className="rounded-xl p-3 border border-[#ECE4D8]/20 bg-black/10">
                <p className="text-[10px] uppercase mb-1 opacity-70 tracking-wider">Đón Khách</p>
                <p className="text-xl font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>
                  16:00
                </p>
              </div>
              <div className="rounded-xl p-3 border border-[#ECE4D8]/20 bg-black/10">
                <p className="text-[10px] uppercase mb-1 opacity-70 tracking-wider">Khai Tiệc</p>
                <p className="text-xl font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>
                  16:30
                </p>
              </div>
            </div>

            {/* Mini calendar box */}
            <div className="mt-6 p-5 rounded-2xl max-w-[340px] mx-auto shadow-md" style={{ backgroundColor: '#ECE4D8' }}>
              <div className="flex items-center justify-center mb-3">
                <span className="text-sm font-serif italic font-medium" style={{ color: '#511419' }}>
                  Tháng 10 / 2026
                </span>
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1" style={{ color: '#511419' }}>
                {/* Day headers */}
                {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
                  <div key={day} className="text-[10px] font-semibold opacity-60 py-1 border-b border-[#511419]/10">
                    {day}
                  </div>
                ))}

                {/* Week 1 - October 2026 starts on Thursday (T5) */}
                <div />
                <div />
                <div />
                <div className="py-1 opacity-30">1</div>
                <div className="py-1 opacity-30">2</div>
                <div className="py-1 opacity-30">3</div>
                <div className="py-1 opacity-30">4</div>

                {/* Week 2 */}
                <div className="py-1 opacity-30">5</div>
                <div className="py-1 opacity-30">6</div>
                <div className="py-1 opacity-30">7</div>
                <div className="py-1 opacity-30">8</div>
                <div className="py-1 opacity-30">9</div>
                <div className="py-1 opacity-30">10</div>
                <div className="py-1 opacity-30">11</div>

                {/* Week 3 */}
                <div className="py-1 opacity-30">12</div>
                <div className="py-1 opacity-30">13</div>
                <div className="py-1 opacity-30">14</div>
                <div className="py-1 opacity-30">15</div>
                <div className="py-1 opacity-30">16</div>
                <div className="py-1 opacity-30">17</div>
                <div className="py-1 opacity-30">18</div>

                {/* Week 4 - Highlight Day 24 (Saturday / T7) */}
                <div className="py-1 opacity-30">19</div>
                <div className="py-1 opacity-30">20</div>
                <div className="py-1 opacity-30">21</div>
                <div className="py-1 opacity-30">22</div>
                <div className="py-1 opacity-30">23</div>
                <div className="relative py-1 flex items-center justify-center">
                  <div
                    className="relative flex items-center justify-center w-6 h-6 rounded-full shadow-sm"
                    style={{ backgroundColor: '#511419' }}
                  >
                    <span className="text-white font-bold text-[11px]">24</span>
                  </div>
                </div>
                <div className="py-1 opacity-30">25</div>

                {/* Week 5 */}
                <div className="py-1 opacity-30">26</div>
                <div className="py-1 opacity-30">27</div>
                <div className="py-1 opacity-30">28</div>
                <div className="py-1 opacity-30">29</div>
                <div className="py-1 opacity-30">30</div>
                <div className="py-1 opacity-30">31</div>
                <div />
              </div>
            </div>

            {/* Bottom action items matching Screenshot 2 */}
            <div className="mt-5 space-y-3">
              <div>
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs underline underline-offset-4 hover:opacity-80 transition-opacity"
                  style={{ color: '#ECE4D8' }}
                >
                  Thêm vào lịch
                </a>
              </div>

              <div>
                <button
                  onClick={() => setIsRSVPModalOpen(true)}
                  className="px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-md active:scale-95"
                  style={{ backgroundColor: '#ECE4D8', color: '#511419' }}
                >
                  XÁC NHẬN THAM DỰ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RSVPModal isOpen={isRSVPModalOpen} onClose={() => setIsRSVPModalOpen(false)} />
    </>
  );
}
