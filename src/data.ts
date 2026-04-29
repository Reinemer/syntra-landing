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
    description: 'Pipeline management & AI-driven forecasting.',
    icon: '/icons/module-horizon.svg',
    accentColor: 'oklch(0.55 0.22 250)',
    hue: 250,
    appUrl: 'https://salesproject-six.vercel.app/',
    status: 'live',
    docsUrl: 'https://1drv.ms/x/c/4f052b07293c27a1/IQAVYJOkYwPoR498YNSM6kFkATjaHJiX3gzIuLvmhtt3BE0?e=0UO7su',
  },
  {
    codename: 'Sync',
    label: 'Relationship Management',
    description: 'Client relationships & automated assignment workflows.',
    icon: '/icons/module-sync.svg',
    accentColor: 'oklch(0.55 0.20 270)',
    hue: 270,
    appUrl: 'https://dn-rm-app.vercel.app/',
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQDGrDXDcKEdRKnYcTS9t0GOAX6xLrARPgAvhCi4PLZWrHc?e=DJpPo7',
    status: 'live',
  },
  {
    codename: 'Forge',
    label: 'Onboarding',
    description: 'Fund setup & legal documentation workflows.',
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
    description: 'Cross-border distribution & regulatory compliance.',
    icon: '/icons/module-gate.svg',
    accentColor: 'oklch(0.60 0.15 200)',
    hue: 200,
    docsUrl: 'https://1drv.ms/w/c/90fbf24d4d00e063/IQAszl6CyXAQSYQzHhtkIBvIAUXI6YlcDPuJlHk0ejKVvqg',
    status: 'coming-soon',
  },
  {
    codename: 'Decode',
    label: 'KYC',
    description: 'Identity verification & AI-enhanced due diligence.',
    icon: '/icons/module-decode.svg',
    accentColor: 'oklch(0.55 0.22 290)',
    hue: 290,
    appUrl: 'https://kyc-app-ten.vercel.app/',
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQAXmmPeN95hTZ9-xEP5e-kpAT0U9m7Fm7QxoRXn9s8wKbg?e=iu1tjA',
    status: 'live',
  },
  {
    codename: 'Watch',
    label: 'Oversight',
    description: 'Real-time monitoring & automated compliance.',
    icon: '/icons/module-watch.svg',
    accentColor: 'oklch(0.55 0.18 240)',
    hue: 240,
    appUrl: 'https://dn-oversight-app.vercel.app/login',
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQA9wOBjSWTdRq89wB9OJKpJAZnwWCfwOXg5ugEbF3u-QKg?e=5Zo7gq',
    status: 'live',
  },
  {
    codename: 'Shield',
    label: 'Risk Management',
    description: 'Proactive risk scoring & predictive analytics.',
    icon: '/icons/module-shield.svg',
    accentColor: 'oklch(0.55 0.20 255)',
    hue: 255,
    status: 'coming-soon',
  },
  {
    codename: 'Board',
    label: 'Fund Board',
    description: 'Board governance workflows and meeting operations.',
    icon: '/icons/module-codex.svg',
    accentColor: 'oklch(0.56 0.16 220)',
    hue: 220,
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQDyxNbYn4raSqVPt4sYwSs7AVJhTtnq53E-G1BSIqMZXcc?e=LZwsW3',
    status: 'coming-soon',
  },
  {
    codename: 'Codex',
    label: 'Governance',
    description: 'Audit trails, policies & regulatory reporting.',
    icon: '/icons/module-codex.svg',
    accentColor: 'oklch(0.55 0.20 310)',
    hue: 310,
    appUrl: 'https://dn-governance-app.vercel.app/',
    docsUrl: 'https://1drv.ms/x/c/90fbf24d4d00e063/IQD3FgJ8KVANR7AdRY55C-njARp8mxO0hXlz0MQfvuqwdj0?e=Gd6usK',
    status: 'live',
  },
]

export const conceptDocsUrl = 'https://1drv.ms/x/c/90fbf24d4d00e063/IQCje0NkRApCS6pXK_uQsiXqAT8fCNCfeipjb38qXNzEeM0?e=0gue1J'
export const distributionDocsUrl = 'https://1drv.ms/w/c/90fbf24d4d00e063/IQAszl6CyXAQSYQzHhtkIBvIAUXI6YlcDPuJlHk0ejKVvqg'

export interface IssueTracker {
  module: string
  codename: string
  url: string
}

export const issueTrackers: IssueTracker[] = [
  {
    module: 'Oversight',
    codename: 'Watch',
    url: 'https://github.com/Reinemer/oversight-app/issues',
  },
]
