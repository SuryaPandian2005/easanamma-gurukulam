import { Link } from 'react-router-dom'
import { PageWrapper, FadeUp, GoldDivider, SectionTag, Quote, GlassCard, PageHero } from '../components/UI'

const levels = [
  { num: '01', title: 'Gross Awareness',    body: 'The ordinary waking mind. Aware of the body, senses, and the surface of thought. The entry point — not the destination.' },
  { num: '02', title: 'Subtle Awareness',   body: 'Beyond sensory data. The realm of energy, breath, and inner perception. Where yogic practice begins to open new dimensions.' },
  { num: '03', title: 'Causal Awareness',   body: 'The root of individual identity. Where the seeds of thought and karma are stored. Deep meditation can illuminate this level.' },
  { num: '04', title: 'Pure Consciousness', body: 'Beyond the individual self. The universal background of awareness in which all experience arises. This is what the Siddhars called the "Parai" — the Supreme.' },
]

const methods = [
  { icon: '◉', title: 'Observation',     body: 'Not suppression or analysis — pure, non-judging watching. The Siddhar approach uses observation as the primary spiritual tool.' },
  { icon: '◎', title: 'Breath Science',  body: 'Pranayama as understood by the Siddhars is a complete technology of inner transformation, not mere exercise.' },
  { icon: '⊙', title: 'Sound & Mantra',  body: 'Tamil mantras as vibrational keys — each syllable mapped to specific nodes of awareness in the body-mind complex.' },
  { icon: '◈', title: 'Silence',         body: 'The deepest Siddhar practice. Resting in the awareness that knows all experience without itself being an experience.' },
]

export default function Consciousness() {
  return (
    <PageWrapper>
      <PageHero
        tag="The Second Pillar"
        title="Consciousness Science"
        subtitle="The Siddhar map of awareness — from ordinary perception to infinite knowing"
        imgUr="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1400&auto=format&fit=crop"
      />

      {/* Opening */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <FadeUp>
          <SectionTag>The Inner Laboratory</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-8">
            What the Siddhars Discovered About the Mind
          </h2>
          <p className="font-serif text-xl text-stone-300 italic leading-relaxed mb-6">
            Modern science is only beginning to ask: what is consciousness? The Tamil Siddhars answered this question thousands of years ago — not with speculation, but with direct inner experiment.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            Consciousness science, as understood in the Siddhar tradition, is not philosophy. It is a repeatable inner technology. The practitioner — through sustained practice under qualified guidance — directly explores the levels, movements, and nature of awareness itself. No belief is required. Only attention.
          </p>
        </FadeUp>
      </section>

      <Quote attribution="Ramalinga Swami (Vallalar)">
        When the light of awareness turned fully inward, the darkness of unknowing vanished — not gradually, but as night vanishes before the sun.
      </Quote>

      {/* Levels of Consciousness */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <SectionTag>The Siddhar Map</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient">Levels of Consciousness</h2>
        </FadeUp>
        <div className="space-y-6">
          {levels.map((l, i) => (
            <FadeUp key={l.num} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 p-8 glass-card border border-gold-500/10 hover:border-gold-500/30 transition-colors duration-500">
                <div className="font-display text-5xl text-gold-500/20 md:w-24 flex-shrink-0 flex items-start pt-1">
                  {l.num}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-gold-400 mb-3">{l.title}</h3>
                  <p className="font-sans text-base text-stone-400 leading-relaxed">{l.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <GoldDivider symbol="◉" />

      {/* Methods */}
      <section className="py-20 bg-ember border-t border-b border-gold-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <SectionTag>Inner Methods</SectionTag>
            <h2 className="font-display text-3xl md:text-4xl text-gold-gradient">Tools of Siddhar Consciousness Science</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8">
            {methods.map((m, i) => (
              <FadeUp key={m.title} delay={i * 0.1}>
                <GlassCard>
                  <div className="text-3xl text-gold-500/60 mb-4 font-serif">{m.icon}</div>
                  <h3 className="font-serif text-xl text-stone-100 mb-3">{m.title}</h3>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed">{m.body}</p>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <FadeUp>
          <SectionTag>The Fundamental Question</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-8">
            Who Is Aware?
          </h2>
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-6">
            The central inquiry of Siddhar consciousness science is deceptively simple: who or what is it that is aware of all experience? Every thought arises in awareness. Every emotion is witnessed by something that is not itself the emotion. Every perception is known by something that is not the sensory organ.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-6">
            The Siddhars called this background awareness "Chit" — pure consciousness. Not personal. Not bounded by the body. Not created or destroyed. It is the unchanging witness within which all of creation appears and disappears.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            The entire Siddhar practice is, at its deepest, a turning of attention toward this witnessing presence — until the seeker realizes that they are not merely looking at awareness. They are awareness, looking.
          </p>
        </FadeUp>
      </section>

      <section className="py-16 text-center border-t border-gold-500/10">
        <FadeUp>
          <p className="font-serif italic text-stone-400 text-xl mb-8">
            Explore the practical applications — Siddhar Science.
          </p>
          <Link
            to="/science"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-obsidian transition-all duration-500"
          >
            Siddhar Science →
          </Link>
        </FadeUp>
      </section>
    </PageWrapper>
  )
}
