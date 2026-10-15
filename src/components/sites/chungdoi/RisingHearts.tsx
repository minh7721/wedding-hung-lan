'use client';

import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { Heart } from 'lucide-react';

export interface RisingHeartsHandle {
  shoot: (originX?: number, originY?: number, count?: number) => void;
}

interface HeartParticle {
  id: number;
  startX: number;
  startY: number;
  driftX: number;
  distY: number;
  size: number;
  color: string;
  fill: string;
  rotation: number;
  duration: number;
  delay: number;
  swayDuration: number;
  opacity: number;
  isFilled: boolean;
}

const HEART_COLORS = [
  '#e11d48', // Ruby red
  '#be123c', // Crimson
  '#881337', // Deep burgundy
  '#f43f5e', // Vibrant rose
  '#fb7185', // Soft pink
  '#fda4af', // Pastel blush
  '#d4af37', // Wedding gold
  '#eab308', // Shimmer gold
  '#f97316', // Warm coral
];

export const RisingHearts = forwardRef<RisingHeartsHandle, { className?: string }>(
  ({ className = '' }, ref) => {
    const [hearts, setHearts] = useState<HeartParticle[]>([]);

    const shoot = useCallback((originX = 50, originY = 62, count = 38) => {
      const newHearts: HeartParticle[] = [];
      const timestamp = Date.now();

      for (let i = 0; i < count; i++) {
        // Random spread around the origin point
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.5; // Upward cone (-45deg to +45deg from vertical)
        const driftX = Math.cos(angle) * (180 + Math.random() * 260) * (Math.random() > 0.5 ? 1 : -1);
        const distY = -(520 + Math.random() * 450); // Upward travel in px

        const size = Math.floor(16 + Math.random() * 24); // 16px to 40px
        const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
        const isFilled = Math.random() > 0.15; // 85% filled, 15% outline

        newHearts.push({
          id: timestamp + i,
          startX: originX + (Math.random() - 0.5) * 8, // slight jitter around button
          startY: originY + (Math.random() - 0.5) * 4,
          driftX,
          distY,
          size,
          color,
          fill: isFilled ? color : 'none',
          rotation: (Math.random() - 0.5) * 50,
          duration: 2.4 + Math.random() * 1.6, // 2.4s to 4.0s
          delay: Math.random() * 0.45, // Staggered launch up to 450ms
          swayDuration: 1.2 + Math.random() * 0.9,
          opacity: 0.85 + Math.random() * 0.15,
          isFilled,
        });
      }

      setHearts((prev) => [...prev, ...newHearts]);

      // Cleanup particles after animation completes
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => !newHearts.some((nh) => nh.id === h.id)));
      }, 4800);
    }, []);

    useImperativeHandle(ref, () => ({
      shoot,
    }));

    if (hearts.length === 0) return null;

    return (
      <div
        className={`fixed inset-0 pointer-events-none overflow-hidden z-[9998] ${className}`}
        aria-hidden="true"
      >
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute will-change-transform"
            style={
              {
                left: `${heart.startX}%`,
                top: `${heart.startY}%`,
                '--drift-x': `${heart.driftX}px`,
                '--dist-y': `${heart.distY}px`,
                '--rot': `${heart.rotation}deg`,
                animation: `heartFloatUp ${heart.duration}s cubic-bezier(0.22, 1, 0.36, 1) ${heart.delay}s forwards`,
              } as React.CSSProperties
            }
          >
            <div
              style={{
                animation: `heartSway ${heart.swayDuration}s ease-in-out infinite alternate`,
                filter: `drop-shadow(0 3px 8px ${heart.color}55)`,
              }}
            >
              <Heart
                size={heart.size}
                color={heart.color}
                fill={heart.fill}
                strokeWidth={heart.isFilled ? 1 : 2}
                style={{
                  opacity: heart.opacity,
                  transform: `rotate(${heart.rotation}deg)`,
                }}
              />
            </div>
          </div>
        ))}

        <style jsx global>{`
          @keyframes heartFloatUp {
            0% {
              opacity: 0;
              transform: translate3d(0, 0, 0) scale(0.35) rotate(0deg);
            }
            15% {
              opacity: 1;
              transform: translate3d(
                calc(var(--drift-x) * 0.18),
                calc(var(--dist-y) * 0.18),
                0
              ) scale(1.15) rotate(var(--rot));
            }
            70% {
              opacity: 0.9;
              transform: translate3d(
                calc(var(--drift-x) * 0.75),
                calc(var(--dist-y) * 0.75),
                0
              ) scale(1) rotate(calc(var(--rot) * 1.4));
            }
            100% {
              opacity: 0;
              transform: translate3d(
                var(--drift-x),
                var(--dist-y),
                0
              ) scale(0.7) rotate(calc(var(--rot) * 2));
            }
          }

          @keyframes heartSway {
            0% {
              transform: translateX(-14px) rotate(-6deg);
            }
            100% {
              transform: translateX(14px) rotate(6deg);
            }
          }
        `}</style>
      </div>
    );
  }
);

RisingHearts.displayName = 'RisingHearts';
