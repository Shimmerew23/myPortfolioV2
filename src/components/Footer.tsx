'use client'

import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/justinesam023/' },
  { label: 'GitHub',   href: 'https://github.com/Shimmerew23' },
  { label: 'Facebook',   href: 'https://www.facebook.com/jsammm.23' },
]

export default function Footer() {
  return (
    <footer
      className="w-full py-12 px-8"
      style={{
        background: '#171212',
        borderTop: '1px solid rgba(236,224,223,0.04)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] font-label uppercase tracking-[0.2em] text-[#ece0df]/25 text-center md:text-left"
        >
          © {new Date().getFullYear()} Justine Acosta Portfolio. All rights reserved.
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex gap-10"
        >
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[10px] uppercase tracking-[0.2em] text-[#ece0df]/25 hover:text-[#ffb3b2] transition-colors duration-300 font-label"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Byline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] font-label uppercase tracking-[0.15em] text-[#ece0df]/25 text-center md:text-right"
        >
          Justine Acosta — Portfolio Ver. 2
        </motion.div>
      </div>
    </footer>
  )
}
