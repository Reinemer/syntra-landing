import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Navbar() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.06])

  return (
    <motion.nav
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `oklch(0.10 0.02 265)`,
          opacity: bgOpacity,
        }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background: 'oklch(1 0 0)',
          opacity: borderOpacity,
        }}
      />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/syntra-favicon.svg" alt="Syntra" className="w-8 h-8" />
          <span className="text-sm font-semibold tracking-wide text-white">Syntra</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#modules" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: 'oklch(0.60 0.015 265)' }}>Modules</a>
          <a href="#documentation" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: 'oklch(0.60 0.015 265)' }}>Documentation</a>
        </div>

        <a
          href="#modules"
          className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 gradient-brand hover:brightness-110"
          style={{ color: 'white' }}
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  )
}
