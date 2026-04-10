import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.06])

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'oklch(0.09 0.02 265)',
          opacity: bgOpacity,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
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
          <img src="/syntra-favicon.svg" alt="Syntra" className="w-9 h-9" />
          <span className="text-lg font-semibold text-white">Syntra</span>
        </a>

        <div className="flex items-center gap-8">
          <a href="#modules" className="text-base transition-colors duration-150 hover:text-white" style={{ color: 'oklch(0.55 0.015 265)' }}>Modules</a>
          <a href="#documentation" className="text-base transition-colors duration-150 hover:text-white" style={{ color: 'oklch(0.55 0.015 265)' }}>Docs</a>
        </div>
      </div>
    </motion.nav>
  )
}
