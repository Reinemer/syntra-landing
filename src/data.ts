export interface Module {
  codename: string
  label: string
  description: string
  icon: string
  accentColor: string
  hue: number
  appUrl?: string
  docsUrl?: string
  status: 'live' | 'coming-soon'
}

export const modules: Module[] = [
  {
    codename: 'Horizon',
    label: 'Sales',
    description: 'Pipeline management & expansion tracking. AI-driven forecasting for fund distribution.',
    icon: '/icons/module-horizon.svg',
    accentColor: 'oklch(0.55 0.22 250)',
    hue: 250,
    appUrl: 'https://salesproject-six.vercel.app/',
    status: 'live',
    docsUrl: undefined,
  },
  {
    codename: 'Sync',
    label: 'Relationship Management',
    description: 'Build & maintain client relationships. Automated assignment workflows with intelligent routing.',
    icon: '/icons/module-sync.svg',
    accentColor: 'oklch(0.55 0.20 270)',
    hue: 270,
    appUrl: 'https://dn-rm-app.vercel.app/',
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQDGrDXDcKEdRKnYcTS9t0GEAX6xLrARPgAvhCi4PLZWrHc?e=DJpPo7',
    status: 'live',
  },
  {
    codename: 'Forge',
    label: 'Onboarding',
    description: 'Fund setup & legal documentation. Streamlined workflows from initiation to completion.',
    icon: '/icons/module-forge.svg',
    accentColor: 'oklch(0.55 0.20 285)',
    hue: 285,
    appUrl: 'https://dn-onboarding.vercel.app/',
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQAnw2PaF3WKQbpVZzYCyONKAdVpEDr1hFlAXoHtzYZiKH8?e=iZlrHc',
    status: 'live',
  },
  {
    codename: 'Gate',
    label: 'Distribution',
    description: 'Country approvals & cross-border distribution. Regulatory compliance at scale.',
    icon: '/icons/module-gate.svg',
    accentColor: 'oklch(0.60 0.15 200)',
    hue: 200,
    status: 'coming-soon',
  },
  {
    codename: 'Decode',
    label: 'KYC',
    description: 'Identity verification & screening. AI-enhanced due diligence and risk assessment.',
    icon: '/icons/module-decode.svg',
    accentColor: 'oklch(0.55 0.22 290)',
    hue: 290,
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQAXmmPeN95hTZ9-xEP5e-kpAT0U9m7Fm7QxoRXn9s8wKbg?e=iu1tjA',
    status: 'coming-soon',
  },
  {
    codename: 'Watch',
    label: 'Oversight',
    description: 'AI-powered oversight controls. Real-time monitoring and automated compliance checks.',
    icon: '/icons/module-watch.svg',
    accentColor: 'oklch(0.55 0.18 240)',
    hue: 240,
    status: 'coming-soon',
  },
  {
    codename: 'Shield',
    label: 'Risk Management',
    description: 'Risk identification & mitigation. Proactive risk scoring with predictive analytics.',
    icon: '/icons/module-shield.svg',
    accentColor: 'oklch(0.55 0.20 255)',
    hue: 255,
    status: 'coming-soon',
  },
  {
    codename: 'Codex',
    label: 'Governance',
    description: 'Document governance & compliance. Audit trails, policies, and regulatory reporting.',
    icon: '/icons/module-codex.svg',
    accentColor: 'oklch(0.55 0.20 310)',
    hue: 310,
    appUrl: 'https://dn-governance-app.vercel.app/',
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQD3FgJ8KVANR7AdRY55C-njARp8mxO0hXlz0MQfvuqwdj0?e=Gd6usK',
    status: 'live',
  },
]

export const conceptDocsUrl = 'https://1drv.ms/x/c/90fbf24d4d00e063/IQCje0NkRApCS6pXK_uQsiXqAT8fCNCfeipjb38qXNzEeM0?e=0gue1J'
