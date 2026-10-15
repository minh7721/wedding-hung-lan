'use client';

import { useState, useEffect } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

const WISH_SUGGESTIONS = [
  'Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long, mãi mãi yêu thương nhau!',
  'Mừng ngày vui của hai bạn! Chúc gia đình nhỏ luôn tràn ngập tiếng cười và hạnh phúc.',
  'Chúc tân lang tân nương bách niên giai lão, cùng nhau xây dựng tổ ấm ngọt ngào viên mãn!',
  'Chúc hai bạn tình yêu luôn nồng nàn, thấu hiểu và cùng nhau vượt qua mọi chặng đường phía trước.',
  'Mừng hạnh phúc Minh Hùng & Hương Lan! Chúc hai bạn một hành trình hôn nhân ngập tràn niềm vui!',
  'Chúc cô dâu chú rể luôn giữ được nụ cười rạng rỡ này mãi mãi nhé!',
];

export function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/guestbook');
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error('Error fetching guestbook:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestWish = () => {
    const nextWish = WISH_SUGGESTIONS[suggestionIndex % WISH_SUGGESTIONS.length];
    setSuggestionIndex((prev) => prev + 1);
    setFormData((prev) => ({
      ...prev,
      message: nextWish,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newEntry = await response.json();
        setEntries([newEntry, ...entries]);
        setFormData({ name: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting guestbook entry:', error);
      alert('Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="@container relative z-10 overflow-x-clip my-8">
      {/* Authentic papernote background with handcrafted paper texture and bottom-left floral bouquet */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-15px] md:top-[-30px] lg:top-[-30px] w-[120%] max-w-[650px] -translate-x-1/2 object-contain opacity-95 drop-shadow-[4px_4px_8px_rgba(0,0,0,0.22)] select-none"
        src="/sites/chungdoi/images/papernote-background.webp"
      />

      <section
        className="relative z-10 px-6 pb-8 pt-[74px] md:pt-[120px] [&_textarea]:h-[56px] md:[&_textarea]:h-[110px] [&_form]:max-w-[280px] md:[&_form]:max-w-[380px] [&>div:last-child]:mt-[max(60px,calc(109.3cqw-333px))] md:[&>div:last-child]:mt-[110px]"
        style={{ color: '#511419', fontFamily: 'Times New Roman, serif' }}
      >
        {/* Title */}
        <div className="text-center">
          <h2
            className="uppercase font-bold text-[20px] md:text-[24px] relative -translate-y-[-16px] tracking-widest"
            style={{
              color: '#511419',
              fontFamily: 'Times New Roman, serif',
              letterSpacing: '0.08em',
            }}
          >
            Sổ lưu bút
          </h2>
        </div>

        {/* Form directly inside the paper card */}
        <form onSubmit={handleSubmit} className="mt-6 mx-auto w-full max-w-full md:max-w-[600px]">
          <div className="rounded-[8px] p-4" style={{ background: 'transparent' }}>
            <div className="mb-4">
              <input
                placeholder="Nhập tên*"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none transition-colors"
                maxLength={500}
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  borderColor: '#511419',
                  color: '#511419',
                  backgroundColor: 'transparent',
                }}
              />
            </div>

            <textarea
              placeholder="Nhập lời chúc*"
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none transition-colors"
              rows={4}
              maxLength={10000}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                borderColor: '#511419',
                color: '#511419',
                backgroundColor: 'transparent',
                resize: 'none',
              }}
            />

            <div className="-mt-[-5px] flex items-center justify-between text-xs pt-2">
              <div className="flex items-center text-xs space-x-1">
                <button
                  type="button"
                  onClick={handleSuggestWish}
                  className="p-2 rounded-lg transition-all duration-200 hover:scale-110 text-base leading-none shadow-sm active:scale-95"
                  title="Gợi ý lời chúc ý nghĩa bằng AI"
                  style={{
                    backgroundColor: 'rgba(81, 20, 25, 0.1)',
                    color: '#511419',
                  }}
                >
                  <span className="select-none">🪄</span>
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 shadow-md"
                style={{
                  backgroundColor: '#511419',
                  color: '#DED9D7',
                }}
              >
                {isSubmitting ? 'ĐANG GỬI...' : 'GỬI LỜI CHÚC'}
              </button>
            </div>
          </div>
        </form>

        {/* Guestbook entries list below the paper card */}
        <div className="w-full max-h-[500px] space-y-3 overflow-y-auto pr-2 mx-auto max-w-full md:max-w-[420px] custom-scrollbar">
          <h3
            className="text-center text-sm md:text-base font-semibold mb-3 uppercase tracking-wider"
            style={{ color: '#511419', fontFamily: 'Times New Roman, serif' }}
          >
            Lời chúc từ mọi người
          </h3>

          {isLoading ? (
            <div className="text-center py-6 text-sm opacity-70" style={{ color: '#6B4E3D' }}>
              Đang tải lời chúc...
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-6 text-sm opacity-70" style={{ color: '#6B4E3D' }}>
              Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc nhé!
            </div>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="rounded-[8px] border p-4 text-sm shadow-sm transition-all"
                style={{
                  borderColor: 'rgba(81, 20, 25, 0.333)',
                  backgroundColor: 'rgba(255, 255, 255, 0.55)',
                }}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="font-semibold text-sm" style={{ color: '#511419' }}>
                    {entry.name}
                  </span>
                  <span className="text-xs opacity-70" style={{ color: '#8B6F47' }}>
                    {entry.timestamp}
                  </span>
                </div>
                <p className="mt-1 text-xs md:text-sm leading-relaxed" style={{ color: '#3D2820' }}>
                  {entry.message}
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(232, 220, 200, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #511419;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6B1C23;
        }
      `}</style>
    </div>
  );
}
