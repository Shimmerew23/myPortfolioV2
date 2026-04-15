'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles } from 'lucide-react'
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
  return (
    <section
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

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
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
                src="/Profile.jpg"
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
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-5xl font-headline italic mb-8 leading-tight"
          >
            Justine Psalm Acosta
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-[#ece0df]/70 text-lg leading-relaxed mb-10 font-body text-justify"
          >
            Full stack developer with experience for building clean, secure, 
            high-performance, and scalable design for small and big businesses.
            I combine technical precision with a strong sense of design, 
            creating digital experiences that are not only reliable and 
            efficient, but also engaging and meaningful for users.
          </motion.p>

          <div className="space-y-6 text-justify">
            {[
              {
                Icon: ShieldCheck,
                text: 'Focused on building secure, high-performance, and scalable architectures across a diverse range of technologies—not limited to React and Node.js.',
              },
              {
                Icon: Sparkles,
                text: 'Pioneering LLM orchestration and prompt-driven automation systems.',
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
    </section>
  )
}
