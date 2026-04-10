import { motion } from 'framer-motion'
import { conceptDocsUrl, distributionDocsUrl } from './data'

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

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {[
            { href: conceptDocsUrl, title: 'Syntra Concept', subtitle: 'Full platform overview', hue: 265 },
            { href: distributionDocsUrl, title: 'Distribution Registration', subtitle: 'Registration app docs', hue: 200 },
          ].map((doc, i) => (
            <motion.a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="group card-glow inline-flex items-center gap-4 px-7 py-5 rounded-2xl"
              style={{
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = `oklch(0.40 0.12 ${doc.hue} / 0.4)`
                el.style.boxShadow = `0 4px 24px oklch(0.40 0.18 ${doc.hue} / 0.15), 0 0 0 1px oklch(0.40 0.12 ${doc.hue} / 0.1), inset 0 1px 0 oklch(1 0 0 / 0.06)`
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = ''
                el.style.boxShadow = ''
                el.style.transform = ''
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `oklch(0.16 0.04 ${doc.hue})` }}
              >
                <svg className="w-5 h-5" style={{ color: `oklch(0.70 0.12 ${doc.hue})` }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-base font-semibold text-white">{doc.title}</span>
                <p className="text-xs mt-0.5" style={{ color: 'oklch(0.45 0.015 265)' }}>{doc.subtitle}</p>
              </div>
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" style={{ color: 'oklch(0.40 0.015 265)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
