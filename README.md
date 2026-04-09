# Shree Easanamma Gurukulam
## Siddhar Consciousness Science — Production Website

A cinematic, premium spiritual website built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
easanamma-gurukulam/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky transparent → solid navbar + mobile menu
│   │   ├── Footer.jsx       # Gold-accented footer with links
│   │   └── UI.jsx           # Reusable: PageWrapper, FadeUp, GoldDivider,
│   │                        #   SectionTag, Quote, GlassCard, HeroTitle, PageHero
│   ├── pages/
│   │   ├── Home.jsx         # Parallax hero + pillars + story blocks
│   │   ├── Tradition.jsx    # Siddhar tradition deep-dive
│   │   ├── Consciousness.jsx# Consciousness science (levels + methods)
│   │   ├── SiddharScience.jsx # Medicine, yoga, varmam, astrology
│   │   ├── GurukulamLife.jsx  # Daily rhythm + programmes
│   │   ├── AboutGuru.jsx    # Shree Easanamma profile
│   │   └── Contact.jsx      # Enquiry form with validation
│   ├── App.jsx              # Router + AnimatePresence
│   ├── main.jsx
│   └── index.css            # Tailwind + custom utilities
├── index.html               # SEO meta tags + Google Fonts
├── tailwind.config.js       # Custom colors, fonts, gradients
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Design System

### Colors
| Token         | Hex       | Usage                        |
|---------------|-----------|------------------------------|
| `obsidian`    | `#0A0806` | Primary background           |
| `ember`       | `#1a1208` | Section backgrounds          |
| `gold-500`    | `#C9A84C` | Accents, borders, CTAs       |
| `stone-300`   | Tailwind  | Body text                    |

### Typography
| Role     | Font                  |
|----------|-----------------------|
| Display  | Cinzel Decorative     |
| Headings | Cormorant Garamond    |
| Body     | Jost                  |

### Utility Classes (custom)
- `.text-gold-gradient` — gold shimmer on text
- `.glass-card` — glassmorphism card
- `.glow-gold` — ambient gold box-shadow
- `.text-glow` — gold text shadow

---

## ✨ Features

- **Framer Motion** — fade-up on scroll, parallax hero, page transitions, hover effects
- **Sticky Navbar** — transparent on top → solid black + blur on scroll, mobile hamburger
- **Glassmorphism cards** — frosted glass with gold borders
- **Parallax hero** — background moves at 0.25x scroll speed
- **Smooth routing** — AnimatePresence for page transition fades
- **Fully responsive** — mobile-first, collapsible nav
- **SEO ready** — semantic HTML, H1→H3 hierarchy, meta tags in index.html
- **Contact form** — with enquiry type selector, validation, success state
- **Custom scrollbar** — thin gold scrollbar

---

## 🖼️ Adding Your Own Images

Replace Unsplash URLs in each page with your actual cinematic images:

```jsx
// In any page file, find lines like:
imgUrl="https://images.unsplash.com/photo-..."

// Replace with your image paths:
imgUrl="/images/hero-meditation.jpg"
// (place images in /public/images/)
```

---

## 📦 Deploying

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag & drop the /dist folder to netlify.com
```

### Manual
```bash
npm run build
# Upload /dist folder to any static host
```

---

## 🔧 Customization

### Add a new page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`

### Change fonts
Edit `tailwind.config.js` → `fontFamily` and update the Google Fonts link in `index.html`

### Change gold color
Edit `tailwind.config.js` → `colors.gold.500`

---

*Built for Shree Easanamma Gurukulam — Siddhar Consciousness Science*
