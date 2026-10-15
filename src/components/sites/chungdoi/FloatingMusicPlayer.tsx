'use client';

import { useState, useEffect, RefObject } from 'react';
import { VolumeX, Sparkles, Music } from 'lucide-react';

interface FloatingMusicPlayerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  onTriggerCelebration?: () => void;
  isInvitationOpen?: boolean;
}

export function FloatingMusicPlayer({
  audioRef,
  onTriggerCelebration,
  isInvitationOpen = true,
}: FloatingMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSparkleActive, setIsSparkleActive] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Initial check
    setIsPlaying(!audio.paused);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.log('Playback error:', err);
      });
    }
  };

  const handleCelebrationClick = () => {
    setIsSparkleActive(true);
    setTimeout(() => setIsSparkleActive(false), 800);
    if (onTriggerCelebration) {
      onTriggerCelebration();
    }
  };

  if (!isInvitationOpen) return null;

  return (
    <aside
      aria-label="Điều khiển nhạc và hiệu ứng chúc mừng"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 animate-fade-in-down select-none"
    >
      {/* Celebration Replay Button */}
      {onTriggerCelebration && (
        <button
          type="button"
          onClick={handleCelebrationClick}
          className={`group relative flex items-center gap-1.5 px-3 py-2 rounded-full backdrop-blur-md border border-[#511419]/15 shadow-[0_4px_16px_rgba(81,20,25,0.12)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            isSparkleActive
              ? 'bg-[#511419] text-[#FAF5EE] scale-110 shadow-[0_6px_20px_rgba(81,20,25,0.35)]'
              : 'bg-[#FCF9F3]/90 text-[#511419] hover:bg-[#FAF5EE]'
          }`}
          title="Bắn pháo hoa & trái tim chúc mừng"
          aria-label="Bắn pháo hoa & trái tim chúc mừng"
        >
          <Sparkles
            className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${
              isSparkleActive ? 'animate-spin text-[#ffd700]' : 'text-[#d4af37]'
            }`}
          />
          <span className="text-xs font-cormorant font-semibold tracking-wide hidden xs:inline sm:inline">
            Chúc mừng
          </span>

          {/* Sparkle ripple glow */}
          <span
            className={`absolute -inset-1 rounded-full bg-[#d4af37]/20 blur-sm -z-10 transition-opacity duration-300 ${
              isSparkleActive ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </button>
      )}

      {/* Music Toggle Button */}
      <button
        type="button"
        onClick={togglePlay}
        className={`group relative flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full backdrop-blur-md border border-[#511419]/15 shadow-[0_4px_16px_rgba(81,20,25,0.12)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-[#FCF9F3]/90 hover:bg-[#FAF5EE] text-[#511419]`}
        title={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc cưới (I Do - 911)'}
        aria-label={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc cưới (I Do - 911)'}
      >
        {/* Vinyl Disc Icon */}
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
            isPlaying
              ? 'bg-[#511419] text-[#ffd700] animate-spin-slow shadow-[0_0_8px_rgba(81,20,25,0.4)]'
              : 'bg-[#511419]/15 text-[#511419]'
          }`}
        >
          <Music className="w-3.5 h-3.5" />
        </div>

        {/* Music Soundwave / Status */}
        <div className="flex items-center gap-1.5">
          {isPlaying ? (
            <div className="flex items-end gap-[2px] h-3.5 px-0.5">
              <span className="w-[2.5px] bg-[#511419] rounded-full animate-sound-wave-1 h-3" />
              <span className="w-[2.5px] bg-[#d4af37] rounded-full animate-sound-wave-2 h-2" />
              <span className="w-[2.5px] bg-[#511419] rounded-full animate-sound-wave-3 h-3.5" />
              <span className="w-[2.5px] bg-[#d4af37] rounded-full animate-sound-wave-4 h-1.5" />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-[#511419]/60" />
          )}

          <span className="text-[11px] font-cormorant font-semibold tracking-wider text-[#511419]/80 hidden md:inline">
            {isPlaying ? 'I Do - 911' : 'Bật nhạc'}
          </span>
        </div>
      </button>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes wave1 {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
        @keyframes wave2 {
          0%, 100% { height: 12px; }
          50% { height: 5px; }
        }
        @keyframes wave3 {
          0%, 100% { height: 6px; }
          50% { height: 14px; }
        }
        @keyframes wave4 {
          0%, 100% { height: 10px; }
          50% { height: 3px; }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-spin-slow {
          animation: spinSlow 4s linear infinite;
        }
        .animate-sound-wave-1 {
          animation: wave1 1.1s ease-in-out infinite;
        }
        .animate-sound-wave-2 {
          animation: wave2 0.9s ease-in-out infinite;
        }
        .animate-sound-wave-3 {
          animation: wave3 1.3s ease-in-out infinite;
        }
        .animate-sound-wave-4 {
          animation: wave4 0.8s ease-in-out infinite;
        }
      `}</style>
    </aside>
  );
}
