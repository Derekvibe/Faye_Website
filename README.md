# Favour | Book Editor, KDP Formatter & Cover Designer

A modern, high-performance Next.js web application built with the App Router, TypeScript, and a bespoke editorial luxury design system.

## ✨ Highlights & Key Features

- **Editorial Luxury Design System**: Tailored typography with *DM Serif Display* and *Inter*, ivory warm tones, bronze accents, glassmorphic floating header, and fluid responsive design.
- **Theme-ready colors**: The design tokens include a dark palette; the current site uses the light theme.
- **Interactive Tracked Changes Manuscript Demo**: Switch between *Raw Author Draft*, *MS Word Tracked Changes View* (with highlighted edits and margin notes), and *Publication-Ready Copy* across Fiction, Nonfiction, and Children's stories.
- **Interactive Stage Finder**: Helps authors pinpoint which of the 4 editing stages (Developmental, Line Editing, Copy Editing, Proofreading) their draft currently needs.
- **KDP Interior Formatting Studio**: Visual interactive trim size simulator (5x8, 5.5x8.5, 6x9, 8.5x11) with Paperback and Kindle / EPUB mode previews.
- **Dynamic Portfolio & Accessible Lightbox**: Filterable by genre, instant live title/author search, 3D shelf mockup slider, and full-screen keyboard-navigable Lightbox (Escape, Arrow keys, Next/Prev).
- **Interactive Quote & Turnaround Estimator**: Real-time slider (2,000 to 120,000 words), customizable service checklist, instant pricing guide, and one-click "Copy Project Brief" to paste directly into Fiverr.
- **Verified Author Reviews & FAQ**: Verified 5-star Fiverr ratings and interactive accordion FAQ.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24.22)
- npm 9+

### Run Locally

```bash
# Install dependencies (if not already installed)
npm install

# Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
favour-website/
├── public/
│   ├── assets/
│   │   ├── fonts/           # DM Serif Display & Inter WOFF2 fonts
│   │   └── img/
│   │       ├── covers/      # High-res book covers
│   │       ├── mockups/     # 3D photorealistic book mockups
│   │       ├── favour.webp  # Hero portrait
│   │       └── favour-sm.webp
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css      # Core design system tokens, typography, and animations
│   │   ├── layout.tsx       # Root layout with SEO metadata & JSON-LD schema
│   │   └── page.tsx         # Main landing page assembling all components
│   ├── components/
│   │   ├── Header.tsx       # Sticky navigation, theme toggle & mobile menu
│   │   ├── Hero.tsx         # Hero section with 3D parallax floating book mockups
│   │   ├── Ticker.tsx       # Seamless infinite marquee ribbon
│   │   ├── Services.tsx     # Service cards with deliverables and turnaround
│   │   ├── ManuscriptPreviewer.tsx # Interactive tracked changes comparison tool
│   │   ├── StagesGuide.tsx  # 4 stages of editing + interactive scenario selector
│   │   ├── FormattingStudio.tsx # KDP formatting + interactive trim size visualizer
│   │   ├── Portfolio.tsx    # Filterable portfolio grid + fullscreen lightbox modal
│   │   ├── QuoteEstimator.tsx # Interactive word count calculator & brief generator
│   │   ├── About.tsx        # Bio, credentials, and animated experience statistics
│   │   ├── Reviews.tsx      # Quoted author reviews from Fiverr
│   │   ├── Faq.tsx          # Accessible interactive accordion FAQ
│   │   ├── CtaSection.tsx   # High-impact book fan spread call to action
│   │   ├── Footer.tsx       # Links, back-to-top button, and copyright
│   │   └── StickyMobileBar.tsx # Quick mobile CTA bar
│   └── data/
│       ├── portfolioData.ts # Structured books data
│       ├── servicesData.ts  # Services breakdown & icons
│       ├── reviewsData.ts   # Author testimonials
│       └── faqData.ts       # Questions and answers
└── legacy-static-site/      # Backup of the previous static HTML version
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. The framework preset will automatically detect Next.js. Click **Deploy**.

### Netlify
1. Connect the repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
