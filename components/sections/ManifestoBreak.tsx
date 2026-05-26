"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

// Redacted profile rows (widths %) — the "candidate" being scanned.
const PROFILE_ROWS = [
  [70, 22],
  [40, 30, 18],
  [55, 33],
  [28, 24, 38],
  [60, 26],
];

export function ManifestoBreak() {
  const { lang } = useLang();
  const c = copy.manifesto;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15, once: false });
  const verdicts = c.verdicts[lang] as { k: string; v: string }[];

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28"
    >
      {/* Cold clinical vignette behind the terminal — the machine's domain.
          Cooler than the warm chocolate around it (the asymmetry, felt). */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 42%, rgba(141,176,158,0.10) 0%, rgba(20,28,30,0.35) 45%, rgba(0,0,0,0) 75%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1000px] flex flex-col items-center">
        <motion.span
          key={`code-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-4"
        >
          {c.code[lang]}
        </motion.span>

        <motion.p
          key={`framing-${lang}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--sage)] mb-12"
        >
          {c.framing[lang]}
        </motion.p>

        {/* THE SCAN TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-full max-w-[640px] rounded-2xl overflow-hidden backdrop-blur-[8px]"
          style={{
            background:
              "linear-gradient(160deg, rgba(141,176,158,0.06) 0%, rgba(18,22,24,0.6) 100%)",
            border: "1px solid rgba(184,203,194,0.18)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(184,203,194,0.12)",
          }}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-5 py-3 border-b"
            style={{ borderColor: "rgba(184,203,194,0.14)" }}
          >
            <div className="flex items-center gap-2.5">
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--sage)" }}
                animate={inView ? { opacity: [1, 0.3, 1] } : { opacity: 0.5 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-text-soft">
                {c.scanLabel[lang]}
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-dim">
              {c.scanRef[lang]}
            </span>
          </div>

          {/* Scan body — redacted profile + sweeping beam */}
          <div className="relative px-5 py-6 overflow-hidden">
            {/* Redacted profile rows */}
            <div className="flex flex-col gap-3">
              {PROFILE_ROWS.map((row, i) => (
                <div key={i} className="flex gap-2">
                  {row.map((w, j) => (
                    <div
                      key={j}
                      className="h-2.5 rounded-sm"
                      style={{
                        width: `${w}%`,
                        background: "rgba(184,203,194,0.12)",
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Sweeping scan beam */}
            {inView && (
              <motion.div
                className="absolute left-0 right-0 pointer-events-none"
                style={{
                  height: "40px",
                  top: 0,
                  background:
                    "linear-gradient(to bottom, rgba(141,176,158,0) 0%, rgba(184,203,194,0.18) 50%, rgba(141,176,158,0) 100%)",
                  borderTop: "1px solid rgba(200,217,210,0.6)",
                  boxShadow: "0 0 18px rgba(184,203,194,0.4)",
                }}
                animate={{ top: ["-10%", "110%"] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.4,
                }}
              />
            )}
          </div>

          {/* Verdict readouts — the cold machine output */}
          <div
            className="px-5 py-4 border-t flex flex-col gap-2.5"
            style={{
              borderColor: "rgba(184,203,194,0.14)",
              background: "rgba(0,0,0,0.2)",
            }}
          >
            {verdicts.map((d, i) => (
              <motion.div
                key={d.k}
                initial={{ opacity: 0, x: -8 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.8 + i * 0.18,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="flex items-center justify-between"
              >
                <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-text-dim">
                  {d.k}
                </span>
                <span
                  className="font-mono text-[12px] tracking-[0.04em]"
                  style={{
                    color:
                      i >= 2 ? "var(--mist)" : "var(--text-soft)",
                  }}
                >
                  {d.v}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The statement */}
        <motion.h2
          key={`h2-${lang}`}
          className="mt-16 text-center font-light leading-[1.0]"
          style={{
            fontSize: "clamp(40px, 6vw, 92px)",
            letterSpacing: "-0.035em",
            color: "var(--text)",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {c.statement[lang][0]}{" "}
          <span className="text-text-soft">{c.statement[lang][1]}</span>
        </motion.h2>

        {/* Until now — the warm pivot */}
        <motion.p
          key={`u-${lang}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 font-mono text-[11px] tracking-[0.32em] uppercase text-[var(--amber)]"
          style={{ textShadow: "0 0 20px rgba(232,154,75,0.4)" }}
        >
          {c.untilNow[lang]}
        </motion.p>
      </div>
    </section>
  );
}
