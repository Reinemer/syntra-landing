import { motion } from 'framer-motion'
import { modules, type Module } from './data'

function ModuleCard({ module, index }: { module: Module; index: number }) {
  const isLive = module.status === 'live'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div
        className="relative h-full rounded-2xl p-6 transition-all duration-300 neu-raised hover:neu-elevated noise overflow-hidden"
        style={{
          background: 'oklch(0.17 0.014 265)',
          border: '1px solid oklch(1 0 0 / 0.06)',
        }}
      >
        {/* Accent glow on hover */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"
          style={{ background: module.accentColor }}
        />

        {/* Header */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `oklch(0.20 0.03 ${module.hue})`,
                boxShadow: `0 0 20px oklch(0.55 0.15 ${module.hue} / 0.15)`,
              }}
            >
              <img src={module.icon} alt={module.codename} className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">{module.codename}</h3>
              <p className="text-xs" style={{ color: 'oklch(0.55 0.015 265)' }}>{module.label}</p>
            </div>
          </div>

          {/* Status badge */}
          <span
            className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md"
            style={isLive ? {
              background: 'oklch(0.52 0.17 155 / 0.15)',
              color: 'oklch(0.62 0.17 155)',
              border: '1px solid oklch(0.52 0.17 155 / 0.2)',
            } : {
              background: 'oklch(0.75 0.15 85 / 0.1)',
              color: 'oklch(0.75 0.15 85)',
              border: '1px solid oklch(0.75 0.15 85 / 0.15)',
            }}
          >
            {isLive ? 'Live' : 'Soon'}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'oklch(0.60 0.015 265)' }}>
          {module.description}
        </p>

        {/* Accent line */}
        <div
          className="h-px w-full mb-4 opacity-20"
          style={{ background: `linear-gradient(90deg, ${module.accentColor}, transparent)` }}
        />

        {/* Actions */}
        <div className="flex gap-2">
          {module.appUrl && (
            <a
              href={module.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110"
              style={{
                background: `oklch(0.55 0.15 ${module.hue} / 0.15)`,
                color: `oklch(0.72 0.12 ${module.hue})`,
                border: `1px solid oklch(0.55 0.15 ${module.hue} / 0.2)`,
              }}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
              Open App
            </a>
          )}
          {module.docsUrl && (
            <a
              href={module.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
              style={{
                background: 'oklch(1 0 0 / 0.04)',
                color: 'oklch(0.60 0.015 265)',
                border: '1px solid oklch(1 0 0 / 0.06)',
              }}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              Docs
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Modules() {
  return (
    <section id="modules" className="relative py-32 px-6">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-[120px]" style={{ background: 'oklch(0.55 0.22 270)' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full" style={{
            background: 'oklch(0.55 0.20 265 / 0.1)',
            color: 'oklch(0.72 0.12 200)',
            border: '1px solid oklch(0.55 0.20 265 / 0.15)',
          }}>
            Module Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Eight Modules.</span>{' '}
            <span className="gradient-brand-text">One Platform.</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.55 0.015 265)' }}>
            Each module operates independently yet shares a unified data layer,
            design language, and AI backbone — creating a seamless operational ecosystem.
          </p>
        </motion.div>

        {/* Module grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((module, i) => (
            <ModuleCard key={module.codename} module={module} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
