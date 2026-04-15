'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EASE } from '@/lib/motion'

type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  liveUrl?: string
  nda?: boolean
}

const projects: Project[] = [
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

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-32"
      style={{ background: '#171212' }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex justify-between items-end mb-16"
        >
          <h2 className="text-5xl font-headline italic">Selected Work</h2>
          <span className="font-label text-[11px] uppercase tracking-[0.2em] text-[#ece0df]/35 hidden md:block">
            01 / {String(projects.length).padStart(2, '0')} EXHIBITS
          </span>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden:  { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
              }}
              className="relative p-10 rounded-2xl flex flex-col justify-between h-full group"
              style={{
                background: '#241e1e',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
              whileHover={{ borderColor: 'rgba(255,179,178,0.15)' }}
              transition={{ duration: 0.4 }}
            >
              {/* NDA Badge */}
              {project.nda && (
                <span
                  className="absolute bottom-10 right-10 px-2 py-0.5 rounded text-[8px] uppercase font-label tracking-[0.2em]"
                  style={{ border: '1px solid rgba(153,0,10,0.3)', color: 'rgba(255,0,0,0.35)' }}
                >
                  NDA
                </span>
              )}

              <div>
                {/* Title row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2 md:gap-4">
                  <h3 className="text-2xl font-headline leading-tight">{project.title}</h3>
                  <span
                    className="self-start shrink-0 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-label text-[#ece0df]/35"
                    style={{ border: '1px solid rgba(236,224,223,0.08)' }}
                  >
                    {project.category}
                  </span>
                </div>

                <p className="text-[#ece0df]/55 text-sm leading-relaxed mb-8 font-body max-w-lg text-justify">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-label text-[#ece0df]/35"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {project.liveUrl ? (
                <motion.a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-label text-[#ece0df]/35 hover:text-[#ffb3b2] transition-colors group/link"
                  whileHover="hover"
                >
                  VIEW LIVE
                  <motion.span
                    variants={{ hover: { x: 4, y: -4 } }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </motion.a>
              ) : (
                <span className="text-[10px] uppercase tracking-[0.2em] font-label text-[#ece0df]/20 cursor-not-allowed">
                  LIVE SITE UNAVAILABLE
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
