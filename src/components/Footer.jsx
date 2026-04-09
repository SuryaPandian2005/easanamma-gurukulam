import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp } from './UI'

const links = [
  { label: 'Siddhar Tradition',      path: '/tradition' },
  { label: 'Consciousness Science',  path: '/consciousness' },
  { label: 'Siddhar Science',        path: '/science' },
  { label: 'Gurukulam Life',         path: '/gurukulam' },
  { label: 'About Easanamma',        path: '/about' },
  { label: 'Join / Contact',         path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-gold-500/10 pt-20 pb-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gold-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          {/* Symbol */}
          <div className="text-4xl text-gold-500/60 mb-6 font-serif">⊕</div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-4">Easanamma Gurukulam</h2>
          <p className="font-serif italic text-stone-400 text-lg max-w-xl mx-auto">
            "The silence within is the loudest teacher. The Siddhar path begins where words end."
          </p>
        </FadeUp>

        {/* Nav Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {links.map((l, i) => (
            <motion.div
              key={l.path}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={l.path}
                className="text-center block font-sans text-xs tracking-[0.2em] uppercase text-stone-500 hover:text-gold-500 transition-colors duration-300 py-2"
              >
                {l.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="border-t border-gold-500/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-600 tracking-widest uppercase">
            © {new Date().getFullYear()} Shree Easanamma Gurukulam. All rights reserved.
          </p>
          <p className="font-serif italic text-stone-600 text-sm">
            Rooted in the Tamil Siddhar Tradition
          </p>
        </div>
      </div>
    </footer>
  )
}
