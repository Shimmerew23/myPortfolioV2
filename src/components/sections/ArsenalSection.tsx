'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { Brain, Sparkles } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { categories } from '@/data/arsenal'

export default function ArsenalSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  return (
    <section
      ref={containerRef}
      id="arsenal"
      className="py-32 relative overflow-hidden"
      style={{ background: '#201a1a' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 60% at 95% 50%, rgba(141,2,31,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 35% 35% at 5% 80%, rgba(255,179,178,0.03) 0%, transparent 70%)',
        }}
      />

      {/* ── Atmospheric orbs ── */}
      <div
        className="absolute top-1/2 right-[10%] w-[750px] h-[750px] rounded-full pointer-events-none orb-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.1) 0%, transparent 70%)',
          transform: 'translate(50%, -50%)',
        }}
      />
      <div
        className="absolute top-[5%] left-[-5%] w-[460px] h-[460px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.06) 0%, transparent 70%)',
          animationDelay: '1s',
        }}
      />
      <div
        className="absolute bottom-[5%] left-[30%] w-[320px] h-[320px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(255,179,178,0.04) 0%, transparent 70%)',
          animationDelay: '6s',
        }}
      />

      <motion.div style={{ y: springY }} className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14"
        >
          <h2 className="text-5xl font-headline mb-3">Technical Skills</h2>
          <p className="font-label text-[10px] uppercase tracking-[0.4em] text-[#ece0df]/35">
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={{
                hidden:  { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="relative p-8 rounded-2xl overflow-hidden group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              whileHover={{
                borderColor: 'rgba(141,2,31,0.4)',
                background: 'rgba(255,255,255,0.05)',
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Category accent line */}
              <div
                className="absolute top-0 left-6 w-10 h-[2px] rounded-full"
                style={{ background: cat.accent }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(141,2,31,0.08) 0%, transparent 70%)',
                }}
              />

              <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-[#ece0df]/35 mb-6 relative z-10">
                {cat.label}
              </h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-label text-[#ece0df]/65 cursor-default"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                    whileHover={{
                      color: '#ece0df',
                      borderColor: 'rgba(255,179,178,0.3)',
                      scale: 1.04,
                      background: 'rgba(255,255,255,0.07)',
                    }}
                  >
                    {skill.icon ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={14}
                        height={14}
                        className="shrink-0"
                        style={skill.invert ? { filter: 'invert(1)' } : undefined}
                        unoptimized
                      />
                    ) : skill.iconType === 'brain' ? (
                      <Brain size={14} className="shrink-0" style={{ color: skill.iconColor }} />
                    ) : skill.iconType === 'sparkles' ? (
                      <Sparkles size={14} className="shrink-0" />
                    ) : skill.label ? (
                      <span
                        className="text-[10px] leading-none shrink-0 font-mono"
                        style={{ color: cat.accent }}
                      >
                        {skill.label}
                      </span>
                    ) : null}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
