'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { services } from '@/data/services'

export default function WhatIDoSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  return (
    <section ref={containerRef} id="services" className="py-32 relative overflow-hidden" style={{ background: '#171212' }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(141,2,31,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 40% at 100% 100%, rgba(255,179,178,0.03) 0%, transparent 70%)',
        }}
      />

      {/* ── Atmospheric orbs ── */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none orb-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute top-[-5%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.06) 0%, transparent 70%)',
          animationDelay: '4s',
        }}
      />
      <div
        className="absolute bottom-[5%] left-[-5%] w-[380px] h-[380px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(255,179,178,0.04) 0%, transparent 70%)',
          animationDelay: '7s',
        }}
      />

      <motion.div style={{ y: springY }} className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16"
        >
          <h2 className="text-5xl font-headline mb-3">What I Do</h2>
          <p className="font-label text-[10px] uppercase tracking-[0.4em] text-[#ece0df]/35">
            Services &amp; Specializations
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              className="relative p-7 rounded-2xl overflow-hidden group cursor-default"
              style={{
                background: '#241e1e',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
              whileHover={{ borderColor: 'rgba(255,179,178,0.15)' }}
              transition={{ duration: 0.4 }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 w-10 h-[2px] rounded-full"
                style={{ background: service.accent }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(141,2,31,0.06) 0%, transparent 70%)',
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-5 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: `${service.accent}18`,
                  color: service.accent,
                  border: `1px solid ${service.accent}30`,
                }}
              >
                <service.icon size={22} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[15px] font-semibold text-[#ece0df] mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-[12px] font-mono leading-relaxed text-[#ece0df]/40">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
