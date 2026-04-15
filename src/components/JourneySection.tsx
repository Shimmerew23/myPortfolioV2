'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

const milestones = [
  {
    period: '2025 — Present',
    title: 'Freelance Full Stack Consultant',
    description:
      'Leading the end-to-end delivery of scalable web platforms, from system architecture to production deployment. Specializing in secure, high-performance applications and cloud infrastructure, working with international clients across the US, Canada, and Europe.',
    active: true,
  },
  {
    period: '2024',
    title: 'B.S. Computer Engineering',
    description:
      'Graduated with a strong foundation in systems design, algorithmic thinking, and hardware-software integration—equipping me to solve complex engineering problems with efficiency and precision.',
    active: false,
  },
  {
    period: '2021 — 2023',
    title: 'Part-time Freelance Full Stack Developer',
    description:
      'Delivered real-world web applications while completing my degree, gaining hands-on experience across the full stack. Built and maintained production-ready systems, strengthening both technical depth and practical problem-solving skills.',
    active: false,
  },
  {
    period: '2020',
    title: 'Enrolled as B.S. Computer Engineering',
    description:
      'Began academic journey in computer engineering, developing core knowledge in computing, electronics, and software development that shaped my technical foundation.',
    active: false,
  },
]

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="py-32 relative overflow-hidden"
      style={{ background: '#171212' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 70% at 10% 50%, rgba(141,2,31,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 40% at 90% 20%, rgba(255,179,178,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-8 relative z-10">
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="text-center font-label text-[11px] uppercase tracking-[0.3em] -mt-14 mb-20"
          style={{ color: 'rgba(236,224,223,0.4)' }}
        >
          Career milestones &amp; achievements
        </motion.p>

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

              <p className="text-[#ece0df]/55 font-body leading-relaxed text-sm group-hover:text-[#ece0df]/75 transition-colors duration-500 text-justify">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
