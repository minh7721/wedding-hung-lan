import confetti from 'canvas-confetti';

// Wedding theme color palettes
export const WEDDING_COLORS = {
  gold: ['#d4af37', '#ffd700', '#fef08a', '#ffffff', '#eab308'],
  burgundy: ['#511419', '#781d27', '#9f1239', '#be123c', '#fb7185'],
  roseGold: ['#f43f5e', '#fb7185', '#fda4af', '#fed7aa', '#ffffff'],
  celebrationMix: [
    '#d4af37', // Gold
    '#ffd700', // Bright Gold
    '#511419', // Deep Burgundy
    '#9f1239', // Crimson
    '#fb7185', // Rose pink
    '#fff1f2', // Soft white/champagne
    '#fde047', // Shimmering yellow
  ],
};

// Safe shape creation for browser
function getHeartShape() {
  if (typeof window === 'undefined') return undefined;
  try {
    return confetti.shapeFromPath({
      path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
    });
  } catch {
    return undefined;
  }
}

/**
 * Fires a single realistic firework burst (pháo hoa) at specific coordinates
 */
export function fireworkBurst(x: number, y: number, colors = WEDDING_COLORS.celebrationMix) {
  if (typeof window === 'undefined') return;

  const heartShape = getHeartShape();
  const shapes: confetti.Shape[] = heartShape ? ['circle', 'star', heartShape] : ['circle', 'star'];

  // Main burst
  confetti({
    particleCount: 55,
    angle: 90,
    spread: 360,
    startVelocity: 28,
    decay: 0.92,
    gravity: 0.65,
    origin: { x, y },
    colors,
    shapes,
    scalar: 1.1,
    ticks: 80,
    zIndex: 9999,
  });

  // Sparkle tail secondary burst
  setTimeout(() => {
    confetti({
      particleCount: 25,
      angle: 90,
      spread: 360,
      startVelocity: 16,
      decay: 0.9,
      gravity: 0.5,
      origin: { x, y },
      colors: ['#ffffff', '#fef08a', '#ffd700'],
      shapes: ['star', 'circle'],
      scalar: 0.8,
      ticks: 60,
      zIndex: 9999,
    });
  }, 100);
}

/**
 * Confetti cannon blast from left and right edges (pháo giấy)
 */
export function confettiCannons() {
  if (typeof window === 'undefined') return;

  const heartShape = getHeartShape();
  const shapes: confetti.Shape[] = heartShape ? ['circle', 'square', heartShape] : ['circle', 'square'];

  // Left cannon
  confetti({
    particleCount: 65,
    angle: 60,
    spread: 70,
    origin: { x: 0.05, y: 0.85 },
    colors: WEDDING_COLORS.celebrationMix,
    shapes,
    startVelocity: 55,
    gravity: 0.9,
    scalar: 1.1,
    ticks: 200,
    zIndex: 9999,
  });

  // Right cannon
  confetti({
    particleCount: 65,
    angle: 120,
    spread: 70,
    origin: { x: 0.95, y: 0.85 },
    colors: WEDDING_COLORS.celebrationMix,
    shapes,
    startVelocity: 55,
    gravity: 0.9,
    scalar: 1.1,
    ticks: 200,
    zIndex: 9999,
  });
}

/**
 * Center celebration burst directly from the invitation button
 */
export function centerBurst(originX = 0.5, originY = 0.6) {
  if (typeof window === 'undefined') return;

  const heartShape = getHeartShape();
  const shapes: confetti.Shape[] = heartShape ? ['circle', 'star', heartShape] : ['circle', 'star'];

  confetti({
    particleCount: 85,
    angle: 90,
    spread: 110,
    origin: { x: originX, y: originY },
    colors: WEDDING_COLORS.celebrationMix,
    shapes,
    startVelocity: 42,
    gravity: 0.85,
    scalar: 1.15,
    ticks: 220,
    zIndex: 9999,
  });
}

/**
 * Soft raining golden & rose glitter from top
 */
export function gentleGlitterRain() {
  if (typeof window === 'undefined') return;

  confetti({
    particleCount: 35,
    angle: 90,
    spread: 160,
    origin: { x: 0.5, y: 0.05 },
    colors: ['#ffd700', '#f43f5e', '#ffffff', '#eab308'],
    shapes: ['star', 'circle'],
    startVelocity: 15,
    gravity: 0.5,
    scalar: 0.9,
    drift: 0.1,
    ticks: 260,
    zIndex: 9999,
  });
}

/**
 * Triggers the complete coordinated wedding celebration:
 * Fireworks + Confetti Cannons + Shimmer Rain
 */
export function triggerGrandCelebration(originX = 0.5, originY = 0.6) {
  if (typeof window === 'undefined') return;

  // 1. Immediate center blast from the card button
  centerBurst(originX, originY);

  // 2. High firework burst 1 (center-left)
  setTimeout(() => {
    fireworkBurst(0.35, 0.3, WEDDING_COLORS.gold);
  }, 180);

  // 3. Side cannons (left & right)
  setTimeout(() => {
    confettiCannons();
  }, 320);

  // 4. High firework burst 2 (center-right)
  setTimeout(() => {
    fireworkBurst(0.65, 0.25, WEDDING_COLORS.burgundy);
  }, 600);

  // 5. Firework burst 3 (center sky)
  setTimeout(() => {
    fireworkBurst(0.5, 0.2, WEDDING_COLORS.roseGold);
  }, 1100);

  // 6. Secondary side cannons & glitter shower
  setTimeout(() => {
    gentleGlitterRain();
    fireworkBurst(0.25, 0.35, WEDDING_COLORS.celebrationMix);
  }, 1700);

  // 7. Grand finale burst
  setTimeout(() => {
    fireworkBurst(0.75, 0.32, WEDDING_COLORS.gold);
    gentleGlitterRain();
  }, 2400);
}
