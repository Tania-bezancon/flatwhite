"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

const ICONS = ["profile", "market", "match", "write", "prep", "sharp"] as const;
const HAS_MOCK = [false, false, false, true, false, false];

export function TheFullCircle() {
  const { lang } = useLang();
  const c = copy.circle;
  const caps = c.caps[lang];
  const tl = c.timeline;
  const timelineSteps = tl.steps[lang];

  return (
    <section
      id="circle"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28"
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center">
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
          key={`sub-${lang}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-text-soft max-w-[600px] text-center"
          style={{
            fontSize: "clamp(15px, 1.3vw, 18px)",
            lineHeight: 1.55,
          }}
        >
          {c.subline[lang]}
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {caps.map((cap, i) => (
            <CapabilityCard
              key={`${lang}-${cap.code}`}
              code={cap.code}
              title={cap.title}
              desc={cap.desc}
              icon={ICONS[i]}
              hasMock={HAS_MOCK[i]}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* Journey timeline */}
        <div className="mt-32 w-full max-w-[1100px] flex flex-col items-center">
          <motion.span
            key={`tl-code-${lang}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-4"
          >
            {tl.code[lang]}
          </motion.span>

          <motion.h3
            key={`tl-h3-${lang}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-light text-text text-center mb-16"
            style={{
              fontSize: "clamp(24px, 2.8vw, 36px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            {tl.statement[lang][0]}{" "}
            <span className="text-text-soft">{tl.statement[lang][1]}</span>
          </motion.h3>

          <Timeline steps={timelineSteps} />
        </div>
      </div>
    </section>
  );
}

function Timeline({
  steps,
}: {
  steps: { day: string; label: string; desc: string }[];
}) {
  return (
    <div className="relative w-full px-4">
      <div
        aria-hidden
        className="absolute top-[18px] left-[8%] right-[8%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--edge-strong) 8%, var(--edge-strong) 92%, transparent 100%)",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="absolute top-[18px] left-[8%] right-[8%] h-px origin-left"
        style={{
          background:
            "linear-gradient(90deg, var(--amber) 0%, var(--cream) 50%, var(--amber) 100%)",
          boxShadow: "0 0 10px rgba(232,154,75,0.5)",
        }}
      />

      <div className="grid grid-cols-5 gap-2">
        {steps.map((t, i) => (
          <motion.div
            key={t.day}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.4 + i * 0.18,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-[36px] h-[36px] flex items-center justify-center">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: i === steps.length - 1 ? "var(--cream)" : "var(--amber)",
                  boxShadow:
                    i === steps.length - 1
                      ? "0 0 16px var(--cream), 0 0 28px rgba(245,220,179,0.5)"
                      : "0 0 8px rgba(232,154,75,0.7)",
                }}
              />
              {i === steps.length - 1 && (
                <motion.div
                  className="absolute inset-0 rounded-full border"
                  style={{ borderColor: "var(--cream)", opacity: 0.4 }}
                  whileInView={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </div>
            <span className="mt-3 font-mono text-[9px] tracking-[0.28em] uppercase text-text-dim">
              {t.day}
            </span>
            <span className="mt-1.5 font-light text-text text-[15px] tracking-[-0.01em] leading-tight">
              {t.label}
            </span>
            <span className="mt-1 text-text-soft text-[12px] leading-[1.4] max-w-[160px]">
              {t.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CapabilityCard({
  code,
  title,
  desc,
  icon,
  hasMock,
  delay,
}: {
  code: string;
  title: string;
  desc: string;
  icon: string;
  hasMock?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, delay, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ y: -3 }}
      className="group relative rounded-2xl p-7 backdrop-blur-[6px] flex flex-col h-full"
      style={{
        background: hasMock
          ? "linear-gradient(135deg, rgba(245,220,179,0.10) 0%, rgba(245,220,179,0.03) 100%)"
          : "linear-gradient(135deg, rgba(245,220,179,0.06) 0%, rgba(245,220,179,0.02) 100%)",
        border: "1px solid var(--edge-strong)",
        boxShadow: hasMock
          ? "0 18px 48px rgba(0,0,0,0.4), 0 0 40px rgba(232,154,75,0.10), inset 0 1px 0 rgba(249,238,212,0.12)"
          : "0 14px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(249,238,212,0.08)",
        minHeight: 240,
      }}
    >
      <div className="flex items-start justify-between mb-7">
        <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint">
          {code}
        </span>
        <CapabilityIcon icon={icon} />
      </div>

      <h3
        className="font-light text-text mb-3"
        style={{
          fontSize: "clamp(22px, 1.9vw, 28px)",
          letterSpacing: "-0.022em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h3>

      <p
        className="text-text-soft"
        style={{ fontSize: "14px", lineHeight: 1.55 }}
      >
        {desc}
      </p>

      {hasMock && <CoverLetterMock />}
    </motion.div>
  );
}

function CoverLetterMock() {
  const { lang } = useLang();
  const m = copy.circle.mock;
  const body = m.body[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="mt-5 rounded-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(249,238,212,0.10) 0%, rgba(245,220,179,0.04) 100%)",
        border: "1px solid var(--edge)",
        boxShadow: "inset 0 1px 0 rgba(249,238,212,0.10)",
      }}
    >
      <div
        className="flex items-center justify-between px-3 py-2 border-b"
        style={{ borderColor: "var(--edge)" }}
      >
        <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-text-faint">
          {m.header[lang]}
        </span>
        <span className="flex items-center gap-1 font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--amber)]">
          <span
            className="w-1 h-1 rounded-full"
            style={{
              background: "var(--amber)",
              boxShadow: "0 0 6px rgba(232,154,75,0.8)",
            }}
          />
          {m.generated[lang]}
        </span>
      </div>
      <div className="px-3 py-3 relative">
        <p
          className="text-text-soft text-[11px] leading-[1.55] italic"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {body[0]}
          <br />
          <br />
          {body[1]}{" "}
          <span className="text-text">{body[2]}</span>
          {body[3]}
        </p>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-8 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(29,15,6,0.55) 100%)",
          }}
        />
      </div>
      <div
        className="flex items-center justify-between px-3 py-2 border-t"
        style={{
          borderColor: "var(--edge)",
          background: "rgba(0,0,0,0.18)",
        }}
      >
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-text-dim">
          {m.cv[lang]}
        </span>
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-text-soft">
          {m.send[lang]}
        </span>
      </div>
    </motion.div>
  );
}

function CapabilityIcon({ icon }: { icon: string }) {
  const stroke = "var(--cream)";
  const opacity = 0.7;
  switch (icon) {
    case "profile":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity={opacity}>
          <circle cx="14" cy="10" r="4" stroke={stroke} strokeWidth="1.2" />
          <path
            d="M5 24 Q5 17 14 17 Q23 17 23 24"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "market":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity={opacity}>
          <path
            d="M3 22 L9 14 L14 18 L20 8 L25 12"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="25" cy="12" r="2.5" fill={stroke} fillOpacity="0.5" />
          <circle cx="25" cy="12" r="2.5" stroke={stroke} strokeWidth="1" fill="none" />
        </svg>
      );
    case "match":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity={opacity}>
          <circle cx="9" cy="14" r="5" stroke={stroke} strokeWidth="1.2" />
          <circle cx="19" cy="14" r="5" stroke={stroke} strokeWidth="1.2" />
          <path d="M14 14 L14 14" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="14" cy="14" rx="2" ry="4.5" fill={stroke} fillOpacity="0.3" />
        </svg>
      );
    case "write":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity={opacity}>
          <rect x="5" y="4" width="14" height="20" rx="1.5" stroke={stroke} strokeWidth="1.2" />
          <path d="M8 10 H16" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <path d="M8 14 H16" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <path d="M8 18 H13" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <path
            d="M19 6 L24 11 L18 17 L14 18 L15 14 Z"
            fill="rgba(245,220,179,0.15)"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "prep":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity={opacity}>
          <rect x="4" y="6" width="20" height="14" rx="1.5" stroke={stroke} strokeWidth="1.2" />
          <path d="M14 20 V24" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M10 24 H18" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="14" cy="13" r="3" fill={stroke} fillOpacity="0.35" />
        </svg>
      );
    case "sharp":
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity={opacity}>
          <path
            d="M14 3 L17 11 L25 11 L19 16 L21 24 L14 19 L7 24 L9 16 L3 11 L11 11 Z"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
            fill="rgba(245,220,179,0.15)"
          />
        </svg>
      );
    default:
      return null;
  }
}
