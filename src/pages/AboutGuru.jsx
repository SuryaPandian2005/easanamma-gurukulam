import { Link } from 'react-router-dom'
import { PageWrapper, FadeUp, GoldDivider, SectionTag, Quote, GlassCard } from '../components/UI'
import { motion } from 'framer-motion'

const teachings = [
  'The body as a complete cosmological instrument',
  'Direct transmission of Siddhar consciousness practices',
  'Integrating ancient knowledge with modern understanding',
  'The path of compassion as the highest alchemy',
  'Kaya Kalpa and body transformation practices',
  'Siddha medicine and its inner dimensions',
]

export default function AboutGuru() {
  return (
    <PageWrapper>
      {/* Custom hero for About page */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop')]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-32 md:py-0">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <SectionTag>The Teacher</SectionTag>
              <h1 className="font-display text-4xl md:text-6xl text-gold-gradient text-glow mb-6 leading-tight">
                Shree<br />Easanamma
              </h1>
              <p className="font-serif text-xl italic text-stone-300 leading-relaxed mb-8">
                Keeper of the Siddhar flame. Teacher of the inner science. Guide for those who have heard the call of awareness.
              </p>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                Shree Easanamma is not a lecturer or an author of spiritual concepts. She is a practitioner — one whose entire life has been the laboratory of the Siddhar path. Her teaching emerges not from scholarship alone, but from the silence of direct realization.
              </p>
            </motion.div>
          </div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-gold-500/15" />
              <div className="absolute inset-8 rounded-full border border-gold-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-7xl text-gold-500/30">⊕</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <FadeUp>
          <SectionTag>The Path</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-8">
            A Life Given to the Science
          </h2>
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-6">
            Shree Easanamma's journey began not with a formal initiation, but with a burning inner question that would not be quieted. From childhood, the experience of awareness itself — its mystery, its depth, its silent presence behind all activity — was more real to her than anything taught in conventional education.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-6">
            Her path led her deep into the Tamil Siddhar tradition — not as a student of texts, but as one who tested each teaching in the crucible of inner experience. Under the guidance of her own teacher, she underwent the full curriculum of Siddhar practice: yogic disciplines, consciousness science, Siddha medicine, kaya kalpa, and the deepest practices of silence and awareness.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            The Gurukulam she has established is the natural expression of a life fully given to this science. It is not an institution. It is an offering — made available to those who are sincerely ready to receive it.
          </p>
        </FadeUp>
      </section>

      <GoldDivider />

      {/* Qualities of Teaching */}
      <section className="py-20 bg-ember border-t border-b border-gold-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <SectionTag>The Teaching</SectionTag>
            <h2 className="font-display text-3xl md:text-4xl text-gold-gradient">Core Teaching Areas</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-4">
            {teachings.map((t, i) => (
              <FadeUp key={t} delay={i * 0.07}>
                <div className="flex items-center gap-4 p-6 glass-card border border-gold-500/10 hover:border-gold-500/30 transition-colors duration-300">
                  <span className="text-gold-500/60 font-serif text-lg flex-shrink-0">◉</span>
                  <p className="font-sans text-sm text-stone-300">{t}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Words from the teacher */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <FadeUp>
          <SectionTag>In Her Words</SectionTag>
          <Quote attribution="Shree Easanamma">
            I do not teach what I have read. I teach what I have become. And what I have become is simply — more awake to what has always been here.
          </Quote>
        </FadeUp>

        <FadeUp className="mt-16">
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-6">
            Shree Easanamma does not position herself as the destination of the student's journey. Her role, as she understands it, is to make visible the path that already exists — to remove the obscurations that prevent the student from seeing their own nature.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            This humility is not performative. It is the natural expression of genuine realization — where what was once called "the self" has been seen through, and what remains is simply openness, clarity, and unconditional compassion.
          </p>
        </FadeUp>
      </section>

      <section className="py-16 text-center border-t border-gold-500/10">
        <FadeUp>
          <p className="font-serif italic text-stone-400 text-xl mb-8">
            Ready to meet the teacher through direct transmission?
          </p>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 bg-gold-500 text-obsidian hover:bg-gold-400 transition-all duration-500"
          >
            Connect with the Gurukulam →
          </Link>
        </FadeUp>
      </section>
    </PageWrapper>
  )
}
