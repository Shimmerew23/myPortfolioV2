'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

const milestones = [
  {
    period: '2025 — Present',
    title: 'Full Stack Developer',
    description:
      'Leading technical direction for software solutions, optimizing cloud infrastructure, and architecting secure, high-performance, and scalable enterprise-grade platforms. (Expanded into international clients across the US, Canada, and Europe)',
    active: true,
  },
  {
    period: '2024',
    title: 'B.S. Computer Engineering',
    description:
      'Graduated with a focus on hardware-software integration, laying the foundation for systemic problem-solving and algorithmic efficiency.',
    active: false,
  },
]

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="py-32"
      style={{ background: '#171212' }}
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-4xl font-headline mb-20 text-center uppercase tracking-[0.2em]"
        >
          The Journey
        </motion.h2>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-0">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
            className="absolute left-0 top-0 bottom-0 w-px origin-top"
            style={{ background: 'rgba(89,65,64,0.3)' }}
          />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: EASE }}
              className="relative pl-12 pb-20 group last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 2.5 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute top-0 w-[10px] h-[10px] rounded-full"
                style={{
                  left: '-5px',
                  background: m.active ? '#ffb3b2' : '#594140',
                  outline: '8px solid #171212',
                }}
              />

              <span
                className="font-label text-[10px] uppercase tracking-[0.3em] mb-2 block transition-opacity duration-500 group-hover:opacity-100"
                style={{ color: m.active ? 'rgba(255,179,178,0.6)' : 'rgba(236,224,223,0.35)' }}
              >
                {m.period}
              </span>

              <motion.h3
                className="text-2xl font-headline italic mb-4"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {m.title}
              </motion.h3>

              <p className="text-[#ece0df]/55 font-body leading-relaxed text-sm max-w-lg group-hover:text-[#ece0df]/75 transition-colors duration-500 text-justify">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
