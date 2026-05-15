"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// A thin vertical line that grows from top → bottom as the page scrolls.
// Steam-in-reverse: connects the 7 sections into one narrative ribbon.
export function ScrollThread() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    mass: 0.6,
  });
  const heightPct = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const dotY = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden
      className="fixed top-0 right-8 z-30 pointer-events-none hidden md:block"
      style={{ height: "100vh" }}
    >
      {/* Static track */}
      <div
        className="absolute top-0 bottom-0 right-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(245,220,179,0.10) 12%, rgba(245,220,179,0.10) 88%, transparent 100%)",
        }}
      />

      {/* Animated progress line */}
      <motion.div
        className="absolute top-0 right-0 w-px"
        style={{
          height: heightPct,
          background:
            "linear-gradient(to bottom, transparent 0%, var(--amber) 30%, var(--cream) 70%, transparent 100%)",
          boxShadow: "0 0 8px rgba(232,154,75,0.5)",
        }}
      />

      {/* Glowing dot */}
      <motion.div
        className="absolute right-[-3px] w-[7px] h-[7px] rounded-full"
        style={{
          top: dotY,
          background: "var(--cream)",
          boxShadow:
            "0 0 12px var(--amber), 0 0 24px rgba(232,154,75,0.6), 0 0 4px var(--cream)",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
