'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { Send } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { contactLinks } from '@/data/contact'

const COOLDOWN_MS = 2 * 60 * 1000
const LS_KEY = 'contact_last_sent'

function getSecondsLeft(): number {
  if (typeof window === 'undefined') return 0
  const last = Number(localStorage.getItem(LS_KEY) ?? 0)
  return Math.max(0, Math.ceil((last + COOLDOWN_MS - Date.now()) / 1000))
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [cooldown, setCooldown] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  useEffect(() => {
    const secs = getSecondsLeft()
    if (secs > 0) startCooldown(secs)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function startCooldown(initialSecs: number) {
    setCooldown(initialSecs)
    timerRef.current = setInterval(() => {
      setCooldown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (cooldown > 0) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      localStorage.setItem(LS_KEY, String(Date.now()))
      startCooldown(COOLDOWN_MS / 1000)
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{ background: '#171212' }}
    >
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(141,2,31,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── Atmospheric orbs ── */}
      <div
        className="absolute bottom-[5%] left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none orb-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, 0)',
        }}
      />
      <div
        className="absolute top-[5%] left-[-5%] w-[420px] h-[420px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(141,2,31,0.06) 0%, transparent 70%)',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full pointer-events-none orb-drift"
        style={{
          background: 'radial-gradient(circle, rgba(255,179,178,0.04) 0%, transparent 70%)',
          animationDelay: '6s',
        }}
      />

      <motion.div style={{ y: springY }} className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center mb-20"
        >
          <span className="font-label text-[10px] uppercase tracking-[0.5em] text-[#ece0df]/35 mb-6 block">
            // Contacts
          </span>
          <h2 className="text-5xl md:text-6xl font-headline leading-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#ece0df]/55 text-sm max-w-md mx-auto leading-relaxed font-body">
            Have a project in mind or just want to say hi?<br />Whether it&apos;s a new project, a collaboration, <br />or just a conversation — I&apos;d love to hear from you. <br />My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 text-left">
          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {(['name', 'email', 'subject'] as const).map((field) => (
                <div key={field} className="relative">
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent px-5 py-4 text-[#ece0df] placeholder:text-[#ece0df]/25 focus:outline-none font-body text-sm transition-colors duration-300 rounded-lg"
                    style={{ border: '1px solid rgba(236,224,223,0.08)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,179,178,0.35)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(236,224,223,0.08)')}
                  />
                </div>
              ))}

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full bg-transparent px-5 py-4 text-[#ece0df] placeholder:text-[#ece0df]/25 focus:outline-none font-body text-sm transition-colors duration-300 rounded-lg resize-none"
                  style={{ border: '1px solid rgba(236,224,223,0.08)' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,179,178,0.35)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(236,224,223,0.08)')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || cooldown > 0}
                className="w-full bg-white text-black py-4 rounded-lg font-label text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={cooldown > 0 ? {} : { scale: 1.01, filter: 'brightness(0.92)' }}
                whileTap={cooldown > 0 ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {cooldown > 0 && (
                  <span className="tracking-widest tabular-nums">
                    WAIT {Math.floor(cooldown / 60)}:{String(cooldown % 60).padStart(2, '0')}
                  </span>
                )}
                {cooldown === 0 && status === 'sent' && <span className="text-green-800 tracking-widest">SENT ✓</span>}
                {cooldown === 0 && status === 'error' && <span className="text-red-700 tracking-widest">FAILED — TRY AGAIN</span>}
                {cooldown === 0 && status === 'sending' && <span className="tracking-widest">SENDING…</span>}
                {cooldown === 0 && status === 'idle' && (
                  <>
                    SEND
                    <motion.span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <Send size={14} />
                    </motion.span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ── Info side ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            <motion.h3
              variants={{
                hidden:  { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="font-label text-sm uppercase tracking-[0.2em] text-[#ece0df] mb-10"
            >
              Get in Touch
            </motion.h3>

            <div className="space-y-8">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={{
                    hidden:  { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
                  }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#ffb3b2]/35"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(236,224,223,0.08)',
                    }}
                  >
                    {link.type === 'lucide' ? (
                      <link.Icon
                        size={16}
                        className="text-[#ece0df]/55 group-hover:text-[#ffb3b2] transition-colors duration-300"
                      />
                    ) : (
                      <Image
                        src={link.src}
                        alt={link.alt}
                        width={16}
                        height={16}
                        className="opacity-55 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    )}
                  </div>
                  <span className="font-body text-xs text-[#ece0df]/80 group-hover:text-[#ffb3b2] transition-colors duration-300 break-all leading-[2.5]">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
