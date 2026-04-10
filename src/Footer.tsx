export default function Footer() {
  return (
    <footer className="py-12 px-8" style={{ borderTop: '1px solid oklch(1 0 0 / 0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/syntra-favicon.svg" alt="Syntra" className="w-7 h-7" />
          <span className="text-base font-semibold text-white">Syntra</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#modules" className="text-sm transition-colors duration-150 hover:text-white" style={{ color: 'oklch(0.45 0.015 265)' }}>Modules</a>
          <a href="#documentation" className="text-sm transition-colors duration-150 hover:text-white" style={{ color: 'oklch(0.45 0.015 265)' }}>Docs</a>
        </div>

        <p className="text-sm" style={{ color: 'oklch(0.35 0.015 265)' }}>
          © {new Date().getFullYear()} Syntra
        </p>
      </div>
    </footer>
  )
}
