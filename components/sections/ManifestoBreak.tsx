"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ManifestoBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.45, once: false });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Portal grows as we scroll into view, shrinks back as we leave.
  const portalScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.85, 1, 1, 0.92],
  );
  const portalOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.85],
    [0, 1, 1, 0.6],
  );

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Turrell portal — a large luminous arch/disc behind the text */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] pointer-events-none"
        style={{
          width: "min(940px, 78vw)",
          height: "min(940px, 78vw)",
          opacity: portalOpacity,
          scale: portalScale,
        }}
      >
        {/* Outer bloom */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(249,238,212,0.42) 0%, rgba(232,154,75,0.32) 22%, rgba(200,102,42,0.22) 42%, rgba(122,61,24,0.10) 65%, rgba(0,0,0,0) 80%)",
            filter: "blur(30px)",
          }}
        />
        {/* Inner glow disc — the brightest core */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(circle, rgba(252,245,228,0.55) 0%, rgba(245,220,179,0.35) 40%, rgba(232,154,75,0.12) 70%, rgba(232,154,75,0) 100%)",
            filter: "blur(8px)",
          }}
        />
        {/* Thin ring — the portal edge */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "55%",
            height: "55%",
            border: "1px solid rgba(249,238,212,0.18)",
            boxShadow:
              "0 0 60px rgba(249,238,212,0.25), inset 0 0 80px rgba(232,154,75,0.15)",
          }}
        />
      </motion.div>

      {/* Floor reflection — light spilling onto the chocolate floor */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(122,61,24,0.32) 0%, rgba(200,102,42,0.18) 25%, rgba(232,154,75,0.06) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Subtle vertical light shaft for "doorway" feel */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none"
        style={{
          width: "min(280px, 24vw)",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(249,238,212,0.10) 0%, rgba(232,154,75,0.05) 60%, rgba(232,154,75,0) 100%)",
          filter: "blur(20px)",
          mixBlendMode: "screen",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-16"
        >
          02 · The asymmetry
        </motion.span>

        <motion.h2
          className="font-light leading-[0.95]"
          style={{
            fontSize: "clamp(56px, 9vw, 144px)",
            letterSpacing: "-0.04em",
            color: "var(--text)",
            textShadow:
              "0 2px 40px rgba(232,154,75,0.25), 0 0 80px rgba(249,238,212,0.10)",
          }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        >
          Recruiters have AI.
          <br />
          <span className="text-text-soft">You don&apos;t.</span>
        </motion.h2>

        <motion.div
          aria-hidden
          className="mt-16 h-px origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--cream) 50%, transparent 100%)",
            width: "min(480px, 60vw)",
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 1.4,
            delay: 1.4,
            ease: [0.32, 0.72, 0, 1],
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="mt-10 text-text-soft max-w-[460px] text-[14px] leading-[1.6]"
        >
          Algorithms scan, score and price you in milliseconds.
          You&apos;ve been on the wrong side of that math.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="mt-6 font-mono text-[11px] tracking-[0.32em] uppercase text-[var(--amber)]"
        >
          ↓ until now
        </motion.p>
      </div>
    </section>
  );
}
