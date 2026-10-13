'use client';

import { useEffect, useState } from 'react';

export function CountdownSection() {
  const targetDate = new Date('2026-01-03T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#2d1810] mb-4">
          Đếm ngược đến ngày trọng đại
        </h2>
        <p className="text-[#6b4423] mb-12">Chỉ còn</p>

        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Ngày" />
          <TimeUnit value={timeLeft.hours} label="Giờ" />
          <TimeUnit value={timeLeft.minutes} label="Phút" />
          <TimeUnit value={timeLeft.seconds} label="Giây" />
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#fb3570] text-white rounded-2xl w-full aspect-square flex items-center justify-center mb-3 shadow-lg">
        <span className="font-playfair text-3xl md:text-5xl font-bold">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[#6b4423] text-sm md:text-base font-medium">{label}</span>
    </div>
  );
}
