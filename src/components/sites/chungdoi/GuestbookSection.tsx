'use client';

import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

export function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch guestbook entries on mount
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
        // Add new entry to the top of the list
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
    <section className="relative z-10 px-6 py-12">
      <div className="max-w-[448px] mx-auto">
        {/* Section title */}
        <h2
          className="uppercase text-center text-xl md:text-2xl font-bold mb-2 tracking-widest"
          style={{ color: '#511419', fontFamily: 'Times New Roman, serif', letterSpacing: '0.15em' }}
        >
          Sổ Lưu Bút
        </h2>

        <p className="text-center text-sm mb-8" style={{ color: '#6B4E3D' }}>
          Gửi lời chúc đến cô dâu &amp; chú rể
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-12 p-6 md:p-8 rounded-3xl shadow-lg" style={{ backgroundColor: '#F5F1E8' }}>
          <h3 className="uppercase text-center text-base font-semibold mb-6 tracking-wider" style={{ color: '#511419' }}>
            Gửi Lời Chúc
          </h3>

          <div className="space-y-4">
            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2 font-medium" style={{ color: '#6B4E3D' }}>
                Họ và tên <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#D4C4B0]/40 focus:outline-none focus:ring-2 focus:ring-[#511419]/30 focus:border-transparent"
                style={{ backgroundColor: '#F5F1E8', color: '#3D2820' }}
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            {/* Message textarea */}
            <div>
              <label htmlFor="message" className="block text-sm mb-2 font-medium" style={{ color: '#6B4E3D' }}>
                Lời chúc <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#D4C4B0]/40 focus:outline-none focus:ring-2 focus:ring-[#511419]/30 focus:border-transparent resize-none"
                style={{ backgroundColor: '#F5F1E8', color: '#3D2820' }}
                placeholder="Nhập lời chúc của bạn..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#511419', color: '#ECE4D8' }}
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Đang gửi...' : 'Gửi lời chúc'}
            </button>
          </div>
        </form>

        {/* Guestbook entries - fixed height with scroll */}
        <div>
          <h3 className="text-center text-base font-semibold mb-4 uppercase tracking-wider" style={{ color: '#511419' }}>
            Lời chúc từ mọi người
          </h3>

          {isLoading ? (
            <div className="text-center py-8" style={{ color: '#6B4E3D' }}>
              <p>Đang tải...</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-8" style={{ color: '#6B4E3D' }}>
              <p>Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="p-5 rounded-2xl shadow-md border border-[#D4C4B0]/20"
                  style={{ backgroundColor: '#F5F1E8' }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-base" style={{ color: '#511419' }}>
                      {entry.name}
                    </h4>
                    <span className="text-xs opacity-60" style={{ color: '#8B6F47' }}>
                      {entry.timestamp}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#3D2820' }}>
                    {entry.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #E8DCC8;
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
    </section>
  );
}
