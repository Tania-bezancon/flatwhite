"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";

export function GlobalHeader() {
  const { lang, setLang } = useLang();

  return (
    <header className="fixed top-6 left-6 z-50 flex flex-col gap-2 select-none">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
        className="flex items-center gap-2"
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{
            background: "var(--amber)",
            boxShadow: "0 0 10px rgba(232,154,75,0.9)",
          }}
        />
        <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-text-soft">
          flatwhite
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex items-center gap-2 font-mono text-[10px] tracking-[0.32em] uppercase"
      >
        <button
          type="button"
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          aria-label="Switch to English"
          className="transition-colors"
          style={{
            color: lang === "en" ? "var(--cream)" : "var(--text-dim)",
          }}
        >
          {lang === "en" ? "[ EN ]" : "EN"}
        </button>
        <span style={{ color: "var(--text-dim)" }}>·</span>
        <button
          type="button"
          onClick={() => setLang("fr")}
          aria-pressed={lang === "fr"}
          aria-label="Passer en français"
          className="transition-colors"
          style={{
            color: lang === "fr" ? "var(--cream)" : "var(--text-dim)",
          }}
        >
          {lang === "fr" ? "[ FR ]" : "FR"}
        </button>
      </motion.div>
    </header>
  );
}
