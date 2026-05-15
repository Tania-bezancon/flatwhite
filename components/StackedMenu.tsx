"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const WORDS = ["READ", "MIRROR", "MAP", "AIM", "RISE"] as const;

// 8 sections → 5 words. Hero+Moment share READ; the middle sections each own one.
function wordFromProgress(p: number) {
  if (p < 2 / 8) return 0; // Hero + TheMoment → READ
  if (p < 3 / 8) return 1; // Manifesto → MIRROR
  if (p < 4 / 8) return 2; // HowItWorks → MAP
  if (p < 5 / 8) return 3; // Artifact → AIM
  if (p < 6 / 8) return 4; // MarketMirror → RISE
  if (p < 7 / 8) return 3; // TheFullCircle → AIM (the 360 of aiming)
  return 0; // FinalCTA → READ (loop)
}

export function StackedMenu() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(wordFromProgress(v));
  });

  useEffect(() => {
    setActive(wordFromProgress(0));
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none select-none"
    >
      <ul className="flex flex-col items-center font-mono text-[10px] tracking-[0.32em] leading-[1.9]">
        {WORDS.map((w, i) => {
          const isActive = i === active;
          return (
            <li
              key={w}
              style={{
                color: isActive ? "var(--cream)" : "var(--text-dim)",
                transition: "color 800ms cubic-bezier(0.32,0.72,0,1)",
              }}
            >
              {isActive ? `[ ${w} ]` : w}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
