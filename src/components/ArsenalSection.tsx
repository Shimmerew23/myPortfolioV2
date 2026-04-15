'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

const categories = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React Native'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs'],
  },
  {
    label: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Prisma', 'MySQL', 'Firebase'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'Vercel', 'Git', 'NGINX'],
  },
  {
    label: 'AI & Integrations',
    skills: ['Claude API', 'OpenAI API', 'Stripe', 'GraphQL', 'Prompt Engineering'],
  },
]

export default function ArsenalSection() {
  return (
    <section
      id="arsenal"
      className="py-32"
      style={{ background: '#201a1a' }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14"
        >
          <h2 className="text-5xl font-headline mb-3">Technical Arsenal</h2>
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
              {/* Burgundy top accent line */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#8d021f]" />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(141,2,31,0.08) 0%, transparent 70%)',
                }}
              />

              <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-[#ece0df]/35 mb-8 relative z-10">
                {cat.label}
              </h3>

              <div className="flex flex-wrap gap-2.5 relative z-10">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                    className="px-4 py-1.5 rounded-full text-[11px] font-label text-[#ece0df]/65 cursor-default"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                    whileHover={{
                      color: '#ece0df',
                      borderColor: 'rgba(255,179,178,0.3)',
                      scale: 1.04,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
