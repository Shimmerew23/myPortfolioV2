'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Code2, Brain } from 'lucide-react'
import { EASE } from '@/lib/motion'

function AnimatedTitle({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0,  rotateX: 0    }}
          transition={{
            duration: 0.7,
            delay: 0.6 + i * 0.03,
            ease: EASE,
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* ── Atmospheric background orbs ── */}
      <div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full pointer-events-none orb-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.12) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute top-1/4 right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.06) 0%, transparent 70%)',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute bottom-1/4 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(255,179,178,0.04) 0%, transparent 70%)',
          animationDelay: '6s',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y: springY, opacity }}
        className="max-w-7xl mx-auto px-8 w-full relative z-10 text-center"
      >
        {/* Eyebrow label */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="font-label text-xs uppercase text-[#ffb3b2]/70 mb-10 block tracking-[0.4em]"
        >
          Welcome To My Portfolio
        </motion.span>

        {/* Main title */}
        <h1
          className="text-6xl md:text-[clamp(4rem,11vw,9rem)] font-headline font-light tracking-tight leading-none mb-14"
          style={{ perspective: '800px' }}
        >
          <AnimatedTitle text="Justine Psalm" className="block" />
          <AnimatedTitle text="Acosta" className="block italic text-[#ffb3b2]" />
        </h1>

        {/* Role chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1,  y: 0  }}
          transition={{ duration: 0.8, delay: 1.8, ease: EASE }}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 items-center"
        >
          <div className="flex items-center gap-3 group cursor-default">
            <Code2
              size={18}
              className="text-[#ffb3b2] transition-transform duration-500 group-hover:rotate-12"
            />
            <span className="font-label text-xs uppercase tracking-[0.25em] text-[#ece0df]/50 text-center">
              Full Stack Developer
            </span>
          </div>
          
          <div className="flex items-center gap-3 group cursor-default">
            <Brain
              size={18}
              className="text-[#ffb3b2] transition-transform duration-500 group-hover:scale-110"
            />
            <span className="font-label text-xs uppercase tracking-[0.25em] text-[#ece0df]/50 text-center">
              Prompt Engineer
            </span>
          </div>
          
        </motion.div>
      </motion.div>
      {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#ece0df]/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#8d021f] to-transparent"
          />
        </motion.div>
    </section>
  )
}
