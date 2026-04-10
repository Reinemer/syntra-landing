export default function Footer() {
  return (
    <footer className="relative py-16 px-6" style={{ borderTop: '1px solid oklch(1 0 0 / 0.06)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/syntra-favicon.svg" alt="Syntra" className="w-6 h-6" />
          <span className="text-sm font-semibold text-white">Syntra</span>
          <span className="text-xs" style={{ color: 'oklch(0.45 0.015 265)' }}>
            — Intelligent Fund Operations
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#modules" className="text-xs transition-colors hover:text-white" style={{ color: 'oklch(0.50 0.015 265)' }}>Modules</a>
          <a href="#documentation" className="text-xs transition-colors hover:text-white" style={{ color: 'oklch(0.50 0.015 265)' }}>Docs</a>
        </div>

        <p className="text-xs" style={{ color: 'oklch(0.40 0.015 265)' }}>
          © {new Date().getFullYear()} Syntra. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
