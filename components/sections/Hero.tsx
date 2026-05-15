"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

export function Hero() {
  const { lang } = useLang();
  const c = copy.hero;
  const cta = copy.brand.discuss[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-[1100px] flex flex-col items-center text-center mt-20">
        <motion.span
          key={`badge-${lang}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-12 inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[10px] tracking-[0.28em] uppercase text-text-soft border border-[var(--edge)] backdrop-blur-md bg-[var(--glass)]"
        >
          <span className="w-1 h-1 rounded-full bg-[var(--amber)]" />
          {c.badge[lang]}
        </motion.span>

        <h1
          key={`statement-${lang}`}
          className="text-text font-light leading-[0.95]"
          style={{
            fontSize: "clamp(56px, 9vw, 140px)",
            letterSpacing: "-0.04em",
          }}
        >
          {c.statement[lang].map((word, i) => (
            <motion.span
              key={`${lang}-${i}`}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.5 + i * 0.18,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          key={`subline-${lang}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.32, 0.72, 0, 1] }}
          className="mt-10 text-text-soft max-w-[520px]"
          style={{
            fontSize: "clamp(15px, 1.3vw, 18px)",
            lineHeight: 1.55,
            letterSpacing: "-0.005em",
          }}
        >
          {c.subline[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9, ease: [0.32, 0.72, 0, 1] }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/tania-bezancon/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-text text-deep pl-6 pr-2 py-2 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--cream)] transition-colors"
            style={{
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(249,238,212,0.1)",
            }}
          >
            {cta}
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-full"
              style={{ background: "rgba(29,15,6,0.08)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <span
            key={`caption-${lang}`}
            className="font-mono text-[10px] tracking-[0.28em] uppercase text-text-faint"
          >
            {c.caption[lang]}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.32em] uppercase text-text-dim"
      >
        <span>{c.scroll[lang]}</span>
        <span className="w-px h-8 bg-gradient-to-b from-[var(--text-dim)] to-transparent" />
      </motion.div>
    </section>
  );
}
