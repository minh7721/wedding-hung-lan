'use client';

import { useState } from 'react';
import { Calendar, Heart } from 'lucide-react';
import { RSVPModal } from './RSVPModal';

export function ReceptionDetailsCard() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 mx-auto w-[88%] max-w-[448px] my-8">
      {/* Burgundy card */}
      <div className="relative rounded-3xl p-6 md:p-10 shadow-xl" style={{ backgroundColor: '#511419' }}>
        {/* Decorative corner florals - left */}
        <div className="absolute top-6 left-6 w-16 h-24 opacity-40">
          <svg viewBox="0 0 80 112" fill="none">
            {/* Burgundy roses */}
            <circle cx="18" cy="20" r="12" fill="#8B2834" opacity="0.8" />
            <circle cx="16" cy="23" r="9" fill="#A83845" opacity="0.7" />
            <circle cx="28" cy="34" r="10" fill="#8B2834" opacity="0.75" />
            {/* Stems and leaves */}
            <path d="M30 36 L42 50 L48 60" stroke="#7A5C48" strokeWidth="1.8" fill="none" opacity="0.6" />
            <path d="M18 20 L24 30 L30 36" stroke="#7A5C48" strokeWidth="1.8" fill="none" opacity="0.6" />
            {/* Cream flowers */}
            <circle cx="44" cy="52" r="7" fill="#E8DCC8" opacity="0.5" />
            <circle cx="50" cy="62" r="5" fill="#D4C4A8" opacity="0.4" />
            {/* Leaves */}
            <ellipse cx="46" cy="56" rx="3.5" ry="6" fill="#9B8368" opacity="0.4" />
            <ellipse cx="52" cy="65" rx="2.5" ry="5" fill="#B8A080" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 text-center" style={{ color: '#ECE4D8' }}>
          {/* Title */}
          <h2 className="uppercase text-base md:text-lg font-bold mb-5 tracking-widest" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}>
            Thông Tin Tiệc Cưới
          </h2>

          <h3 className="uppercase text-xs mb-4 opacity-80 tracking-widest" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.12em' }}>
            Tiệc cưới sẽ diễn ra vào lúc:
          </h3>

          {/* Main time and day */}
          <div className="my-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl md:text-5xl font-bold leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>
                18:00
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-wider opacity-70 mb-3">Thứ Bảy</p>
          </div>

          {/* Large date display */}
          <div className="flex items-end justify-center gap-3 my-4">
            <span className="text-5xl md:text-6xl font-bold leading-none">03</span>
            <div className="text-left pb-1">
              <p className="text-xs md:text-sm uppercase font-semibold leading-tight">Tháng 01</p>
              <p className="text-xs md:text-sm uppercase font-semibold leading-tight">2026</p>
            </div>
          </div>

          <p className="text-[10px] uppercase tracking-wider opacity-60 my-3">
            (Tức ngày 15 tháng 11 năm Ất Tỵ)
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ECE4D8] opacity-40" />
            <div className="h-px w-16 bg-[#ECE4D8] opacity-20" />
          </div>

          {/* Event schedule boxes */}
          <div className="grid grid-cols-2 gap-3 my-5">
            <div className="rounded-lg p-3 border border-[#ECE4D8]/20">
              <p className="text-[10px] uppercase mb-1.5 opacity-70 tracking-wide">Đón Khách</p>
              <p className="text-xl font-semibold" style={{ fontFamily: 'Times New Roman, serif' }}>
                17:30
              </p>
            </div>
            <div className="rounded-lg p-3 border border-[#ECE4D8]/20">
              <p className="text-[10px] uppercase mb-1.5 opacity-70 tracking-wide">Khai Tiệc</p>
              <p className="text-xl font-semibold" style={{ fontFamily: 'Times New Roman, serif' }}>
                18:00
              </p>
            </div>
          </div>

          {/* Mini calendar */}
          <div className="mt-6 p-5 rounded-2xl" style={{ backgroundColor: '#ECE4D8' }}>
            <div className="flex items-center justify-center mb-3">
              <span className="text-sm font-serif italic" style={{ color: '#511419' }}>
                Tháng 1 / 2026
              </span>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-3" style={{ color: '#511419' }}>
              {/* Day headers */}
              {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
                <div key={day} className="text-[10px] font-semibold opacity-60 py-1.5 border-b border-[#511419]/10">
                  {day}
                </div>
              ))}

              {/* Week 1 */}
              <div className="py-1.5 opacity-30">1</div>
              <div className="py-1.5 opacity-30">2</div>
              <div className="relative py-1.5">
                <div className="relative inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ backgroundColor: '#511419' }}>
                  <span className="relative z-10 text-white font-semibold text-xs">3</span>
                  <Heart className="absolute -top-1 -right-1 w-3.5 h-3.5 text-[#FF006E]" fill="#FF006E" />
                </div>
              </div>
              <div className="py-1.5 opacity-30">4</div>
              <div className="py-1.5 opacity-30">5</div>
              <div className="py-1.5 opacity-30">6</div>
              <div className="py-1.5 opacity-30">7</div>

              {/* Week 2 */}
              <div className="py-1.5 opacity-30">8</div>
              <div className="py-1.5 opacity-30">9</div>
              <div className="py-1.5 opacity-30">10</div>
              <div className="py-1.5 opacity-30">11</div>
              <div className="py-1.5 opacity-30">12</div>
              <div className="py-1.5 opacity-30">13</div>
              <div className="py-1.5 opacity-30">14</div>

              {/* Week 3 */}
              <div className="py-1.5 opacity-30">15</div>
              <div className="py-1.5 opacity-30">16</div>
              <div className="py-1.5 opacity-30">17</div>
              <div className="py-1.5 opacity-30">18</div>
              <div className="py-1.5 opacity-30">19</div>
              <div className="py-1.5 opacity-30">20</div>
              <div className="py-1.5 opacity-30">21</div>

              {/* Week 4 */}
              <div className="py-1.5 opacity-30">22</div>
              <div className="py-1.5 opacity-30">23</div>
              <div className="py-1.5 opacity-30">24</div>
              <div className="py-1.5 opacity-30">25</div>
              <div className="py-1.5 opacity-30">26</div>
              <div className="py-1.5 opacity-30">27</div>
              <div className="py-1.5 opacity-30">28</div>

              {/* Week 5 */}
              <div className="py-1.5 opacity-30">29</div>
              <div className="py-1.5 opacity-30">30</div>
              <div className="py-1.5 opacity-30">31</div>
              <div />
              <div />
              <div />
              <div />
            </div>

            {/* Calendar link */}
            <div className="text-center mt-3">
              <a
                href="#"
                className="text-xs underline hover:no-underline transition-all"
                style={{ color: '#511419' }}
              >
                Thêm vào lịch
              </a>
            </div>

            {/* Add to calendar button */}
            <button
              onClick={() => setIsRSVPModalOpen(true)}
              className="w-full px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-90 mt-3"
              style={{ backgroundColor: '#511419', color: '#ECE4D8' }}
            >
              <Calendar className="inline-block w-3.5 h-3.5 mr-2 mb-0.5" />
              Xác Nhận Tham Dự
            </button>
          </div>
        </div>
      </div>
    </section>

      <RSVPModal isOpen={isRSVPModalOpen} onClose={() => setIsRSVPModalOpen(false)} />
    </>
  );
}
