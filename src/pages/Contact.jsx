import { useState } from 'react'
import { PageWrapper, FadeUp, SectionTag, GlassCard, GoldDivider } from '../components/UI'
import { motion } from 'framer-motion'

const enquiryTypes = [
  'Residential Immersion Programme',
  'Intensive Retreat (3-7 days)',
  'Correspondence Study',
  'Public Teaching / Events',
  'Siddha Medicine Consultation',
  'General Enquiry',
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmit] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSubmit(true)
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <SectionTag>Begin the Path</SectionTag>
            <h1 className="font-display text-4xl md:text-6xl text-gold-gradient text-glow mb-8 leading-tight">
              Join the Gurukulam
            </h1>
            <p className="font-serif text-xl italic text-stone-300 leading-relaxed max-w-2xl mx-auto">
              The door is open to sincere seekers. Begin with an honest enquiry — share where you are, what you are seeking, and how you heard of the Gurukulam.
            </p>
          </FadeUp>
        </div>
      </section>

      <GoldDivider />

      {/* Form + Info */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Info Column */}
          <div className="md:col-span-2 space-y-10">
            <FadeUp>
              <h2 className="font-serif text-2xl text-gold-400 mb-4">Before You Write</h2>
              <p className="font-sans text-sm text-stone-400 leading-relaxed">
                The Gurukulam does not accept everyone who applies. Not out of exclusivity — but because the relationship between teacher and student is a sacred one that requires alignment, sincerity, and readiness.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h3 className="font-serif text-lg text-stone-200 mb-3">We Welcome You If:</h3>
              <ul className="space-y-3">
                {[
                  'You are genuinely seeking inner transformation',
                  'You are open to the Siddhar tradition',
                  'You are ready to do the inner work — not just study it',
                  'You come with sincerity, not curiosity alone',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 font-sans text-xs text-stone-500">
                    <span className="text-gold-500/60 mt-0.5">◉</span> {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="border-l-2 border-gold-500/30 pl-6">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500/60 mb-2">Location</p>
                <p className="font-sans text-sm text-stone-400">Tamil Nadu, India</p>
                <p className="font-sans text-sm text-stone-500">Exact address shared upon acceptance</p>
              </div>
            </FadeUp>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <FadeUp delay={0.1}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card border border-gold-500/30 p-16 text-center glow-gold"
                >
                  <div className="text-5xl text-gold-500/60 font-serif mb-6">⊕</div>
                  <h3 className="font-display text-2xl text-gold-gradient mb-4">Received</h3>
                  <p className="font-serif italic text-stone-400 text-lg">
                    Your enquiry has been received. Shree Easanamma or a representative of the Gurukulam will be in touch within a few days. In the meantime — sit quietly. You have already taken the first step.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card border border-gold-500/15 p-10 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-gold-500/20 focus:border-gold-500/60 outline-none py-3 font-sans text-sm text-stone-300 placeholder-stone-700 transition-colors duration-300"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                        Email *
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        type="email"
                        className="w-full bg-transparent border-b border-gold-500/20 focus:border-gold-500/60 outline-none py-3 font-sans text-sm text-stone-300 placeholder-stone-700 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                      Nature of Enquiry
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-obsidian border-b border-gold-500/20 focus:border-gold-500/60 outline-none py-3 font-sans text-sm text-stone-300 transition-colors duration-300"
                    >
                      <option value="">Select…</option>
                      {enquiryTypes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border border-gold-500/15 focus:border-gold-500/40 outline-none p-4 font-sans text-sm text-stone-300 placeholder-stone-700 transition-colors duration-300 resize-none"
                      placeholder="Share a little about your background, what brought you here, and what you are seeking…"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full font-sans text-xs tracking-[0.3em] uppercase py-5 bg-gold-500 text-obsidian hover:bg-gold-400 transition-all duration-500"
                  >
                    Send Enquiry
                  </motion.button>

                  <p className="text-center font-sans text-[10px] text-stone-600 tracking-wider">
                    Your enquiry is treated with complete confidentiality and care.
                  </p>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Bottom quote */}
      <section className="py-20 text-center max-w-2xl mx-auto px-6 border-t border-gold-500/10 mt-8">
        <FadeUp>
          <p className="font-serif italic text-stone-400 text-xl">
            "The seeking itself is the beginning of the finding. You are closer than you think."
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500/50 mt-4">
            — Shree Easanamma
          </p>
        </FadeUp>
      </section>
    </PageWrapper>
  )
}
