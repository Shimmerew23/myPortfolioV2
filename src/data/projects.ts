import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Efficyon — SaaS Cost Optimizer',
    category: 'AI / SAAS',
    description:
      'An AI-powered platform that turns SaaS sprawl into financial clarity. Detects unused licenses, overlapping tools, and tracks renewals — integrating with 50+ apps to guarantee 25%+ cost savings.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'OpenAI API', 'Supabase'],
    liveUrl: 'https://www.efficyon.com/',
  },
  {
    title: 'The Cartly eCommerce Platform',
    category: 'eCommerce / Web',
    description:
      'A modern eCommerce web platform designed for a seamless and intuitive shopping experience. Built with a scalable architecture and a refined UI to enhance product discovery and user engagement across all devices.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Redis', 'Redux', 'Nginx'],
    liveUrl: 'https://mcartly.vercel.app/',
  },
  {
    title: 'Verdant Messaging App',
    category: 'IM / Communication',
    description:
      'Verdant is a private, security-first concierge platform built for discretion. Designed for clients who value quiet efficiency over flashy service, it establishes a secure session before granting access — signaling a commitment to privacy from the very first interaction.',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Firebase Auth'],
    liveUrl: 'https://mydmproject.vercel.app/',
  },
  {
    title: 'Solar Calculator & Installer Platform',
    category: 'RENEWABLE ENERGY',
    description:
      'A solar calculator for the Canadian market featuring PV system sizing, provincial incentive integration, net metering simulation, and 25-year savings projections.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PVWatts API', 'MapBox'],
    nda: true,
  },
  {
    title: 'Salon & Stylist Management Platform',
    category: 'BEAUTY / CRM',
    description:
      'A comprehensive CRM for salon chains and independent stylists. Supports multi-role access, appointment and retail sales tracking, and a marketing ROI calculator.',
    tags: ['Next.js', 'React', 'Supabase', 'Stripe', 'Tailwind CSS'],
    nda: true,
  },
]
