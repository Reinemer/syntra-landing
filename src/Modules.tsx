import { useState } from 'react'
import { motion } from 'framer-motion'
import { modules, type Module, conceptDocsUrl, distributionDocsUrl, issueTrackers, type IssueTracker } from './data'
import { AnimatedShinyText } from './components/ui/animated-shiny-text'
import { TextGenerateEffect } from './components/ui/text-generate-effect'

const ease = [0.16, 1, 0.3, 1] as const

const ArrowUpRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
)

function ModuleRow({ module, index, isHovered, onHover }: {
  module: Module
  index: number
  isHovered: boolean
  onHover: (name: string | null) => void
}) {
  const hasApp = !!module.appUrl
  const hasDocs = !!module.docsUrl
  const isLive = module.status === 'live'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease }}
      onMouseEnter={() => onHover(module.codename)}
      onMouseLeave={() => onHover(null)}
      className="module-row"
    >
      <div
        className="module-row-accent"
        style={{ background: module.accentColor, opacity: isHovered ? 1 : 0 }}
      />

      <div className="flex items-center gap-4 md:gap-5 py-3.5 md:py-4 px-1 relative z-10">
        {/* Icon */}
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.06]" style={{ background: `oklch(0.13 0.03 ${module.hue})` }}>
          <img src={module.icon} alt="" className="w-6 h-6 md:w-7 md:h-7" />
        </div>

        {/* Name */}
        <span className="text-base md:text-lg font-semibold tracking-[-0.01em] text-white w-24 md:w-28 shrink-0">
          {module.codename}
        </span>

        {/* Label */}
        <span className="text-xs md:text-sm flex-1 truncate" style={{ color: isHovered ? 'oklch(0.58 0.015 265)' : 'oklch(0.38 0.015 265)' }}>
          {module.label}
        </span>

        {/* Status */}
        {!isLive && (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-white/25 shrink-0 uppercase tracking-wider">
            Soon
          </span>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 shrink-0">
          {hasApp && (
            <a href={module.appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-white/50 hover:text-white transition-colors">
              App <ArrowUpRight />
            </a>
          )}
          {hasDocs && (
            <a href={module.docsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-white/30 hover:text-white/60 transition-colors">
              Docs <ArrowUpRight />
            </a>
          )}
          {!hasApp && !hasDocs && (
            <span className="text-xs text-white/15">—</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const GitHubIcon = () => (
  <svg className="w-5 h-5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

function IssueRow({ tracker, index }: { tracker: IssueTracker; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, delay: (10 + index) * 0.04, ease }}
      className="module-row"
    >
      <div className="flex items-center gap-4 md:gap-5 py-3.5 md:py-4 px-1 relative z-10">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.06] bg-white/[0.02] text-white/25">
          <GitHubIcon />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-base md:text-lg font-semibold tracking-[-0.01em] text-white/70">
            {tracker.codename}
          </span>
          <span className="text-xs text-white/25">{tracker.module} · GitHub Issues</span>
        </div>
        <a
          href={tracker.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-white/30 hover:text-white/60 transition-colors shrink-0"
        >
          Issues <ArrowUpRight />
        </a>
      </div>
    </motion.div>
  )
}

function ResourceRow({ href, label, index }: { href: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, delay: (8 + index) * 0.04, ease }}
      className="module-row"
    >
      <div className="flex items-center gap-4 md:gap-5 py-3.5 md:py-4 px-1 relative z-10">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.06] bg-white/[0.02]">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <span className="text-base md:text-lg font-semibold tracking-[-0.01em] text-white/70 flex-1">
          {label}
        </span>
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-white/30 hover:text-white/60 transition-colors">
          Open <ArrowUpRight />
        </a>
      </div>
    </motion.div>
  )
}

export default function Modules() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center px-8 pt-28 pb-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 mesh-bg" />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: 'oklch(0.45 0.20 265)' }} />

        <div className="relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <AnimatedShinyText className="text-xs font-medium">
                AI-Powered Fund Operations
              </AnimatedShinyText>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.08]"
          >
            <span className="text-white">Eight Modules.</span>
            <br />
            <span className="gradient-brand-text">One Platform.</span>
          </motion.h1>

          <div className="mt-5 max-w-md mx-auto">
            <TextGenerateEffect
              words="Streamlined infrastructure for modern fund management."
              className="text-base md:text-lg !font-normal"
              duration={0.5}
            />
          </div>
        </div>
      </section>

      {/* ── Everything in one list ── */}
      <section id="modules" className="px-8 pb-12 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <div className="border-t border-white/[0.06]">
            {modules.map((module, i) => (
              <ModuleRow
                key={module.codename}
                module={module}
                index={i}
                isHovered={hovered === module.codename}
                onHover={setHovered}
              />
            ))}
          </div>

          {/* Resources integrated as rows */}
          <div className="mt-1 border-t border-white/[0.04]">
            <ResourceRow href={conceptDocsUrl} label="Syntra Concept" index={0} />
            <ResourceRow href={distributionDocsUrl} label="Distribution Registration" index={1} />
          </div>

          {/* GitHub Issues */}
          <div className="mt-1 border-t border-white/[0.04]">
            <div className="py-3 px-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20">Issues &amp; Feedback</span>
            </div>
            {issueTrackers.map((tracker, i) => (
              <IssueRow key={tracker.codename} tracker={tracker} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
