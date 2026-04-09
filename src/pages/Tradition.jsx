import { Link } from 'react-router-dom'
import { PageWrapper, FadeUp, GoldDivider, SectionTag, Quote, GlassCard, PageHero } from '../components/UI'

const siddhars = [
  { name: 'Thirumoolar', desc: 'Author of the Thirumandiram — 3000 verses mapping the inner cosmos. He fused yoga, tantra, and vedanta into a single living system.' },
  { name: 'Agasthiyar',  desc: 'The root of the Tamil Siddhar tree. Master of language, medicine, alchemy, and inner transformation. Revered across South and Southeast Asia.' },
  { name: 'Bogar',       desc: 'A Siddhar who transcended cultural boundaries. Known for advanced knowledge in chemistry, medicine, and the preparation of the Pazhani deity.' },
  { name: 'Ramalinga Swami', desc: 'Known as Vallalar. His path of compassion and light remains one of the most accessible and profound within the Siddhar stream.' },
]

const principles = [
  { title: 'Deathlessness (Deathless Body)',   body: 'The Siddhars pursued bodily immortality not as ego-continuation but as an instrument for sustained service and realization.' },
  { title: 'Direct Experience Over Doctrine',  body: 'No belief required. The path is one of direct inner observation. Truth is verified, not inherited.' },
  { title: 'Compassion as Foundation',          body: 'Genuine realization without compassion is incomplete. All Siddhar masters demonstrate that knowledge and love are one.' },
  { title: 'Science and Spirit as One',         body: 'The Siddhars saw no gap between the sacred and the scientific. Both are investigations into the nature of reality.' },
]

export default function Tradition() {
  return (
    <PageWrapper>
      <PageHero
        tag="The First Pillar"
        title="The Siddhar Tradition"
        subtitle="An unbroken river of inner science — flowing from ancient Tamil lands into the living present"
        imgUr="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1400&auto=format&fit=crop"
      />

      {/* Intro */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <FadeUp>
          <SectionTag>Origins</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-8">Who Were the Siddhars?</h2>
          <p className="font-serif text-xl text-stone-300 leading-relaxed italic mb-6">
            The Tamil word "Siddhar" (சித்தர்) derives from "Siddhi" — meaning one who has attained. But attained what? Not power over others. Not social recognition. Something far more radical: mastery over the self, over the body, over time.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            Siddhars were poets, physicians, alchemists, yogi-scientists and mystics who lived across South India — primarily within the Tamil civilization — spanning thousands of years. Their names are remembered not through institutional records, but through their songs, their cures, their teachings, and the living transmission they passed from master to disciple across generations.
          </p>
        </FadeUp>

        <GoldDivider />

        <FadeUp>
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-6">
            Unlike orthodox religious paths that placed authority in priesthood and scripture, the Siddhars were iconoclasts. They challenged caste. They questioned ritual without understanding. They exposed the difference between the performance of spirituality and the actual experience of it.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            Yet they were not nihilists. They built — a complete inner science. A system that could take a human being from unconscious living to full conscious awakening.
          </p>
        </FadeUp>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <FadeUp>
          <Quote attribution="Thirumoolar — Thirumandiram">
            I thought of the Lord's feet and my thought became knowledge. I thought of the Self and that Self became me.
          </Quote>
        </FadeUp>
      </section>

      {/* Key Figures */}
      <section className="py-20 bg-ember border-t border-b border-gold-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <SectionTag>Pillars of the Tradition</SectionTag>
            <h2 className="font-display text-3xl md:text-4xl text-gold-gradient">The Eighteen Siddhars</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            {siddhars.map((s, i) => (
              <FadeUp key={s.name} delay={i * 0.1}>
                <GlassCard>
                  <h3 className="font-serif text-2xl text-gold-400 mb-3">{s.name}</h3>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed">{s.desc}</p>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <p className="text-center mt-8 font-serif italic text-stone-500">
              … and fourteen more masters whose teachings form the living curriculum of the Gurukulam.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <SectionTag>Core Principles</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient">What Makes the Siddhar Path Unique?</h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.1}>
              <div className="border-l-2 border-gold-500/40 pl-8 py-2">
                <h3 className="font-serif text-xl text-stone-100 mb-3">{p.title}</h3>
                <p className="font-sans text-sm text-stone-400 leading-relaxed">{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Next page CTA */}
      <section className="py-20 text-center border-t border-gold-500/10">
        <FadeUp>
          <p className="font-serif italic text-stone-400 text-xl mb-8 max-w-xl mx-auto">
            The tradition is the soil. Now explore what grows from it — Consciousness Science.
          </p>
          <Link
            to="/consciousness"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-obsidian transition-all duration-500"
          >
            Consciousness Science →
          </Link>
        </FadeUp>
      </section>
    </PageWrapper>
  )
}
