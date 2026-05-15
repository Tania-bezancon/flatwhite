# Flatwhite.ai — Landing Page Brief for Claude Code

> Ultra-detailed implementation brief. Copy-paste this entire document into Claude Code as your initial prompt, then iterate.
> Target: a single-page, atmospheric, scroll-driven landing — zero product screenshots, English only.

---

## 0 — Context

You are building the public landing page for **Flatwhite.ai**, a Career Positioning OS that helps ambitious talents understand their market value, sharpen their positioning, and aim higher. The product is described in detail in `flatwhite-brief.md` (refer to it if available). For this build, you don't need product logic — only the marketing landing.

The landing is the first impression. It must be **cinematic, atmospheric, and unforgettable**. Visitors will share screenshots on Twitter. Other designers will copy elements. That's the bar.

**Hero statement (chosen):**
> *"Stop being underestimated."*

**Subline:**
> *Flatwhite is the daily ambition shot. A Career Positioning OS that reads your value the way the market should — served every morning.*

---

## 1 — Visual Concept (read this carefully)

The landing is built around **one big idea: "The journey of the day."**

Scrolling the page = traveling through the hours of a single day. The ambient background morphs through dawn → morning → midday → afternoon → evening → back to dawn. Every section has its own light, its own atmosphere, but the transitions are seamless and slow.

The visual references are:
- **James Turrell light installations** — for ambient color immersion
- **Delphi.ai / "Clone Yourself"** — for radical statement-driven hero
- **Comet (Perplexity browser onboarding)** — for 3D objects as totems, serif elegance
- **Cryo AI** — for stacked verb menus and ambient blur backgrounds
- **Linear, Vercel, Arc** — for technical precision and motion polish

The aesthetic is **specialty coffee meets quiet luxury tech**. Think Aesop, Blue Bottle, Apple keynote, Hermès digital.

**Forbidden references:** AI bro gradients (purple→pink→blue), generic SaaS hero, any LinkedIn-adjacent vibe, anything that looks like an "AI resume builder."

---

## 2 — Tech Stack (use exactly this)

```
Next.js 15 (App Router, TypeScript)
Tailwind CSS v4
Framer Motion (motion package)
@react-three/fiber + @react-three/drei (for the 3D shot)
three (peer dep)
lenis (smooth scroll — critical for the cinematic feel)
Google Fonts: Fraunces (display) + Inter (body)
```

Don't add other UI libraries (no shadcn, no Radix). This is a marketing page — keep it lean and bespoke.

---

## 3 — Project Setup

```bash
npx create-next-app@latest flatwhite-landing --typescript --tailwind --app --no-src-dir
cd flatwhite-landing
npm install framer-motion @react-three/fiber @react-three/drei three lenis
npm install -D @types/three
```

Project structure:

```
app/
  layout.tsx          # Root layout, fonts, Lenis setup
  page.tsx            # Single landing page
  globals.css         # Tailwind + custom CSS vars
components/
  Pulse.tsx           # 3D shot top-right corner (signature)
  AmbientBackground.tsx  # Scroll-driven gradient morphing
  StackedMenu.tsx     # Cryo-style vertical menu
  SteamCursor.tsx     # Optional: cursor trail
  sections/
    Hero.tsx
    TheMoment.tsx
    ManifestoBreak.tsx
    HowItWorks.tsx
    MarketMirror.tsx
    FinalCTA.tsx
lib/
  useScrollProgress.ts  # Custom hook
  colors.ts           # Palette tokens
```

---

## 4 — Color System

Put these in `globals.css` as CSS variables and Tailwind theme tokens.

```css
:root {
  /* Core palette (from brand) */
  --deep-onyx: #0A0D0B;
  --olive-calm: #B0C9A1;
  --mint-glow: #ACDBB8;
  --morning-mist: #D3F4D1;
  --cloud-whisper: #EAEBEA;
  --white-aura: #FFFFFF;

  /* Café accents (new, signature) */
  --warm-crema: #E8D4B0;
  --espresso-brown: #3A2418;
  --gold-ember: #C9A66B;

  /* Functional */
  --ink: #0A0D0B;
  --ink-soft: rgba(10, 13, 11, 0.7);
  --ink-faint: rgba(10, 13, 11, 0.4);
}
```

**Never use `#000000` pure black. Always `--deep-onyx`.**

---

## 5 — Typography

Load via `next/font/google`:

```ts
import { Fraunces, Inter } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
```

**Typographic rules:**

- **Display / statements** → Fraunces, weight 300-400, optical size 144 (huge), italic for sublines. Letter-spacing tight (-0.02em on big sizes).
- **Body / micro-copy** → Inter, weight 400-500. Letter-spacing default. For ALL-CAPS micro-labels, letter-spacing 0.15em.
- **Hero size** → `clamp(56px, 9vw, 144px)`. No bigger.
- **Subline** → `clamp(18px, 1.6vw, 22px)`, italic, max-width 540px.
- **Body** → 16-18px. Line-height 1.5.

---

## 6 — Motion Principles (read before animating anything)

1. **Slow.** Ambient transitions are 8-12 seconds. Element entries are 800ms-1200ms. Nothing snaps.
2. **Easing.** Default to `[0.32, 0.72, 0, 1]` (custom cubic-bezier — Apple-like). Never use linear, never use bouncy.
3. **Stagger.** When multiple elements enter, stagger them by 100-200ms. Never all at once.
4. **Smooth scroll required.** Initialize Lenis at root layout with `lerp: 0.08`, `duration: 1.4`.
5. **Reduced motion.** Respect `prefers-reduced-motion`: disable parallax, keep fades but kill scroll-driven transforms.

Lenis setup (in `app/layout.tsx` client component):

```tsx
'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, duration: 1.4 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}
```

---

## 7 — Page Architecture (6 sections, single page)

Each section is **100vh minimum**. The user scrolls through a full screen of atmosphere at each step. No traditional "sections crammed together."

### Section 1 — Hero (Dawn)
Atmosphere: warm crema gradient with golden ember glow center-left. Sun-rising feel.

Layout:
- Full viewport
- Statement centered, slightly above mid-line: **"Stop being underestimated."** (Fraunces, max size, color: `--deep-onyx` on light bg)
- Subline below statement, italic, narrow max-width: *"Flatwhite is the daily ambition shot. A Career Positioning OS that reads your value the way the market should — served every morning."*
- Bottom: minimal email input field with right-arrow submit. Placeholder: *"your@email.com"*. No "Subscribe" button — just an arrow icon. On submit → simple acknowledgment ("We'll pour your first shot soon.").
- Top-left corner: small **"flatwhite"** wordmark in Fraunces lowercase, italic.
- Top-right corner: **The Pulse** (see section 8).
- Center-top: **Stacked Menu** (see section 8).

Entry animation: statement fades in word-by-word (each word 200ms stagger), subline fades after statement completes, email field fades last. Total: ~3 seconds. Once.

### Section 2 — The Moment (Morning)
Atmosphere: ambient transitions from warm crema → mint glow as user scrolls in. Light feels like morning sun through linen curtains.

Content:
- Top-of-section micro-label: `THE RITUAL` (uppercase, tracked, small)
- Center statement (Fraunces large): *"Each morning, before the world reads you wrong — read yourself right."*
- Below: a single paragraph in italic, smaller: *"A 47-second shot of clarity. Your positioning, your value, your next move. Served daily."*
- **No image. No screenshot.** The space breathes.
- Optional: a subtle animated SVG element — a circular shape (a cup top-down view) that slowly fills with a darker crema color tied to scroll position within the section. Place it center-bottom, low opacity.

### Section 3 — Manifesto Break (Midday)
Atmosphere: SUDDEN shift to **deep onyx** background. The lightest section turns dark. Gold ember glow halo behind the text.

Content:
- Two lines of statement, stacked, Fraunces XXL, in `--cloud-whisper` color:
  ```
  Recruiters have AI.
  You don't.
  ```
- Beat. Nothing else on the screen. No CTA. No nav. Just the statement.
- After 1.5s of stillness (on entry, detect via IntersectionObserver), a single horizontal line drawn from center-left to center-right beneath the text, gold ember color, 2px, 1.4s duration.

This is the section users will screenshot.

### Section 4 — How it works (Afternoon Clarity)
Atmosphere: returns to light — mint clarity, very soft.

Layout:
- Top micro-label: `HOW WE BREW`
- A **vertical stack** of 4 verbs, Cryo-style. Each verb on its own line, Fraunces medium-large, with a one-line description fading in next to it on hover:

```
READ      We read your profile the way a barista reads crema.
POUR      We pour your daily ambition shot.
MIRROR    We show you how the market sees you.
RISE      We show you where you should go next.
```

- Each verb is highlighted in `[ brackets ]` when hovered or when its line is centered in the viewport. Brackets in gold ember color.
- Descriptions are body text, color `--ink-soft`, slide in from the right with 200ms delay on hover.
- The vertical stack is left-aligned, max-width 720px, centered on the page.

### Section 5 — Market Mirror (Evening)
Atmosphere: deep onyx, but with warm crema embers floating in the background (subtle particle field, 8-12 particles, very slow random drift, opacity 10-30%).

Content:
- Top micro-label: `THE MIRROR`
- Center: a 3D orb (React Three Fiber) — a sphere with iridescent material that slowly rotates. Color shifts between mint glow and gold ember. Size: 320-420px depending on viewport.
- Around the orb (when it slows or stops rotating after entry), labels appear as floating tasting notes (Fraunces italic, small):
  - Top: `ORIGIN: AWS · 4 years`
  - Right: `NOTES: Product · AI · Hybrid`
  - Bottom-right: `BODY: Senior potential`
  - Bottom: `UNDERPOSITIONED BY 18K`
  - Bottom-left: `AIM: Product Engineer · AI Builder`
  - Left: `ROAST: Medium-Dark`
- Below the orb, statement in Fraunces medium: *"The market is reading you wrong. Here's the right reading."*
- These labels are placeholder data (we'll personalize later). For now hardcode them.

### Section 6 — Final CTA (Return to Dawn)
Atmosphere: full circle back to warm crema. The page has completed its day.

Content:
- Three lines of Fraunces stacked, centered:
  ```
  Tomorrow morning.
  Your shot
  will be ready.
  ```
- Email input below, same minimalism as the hero.
- Footer below input, ultra-minimal: `flatwhite.ai · made in Barcelona · 2026 ·` and three tiny links: `manifesto · privacy · contact`. All text size 12-13px, color `--ink-faint`.

---

## 8 — Signature Elements (the wow moments)

### 8.1 — The Pulse (top-right 3D shot)

This is the brand totem and scroll progress indicator combined. Persistent across the entire page, fixed position top-right (with safe padding).

**Specs:**
- Size: 80px × 100px, viewport corner with `top: 24px; right: 24px;`
- 3D scene with React Three Fiber: a small cup (cylinder geometry with rounded rim) shown in slight isometric angle
- Inside the cup, a "liquid" mesh — a flat disc — whose **height fills proportionally to total page scroll progress (0% top, 100% bottom)**
- Liquid color: `--warm-crema` with subtle subsurface effect (use `MeshPhysicalMaterial`, `transmission: 0.4, roughness: 0.2`)
- On top of the liquid surface: an emissive crema layer (`MeshStandardMaterial`, `emissive: '#E8D4B0', emissiveIntensity: 0.15`)
- Subtle steam: 6-8 small particles drifting upward from the surface, low opacity, slow fade out at top
- The cup itself **pulses** gently: scale `1 → 1.015 → 1`, 2s loop, ease-in-out
- On hover: cup scales to 1.05, a small tooltip slides in to the left: *"Brewing your career intelligence."* — Fraunces italic, 13px
- Always rendered above all other content (`z-index: 50`)

**Code skeleton (use this exact pattern):**

```tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

export function Pulse() {
  const { scrollYProgress } = useScroll();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed top-6 right-6 w-20 h-24 z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Canvas camera={{ position: [0, 0.5, 3], fov: 35 }}>
        {/* lights, cup mesh, liquid mesh, particles */}
        <CupScene scrollProgress={scrollYProgress} />
      </Canvas>
      {hover && (
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[13px] italic font-serif text-ink-soft">
          Brewing your career intelligence.
        </div>
      )}
    </div>
  );
}
```

You'll implement `CupScene` using primitives: a tube/cylinder for the cup body, a circle/disc inside, particles via instancedMesh or sprites. Keep poly count low.

### 8.2 — Ambient Background

This is the morphing gradient that lives behind everything. It's tied to total scroll progress.

**Specs:**
- A fixed full-viewport element, `z-index: -1`, behind all content
- Renders a CSS `radial-gradient` whose colors and positions are driven by scroll progress
- Use Framer Motion's `useTransform` to interpolate between color stops at scroll milestones
- 6 ambient stages mapped to scroll progress:

| Scroll % | Stage | Center color | Outer color | Accent |
|----------|-------|--------------|-------------|--------|
| 0–15 | Dawn | `#E8D4B0` (warm crema) | `#D3F4D1` (morning mist) | gold halo |
| 15–30 | Morning | `#D3F4D1` | `#ACDBB8` (mint) | — |
| 30–50 | Midday | `#0A0D0B` (onyx) | `#0A0D0B` | gold halo |
| 50–65 | Afternoon | `#ACDBB8` | `#B0C9A1` | — |
| 65–85 | Evening | `#0A0D0B` | `#0A0D0B` | crema embers |
| 85–100 | Return to dawn | `#E8D4B0` | `#D3F4D1` | gold halo |

- Also independently animate the gradient **center position** on a slow 12s loop (drift gently for ambient life): from `40% 40%` → `60% 50%` → `45% 55%` → back. Use Framer Motion infinite repeat.
- Add a 60-80px Gaussian blur on top of the entire background layer for the "Turrell soft" feel.

### 8.3 — Stacked Menu (top-center, Cryo-style)

A vertical stack of 5 words, centered horizontally near the top of the page, persistent across scroll. Tiny size — this is brand decoration, not real navigation.

**Words (top to bottom):**
```
READ
POUR
MIRROR
[ AIM ]
RISE
```

**Specs:**
- Inter, 11px, ALL CAPS, letter-spacing `0.2em`, color `--ink-faint`
- One word per line, line-height 1.8
- The "focused" word (current scroll section) wraps in `[ AIM ]` style with gold ember brackets — animated as scroll position moves through sections (Hero → READ, Moment → POUR, Manifesto → MIRROR, HowItWorks → AIM, MarketMirror → RISE, FinalCTA → READ again as we loop).
- When background is dark (sections 3 & 5), color shifts to `--cloud-whisper` for legibility — but stay subtle, opacity 0.5.

### 8.4 — Steam Cursor (optional but recommended)

Custom cursor with a subtle steam trail. Implementation:
- Hide native cursor
- Render a small dot (4px) at cursor position
- Behind it, emit 6-8 fading "steam" particles with decreasing opacity and slight upward drift
- Use Framer Motion `motion.div` with `animate` controls or a canvas overlay
- Color: `--warm-crema` with 30% opacity max
- Only enabled on devices with pointer (no mobile)

---

## 9 — Section Transitions

Sections shouldn't feel like cards stacked. They should feel like **rooms you walk through**.

To achieve this:
- Each section: `min-h-screen`, flex centered
- Between sections: NO hard borders, NO separator lines (except the manifesto's intentional gold line)
- The ambient background carries through — it's continuous
- Section content fades in with `useInView` from Framer Motion as it enters viewport: `opacity 0 → 1`, `y: 40 → 0`, duration 1200ms
- Use `IntersectionObserver` with threshold 0.25 for triggering

---

## 10 — Responsive Behavior

**Desktop-first.** This is a desktop landing. Mobile should work but isn't the focus.

Breakpoints:
- `< 640px` (mobile): single column, reduce hero font to clamp min, hide Pulse 3D (replace with static SVG), simplify ambient (no gradient animation), kill steam cursor
- `640-1024px` (tablet): keep most features, slightly smaller Pulse
- `1024+` (desktop): full experience

---

## 11 — Performance

- Hero must be First Contentful Paint < 1.5s
- Three.js scene must use `Suspense` + lazy load — the page shouldn't block on it
- Use `next/font` for fonts (zero CLS)
- All images (if any): `next/image`, `priority` only on hero
- Lighthouse target: 90+ on Performance, 100 on Accessibility

---

## 12 — Accessibility

- Every interactive element has an accessible name
- The Pulse hover tooltip is also exposed via `aria-label`
- Email input is properly labeled
- Color contrast: minimum 4.5:1 for body text, 3:1 for large display text
- `prefers-reduced-motion`: disable parallax, scroll-driven 3D, particles. Keep simple fades.
- Keyboard navigable: email input, links, focus states visible (use a 2px gold ember outline)

---

## 13 — Don'ts (hard rules)

- ❌ No purple/pink/blue gradients
- ❌ No "AI" icons, no robot, no brain, no spark
- ❌ No emoji anywhere in the UI
- ❌ No screenshot or mockup of the product
- ❌ No "Sign up free" CTAs — only "Pour your first shot" or just an email field
- ❌ No pricing on this page
- ❌ No "as seen in" logos
- ❌ No testimonials
- ❌ No corporate stock photography
- ❌ No bouncy animations
- ❌ No purely black `#000000` — always `--deep-onyx`

---

## 14 — Voice & Microcopy

Every word matters. The tone is **lucid strategist, not motivational coach**.

Approved phrasings:
- "Stop being underestimated."
- "The market is reading you wrong."
- "Brewing your career intelligence."
- "Tomorrow morning. Your shot will be ready."
- "Read the way the market should."
- "Pour your first shot."
- "Made in Barcelona."

Banned phrasings:
- "You got this!" / "Crush it!" / "Land your dream job!"
- "Powered by AI" / "AI-powered"
- "Get started" / "Sign up free" / "Join thousands"
- "Revolutionary" / "Game-changing"

---

## 15 — Deliverables

1. **The deployed landing** — Vercel deploy preview link
2. **A clean repo** with this brief saved as `BRIEF.md` for future iteration
3. **Lighthouse report** screenshot showing scores
4. **A short README** with: stack used, how to run locally, key components map

---

## 16 — How to start (suggested order)

1. `create-next-app` + install deps + set up fonts + Lenis + Tailwind tokens
2. Build the `AmbientBackground` component first — get the scroll-driven gradient working with just colored divs before anything else. This is the heart.
3. Add the `StackedMenu` (easy, lots of impact)
4. Build `Hero` section (statement + subline + email + entry animation)
5. Build `ManifestoBreak` section (it's the simplest and most powerful — fast win)
6. Build `TheMoment` + `HowItWorks` sections
7. Build `Pulse` 3D component (longest task — keep it last so it doesn't block the rest)
8. Build `MarketMirror` orb (also 3D — second 3D pass)
9. Build `FinalCTA`
10. Polish: steam cursor, micro-interactions, reduced motion fallbacks, mobile review

---

## 17 — When in doubt

If you're about to make a design decision not covered here, default to:
- **Less is more.** Remove, don't add.
- **Slow is luxurious.** Slower is almost always better.
- **Type leads.** When in doubt, make the typography hero, kill the chrome.
- **Real café feeling.** Imagine a barista in Barcelona pouring you the perfect shot at sunrise. That's the energy.

---

## 18 — Final note

This is not "another AI startup landing." This is a piece of design that should be in awwwards and on Mobbin within a month of launch. Push every detail. When you ship something and it feels "almost there" — polish for another hour. The 5% extra effort is what makes the difference.

Good luck. Brew slowly.
