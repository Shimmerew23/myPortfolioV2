# Justine Acosta — Portfolio V2

**"The Nocturnal Gallery"** — A dark, cinematic personal portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion v12. Designed to feel like a curated art gallery: moody, intentional, and emotionally resonant.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (PostCSS plugin) |
| Animation | Framer Motion v12 |
| Icons | Lucide React |
| Email | Nodemailer + Gmail SMTP |
| Fonts | Newsreader (serif/italic headlines) + Inter (body) |
| Runtime | React 19 + Node.js |

---

## Features

### Design System — "The Nocturnal Gallery"
- Full custom Tailwind v4 `@theme` token set: deep crimson/burgundy primary (`#8d021f`), blush accent (`#ffb3b2`), and near-black surface palette (`#171212` → `#3a3333`)
- Material Design 3 standard easing curve (`[0.4, 0, 0.2, 1]`) applied consistently across all transitions via a shared `EASE` constant
- Three reusable motion presets in `src/lib/motion.ts`: `EASE`, `SLOW`, `staggerContainer`, `fadeUpVariant`
- Glassmorphism navbar (`.glass` utility) that transitions from transparent to frosted on scroll
- Atmospheric radial gradient "orbs" with `orb-pulse` and `orb-drift` CSS keyframe animations

### Navbar
- Fixed position with scroll-aware background blur transition
- Active section tracking via `IntersectionObserver` — highlights the current nav link with a burgundy underline (`layoutId` shared layout animation)
- Smooth scroll-to-section on link click
- Fully responsive: hamburger menu on mobile with full-screen overlay and staggered link entrance animation
- "Contact" CTA button always visible on desktop

### Hero Section
- Per-character 3D flip-in title animation (`rotateX: -90 → 0`) with staggered delays — built without a library, using mapped `motion.span` elements
- Parallax scroll effect: content drifts upward and fades out as the user scrolls (`useScroll` + `useTransform` + `useSpring`)
- Expanding letter-spacing animation on the eyebrow label
- Role chips (Full Stack Developer / Prompt Engineer) with icon hover micro-interactions
- Animated scroll indicator (bouncing vertical gradient line)

### About Section
- Two-column layout: portrait photo + biography text
- Portrait with hover scale effect, vignette overlay, and a crimson glow that appears on hover
- Staggered `fadeUp` reveal for all text blocks on scroll-into-view
- Highlight cards with icon hover scale (`ShieldCheck`, `Sparkles`)

### Journey Section (Timeline)
- Animated vertical timeline line that draws itself from top to bottom (`scaleY: 0 → 1`) on scroll
- Timeline dots that scale up dramatically on hover
- Milestone entries slide in from the left with staggered delays
- Active milestone (current role) uses blush accent color; past milestones are muted

### Technical Arsenal Section
- 5-category skill grid: Frontend, Backend, Database, DevOps & Tools, AI & Integrations
- Cards with a burgundy top-accent line, hover border glow, and inner radial gradient reveal
- Individual skill pills animate in with `scale: 0.85 → 1` stagger on scroll
- Pills highlight on hover with a blush border tint

### Selected Work Section
- 5 featured projects displayed in a 2-column masonry-style grid
- Each card reveals on scroll with a staggered `y: 50 → 0` fade
- NDA badge for confidential client work
- Category label chips and tech stack tag pills per project
- "View Live" CTA with diagonal arrow hover animation (`x: 4, y: -4`)
- "Live Site Unavailable" fallback for NDA projects

**Projects showcased:**
1. **Efficyon** — AI-powered SaaS cost optimizer (Next.js, OpenAI API, Supabase)
2. **The Cartly** — eCommerce platform (React, MongoDB, Redis, Nginx)
3. **Verdant** — Security-first private messaging app (Next.js, PostgreSQL, Firebase Auth)
4. **Solar Calculator & Installer Platform** *(NDA)* — Canadian market PV sizing tool (PVWatts API, MapBox)
5. **Salon & Stylist Management Platform** *(NDA)* — Multi-role CRM (Supabase, Stripe)

### Contact Section
- Functional contact form with full server-side email delivery via Nodemailer + Gmail SMTP (`/api/contact`)
- Branded HTML email template sent on submission (dark theme, matching portfolio palette)
- Client-side 2-minute send cooldown (persisted to `localStorage` across page refreshes) with live countdown timer display (`MM:SS`)
- Form field focus states with blush border highlight
- Submission states: `idle` → `sending` → `sent` / `error` with auto-reset after 4 seconds
- Contact info sidebar: email, GitHub, LinkedIn with icon hover color transitions
- Ambient radial background glow at the bottom of the section

### Footer
- Copyright, social links (LinkedIn, GitHub, Facebook), and version byline
- All elements fade in on scroll with staggered delays

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # POST /api/contact — Nodemailer email handler
│   ├── favicon.ico
│   ├── globals.css               # Tailwind v4 @theme tokens + global keyframes
│   ├── layout.tsx                # Root layout — fonts, metadata, body background
│   └── page.tsx                  # Single-page composition of all sections
│
├── components/
│   ├── layout/                   # Chrome components (persistent across scroll)
│   │   ├── Navbar.tsx            # Fixed nav with scroll tracking + mobile overlay
│   │   └── Footer.tsx            # Social links + copyright
│   └── sections/                 # Page section components
│       ├── HeroSection.tsx       # Parallax hero with per-char animated title
│       ├── AboutSection.tsx      # Portrait + biography with scroll-reveal
│       ├── JourneySection.tsx    # Animated timeline of career milestones
│       ├── ArsenalSection.tsx    # Tech skills grid by category
│       ├── WhatIDoSection.tsx    # Services & specializations grid
│       ├── WorkSection.tsx       # Selected project cards with live links
│       └── ContactSection.tsx    # Contact form + info sidebar
│
├── data/                         # Static content, separated from UI logic
│   ├── navigation.ts             # navLinks[], footerLinks[]
│   ├── journey.ts                # milestones[]
│   ├── arsenal.ts                # skill categories[] with DevIcon/SimpleIcon URLs
│   ├── projects.ts               # projects[]
│   ├── services.ts               # services[] with Lucide icon component refs
│   └── contact.ts                # contactLinks[]
│
├── lib/
│   └── motion.ts                 # Shared Framer Motion easing + variant presets
│
└── types/
    └── index.ts                  # Shared TypeScript interfaces (Milestone, Project, Service, etc.)
```

---

## Environment Variables

Create a `.env.local` file at the project root:

```env
GMAIL_USER=your.gmail@gmail.com
GMAIL_APP_PASSWORD=your_16_char_app_password
REDIRECT_GMAIL_USER=recipient@email.com
```

> Use a Gmail [App Password](https://myaccount.google.com/apppasswords), not your regular account password.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint check
```

---

## Deployment

### Deploy to Vercel

#### Option A — Vercel CLI (recommended)

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. From the project root, run:
   ```bash
   vercel
   ```
   Follow the prompts — link to an existing project or create a new one.

3. Set environment variables via the CLI:
   ```bash
   vercel env add GMAIL_USER
   vercel env add GMAIL_APP_PASSWORD
   vercel env add REDIRECT_GMAIL_USER
   ```
   Select **Production**, **Preview**, and **Development** as needed.

4. Deploy to production:
   ```bash
   vercel --prod
   ```

---

#### Option B — Vercel Dashboard (Git integration)

1. Push your project to a GitHub repository.

2. Go to [vercel.com/new](https://vercel.com/new) and click **Import Project**.

3. Select your GitHub repository and click **Deploy**.

4. Before the first deploy completes, go to your project's **Settings → Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `GMAIL_USER` | your Gmail address |
   | `GMAIL_APP_PASSWORD` | your 16-character App Password |
   | `REDIRECT_GMAIL_USER` | the inbox that receives contact messages |

5. After saving the variables, go to **Deployments** and click **Redeploy** so the new env vars take effect.

---

#### After Deployment

- Your site will be live at `https://<your-project>.vercel.app`
- Every push to `main` triggers an automatic production redeploy
- Pull request branches get isolated **Preview URLs** automatically
- The `/api/contact` route is deployed as a Vercel Serverless Function — no additional setup needed

> **Gmail App Password setup:** Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords), create an app password for "Mail", and use the generated 16-character code as `GMAIL_APP_PASSWORD`. Your regular Gmail password will not work.
