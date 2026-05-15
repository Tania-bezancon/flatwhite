"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

export function HowItWorks() {
  const { lang } = useLang();
  const c = copy.how;
  const steps = c.steps[lang];

  return (
    <section
      id="how"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-[1000px] flex flex-col items-center">
        <motion.span
          key={`code-${lang}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="block font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-6"
        >
          {c.code[lang]}
        </motion.span>

        <motion.h2
          key={`h2-${lang}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-light text-text text-center max-w-[820px]"
          style={{
            fontSize: "clamp(36px, 5.4vw, 72px)",
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
          }}
        >
          {c.statement[lang][0]}{" "}
          <span className="text-text-soft">{c.statement[lang][1]}</span>
        </motion.h2>

        <motion.p
          key={`p-${lang}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-text-soft max-w-[620px] text-center"
          style={{
            fontSize: "clamp(15px, 1.3vw, 18px)",
            lineHeight: 1.55,
          }}
        >
          {c.subline[lang]}
        </motion.p>

        <ul className="mt-20 w-full flex flex-col">
          {steps.map((s, i) => (
            <motion.li
              key={`${lang}-${s.code}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: i * 0.12,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_320px_1fr] gap-x-8 md:gap-x-12 items-baseline border-t py-10"
              style={{ borderTopColor: "var(--edge)" }}
            >
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--amber)]">
                {s.code}
              </span>
              <h3
                className="font-light text-text"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 44px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </h3>
              <div className="col-span-2 md:col-span-1 mt-3 md:mt-0 flex flex-col gap-3">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-text-dim">
                  {s.detail}
                </span>
                <p className="text-text-soft text-[15px] leading-[1.55] max-w-[400px]">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
          <li
            className="border-t"
            style={{ borderTopColor: "var(--edge)" }}
            aria-hidden
          />
        </ul>
      </div>
    </section>
  );
}
