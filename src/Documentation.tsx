import { motion } from 'framer-motion'
import { conceptDocsUrl, modules } from './data'

const docItems = [
  ...modules
    .filter(m => m.docsUrl)
    .map(m => ({
      label: `${m.label} (${m.codename})`,
      url: m.docsUrl!,
      hue: m.hue,
    })),
  {
    label: 'Syntra Concept',
    url: conceptDocsUrl,
    hue: 265,
  },
]

export default function Documentation() {
  return (
    <section id="documentation" className="relative py-32 px-6">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full opacity-15 blur-[100px]" style={{ background: 'oklch(0.65 0.14 200)' }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full" style={{
            background: 'oklch(0.55 0.20 310 / 0.1)',
            color: 'oklch(0.72 0.12 310)',
            border: '1px solid oklch(0.55 0.20 310 / 0.15)',
          }}>
            Documentation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Technical References
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'oklch(0.55 0.015 265)' }}>
            Detailed specifications and workflow documentation for each module.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {docItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300 neu-raised hover:neu-elevated"
              style={{
                background: 'oklch(0.17 0.014 265)',
                border: '1px solid oklch(1 0 0 / 0.06)',
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: `oklch(0.20 0.03 ${item.hue})`,
                }}
              >
                <svg className="w-5 h-5" style={{ color: `oklch(0.72 0.12 ${item.hue})` }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-white group-hover:gradient-brand-text transition-colors">
                  {item.label}
                </span>
                <p className="text-xs mt-0.5" style={{ color: 'oklch(0.50 0.015 265)' }}>
                  Excel · OneDrive
                </p>
              </div>
              <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" style={{ color: 'oklch(0.45 0.015 265)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
