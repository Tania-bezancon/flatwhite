"use client";

// Fully static, GPU-cheap atmosphere.
// - Base chocolate gradient: a plain CSS background (NO scroll-driven
//   string recompute → no full-screen repaint on scroll).
// - Auroras: static radial gradients, no transform animation, no
//   will-change → no permanently-promoted full-screen layers.
// The morph-through-the-day effect was barely visible on the chocolate
// palette anyway; the cost (a full-viewport repaint every scroll frame)
// was not worth it.
export function AmbientBackground() {
  return (
    <>
      {/* Base chocolate gradient (static) */}
      <div
        aria-hidden
        className="fixed inset-0 -z-30"
        style={{
          background:
            "radial-gradient(150% 110% at 50% 40%, #2a180c 0%, #120802 80%)",
        }}
      />

      {/* Warm + ember aurora (static) */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 22% 30%, rgba(245,220,179,0.5) 0%, rgba(232,154,75,0.34) 30%, rgba(200,102,42,0.16) 55%, rgba(200,102,42,0) 75%), " +
            "radial-gradient(35% 35% at 68% 22%, rgba(200,102,42,0.26) 0%, rgba(122,61,24,0.12) 40%, rgba(122,61,24,0) 75%), " +
            "radial-gradient(45% 50% at 82% 72%, rgba(141,176,158,0.30) 0%, rgba(184,203,194,0.14) 35%, rgba(141,176,158,0) 70%)",
        }}
      />

      {/* Filmic grain (static bitmap, cheap) */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 0.85  0 0 0 0 0.65  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
}
