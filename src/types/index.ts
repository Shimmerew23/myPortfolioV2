import type { ComponentType } from 'react'

export type Milestone = {
  period: string
  title: string
  description: string
  active: boolean
}

export type Skill = {
  name: string
  icon?: string
  invert?: boolean
  label?: string
  iconType?: 'brain' | 'sparkles'
  iconColor?: string
}

export type SkillCategory = {
  label: string
  accent: string
  skills: Skill[]
}

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  liveUrl?: string
  nda?: boolean
}

export type Service = {
  icon: ComponentType<{ size?: number }>
  title: string
  description: string
  accent: string
}

export type NavLink = {
  label: string
  href: string
}

export type FooterLink = {
  label: string
  href: string
}

export type ContactLink =
  | { type: 'lucide'; Icon: ComponentType<{ size?: number; className?: string }>; label: string; href: string }
  | { type: 'svg'; src: string; alt: string; label: string; href: string }
