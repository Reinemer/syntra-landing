import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Orbiting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full gradient-glow opacity-60 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? 'oklch(0.65 0.20 270)' : 'oklch(0.72 0.12 200)',
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <img
            src="/syntra-logo.svg"
            alt="Syntra"
            className="h-16 md:h-20 mx-auto"
            style={{ filter: 'brightness(1.1)' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-light tracking-wide mb-6"
          style={{ color: 'oklch(0.65 0.015 265)' }}
        >
          From fragmented to unified. From manual to intelligent.
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          <span className="text-white">The Intelligent</span>
          <br />
          <span className="gradient-brand-text">Fund Operations</span>
          <br />
          <span className="text-white">Platform</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-12"
          style={{ color: 'oklch(0.55 0.015 265)' }}
        >
          Eight interconnected modules. One seamless ecosystem.
          <br className="hidden md:block" />
          Syntra unifies sales, onboarding, compliance, and governance
          into a single AI-powered platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#modules"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all duration-200"
          >
            <span className="absolute inset-0 gradient-brand" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'linear-gradient(135deg, oklch(0.60 0.22 270), oklch(0.70 0.14 200))' }} />
            <span className="relative flex items-center gap-2">
              Explore Modules
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </span>
          </a>

          <a
            href="#documentation"
            className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 neu-raised hover:neu-elevated"
            style={{
              background: 'oklch(0.20 0.015 265)',
              color: 'oklch(0.85 0.01 265)',
              border: '1px solid oklch(1 0 0 / 0.06)',
            }}
          >
            <span className="flex items-center gap-2">
              Documentation
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: 'oklch(1 0 0 / 0.15)' }}>
          <div className="w-1 h-2 rounded-full" style={{ background: 'oklch(1 0 0 / 0.3)' }} />
        </div>
      </motion.div>
    </section>
  )
}
