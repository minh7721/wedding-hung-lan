'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('RSVP submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <Heart className="w-16 h-16 text-[#511419] mx-auto mb-6" fill="currentColor" />
          <h2 className="font-viaoda text-[43px] leading-[60px] text-[#511419] mb-4">
            Cảm ơn bạn!
          </h2>
          <p className="text-[#6b4423] font-inter font-light leading-relaxed">
            Chúng tôi đã nhận được xác nhận của bạn. Rất mong được gặp bạn trong ngày trọng đại!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="font-viaoda text-[43px] leading-[60px] text-center text-[#511419] mb-3">
          Xác nhận tham dự
        </h2>
        <p className="text-center text-[#6b4423] font-inter font-light mb-12">
          Vui lòng cho chúng tôi biết bạn có thể tham dự không
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#511419] font-inter font-light mb-2">
              Tên của bạn <span className="text-[#511419]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-full border border-[#511419]/30 focus:outline-none focus:border-[#511419] transition-colors font-inter text-sm"
              placeholder="Nhập tên của bạn"
            />
          </div>

          <div>
            <label className="block text-[#511419] font-inter font-light mb-2">
              Bạn có thể tham dự không? <span className="text-[#511419]">*</span>
            </label>
            <div className="flex gap-3">
              <label className="flex-1">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="sr-only peer"
                />
                <div className="px-6 py-2 rounded-full border border-[#511419]/30 peer-checked:bg-[#511419] peer-checked:text-[#ECE4D8] text-center cursor-pointer transition-colors font-inter text-sm">
                  Có, tôi sẽ đến
                </div>
              </label>
              <label className="flex-1">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="sr-only peer"
                />
                <div className="px-6 py-2 rounded-full border border-[#511419]/30 peer-checked:bg-[#511419] peer-checked:text-[#ECE4D8] text-center cursor-pointer transition-colors font-inter text-sm">
                  Rất tiếc, tôi không thể
                </div>
              </label>
            </div>
          </div>

          {formData.attendance === 'yes' && (
            <div>
              <label className="block text-[#511419] font-inter font-light mb-2">
                Số lượng khách
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-2 rounded-full border border-[#511419]/30 focus:outline-none focus:border-[#511419] transition-colors font-inter text-sm"
              >
                <option value="1">1 người</option>
                <option value="2">2 người</option>
                <option value="3">3 người</option>
                <option value="4">4 người</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-[#511419] font-inter font-light mb-2">
              Lời nhắn
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-2xl border border-[#511419]/30 focus:outline-none focus:border-[#511419] transition-colors resize-none font-inter text-sm"
              placeholder="Gửi lời chúc đến cô dâu chú rể..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#511419] hover:opacity-90 text-[#DED9D7] px-6 py-2 rounded-full text-sm font-inter font-semibold transition-opacity"
          >
            Gửi lời chúc
          </button>
        </form>
      </div>
    </section>
  );
}
