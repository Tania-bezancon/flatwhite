"use client";

import { motion } from "framer-motion";

// 3 floating glass cards — what you wake up to each morning.
// Mock content only, no real product UI.
export function Artifact() {
  return (
    <section
      id="artifact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28"
    >
      <div className="w-full max-w-[1180px] flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="block font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-6"
        >
          —— The artifact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-light text-text text-center max-w-[760px] mb-20"
          style={{
            fontSize: "clamp(28px, 3.6vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          What you wake up to.{" "}
          <span className="text-text-soft">
            One artifact, every morning at 7am.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {/* Card 1 — Daily Read with sparkline */}
          <GlassCard
            label="Daily read"
            delay={0}
            tilt={-1.5}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-text-dim">
                MAY · 13
              </span>
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--amber)]">
                ↑ 4
              </span>
            </div>
            <div className="text-text font-light text-[28px] leading-none mb-1">
              Senior tier
            </div>
            <div className="text-text-soft text-[13px] mb-6">
              You crossed the threshold last week.
            </div>
            {/* Mock sparkline */}
            <svg viewBox="0 0 240 60" className="w-full h-[60px]" aria-hidden>
              <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(232,154,75,0.45)" />
                  <stop offset="100%" stopColor="rgba(232,154,75,0)" />
                </linearGradient>
              </defs>
              <path
                d="M 0 45 L 30 42 L 60 38 L 90 40 L 120 32 L 150 28 L 180 22 L 210 18 L 240 12 L 240 60 L 0 60 Z"
                fill="url(#sparkFill)"
              />
              <path
                d="M 0 45 L 30 42 L 60 38 L 90 40 L 120 32 L 150 28 L 180 22 L 210 18 L 240 12"
                fill="none"
                stroke="var(--cream)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="240" cy="12" r="3" fill="var(--cream)" />
              <circle
                cx="240"
                cy="12"
                r="6"
                fill="none"
                stroke="var(--cream)"
                strokeOpacity="0.4"
              />
            </svg>
          </GlassCard>

          {/* Card 2 — The Gap with big number */}
          <GlassCard
            label="The gap"
            delay={0.12}
            tilt={0.5}
            featured
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-text-dim">
                MARKET DELTA
              </span>
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-text-dim">
                vs. peers
              </span>
            </div>
            <div
              className="text-text font-light leading-none mb-2"
              style={{ fontSize: "clamp(54px, 4.8vw, 76px)", letterSpacing: "-0.04em" }}
            >
              −18K
            </div>
            <div className="text-text-soft text-[13px] mb-5">
              You&apos;re underpriced for your level.
            </div>
            <div className="flex flex-col gap-2">
              <BarRow label="Your range" value={62} accent="text-soft" />
              <BarRow label="Market range" value={86} accent="cream" />
            </div>
          </GlassCard>

          {/* Card 3 — Today's Move */}
          <GlassCard
            label="Today's move"
            delay={0.24}
            tilt={1.5}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-text-dim">
                PRIORITY · 01
              </span>
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--sage)]">
                Today
              </span>
            </div>
            <div className="text-text font-light text-[22px] leading-[1.2] mb-3 tracking-[-0.02em]">
              Reframe your title.
            </div>
            <div className="text-text-soft text-[13px] mb-5 leading-[1.55]">
              Pitch yourself as{" "}
              <span className="text-text">Product Engineer · AI</span>{" "}
              — your work matches the market term.
            </div>
            <div
              className="rounded-md px-3 py-2 border text-[12px] font-mono leading-[1.4] text-text-soft"
              style={{
                borderColor: "var(--edge)",
                background: "rgba(245,220,179,0.03)",
              }}
            >
              <span className="text-text-dim">/ suggested headline</span>
              <br />
              Product Engineer building AI at scale
            </div>
          </GlassCard>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 font-mono text-[10px] tracking-[0.28em] uppercase text-text-dim"
        >
          Delivered as one quiet email · No dashboard to open
        </motion.p>
      </div>
    </section>
  );
}

function GlassCard({
  label,
  children,
  delay,
  tilt,
  featured,
}: {
  label: string;
  children: React.ReactNode;
  delay: number;
  tilt: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateZ: 0 }}
      whileInView={{ opacity: 1, y: 0, rotateZ: tilt }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.32, 0.72, 0, 1],
      }}
      whileHover={{ rotateZ: 0, y: -4 }}
      className="relative rounded-2xl p-7 backdrop-blur-xl"
      style={{
        background: featured
          ? "linear-gradient(135deg, rgba(245,220,179,0.10) 0%, rgba(245,220,179,0.03) 100%)"
          : "linear-gradient(135deg, rgba(245,220,179,0.06) 0%, rgba(245,220,179,0.02) 100%)",
        border: "1px solid var(--edge-strong)",
        boxShadow: featured
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(249,238,212,0.04), inset 0 1px 0 rgba(249,238,212,0.12), 0 0 40px rgba(232,154,75,0.10)"
          : "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(249,238,212,0.03), inset 0 1px 0 rgba(249,238,212,0.08)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-text-faint mb-6 flex items-center gap-2">
        <span
          className="inline-block w-1 h-1 rounded-full"
          style={{ background: "var(--amber)" }}
        />
        {label}
      </div>
      {children}
    </motion.div>
  );
}

function BarRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: "cream" | "text-soft";
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-text-dim w-[88px]">
        {label}
      </span>
      <div className="relative h-[3px] flex-1 rounded-full bg-[rgba(245,220,179,0.08)] overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-y-0 left-0 origin-left rounded-full"
          style={{
            width: `${value}%`,
            background:
              accent === "cream"
                ? "linear-gradient(to right, var(--amber), var(--cream))"
                : "rgba(250,240,223,0.5)",
          }}
        />
      </div>
    </div>
  );
}
