"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { ambientStages } from "@/lib/colors";

const stops: number[] = ambientStages.map((s) => s.at);
const centers: string[] = ambientStages.map((s) => s.center);
const outers: string[] = ambientStages.map((s) => s.outer);

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();

  const center = useTransform(scrollYProgress, stops, centers);
  const outer = useTransform(scrollYProgress, stops, outers);

  const background = useTransform<string, string>(
    [center, outer] as MotionValue<string>[],
    ([c, o]: string[]) =>
      `radial-gradient(150% 110% at 50% 40%, ${c} 0%, ${o} 80%)`,
  );

  // Aurora warmth intensifies on Hero and Manifesto sections,
  // softens through HowItWorks/Mirror.
  const auroraIntensity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.42, 0.58, 0.85, 1],
    [0.85, 0.6, 1, 0.5, 0.6, 0.85],
  );

  return (
    <>
      {/* Base chocolate gradient */}
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-30"
        style={{ background }}
      />

      {/* Combined warm + ember + sage auroras in a single layer (perf). */}
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-20 pointer-events-none aurora-warm"
        style={{
          background:
            "radial-gradient(50% 50% at 22% 30%, rgba(245,220,179,0.55) 0%, rgba(232,154,75,0.38) 30%, rgba(200,102,42,0.18) 55%, rgba(200,102,42,0) 75%), " +
            "radial-gradient(35% 35% at 68% 22%, rgba(200,102,42,0.30) 0%, rgba(122,61,24,0.14) 40%, rgba(122,61,24,0) 75%)",
          opacity: auroraIntensity,
        }}
      />

      {/* Cool sage counterpoint — separate layer for independent drift */}
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-20 pointer-events-none aurora-cool"
        style={{
          background:
            "radial-gradient(45% 50% at 82% 70%, rgba(141,176,158,0.36) 0%, rgba(184,203,194,0.16) 35%, rgba(141,176,158,0) 70%)",
          opacity: auroraIntensity,
        }}
      />

      {/* Filmic grain */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 0.85  0 0 0 0 0.65  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <style>{`
        @keyframes aurora-warm {
          0%   { transform: translate3d(0%, 0%, 0); }
          50%  { transform: translate3d(4%, 3%, 0); }
          100% { transform: translate3d(0%, 0%, 0); }
        }
        @keyframes aurora-cool {
          0%   { transform: translate3d(0%, 0%, 0); }
          50%  { transform: translate3d(-4%, -3%, 0); }
          100% { transform: translate3d(0%, 0%, 0); }
        }
        .aurora-warm  { animation: aurora-warm  28s ease-in-out infinite; will-change: transform; }
        .aurora-cool  { animation: aurora-cool  32s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .aurora-warm, .aurora-cool { animation: none; }
        }
      `}</style>
    </>
  );
}
