'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EASE } from '@/lib/motion'

const navLinks = [
  { label: 'About',   href: '#about'   },
  { label: 'Journey', href: '#journey' },
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Work',    href: '#work'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('About')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const match = navLinks.find((l) => l.href === `#${id}`)
            if (match) setActive(match.label)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string, label: string) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'glass shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8">
          {/* Brand */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-headline italic text-2xl text-[#ece0df] select-none bg-transparent border-none cursor-pointer"
            whileHover={{ opacity: 0.75 }}
            transition={{ duration: 0.3 }}
          >
            Portfolio
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className="relative text-xs uppercase tracking-[0.25em] font-label transition-colors duration-300 group bg-transparent border-none cursor-pointer"
                style={{
                  color: active === link.label ? '#ffb3b2' : 'rgba(236,224,223,0.5)',
                }}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-px bg-[#8d021f]"
                  />
                )}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-[#ffb3b2]/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => handleNav('#contact', '')}
              className="hidden md:block bg-[#8d021f] text-[#ff9394] px-6 py-2 rounded-lg text-xs uppercase tracking-[0.2em] font-label cursor-pointer"
              whileHover={{ scale: 1.04, filter: 'brightness(1.2)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              Contact
            </motion.button>

            <button
              className="md:hidden text-[#ece0df] bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed top-0 left-0 w-full h-screen z-40 glass flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: EASE }}
                onClick={() => handleNav(link.href, link.label)}
                className="text-2xl font-headline italic text-[#ece0df] hover:text-[#ffb3b2] transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              onClick={() => handleNav('#contact', '')}
              className="mt-4 bg-[#8d021f] text-[#ff9394] px-8 py-3 rounded-lg text-sm uppercase tracking-[0.2em] font-label cursor-pointer"
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
