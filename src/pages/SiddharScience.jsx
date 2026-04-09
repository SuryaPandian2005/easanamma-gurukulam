import { Link } from 'react-router-dom'
import { PageWrapper, FadeUp, GoldDivider, SectionTag, Quote, GlassCard, PageHero } from '../components/UI'

const domains = [
  {
    title: 'Siddha Medicine (Siddha Vaidyam)',
    icon: '⚕',
    body: 'A complete medical system based on the five elements, three humors (Vatham, Pitham, Kabham), and the subtle energy channels. Siddha medicine treats the root — not just the symptom.',
    points: ['Herbal formulations and mineral preparations', 'Pulse diagnosis (Naadi Pariksha)', 'Lifestyle and diet as medicine', 'Energy-body (Nadi) as the foundation of health'],
  },
  {
    title: 'Yoga & Inner Alchemy',
    icon: '◎',
    body: 'Siddhar yoga is not exercise. It is a systematic inner technology — working through body, breath, and awareness to transform gross matter into luminous consciousness.',
    points: ['Asana as energy architecture', 'Kaya Kalpa — body refinement practices', 'Kundalini and the inner fire', 'Transmutation of vital energy'],
  },
  {
    title: 'Varmam — The Science of Vital Points',
    icon: '⊕',
    body: 'The Siddhar science of vital energy points in the human body. Applied therapeutically in medicine, and understood energetically in yoga and inner practice.',
    points: ['108 key vital points mapped in the body', 'Applications in healing and martial arts', 'Relationship to acupressure and meridian systems', 'Used in advanced inner work for energy awakening'],
  },
  {
    title: 'Astrology & Cosmological Science',
    icon: '◈',
    body: 'Jothidam — Tamil astrology — as understood by the Siddhars is a vast system connecting the individual to cosmic cycles. Not fatalism, but a map of energetic influences.',
    points: ['Nadi Jothidam — the Siddhar oracle system', 'Planetary science and its inner correlates', 'The cosmic body mirrored in the human body', 'Timing of sadhana with cosmic rhythms'],
  },
]

export default function SiddharScience() {
  return (
    <PageWrapper>
      <PageHero
        tag="The Third Pillar"
        title="Siddhar Science"
        subtitle="A complete holistic science of the human being — body, energy, mind, and cosmos"
        imgUr="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&auto=format&fit=crop"
      />

      {/* Intro */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <FadeUp>
          <SectionTag>The Integrated System</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-8">
            Science Without Separation
          </h2>
          <p className="font-serif text-xl text-stone-300 italic leading-relaxed mb-6">
            In the modern world, we have separated medicine from spirituality, science from wisdom, body from mind. The Siddhars never made these separations. For them, the human being was a complete, unified field — and their science addressed every dimension of that field.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            Siddhar Science is the practical application of consciousness knowledge to the realities of life — health, energy, psychology, relationships, cosmology. It is simultaneously ancient and urgently relevant.
          </p>
        </FadeUp>
      </section>

      {/* Domain Cards */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="space-y-8">
          {domains.map((d, i) => (
            <FadeUp key={d.title} delay={i * 0.1}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} glass-card border border-gold-500/10 hover:border-gold-500/25 transition-all duration-500 overflow-hidden`}>
                <div className="md:w-16 bg-gold-500/5 flex items-start justify-center pt-10 px-6 md:px-0">
                  <span className="text-3xl text-gold-500/50 font-serif">{d.icon}</span>
                </div>
                <div className="p-10 flex-1">
                  <h3 className="font-serif text-2xl text-gold-400 mb-4">{d.title}</h3>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed mb-6">{d.body}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {d.points.map(pt => (
                      <li key={pt} className="flex items-start gap-3 font-sans text-xs text-stone-500">
                        <span className="text-gold-500/60 mt-0.5 flex-shrink-0">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <GoldDivider symbol="⚕" />

      <section className="py-20 max-w-4xl mx-auto px-6">
        <FadeUp>
          <Quote attribution="Siddhar Bogar">
            The universe is within the body. The body is within the universe. One who knows this has no disease, no death, no fear.
          </Quote>
        </FadeUp>

        <FadeUp className="mt-16">
          <SectionTag>Why It Matters Now</SectionTag>
          <h2 className="font-display text-3xl text-gold-gradient mb-6">Ancient Science for a Modern Crisis</h2>
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-4">
            The world faces an unprecedented crisis — not just ecological or political, but at the level of consciousness. Human beings are more informed than ever, and more confused than ever. More connected than ever, and more isolated than ever.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            The Siddhar sciences offer not a retreat from the modern world, but a technology for navigating it with clarity, depth, and genuine inner stability. Shree Easanamma Gurukulam is dedicated to making this science accessible, rigorous, and alive.
          </p>
        </FadeUp>
      </section>

      <section className="py-16 text-center border-t border-gold-500/10">
        <FadeUp>
          <Link
            to="/gurukulam"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-obsidian transition-all duration-500"
          >
            Experience Gurukulam Life →
          </Link>
        </FadeUp>
      </section>
    </PageWrapper>
  )
}
