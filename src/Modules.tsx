import { motion } from 'framer-motion'
import { modules, type Module } from './data'

function ModuleCard({ module, index }: { module: Module; index: number }) {
  const isLive = module.status === 'live'
  const cardUrl = module.appUrl || module.docsUrl

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <a
        href={cardUrl}
        target={cardUrl ? '_blank' : undefined}
        rel={cardUrl ? 'noopener noreferrer' : undefined}
        className={`relative block h-full rounded-3xl p-8 transition-all duration-200 neu-raised hover:neu-elevated ${cardUrl ? 'cursor-pointer hover:-translate-y-1' : 'cursor-default'}`}
        style={{
          background: 'oklch(0.13 0.014 265)',
          border: '1px solid oklch(1 0 0 / 0.07)',
          textDecoration: 'none',
        }}
        onClick={cardUrl ? undefined : (e) => e.preventDefault()}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: `oklch(0.18 0.03 ${module.hue})` }}
          >
            <img src={module.icon} alt="" className="w-9 h-9" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-semibold text-white truncate">{module.codename}</h3>
              <span
                className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-lg shrink-0"
                style={isLive ? {
                  background: 'oklch(0.52 0.17 155 / 0.15)',
                  color: 'oklch(0.65 0.17 155)',
                } : {
                  background: 'oklch(0.75 0.15 85 / 0.10)',
                  color: 'oklch(0.72 0.12 85)',
                }}
              >
                {isLive ? 'Live' : 'Soon'}
              </span>
            </div>
            <p className="text-sm mt-1" style={{ color: 'oklch(0.48 0.015 265)' }}>{module.label}</p>
          </div>
        </div>

        {module.docsUrl && (
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150 mt-2 cursor-pointer"
            style={{
              background: 'oklch(1 0 0 / 0.06)',
              color: 'oklch(0.60 0.015 265)',
              border: '1px solid oklch(1 0 0 / 0.06)',
            }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(module.docsUrl, '_blank', 'noopener,noreferrer')
            }}
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
            <span className="whitespace-nowrap">Docs</span>
          </button>
        )}
      </a>
    </motion.div>
  )
}

export default function Modules() {
  return (
    <section id="modules" className="relative py-32 px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Eight Modules. </span>
            <span className="gradient-brand-text">One Platform.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, i) => (
            <ModuleCard key={module.codename} module={module} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
