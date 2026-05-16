"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

// The Reading Mark — a personal abstract glyph for flatwhite.
// A horizon line. A dot that rises through it with scroll progress.
// "Rise above the market" — the brand promise as pure geometry.
export function Pulse() {
  const { lang } = useLang();
  const tooltip = copy.pulse.tooltip[lang];

  const { scrollYProgress } = useScroll();
  // Smooth the scroll for nicer motion of the dot
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.5,
  });
  // Dot y: from below the horizon (y=44) up to above (y=20)
  const dotY = useTransform(smooth, [0, 1], [44, 20]);
  // The dot brightens as it rises above the line
  const dotOpacity = useTransform(smooth, [0, 0.45, 0.5, 1], [0.55, 0.6, 1, 1]);
  // The trailing halo intensity also grows
  const haloOpacity = useTransform(smooth, [0, 1], [0.25, 0.7]);

  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed top-6 right-6 w-[72px] h-[72px] z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={tooltip}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.05 }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
          <defs>
            <radialGradient id="rmark-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(58,36,20,0.7)" />
              <stop offset="60%" stopColor="rgba(29,15,6,0.6)" />
              <stop offset="100%" stopColor="rgba(18,8,2,0.0)" />
            </radialGradient>
            <radialGradient id="rmark-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(232,154,75,0.55)" />
              <stop offset="60%" stopColor="rgba(232,154,75,0.10)" />
              <stop offset="100%" stopColor="rgba(232,154,75,0)" />
            </radialGradient>
          </defs>

          {/* Soft outer halo (always present) */}
          <motion.circle
            cx="32"
            cy="32"
            r="30"
            fill="url(#rmark-halo)"
            style={{ opacity: haloOpacity }}
          />

          {/* Inner disc background */}
          <circle cx="32" cy="32" r="22" fill="url(#rmark-bg)" />

          {/* Thin outer ring */}
          <circle
            cx="32"
            cy="32"
            r="22"
            fill="none"
            stroke="rgba(245,220,179,0.35)"
            strokeWidth="0.6"
          />

          {/* The horizon line — the market */}
          <line
            x1="20"
            y1="32"
            x2="44"
            y2="32"
            stroke="rgba(245,220,179,0.7)"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          {/* Subtle marker ticks on the horizon */}
          <line
            x1="20"
            y1="31"
            x2="20"
            y2="33"
            stroke="rgba(245,220,179,0.45)"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <line
            x1="44"
            y1="31"
            x2="44"
            y2="33"
            stroke="rgba(245,220,179,0.45)"
            strokeWidth="0.5"
            strokeLinecap="round"
          />

          {/* The dot — you. Rises above the horizon with scroll. */}
          <motion.g style={{ y: dotY, opacity: dotOpacity }}>
            {/* Glow under the dot */}
            <circle
              cx="32"
              cy="0"
              r="5"
              fill="rgba(249,238,212,0.25)"
            />
            {/* Bright core */}
            <circle cx="32" cy="0" r="2" fill="#fbf2e6" />
            {/* Pulsing aura */}
            <motion.circle
              cx="32"
              cy="0"
              r="2"
              fill="none"
              stroke="rgba(249,238,212,0.65)"
              strokeWidth="0.6"
              animate={{ r: [2, 6, 2], opacity: [0.65, 0, 0.65] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.g>
        </svg>
      </motion.div>

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
