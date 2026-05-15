# flatwhite

> An experimental agent that lives inside Claude. Reads where you stand in the market every morning — and tells you the one move worth making today.

A landing page experiment by [Sea View Lab](https://seaviewlab.com).

```
EXPERIMENT · AGENTIC TOOLS
flatwhite is an experimental interface by Sea View Lab — exploring what
agentic tools can become when they live inside the workflow you already
use, not in a new chat window.
```

---

## What this is

A cinematic, scroll-driven landing page for **flatwhite** — a Career
Positioning agent designed to live inside Claude rather than as another
SaaS dashboard. The page is a manifesto, a how-it-works, and a product
preview rolled into one continuous atmospheric scroll.

The aesthetic: **espresso × quiet luxury × Vision Pro**. Deep chocolate
base, warm Turrell-style halos (cream / amber / ember), Geist Sans light
typography, glass surfaces, and a stylized constellation map at the
center of the page.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (`@theme` tokens) |
| Motion | Framer Motion |
| 3D | `@react-three/fiber` + `@react-three/drei` *(currently unused — kept for future revisions)* |
| Smooth scroll | Lenis (`lerp: 0.08`, `duration: 1.4`) |
| Fonts | Geist Sans + Geist Mono via `next/font` |

No shadcn, no Radix, no UI kit. Every component is bespoke.

## Run locally

```bash
npm install
npm run dev
```

By default Next.js picks port 3000 (or 3001/3002 if taken). Open the URL
printed in the terminal.

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx           Fonts + Lenis smooth scroll wrapper + metadata
  page.tsx             Single-page composition of all sections
  globals.css          Espresso palette + Tailwind v4 @theme tokens

components/
  AmbientBackground.tsx    Scroll-driven chocolate gradient + Turrell auroras
  Pulse.tsx                Top-right coffee cup totem (SVG, fills with scroll)
  StackedMenu.tsx          Top-center menu (READ · MIRROR · MAP · AIM · RISE)
  ScrollThread.tsx         Right-edge progress thread (amber → cream)
  SmoothScroll.tsx         Lenis init (client wrapper)
  OrbScene.tsx             R3F iridescent orb — kept for future, not imported
  sections/
    Hero.tsx              "Stop being underestimated."
    TheMoment.tsx         01 · Daily Read — the ritual
    ManifestoBreak.tsx    02 · The Asymmetry — "Recruiters have AI. You don't."
    HowItWorks.tsx        03 · How it works — "Now you do. It lives in Claude."
    Artifact.tsx          The Artifact — 3 glass cards (daily output)
    MarketMirror.tsx      04 · Your Constellation — SVG starmap
    TheFullCircle.tsx     05 · The 360 — 6 capability cards + journey timeline
    FinalCTA.tsx          The promise + Sea View Lab attribution footer

lib/
  colors.ts            Palette tokens + ambient stage stops
```

## Design tokens

All atmospheric tokens live in `app/globals.css` under `@theme`. The core
ones to know:

```css
--deep:   #1d0f06   /* espresso base */
--mid:    #2a180c
--soft:   #3a2414
--cream:  #f5dcb3   /* warm primary accent */
--amber:  #e89a4b   /* the warm signal */
--ember:  #c8662a
--sage:   #8db09e   /* cool counterpoint (Cryo green) */
--text:   #faf0df   /* warm white */
```

Never `#000000`. Always `--deep` or `--void`.

## The narrative arc

Each section has a job in the story. Read them in order:

1. **Hero** — The wound: *"Stop being underestimated."*
2. **Daily Read** — The ritual: a 60-second morning read
3. **Manifesto** — The asymmetry: *"Recruiters have AI. You don't."* → *until now*
4. **How it works** — The pivot: *"Now you do. It lives in Claude."* — four concrete steps inside the Claude conversation
5. **The Artifact** — The proof: 3 glass cards (Daily Read · Gap · Move)
6. **Your Constellation** — The wow: an SVG starmap with you, peers, target, and the path between them
7. **The 360** — The breadth: 6 capability cards + cover-letter mock + 5-step journey timeline (Day 01 → Day 21)
8. **Closing** — The promise: *"Sell yourself at the right price."* + Sea View Lab signature

## Performance notes

- All routes are static-rendered (`○ Static` in build output).
- Heavy assets are dynamically imported and conditionally mounted (when applicable).
- Auroras use native radial gradients — no `filter: blur` on the large fixed layers.
- Backdrop blur is capped at `[6px]` on small pills; `xl` only on hero CTAs.
- Lenis is disabled under `prefers-reduced-motion`.
- All scroll-driven transforms use `translate3d` and `will-change: transform`.

## CTAs

The two primary CTAs (Hero and FinalCTA) both link to LinkedIn —
*"Let's discuss."*

```
https://www.linkedin.com/in/tania-bezancon/
```

Footer also surfaces:
- [Sea View Lab](https://seaviewlab.com)
- [LinkedIn](https://www.linkedin.com/in/tania-bezancon/)
- [Portfolio](https://taniabezancon.netlify.app/en)
- GitHub (this repo)

## Credits

Brief, narrative arc, repositioning, and execution: collaboration between
Tania ([@taniabezancon](https://taniabezancon.netlify.app/en)) and Claude.

Made in Barcelona · 2026

— [Sea View Lab](https://seaviewlab.com)
