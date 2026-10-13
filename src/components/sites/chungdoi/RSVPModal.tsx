'use client';

import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || attending === null) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          attending,
          guestCount,
          message: message.trim(),
        }),
      });

      if (response.ok) {
        alert('Cảm ơn bạn đã xác nhận!');
        setName('');
        setAttending(null);
        setGuestCount(1);
        setMessage('');
        onClose();
      } else {
        alert('Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-3xl shadow-2xl p-8 my-8"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" style={{ color: '#6B4E3D' }} />
        </button>

        {/* Content */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <h2
            className="text-2xl font-bold text-center"
            style={{ color: '#511419' }}
          >
            Xác nhận tham dự
          </h2>

          {/* Description */}
          <p
            className="text-sm text-center leading-relaxed"
            style={{ color: '#6B4E3D' }}
          >
            Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng tôi.
            Xin xác nhận để chúng tôi chuẩn bị chu đáo nhất.
          </p>

          {/* Name input */}
          <div>
            <label
              htmlFor="rsvp-name"
              className="block text-sm font-medium mb-2"
              style={{ color: '#3D2820' }}
            >
              Tên của bạn
            </label>
            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên của bạn"
              className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all text-sm"
              style={{
                borderColor: '#D4C4B0',
                backgroundColor: '#FAFAF8'
              }}
              required
            />
          </div>

          {/* Attendance options */}
          <div>
            <label
              className="block text-sm font-medium mb-3"
              style={{ color: '#3D2820' }}
            >
              Bạn sẽ đến chứ?
            </label>

            <div className="space-y-3">
              {/* Will attend */}
              <button
                type="button"
                onClick={() => setAttending(true)}
                className="w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all"
                style={{
                  borderColor: attending === true ? '#20A452' : '#D4C4B0',
                  backgroundColor: attending === true ? 'rgba(32, 164, 82, 0.05)' : '#FAFAF8',
                }}
              >
                <div
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{
                    borderColor: attending === true ? '#20A452' : '#D4C4B0',
                    backgroundColor: attending === true ? '#20A452' : 'transparent',
                  }}
                >
                  {attending === true && <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: attending === true ? '#20A452' : '#3D2820' }}
                >
                  Tôi sẽ đến
                </span>
              </button>

              {/* Cannot attend */}
              <button
                type="button"
                onClick={() => setAttending(false)}
                className="w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all"
                style={{
                  borderColor: attending === false ? '#511419' : '#D4C4B0',
                  backgroundColor: attending === false ? 'rgba(81, 20, 25, 0.05)' : '#FAFAF8',
                }}
              >
                <div
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{
                    borderColor: attending === false ? '#511419' : '#D4C4B0',
                    backgroundColor: attending === false ? '#511419' : 'transparent',
                  }}
                >
                  {attending === false && <X className="w-4 h-4" style={{ color: '#FFFFFF' }} />}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: attending === false ? '#511419' : '#3D2820' }}
                >
                  Rất tiếc, tôi không thể đến
                </span>
              </button>
            </div>
          </div>

          {/* Guest count - only show when attending=true */}
          {attending === true && (
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: '#3D2820' }}
              >
                Số lượng khách (bao gồm bạn)
              </label>
              <div className="flex items-center gap-4 px-4 py-3 rounded-xl border-2" style={{ borderColor: '#D4C4B0', backgroundColor: '#FAFAF8' }}>
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: '#D4C4B0', color: '#511419' }}
                >
                  −
                </button>
                <span className="flex-1 text-center font-semibold" style={{ color: '#3D2820' }}>
                  {guestCount}
                </span>
                <button
                  type="button"
                  onClick={() => setGuestCount(guestCount + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: '#D4C4B0', color: '#511419' }}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Message for couple */}
          <div>
            <label
              htmlFor="rsvp-message"
              className="block text-sm font-medium mb-2"
              style={{ color: '#3D2820' }}
            >
              Lời nhân cho cô dâu chú rể
            </label>
            <textarea
              id="rsvp-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Để lại lời nhân (không bắt buộc)"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all text-sm resize-none"
              style={{
                borderColor: '#D4C4B0',
                backgroundColor: '#FAFAF8'
              }}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || attending === null}
            className="w-full py-3 rounded-full font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
            style={{
              backgroundColor: '#ECE4D8',
              color: '#511419'
            }}
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi xác nhận'}
          </button>
        </form>
      </div>
    </div>
  );
}

