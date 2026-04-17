'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { projects } from '@/data/projects'

export default function WorkSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  return (
    <section
      ref={containerRef}
      id="work"
      className="py-32 relative overflow-hidden"
      style={{ background: '#201a1a' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(141,2,31,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 40% at 100% 80%, rgba(255,179,178,0.03) 0%, transparent 70%)',
        }}
      />

      {/* ── Atmospheric orbs ── */}
      <div
        className="absolute top-1/2 left-[15%] w-[800px] h-[800px] rounded-full pointer-events-none orb-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute top-[5%] right-[-5%] w-[480px] h-[480px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.06) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute bottom-[5%] right-[5%] w-[340px] h-[340px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(255,179,178,0.04) 0%, transparent 70%)',
          animationDelay: '9s',
        }}
      />

      <motion.div style={{ y: springY }} className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex justify-between items-end mb-16"
        >
          <h2 className="text-5xl font-headline italic">Portfolio</h2>
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
      </motion.div>
    </section>
  )
}
