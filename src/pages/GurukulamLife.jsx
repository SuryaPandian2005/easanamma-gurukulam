import { Link } from 'react-router-dom'
import { PageWrapper, FadeUp, GoldDivider, SectionTag, Quote, GlassCard, PageHero } from '../components/UI'
import { motion } from 'framer-motion'

const dailyLife = [
  { time: 'Pre-Dawn',   act: 'Brahma Muhurta Practice',  desc: 'The most potent time for meditation and inner work. Silent sitting, pranayama, and deep observation.' },
  { time: 'Morning',    act: 'Asana & Kaya Kalpa',       desc: 'Physical and energetic preparation. Not exercise for the body but refinement of the vehicle of consciousness.' },
  { time: 'Midday',     act: 'Study & Contemplation',    desc: 'Siddhar texts, consciousness science study, one-on-one guidance. Deep engagement with the tradition.' },
  { time: 'Afternoon',  act: 'Seva & Community',         desc: 'Selfless service as inner practice. The Gurukulam functions through the sacred economics of giving and receiving.' },
  { time: 'Evening',    act: 'Group Practice & Satsang', desc: 'Collective meditation, teaching, and the deepening of understanding through shared inquiry.' },
  { time: 'Night',      act: 'Yoga Nidra & Integration', desc: 'Conscious sleep practices. The integration of the day\'s discoveries in the fertile ground of deep rest.' },
]

const offerings = [
  { title: 'Residential Immersion', duration: '21 Days – 1 Year', body: 'Full Gurukulam living. Complete immersion in the Siddhar path. For those called to deep transformation.' },
  { title: 'Intensive Retreats',    duration: '3 – 7 Days',       body: 'Concentrated transmission of specific Siddhar practices. Silence, depth, and focused inner work.' },
  { title: 'Correspondence Study',  duration: 'Ongoing',          body: 'For those unable to be physically present. Structured study with periodic guidance from the teacher.' },
  { title: 'Public Teachings',      duration: 'Seasonal',         body: 'Open teachings on Siddhar knowledge. Entry point for new seekers and support for continuing students.' },
]

export default function GurukulamLife() {
  return (
    <PageWrapper>
      <PageHero
        tag="The Living Ecosystem"
        title="Gurukulam Life"
        subtitle="Where the ancient structure of sacred education meets the urgent needs of the present"
        imgUrl="https://images.unsplash.com/photo-1472114864173-39596323454f?w=1400&auto=format&fit=crop"
      />

      {/* What is a Gurukulam */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <FadeUp>
          <SectionTag>The Ancient Form</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-8">
            What Is a Gurukulam?
          </h2>
          <p className="font-serif text-xl text-stone-300 italic leading-relaxed mb-6">
            "Guru" — the one who removes darkness. "Kula" — the family. "Kulam" — the lineage and community. A Gurukulam is not a school. It is a living transmission field.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed mb-4">
            In ancient India and Tamil Nadu, students did not simply attend classes. They lived with the teacher. They absorbed the atmosphere of mastery. They were shaped by the entire ecology of a life lived in conscious pursuit of truth.
          </p>
          <p className="font-sans text-base text-stone-400 leading-relaxed">
            Shree Easanamma Gurukulam revives this living structure — not as an antiquarian project, but as a vital response to the needs of sincere seekers in the modern world.
          </p>
        </FadeUp>
      </section>

      {/* Daily rhythm */}
      <section className="py-20 bg-ember border-t border-b border-gold-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <SectionTag>The Daily Rhythm</SectionTag>
            <h2 className="font-display text-3xl md:text-4xl text-gold-gradient">A Day in the Gurukulam</h2>
          </FadeUp>
          <div className="space-y-0">
            {dailyLife.map((item, i) => (
              <FadeUp key={item.time} delay={i * 0.07}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 border-b border-gold-500/10 last:border-0 group"
                >
                  <div className="sm:w-28 flex-shrink-0">
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500/60">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-stone-100 mb-1 group-hover:text-gold-400 transition-colors duration-300">{item.act}</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Offerings */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <SectionTag>Ways to Engage</SectionTag>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient">Programs & Offerings</h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((o, i) => (
            <FadeUp key={o.title} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500/60 mb-3">{o.duration}</div>
                <h3 className="font-serif text-xl text-stone-100 mb-3">{o.title}</h3>
                <p className="font-sans text-sm text-stone-400 leading-relaxed">{o.body}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <FadeUp>
          <Quote attribution="Ancient Gurukulam Tradition">
            The student brings an empty vessel. The teacher fills it not with information, but with the capacity to see.
          </Quote>
        </FadeUp>
      </section>

      <section className="py-16 text-center border-t border-gold-500/10">
        <FadeUp>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 bg-gold-500 text-obsidian hover:bg-gold-400 transition-all duration-500"
          >
            Apply to Join →
          </Link>
        </FadeUp>
      </section>
    </PageWrapper>
  )
}
