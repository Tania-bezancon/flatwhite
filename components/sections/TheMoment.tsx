"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

export function TheMoment() {
  const { lang } = useLang();
  const c = copy.moment;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const fadeIn = useTransform(scrollYProgress, [0.0, 0.4], [0, 1]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={ref}
      id="moment"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <motion.div
        style={{ opacity: fadeIn }}
        className="w-full max-w-[860px] flex flex-col items-center text-center"
      >
        <span
          key={`code-${lang}`}
          className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-12"
        >
          {c.code[lang]}
        </span>

        <h2
          key={`h2-${lang}`}
          className="text-text font-light leading-[1.05]"
          style={{
            fontSize: "clamp(36px, 5.4vw, 76px)",
            letterSpacing: "-0.025em",
          }}
        >
          {c.statement[lang][0]}
          <br />
          <span className="text-text-soft">{c.statement[lang][1]}</span>
        </h2>

        <p
          key={`p-${lang}`}
          className="mt-10 text-text-soft max-w-[500px]"
          style={{
            fontSize: "clamp(15px, 1.3vw, 18px)",
            lineHeight: 1.55,
          }}
        >
          {c.subline[lang]}
        </p>
      </motion.div>

      {/* Floating glass disc with rotating ring */}
      <div className="relative mt-20 w-[180px] h-[180px]" aria-hidden>
        <motion.div
          className="absolute inset-0 rounded-full border border-[var(--edge)]"
          style={{ rotate: ringRotate }}
        >
          <span
            className="absolute -top-[3px] left-1/2 -translate-x-1/2 block w-1.5 h-1.5 rounded-full"
            style={{
              background: "var(--cream)",
              boxShadow: "0 0 10px rgba(245,220,179,0.9)",
            }}
          />
        </motion.div>
        <div
          className="absolute inset-[18px] rounded-full backdrop-blur-md"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(245,220,179,0.18) 0%, rgba(245,220,179,0) 60%), var(--glass)",
            border: "1px solid var(--edge)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.4)",
          }}
        />
        <div className="absolute inset-0 grid place-items-center font-mono text-[10px] tracking-[0.3em] uppercase text-text-soft">
          {c.discLabel[lang]}
        </div>
      </div>
    </section>
  );
}
