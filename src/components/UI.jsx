// ─── PageWrapper ──────────────────────────────────────────────────────────────
import { motion } from 'framer-motion'

export function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.main>
  )
}

// ─── FadeUp ──────────────────────────────────────────────────────────────────
export function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── GoldDivider ─────────────────────────────────────────────────────────────
export function GoldDivider({ symbol = '✦' }) {
  return (
    <div className="ornament my-12 text-gold-500/60 text-xs">
      {symbol}
    </div>
  )
}

// ─── SectionTag ──────────────────────────────────────────────────────────────
export function SectionTag({ children }) {
  return (
    <span className="inline-block font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500 border border-gold-500/30 px-4 py-1.5 rounded-full mb-6">
      {children}
    </span>
  )
}

// ─── Quote ───────────────────────────────────────────────────────────────────
export function Quote({ children, attribution }) {
  return (
    <div className="relative my-16 px-8 md:px-16 py-10 glass-card rounded-sm">
      <div className="absolute top-0 left-8 text-6xl text-gold-500/20 font-serif leading-none -translate-y-2 select-none">"</div>
      <blockquote className="font-serif text-2xl md:text-3xl text-stone-200 italic leading-relaxed text-center">
        {children}
      </blockquote>
      {attribution && (
        <p className="text-center mt-6 font-sans text-xs tracking-[0.3em] uppercase text-gold-500/70">{attribution}</p>
      )}
      <div className="absolute bottom-0 right-8 text-6xl text-gold-500/20 font-serif leading-none translate-y-4 select-none rotate-180">"</div>
    </div>
  )
}

// ─── GlassCard ───────────────────────────────────────────────────────────────
export function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.4)' }}
      transition={{ duration: 0.3 }}
      className={`glass-card rounded-sm p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}

// ─── HeroTitle ───────────────────────────────────────────────────────────────
export function HeroTitle({ children }) {
  return (
    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-gradient leading-[1.1] text-glow">
      {children}
    </h1>
  )
}

// ─── PageHero ─────────────────────────────────────────────────────────────────
export function PageHero({ tag, title, subtitle, imgUrl }) {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
      </div>
      {/* Noise */}
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")" }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeUp>
          <SectionTag>{tag}</SectionTag>
          <h1 className="font-display text-4xl md:text-6xl text-gold-gradient text-glow mb-6 leading-tight">
            {title}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-stone-300 italic max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
