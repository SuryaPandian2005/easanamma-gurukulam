import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageWrapper, FadeUp, GoldDivider, SectionTag, Quote, GlassCard } from '../components/UI'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpeg'
import img12 from '../assets/images/img12.jpeg'
import SacredGeometry from '../components/SacredGeometry' 

const pillars = [
  {
    num: '01',
    tag: 'First Pillar',
    title: 'Siddhar Tradition',
    body: 'An unbroken living lineage stretching back thousands of years. Tamil Siddhars were masters of inner science — they mapped the cosmos within the human body and left a complete system for liberation.',
    path: '/tradition',
  },
  {
    num: '02',
    tag: 'Second Pillar',
    title: 'Consciousness Science',
    body: 'Not belief, not ritual alone — but direct inner observation. The Siddhar approach treats awareness itself as the laboratory, consciousness as the field of inquiry.',
    path: '/consciousness',
  },
  {
    num: '03',
    tag: 'Third Pillar',
    title: 'Siddhar Science',
    body: 'A holistic system encompassing yoga, alchemy, medicine, energy, and cosmology — woven into a single unified understanding of existence.',
    path: '/science',
  },
]

const stories = [
  {
    title: 'A Living Gurukulam',
    body: 'Not a lecture hall — a living field. Students here don\'t just learn; they transform. The Gurukulam is designed as an ecosystem of inner work, where nature, silence, practice, and guidance meet.',
    path: '/gurukulam',
    img: img11,
  },
  {
    title: 'The Guru\'s Path',
    body: 'Shree Easanamma carries the flame of the Siddhar lineage — not as an institution, but as a living transmission. Her journey from seeker to teacher is itself a teaching.',
    path: '/about',
    img: img12,
  },
]

export default function Home() {
  const heroRef    = useRef(null)
  const { scrollY } = useScroll()
  const heroY       = useTransform(scrollY, [0, 600], [0, 160])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax BG */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `ur('https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1600&auto=format&fit=crop')`,
          }}
          animate={{ y: heroY }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian" />
        <div className="absolute inset-0 bg-radial-gradient" style={{
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)'
        }} />
        <SacredGeometry />

        {/* CONTENT */}


        {/* Floating particles (CSS) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-500/30"
            style={{
              left: `${15 + i * 15}%`,
              top:  `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
        

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="text-5xl text-gold-500/40 mb-8 font-serif select-none">⊕</div>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-500/80 mb-8">
              Shree Easanamma Gurukulam
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-gold-gradient text-glow mb-8 leading-[1.05]"
          >
            Siddhar<br />Consciousness<br />Science
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-serif text-xl md:text-2xl text-stone-300 italic mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A Direct Path of Observation, Awareness, and Transformation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              to="/tradition"
              className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-obsidian transition-all duration-500 hover:tracking-[0.4em]"
            >
              Begin the Journey
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-stone-600">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-gradient-to-b from-gold-500/40 to-transparent"
          />
        </motion.div>
      </section>


      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <SectionTag>The Ancient Path</SectionTag>
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-8 leading-tight">
            Where Silence Becomes Knowledge
          </h2>
          <p className="font-serif text-xl text-stone-300 leading-relaxed italic">
            The Tamil Siddhars did not theorize about consciousness. 
            They entered it, observed it, and transformed through it. 
            This Gurukulam preserves that living science — not as belief, but as direct experience.
          </p>
        </FadeUp>

        <GoldDivider symbol="◈" />

        <div className="text-center max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl text-gold-gradient mb-4">
             A Science of Inner Exploration
         </h3>

          <p className="text-stone-400 italic leading-relaxed">
             The Siddhars approached life not as belief, but as a field of direct observation. 
            The body became the laboratory, the mind became the field, and awareness became the method.
         </p>
        </div>
        

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mt-4 text-left">
          {pillars.map((p, i) => (
            <FadeUp key={p.num} delay={i * 0.15}>
              <Link to={p.path} className="group block h-full">
                <GlassCard className="h-full hover:glow-gold transition-all duration-500">
                  <div className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/50 mb-6">
                    {p.num} — {p.tag}
                  </div>
                  <h3 className="font-serif text-2xl text-stone-100 mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed mb-6">
                    {p.body}
                  </p>
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500/70 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Explore <span>→</span>
                  </span>
                </GlassCard>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <FadeUp>
          <Quote attribution="Tamil Siddhar, Thirumandiram">
            The body is the temple. The breath is the priest. The still mind is the offering. Within this — the infinite waits.
          </Quote>
        </FadeUp>
      </section>

      {/* ── STORY BLOCKS ─────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-6">
        {stories.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.1}>
            <Link to={s.path} className="group">
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 overflow-hidden`}>
                {/* Image */}
                <div className="relative md:w-1/2 h-64 md:h-[420px] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${s.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-obsidian/30 to-obsidian/10" />
                </div>
                {/* Text */}
                <div className="md:w-1/2 bg-ember border border-gold-500/10 group-hover:border-gold-500/30 transition-colors duration-500 p-10 md:p-16 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl text-gold-gradient mb-6">{s.title}</h3>
                  <p className="font-serif text-lg text-stone-300 leading-relaxed italic mb-8">{s.body}</p>
                  <div className="mt-1 space-y-2">
                  <p className="text-stone-400 text-sm">• Observation over belief</p>
                  <p className="text-stone-400 text-sm">• Discipline over distraction</p>
                  <p className="text-stone-400 text-sm">• Experience over information</p>
                </div>
                  <span className="mt-2 font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500/70 flex items-center gap-2 group-hover:gap-5 transition-all duration-300">
                    Discover more <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </section>
      {/* ✅ ONLY ADDED THIS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-center text-3xl md:text-5xl text-gold-gradient mb-12">
            Siddhar Teachings
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden border border-gold-500/20"
              >
                <img
                  src={img}
                  alt={`img-${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>


      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/3 to-transparent pointer-events-none" />
        <FadeUp>

          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-500/70 mb-8">
            The Path is Open
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-stone-100 mb-8">
            Ready to Begin?
          </h2>
          <div className="mt-10 space-y-4 text-stone-400 italic">
            <p>Are you seeking answers — or clarity?</p>
            <p>Are you following paths — or ready to observe directly?</p>
            <p>Are you prepared to transform — not just understand?</p>
          </div><br></br>
          <p className="font-serif italic text-stone-400 text-xl max-w-lg mx-auto mb-12">
             The Gurukulam welcomes sincere seekers who are ready to move beyond belief and enter direct experience.
          </p>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-12 py-5 bg-gold-500 text-obsidian hover:bg-gold-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            Join the Gurukulam
          </Link>
        </FadeUp>
      </section>
    </PageWrapper>
  )
}