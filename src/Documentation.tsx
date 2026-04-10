import { motion } from 'framer-motion'
import { conceptDocsUrl } from './data'

export default function Documentation() {
  return (
    <section id="documentation" className="relative py-32 px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white"
        >
          Documentation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg mb-10"
          style={{ color: 'oklch(0.50 0.015 265)' }}
        >
          Platform architecture, module specs, and design decisions.
        </motion.p>

        <motion.a
          href={conceptDocsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl transition-all duration-200 neu-raised hover:neu-elevated hover:-translate-y-1"
          style={{
            background: 'oklch(0.13 0.014 265)',
            border: '1px solid oklch(1 0 0 / 0.07)',
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: 'oklch(0.18 0.03 265)' }}
          >
            <svg className="w-6 h-6" style={{ color: 'oklch(0.70 0.12 265)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="text-xl font-semibold text-white">Syntra Concept</span>
            <p className="text-sm mt-0.5" style={{ color: 'oklch(0.45 0.015 265)' }}>Full platform overview</p>
          </div>
          <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" style={{ color: 'oklch(0.50 0.015 265)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </motion.a>
      </div>
    </section>
  )
}
