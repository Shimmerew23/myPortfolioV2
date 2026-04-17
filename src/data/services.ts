import { Code2, Smartphone, Store, CreditCard, Brain, Map, Search, Cloud } from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description:
      'End-to-end application development using Next.js, React, TypeScript, and Node.js. From MVPs to production platforms.',
    accent: '#c0524e',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description:
      'Cross-platform applications that work on any device without App Store overhead. Native-like experience on web.',
    accent: '#8d021f',
  },
  {
    icon: Store,
    title: 'SaaS & Marketplace Platforms',
    description:
      'Multi-tenant architectures, subscription billing, booking flows, payment splitting, and vendor onboarding.',
    accent: '#a0522d',
  },
  {
    icon: CreditCard,
    title: 'Payment Systems',
    description:
      'Stripe Checkout, Stripe Connect, subscription management, milestone-based payments, and invoicing.',
    accent: '#9e5a5a',
  },
  {
    icon: Brain,
    title: 'AI-Powered Features',
    description:
      'Integration of LLM APIs for intelligent content generation, exercise matching, data analysis, and automation.',
    accent: '#b5622a',
  },
  {
    icon: Map,
    title: 'GIS & Mapping',
    description:
      'Interactive maps with Leaflet / MapBox, geospatial data visualization, heatmaps, and location-based services.',
    accent: '#8b3a3a',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description:
      'Technical SEO audits, schema markup, Core Web Vitals optimization, and AI search discoverability.',
    accent: '#c17551',
  },
  {
    icon: Cloud,
    title: 'DevOps & Deployment',
    description:
      'Vercel deployments, DNS configuration, CI/CD pipelines, and production monitoring.',
    accent: '#722f37',
  },
]
