"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/lang";
import { copy } from "@/lib/copy";

// Deterministic peer stars — same positions every render, no hydration drift.
// Each value is a [x%, y%, opacity, radius] tuple inside the map area.
const PEER_STARS: [number, number, number, number][] = [
  [18, 38, 0.35, 1.5],
  [26, 24, 0.55, 1.8],
  [34, 56, 0.45, 1.4],
  [12, 62, 0.4, 1.6],
  [42, 30, 0.3, 1.2],
  [58, 32, 0.5, 1.8],
  [66, 58, 0.4, 1.5],
  [78, 44, 0.55, 2],
  [86, 26, 0.4, 1.4],
  [22, 78, 0.5, 1.6],
  [38, 84, 0.4, 1.3],
  [54, 82, 0.35, 1.4],
  [68, 76, 0.45, 1.6],
  [82, 70, 0.35, 1.3],
  [8, 30, 0.3, 1.2],
  [92, 50, 0.4, 1.4],
  [48, 14, 0.45, 1.4],
  [16, 16, 0.3, 1.1],
  [76, 14, 0.4, 1.3],
  [46, 66, 0.35, 1.2],
  [62, 46, 0.55, 1.6],
  [30, 46, 0.4, 1.4],
  [70, 40, 0.4, 1.4],
  [44, 50, 0.5, 1.5],
  [56, 60, 0.45, 1.5],
];

// Drifting amber ember particles (kept from previous design)
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 31) % 90)}%`,
  delay: i * 0.7,
  duration: 20 + (i % 5) * 3,
}));

export function MarketMirror() {
  const { lang } = useLang();
  const c = copy.mirror;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: false });

  return (
    <section
      ref={ref}
      id="mirror"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden py-28"
    >
      {/* Drifting amber embers */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute bottom-[-10%] w-[2px] h-[2px] rounded-full"
            style={{
              left: p.left,
              background: "var(--amber)",
              opacity: 0.35,
              boxShadow: "0 0 6px rgba(232,154,75,0.6)",
            }}
            animate={
              inView
                ? { y: ["0vh", "-115vh"], opacity: [0, 0.55, 0] }
                : { opacity: 0 }
            }
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.span
        key={`code-${lang}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 font-mono text-[10px] tracking-[0.32em] uppercase text-text-faint mb-4"
      >
        {c.code[lang]}
      </motion.span>

      <motion.h2
        key={`h2-${lang}`}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 font-light text-text text-center max-w-[820px] mb-14"
        style={{
          fontSize: "clamp(32px, 4.6vw, 60px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        {c.statement[lang][0]}{" "}
        <span className="text-text-soft">{c.statement[lang][1]}</span>
      </motion.h2>

      {/* Required illustrative disclosure */}
      <motion.span
        key={`illus-${lang}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 font-mono text-[9px] tracking-[0.28em] uppercase text-text-dim -mt-8 mb-10"
      >
        {copy.illustrative.data[lang]}
      </motion.span>

      {/* The constellation map */}
      <div className="relative w-full max-w-[920px] aspect-[5/4]">
        <ConstellationMap inView={inView} />
      </div>

      <motion.p
        key={`sub-${lang}`}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 1, delay: 2.6, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 mt-12 text-text-soft text-center max-w-[520px] text-[15px] leading-[1.6]"
      >
        {c.subline[lang]}
      </motion.p>
    </section>
  );
}

function ConstellationMap({ inView }: { inView: boolean }) {
  const { lang } = useLang();
  const L = copy.mirror.labels;
  return (
    <div className="relative w-full h-full">
      {/* Soft nebula background — subtle warm glow center */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 55% at 50% 60%, rgba(232,154,75,0.10) 0%, rgba(232,154,75,0.04) 30%, rgba(232,154,75,0) 65%)",
        }}
      />

      <svg
        viewBox="0 0 1000 800"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          {/* Glow filter for major stars */}
          <filter id="star-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strong-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="target-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbf2e6" />
            <stop offset="50%" stopColor="#f5dcb3" />
            <stop offset="100%" stopColor="#e89a4b" />
          </radialGradient>
          <radialGradient id="you-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="40%" stopColor="#f5dcb3" />
            <stop offset="100%" stopColor="#c8662a" />
          </radialGradient>
        </defs>

        {/* Background dim peer stars */}
        {PEER_STARS.map(([x, y, op, r], i) => (
          <motion.circle
            key={i}
            cx={x * 10}
            cy={y * 8}
            r={r}
            fill="#fbf2e6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: op } : { opacity: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3 + (i % 7) * 0.05,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Subtle peer-to-peer constellation lines (background structure) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.18 } : { opacity: 0 }}
          transition={{ duration: 1.4, delay: 1.0 }}
          stroke="#f5dcb3"
          strokeWidth="0.5"
          fill="none"
        >
          <line x1="180" y1="304" x2="260" y2="192" />
          <line x1="260" y1="192" x2="340" y2="448" />
          <line x1="660" y1="464" x2="780" y2="352" />
          <line x1="780" y1="352" x2="860" y2="208" />
          <line x1="120" y1="496" x2="220" y2="624" />
          <line x1="220" y1="624" x2="380" y2="672" />
          <line x1="540" y1="656" x2="680" y2="608" />
        </motion.g>

        {/* TARGET star (top — where you should aim) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.4 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.32, 0.72, 0, 1] }}
          style={{ transformOrigin: "500px 120px" }}
        >
          {/* Faint outer aura */}
          <circle
            cx="500"
            cy="120"
            r="32"
            fill="rgba(245,220,179,0.08)"
            filter="url(#strong-glow)"
          />
          {/* Cross sparkle lines */}
          <line
            x1="500"
            y1="92"
            x2="500"
            y2="148"
            stroke="rgba(245,220,179,0.4)"
            strokeWidth="0.6"
          />
          <line
            x1="472"
            y1="120"
            x2="528"
            y2="120"
            stroke="rgba(245,220,179,0.4)"
            strokeWidth="0.6"
          />
          {/* Inner halo */}
          <circle
            cx="500"
            cy="120"
            r="14"
            fill="rgba(245,220,179,0.18)"
            filter="url(#strong-glow)"
          />
          {/* Bright star */}
          <circle
            cx="500"
            cy="120"
            r="6"
            fill="url(#target-grad)"
            filter="url(#strong-glow)"
          />
          {/* Pulsing ring */}
          <motion.circle
            cx="500"
            cy="120"
            r="6"
            fill="none"
            stroke="rgba(245,220,179,0.5)"
            strokeWidth="0.8"
            animate={
              inView ? { r: [6, 22, 6], opacity: [0.5, 0, 0.5] } : { opacity: 0 }
            }
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.g>

        {/* Constellation path: YOU → TARGET (dashed amber, traced on entry) */}
        <motion.path
          d="M 500 460 Q 480 320 500 120"
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1"
          strokeDasharray="4 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            inView
              ? { pathLength: 1, opacity: 0.65 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            pathLength: { duration: 2.2, delay: 1.6, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.8, delay: 1.6 },
          }}
        />

        {/* YOU star (center — your current position) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.3 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.32, 0.72, 0, 1] }}
          style={{ transformOrigin: "500px 460px" }}
        >
          {/* Outer halo */}
          <circle
            cx="500"
            cy="460"
            r="20"
            fill="rgba(249,238,212,0.10)"
            filter="url(#strong-glow)"
          />
          {/* Cross sparkle */}
          <line
            x1="500"
            y1="436"
            x2="500"
            y2="484"
            stroke="rgba(249,238,212,0.55)"
            strokeWidth="0.7"
          />
          <line
            x1="476"
            y1="460"
            x2="524"
            y2="460"
            stroke="rgba(249,238,212,0.55)"
            strokeWidth="0.7"
          />
          {/* Inner halo */}
          <circle
            cx="500"
            cy="460"
            r="10"
            fill="rgba(249,238,212,0.25)"
            filter="url(#star-glow)"
          />
          {/* Bright core */}
          <circle
            cx="500"
            cy="460"
            r="5"
            fill="url(#you-grad)"
            filter="url(#star-glow)"
          />
          {/* Steady pulsing ring */}
          <motion.circle
            cx="500"
            cy="460"
            r="5"
            fill="none"
            stroke="rgba(249,238,212,0.7)"
            strokeWidth="0.9"
            animate={
              inView ? { r: [5, 16, 5], opacity: [0.7, 0, 0.7] } : { opacity: 0 }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.g>

        {/* Highlighted nearby peer stars (with slight glow) */}
        {[
          [320, 384],
          [680, 432],
          [400, 600],
          [600, 568],
        ].map(([cx, cy], i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.85 } : { opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.5 + i * 0.12,
              ease: "easeOut",
            }}
          >
            <circle
              cx={cx}
              cy={cy}
              r="6"
              fill="rgba(245,220,179,0.08)"
              filter="url(#star-glow)"
            />
            <circle
              cx={cx}
              cy={cy}
              r="2"
              fill="#f5dcb3"
            />
          </motion.g>
        ))}
      </svg>

      {/* Glass label pills positioned near key stars */}
      <StarLabel
        inView={inView}
        delay={1.4}
        style={{ top: "10%", left: "50%", transform: "translateX(-50%) translateY(-110%)" }}
        code={L.target[lang].code}
        value={L.target[lang].value}
        accent="amber"
      />
      <StarLabel
        inView={inView}
        delay={1.1}
        style={{ top: "57%", left: "50%", transform: "translateX(60%)" }}
        code={L.you[lang].code}
        value={L.you[lang].value}
        accent="cream"
      />
      <StarLabel
        inView={inView}
        delay={1.7}
        style={{ top: "30%", left: "10%" }}
        code={L.roast[lang].code}
        value={L.roast[lang].value}
      />
      <StarLabel
        inView={inView}
        delay={1.5}
        style={{ top: "44%", right: "6%" }}
        code={L.delta[lang].code}
        value={L.delta[lang].value}
      />
      <StarLabel
        inView={inView}
        delay={1.9}
        style={{ bottom: "12%", left: "16%" }}
        code={L.signal[lang].code}
        value={L.signal[lang].value}
      />
      <StarLabel
        inView={inView}
        delay={2.0}
        style={{ bottom: "10%", right: "14%" }}
        code={L.domain[lang].code}
        value={L.domain[lang].value}
      />
    </div>
  );
}

function StarLabel({
  inView,
  delay,
  style,
  code,
  value,
  accent,
}: {
  inView: boolean;
  delay: number;
  style: React.CSSProperties;
  code: string;
  value: string;
  accent?: "amber" | "cream";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
      transition={{ duration: 0.9, delay, ease: [0.32, 0.72, 0, 1] }}
      className="absolute z-10 flex items-baseline gap-2 whitespace-nowrap rounded-full backdrop-blur-[6px] border px-3 py-1.5"
      style={{
        ...style,
        background:
          accent === "amber"
            ? "rgba(232,154,75,0.08)"
            : accent === "cream"
              ? "rgba(249,238,212,0.10)"
              : "rgba(245,220,179,0.05)",
        borderColor:
          accent === "amber"
            ? "rgba(232,154,75,0.35)"
            : accent === "cream"
              ? "rgba(249,238,212,0.30)"
              : "var(--edge-strong)",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(249,238,212,0.08)",
      }}
    >
      <span
        className="font-mono text-[9px] tracking-[0.28em] uppercase"
        style={{
          color:
            accent === "amber"
              ? "var(--amber)"
              : accent === "cream"
                ? "var(--cream)"
                : "var(--text-dim)",
        }}
      >
        {code}
      </span>
      <span
        className="text-[12px]"
        style={{
          color:
            accent === "amber" || accent === "cream"
              ? "var(--text)"
              : "var(--text-soft)",
        }}
      >
        {value}
      </span>
    </motion.div>
  );
}
