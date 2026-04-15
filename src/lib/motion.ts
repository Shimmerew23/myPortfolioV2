import type { Transition } from 'framer-motion'

/** Material Design 3 standard easing expressed as a BezierDefinition tuple */
export const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

/** Shared slow, deliberate transition — per the "Nocturnal Gallery" design spec */
export const SLOW: Transition = {
  duration: 0.8,
  ease: EASE,
}

/** Stagger container variant factory */
export const staggerContainer = (stagger = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
})

/** Simple fade-up variant */
export const fadeUpVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}
