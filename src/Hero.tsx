import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-8 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.img
          src="/syntra-logo.svg"
          alt="Syntra"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="w-64 md:w-80 lg:w-96 mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="text-lg md:text-xl tracking-wide"
          style={{ color: 'oklch(0.50 0.015 265)' }}
        >
          AI-powered fund operations.
        </motion.p>
      </div>
    </section>
  )
}
