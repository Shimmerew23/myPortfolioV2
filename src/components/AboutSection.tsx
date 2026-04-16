'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ShieldCheck, Sparkles, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { EASE } from '@/lib/motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: EASE },
  }),
}

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 relative overflow-hidden"
      style={{ background: '#201a1a' }}
    >
      {/* Ambient glow behind section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(141,2,31,0.07) 0%, transparent 70%)',
        }}
      />

      {/* ── Atmospheric orbs ── */}
      <div
        className="absolute top-1/2 left-[20%] w-[700px] h-[700px] rounded-full pointer-events-none orb-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.06) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(255,179,178,0.04) 0%, transparent 70%)',
          animationDelay: '5s',
        }}
      />

      <motion.div style={{ y: springY }} className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Portrait + text row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: EASE }}
            className="relative group"
          >
            {/* Hover glow */}
            <div
              className="absolute -inset-6 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
              style={{ background: 'rgba(141,2,31,0.2)' }}
            />

            {/* Image container */}
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1, ease: EASE }}
                className="w-full h-full relative"
              >
                <Image
                  src="/FBProfile.jpg"
                  alt="Justine Acosta portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Vignette overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-xl"
                style={{ background: 'linear-gradient(to top, #171212 0%, transparent 50%)' }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div>
            {/* Info row */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="flex items-center gap-2 mb-5"
            >
              {[
                { Icon: MapPin,         label: 'Philippines' },
                { Icon: Briefcase,      label: 'Available for Work' },
                { Icon: GraduationCap,  label: 'BS Computer Engineering' },
              ].map(({ Icon, label }, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <Icon size={11} className="text-[#ece0df]/35" />
                    <span className="font-label text-[9px] uppercase tracking-[0.25em] text-[#ece0df]/45">
                      {label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-3 w-px bg-[#ece0df]/20" />
                  )}
                </div>
              ))}
            </motion.div>

            <motion.h2
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="text-5xl font-headline italic mb-5 leading-tight"
            >
              Justine Psalm Acosta
            </motion.h2>

            {/* Role badges */}
            <motion.div
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="flex items-center gap-2 mb-8"
            >
              {['Full Stack Developer', 'Prompt Engineer', 'Technical Consultant'].map((label, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="font-label text-[9px] uppercase tracking-[0.25em] text-[#ece0df]/45">
                    {label}
                  </span>
                  {i < arr.length - 1 && (
                    <div className="h-3 w-px bg-[#ece0df]/20" />
                  )}
                </div>
              ))}
            </motion.div>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="text-[#ece0df]/70 text-lg leading-relaxed mb-10 font-body text-justify"
            >
              I design and build secured, high-performance, and scalable 
              systems from the ground up. From architecture and infrastructure 
              to backend services and frontend experiences — I take full ownership 
              of the entire development lifecycle. I work across diverse technology 
              stacks, going beyond React and Node.js to deliver robust, 
              production-ready solutions tailored to each project’s needs.
            </motion.p>

            <div className="space-y-6 text-justify">
              {[
                {
                  Icon: ShieldCheck,
                  text: 'Focused on building secure, high-performance, and scalable architectures across a diverse range of technologies—not limited to React and Node.js.',
                },
                {
                  Icon: Sparkles,
                  text: 'Designing and building systems that use AI to automate tasks by coordinating multiple prompts and workflows.',
                },
              ].map(({ Icon, text }, i) => (
                <motion.div
                  key={i}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={fadeUp}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <Icon
                    size={18}
                    className="text-[#ffdad9] mt-0.5 transition-transform duration-500 group-hover:scale-125 shrink-0"
                  />
                  <p className="font-body text-sm text-[#ece0df]/75 leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="text-[#ece0df]/70 text-sm leading-relaxed mt-8 font-body text-justify"
            >
              I work at the intersection of AI and software, designing precise prompts and
              integrating language models into real-world applications.
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-20 mb-0 h-px w-full"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        />

        {/* Approach panels */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            {
              label: 'My Approach',
              body: 'What started as a curiosity about how things work evolved into a career focused on building robust, user-centric web solutions. I combine a detail-oriented mindset with strong problem-solving skills to create seamless digital experiences—where clean, functional code meets intuitive design. From concept to deployment, I specialize in turning complex ideas into scalable, well-structured software.',
            },
            {
              label: 'How I Work',
              body: "I collaborate primarily with international clients, taking full ownership of the development lifecycle—from planning and proposals to launch and final handoff. I prioritize clean, maintainable code, well-structured repositories, and comprehensive documentation to ensure long-term clarity and independence. Projects are organized into clear phases, each with defined deliverables and milestone-based payments.",
            },
          ].map((panel, i) => (
            <motion.div
              key={panel.label}
              custom={i + 5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="relative pl-8 py-12 pr-6 group"
              style={{
                borderRight: i === 0 ? '1px solid rgba(255,255,255,0.05)' : undefined,
              }}
            >
              {/* Left accent line */}
              <div
                className="absolute left-0 top-12 bottom-12 w-[2px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'linear-gradient(to bottom, #8d021f, transparent)' }}
              />

              <p className="font-label text-[10px] uppercase tracking-[0.4em] text-[#ece0df]/35 mb-5">
                {panel.label}
              </p>

              <p className="font-body text-sm text-[#ece0df]/65 leading-relaxed text-justify">
                {panel.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
