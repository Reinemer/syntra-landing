import { motion } from 'framer-motion'

const stats = [
  { value: '8', label: 'Modules' },
  { value: '4', label: 'Live Apps' },
  { value: '1', label: 'Platform' },
]

export default function Stats() {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-6"
            >
              <div className="text-3xl md:text-5xl font-bold gradient-brand-text tracking-tight mb-1.5">
                {stat.value}
              </div>
              <div className="text-[11px] font-medium tracking-[0.15em] uppercase" style={{ color: 'oklch(0.50 0.015 265)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
