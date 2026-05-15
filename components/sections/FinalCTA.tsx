"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section
      id="final"
      className="relative min-h-screen flex flex-col items-center justify-between px-6 pt-32 pb-12"
    >
      {/* Closing statement */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[1000px] text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-12"
        >
          The promise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
          className="text-text font-light leading-[1.0]"
          style={{
            fontSize: "clamp(44px, 6.6vw, 100px)",
            letterSpacing: "-0.04em",
          }}
        >
          Sell yourself
          <br />
          <span className="text-text-soft">at the right price.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="mt-10 text-text-soft max-w-[540px]"
          style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.55,
          }}
        >
          Be visible at your true value. Every morning, a quiet read of where
          you stand — and the one move that moves you forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.32, 0.72, 0, 1] }}
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
            Let&apos;s discuss
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
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-text-faint">
            Lives in Claude · No dashboard · No noise
          </span>
        </motion.div>
      </div>

      {/* Sea View Lab attribution footer */}
      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="w-full max-w-[1180px] mt-24 pt-12 border-t"
        style={{ borderTopColor: "var(--edge)" }}
      >
        <div className="flex items-center gap-2 mb-8">
          <span
            className="inline-block w-1 h-1 rounded-full"
            style={{
              background: "var(--amber)",
              boxShadow: "0 0 8px rgba(232,154,75,0.8)",
            }}
          />
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint">
            Experiment · Agentic Tools
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 mb-16">
          <p
            className="text-text-soft"
            style={{
              fontSize: "clamp(15px, 1.2vw, 17px)",
              lineHeight: 1.55,
              letterSpacing: "-0.005em",
            }}
          >
            <span className="text-text">flatwhite</span> is an experimental
            interface by Sea View Lab — exploring what agentic tools can
            become when they live inside the workflow you already use, not
            in a new chat window.
          </p>
          <p
            className="text-text-soft"
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              letterSpacing: "-0.005em",
            }}
          >
            Sea View Lab builds experimental projects to push what&apos;s
            possible with agentic, voice-first tools — interfaces that
            quietly fit into the way you already work.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint">
              An experiment by
            </span>
            <span
              className="font-light text-text"
              style={{
                fontSize: "clamp(28px, 2.8vw, 40px)",
                letterSpacing: "-0.025em",
                lineHeight: 1,
              }}
            >
              Sea View Lab
            </span>
          </div>

          <nav
            aria-label="Sea View Lab links"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.28em] uppercase text-text-dim"
          >
            <FooterLink href="https://seaviewlab.com">sea view lab</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/tania-bezancon/">
              linkedin
            </FooterLink>
            <FooterLink href="https://taniabezancon.netlify.app/en">
              portfolio
            </FooterLink>
            <FooterLink href="https://github.com/Tania-bezancon/flatwhite">
              github
            </FooterLink>
          </nav>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 font-mono text-[9px] tracking-[0.28em] uppercase text-text-dim/70">
          <span>flatwhite v0.1</span>
          <span>Made in Barcelona · 2026</span>
        </div>
      </motion.footer>
    </section>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 hover:text-text-soft transition-colors"
    >
      <span>{children}</span>
      <svg
        width="9"
        height="9"
        viewBox="0 0 12 12"
        fill="none"
        className="opacity-50 group-hover:opacity-100 transition-opacity"
      >
        <path
          d="M4 8L8 4M8 4H4.5M8 4V7.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
