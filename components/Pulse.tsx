"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

// Flat white in a porcelain cup. Liquid level rises with scroll progress.
// Foam crema sits on top of an espresso body.
export function Pulse() {
  const { lang } = useLang();
  const tooltip = copy.pulse.tooltip[lang];
  const { scrollYProgress } = useScroll();
  // y position of the liquid surface — falls from 56 (low) to 22 (high)
  const surfaceY = useTransform(scrollYProgress, [0, 1], [56, 22]);
  // foam grows from a sliver to fill the upper third
  const foamH = useTransform(scrollYProgress, [0, 1], [3, 14]);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed top-6 right-6 w-[78px] h-[92px] z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={tooltip}
    >
      <motion.div
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 78 92" className="w-full h-full" aria-hidden>
          <defs>
            {/* Porcelain cup body — warm white with cream undertone */}
            <linearGradient id="porcelain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbf2e6" />
              <stop offset="55%" stopColor="#e6d2b1" />
              <stop offset="100%" stopColor="#9a7c54" />
            </linearGradient>
            {/* Inside shadow */}
            <radialGradient id="cupInside" cx="50%" cy="20%" r="65%">
              <stop offset="0%" stopColor="#2a180c" stopOpacity="0.0" />
              <stop offset="80%" stopColor="#1d0f06" stopOpacity="0.55" />
            </radialGradient>
            {/* Espresso body */}
            <linearGradient id="espresso" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a2414" />
              <stop offset="60%" stopColor="#2a180c" />
              <stop offset="100%" stopColor="#1d0f06" />
            </linearGradient>
            {/* Crema foam */}
            <linearGradient id="foam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbf2e6" />
              <stop offset="55%" stopColor="#f5dcb3" />
              <stop offset="100%" stopColor="#e89a4b" />
            </linearGradient>
            {/* Cup body clip — slight tulip shape */}
            <clipPath id="cupInner">
              <path d="M18 22 Q18 19 22 19 L56 19 Q60 19 60 22 L57 64 Q55 70 50 70 L28 70 Q23 70 21 64 Z" />
            </clipPath>
          </defs>

          {/* Saucer — ellipse below */}
          <ellipse
            cx="39"
            cy="78"
            rx="28"
            ry="4.5"
            fill="url(#porcelain)"
            stroke="#9a7c54"
            strokeOpacity="0.4"
            strokeWidth="0.6"
          />
          <ellipse
            cx="39"
            cy="77.5"
            rx="24"
            ry="3"
            fill="#1d0f06"
            opacity="0.15"
          />
          {/* Saucer drop shadow on the chocolate ground */}
          <ellipse
            cx="39"
            cy="83"
            rx="30"
            ry="2.5"
            fill="#000"
            opacity="0.35"
            filter="blur(2px)"
          />

          {/* Cup handle (right side) */}
          <path
            d="M60 30 Q70 30 70 40 Q70 50 60 50"
            fill="none"
            stroke="url(#porcelain)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M60 30 Q70 30 70 40 Q70 50 60 50"
            fill="none"
            stroke="#9a7c54"
            strokeOpacity="0.35"
            strokeWidth="0.6"
            strokeLinecap="round"
          />

          {/* Cup body */}
          <path
            d="M18 22 Q18 19 22 19 L56 19 Q60 19 60 22 L57 64 Q55 70 50 70 L28 70 Q23 70 21 64 Z"
            fill="url(#porcelain)"
            stroke="#9a7c54"
            strokeOpacity="0.45"
            strokeWidth="0.6"
          />

          {/* Interior */}
          <g clipPath="url(#cupInner)">
            {/* Liquid (espresso) */}
            <motion.rect
              x="14"
              width="50"
              height="60"
              fill="url(#espresso)"
              style={{ y: surfaceY }}
            />
            {/* Crema foam layer on top of liquid surface */}
            <motion.rect
              x="14"
              width="50"
              fill="url(#foam)"
              style={{ y: surfaceY, height: foamH }}
            />
            {/* Latte-art-like elliptical highlight on the foam */}
            <motion.ellipse
              cx="39"
              rx="14"
              ry="1.2"
              fill="#ffffff"
              opacity="0.55"
              style={{ cy: surfaceY }}
            />
            {/* Interior shadow */}
            <rect x="14" y="19" width="50" height="55" fill="url(#cupInside)" />
          </g>

          {/* Rim highlight (top of cup edge) */}
          <ellipse
            cx="39"
            cy="20"
            rx="20"
            ry="2.4"
            fill="none"
            stroke="#fbf2e6"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />

          {/* Side specular */}
          <path
            d="M22 24 Q23 40 26 60"
            stroke="#fbf2e6"
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />

          {/* Steam wisps */}
          <g className="steam" opacity="0.55">
            <path
              d="M30 16 Q33 12 30 6 Q27 2 30 -2"
              stroke="#fbf2e6"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M40 14 Q43 10 40 4 Q37 0 40 -4"
              stroke="#fbf2e6"
              strokeWidth="1.1"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M50 16 Q47 12 50 6"
              stroke="#fbf2e6"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
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

      <style>{`
        @keyframes steam-rise {
          0%, 100% { opacity: 0.35; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(-1px); }
        }
        .steam { animation: steam-rise 4s ease-in-out infinite; transform-origin: center bottom; }
        @media (prefers-reduced-motion: reduce) {
          .steam { animation: none; }
        }
      `}</style>
    </div>
  );
}
