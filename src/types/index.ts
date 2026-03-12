export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  title: string
  description: string
  icon?: string
}

export interface Step {
  number: string
  title: string
  description: string
  badge?: string
}

export interface Article {
  title: string
  category: string
  readTime: string
  status: 'published' | 'coming-soon'
}

export interface LegalSection {
  title: string
  content: string
}

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}
