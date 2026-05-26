"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

// A flat white, seen from above — the iconic microfoam surface with latte art.
// Makes you feel the name. A thin progress ring around the rim fills with
// scroll (keeps the quiet progress function). The crema + art rotate slowly.
const RING_R = 36;
const RING_C = 2 * Math.PI * RING_R;

export function Pulse() {
  const { lang } = useLang();
  const tooltip = copy.pulse.tooltip[lang];

  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.5,
  });
  // Progress ring: dashoffset from full (empty) to 0 (full)
  const dashoffset = useTransform(smooth, [0, 1], [RING_C, 0]);

  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed top-6 right-6 w-[80px] h-[80px] z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={tooltip}
    >
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          {/* Crema surface — cream microfoam center to roasted edge */}
          <radialGradient id="crema" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#fbf2e6" />
            <stop offset="42%" stopColor="#f0d9b0" />
            <stop offset="78%" stopColor="#d8a86a" />
            <stop offset="100%" stopColor="#a6611f" />
          </radialGradient>
          {/* Porcelain rim */}
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fdf7ec" />
            <stop offset="100%" stopColor="#c9b48f" />
          </linearGradient>
          {/* Glossy sheen */}
          <radialGradient id="sheen" cx="35%" cy="28%" r="40%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          {/* Microfoam latte-art tone */}
          <linearGradient id="foam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdf6e8" />
            <stop offset="100%" stopColor="#f3e4c4" />
          </linearGradient>
        </defs>

        {/* Drop shadow on the dark surface */}
        <ellipse cx="40" cy="72" rx="30" ry="4" fill="rgba(0,0,0,0.45)" />

        {/* Progress ring — fills with scroll */}
        <circle
          cx="40"
          cy="40"
          r={RING_R}
          fill="none"
          stroke="rgba(245,220,179,0.12)"
          strokeWidth="1.5"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={RING_R}
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={RING_C}
          style={{ strokeDashoffset: dashoffset }}
          transform="rotate(-90 40 40)"
          opacity="0.8"
        />

        {/* Cup rim */}
        <circle
          cx="40"
          cy="40"
          r="30"
          fill="url(#rim)"
        />
        <circle
          cx="40"
          cy="40"
          r="30"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.6"
        />

        {/* Crema surface + latte art (rotates slowly) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "40px 40px" }}
        >
          <circle cx="40" cy="40" r="25.5" fill="url(#crema)" />

          {/* Rosetta latte art — central stem + mirrored leaves */}
          <g
            stroke="url(#foam)"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
            opacity="0.92"
          >
            {/* central stem */}
            <path d="M40 20 C 41 30, 39 40, 40 58" strokeWidth="1.3" />
            {/* leaf pairs (mirrored) */}
            <path d="M40 27 C 34 27, 31 31, 31 35 C 34 34, 38 32, 40 30" fill="url(#foam)" stroke="none" opacity="0.85" />
            <path d="M40 27 C 46 27, 49 31, 49 35 C 46 34, 42 32, 40 30" fill="url(#foam)" stroke="none" opacity="0.85" />
            <path d="M40 34 C 33 34, 29 38, 29 43 C 33 41, 38 39, 40 37" fill="url(#foam)" stroke="none" opacity="0.9" />
            <path d="M40 34 C 47 34, 51 38, 51 43 C 47 41, 42 39, 40 37" fill="url(#foam)" stroke="none" opacity="0.9" />
            <path d="M40 42 C 34 42, 31 46, 31 50 C 34 48, 38 46, 40 45" fill="url(#foam)" stroke="none" opacity="0.85" />
            <path d="M40 42 C 46 42, 49 46, 49 50 C 46 48, 42 46, 40 45" fill="url(#foam)" stroke="none" opacity="0.85" />
            {/* rounded base of the rosetta */}
            <path d="M40 52 C 37 54, 38 58, 40 59 C 42 58, 43 54, 40 52" fill="url(#foam)" stroke="none" opacity="0.9" />
          </g>
        </motion.g>

        {/* Glossy sheen (fixed, on top) */}
        <ellipse cx="32" cy="30" rx="14" ry="9" fill="url(#sheen)" />

        {/* Inner rim shadow for depth */}
        <circle
          cx="40"
          cy="40"
          r="25.5"
          fill="none"
          stroke="rgba(122,61,24,0.35)"
          strokeWidth="1"
        />
      </svg>

      {hover && (
        <motion.div
          initial={{ opacity: 0, x: 6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] tracking-wider uppercase text-text-soft"
        >
          {tooltip}
        </motion.div>
      )}
    </div>
  );
}
