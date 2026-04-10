import { motion } from 'framer-motion'

const stats = [
  { value: '8', label: 'Modules' },
  { value: '4', label: 'Live Apps' },
  { value: '1', label: 'Unified Platform' },
]

export default function Stats() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Animated border */}
          <div className="animated-border p-8 md:p-12">
            <div className="relative z-10 grid grid-cols-3 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div className="text-4xl md:text-6xl font-bold gradient-brand-text mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium tracking-wider uppercase" style={{ color: 'oklch(0.55 0.015 265)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
