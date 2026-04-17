import type { SkillCategory } from '@/types'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SI  = 'https://cdn.simpleicons.org'

export const categories: SkillCategory[] = [
  {
    label: 'Frontend',
    accent: '#6366f1',
    skills: [
      { name: 'React',        icon: `${CDN}/react/react-original.svg` },
      { name: 'Next.js',      icon: `${CDN}/nextjs/nextjs-original.svg`, invert: true },
      { name: 'TypeScript',   icon: `${CDN}/typescript/typescript-original.svg` },
      { name: 'JavaScript',   icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'Tailwind CSS', icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'React Native', icon: `${CDN}/react/react-original.svg` },
    ],
  },
  {
    label: 'Backend',
    accent: '#22c55e',
    skills: [
      { name: 'Node.js',   icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express',   icon: `${CDN}/express/express-original.svg`, invert: true },
      { name: 'Python',    icon: `${CDN}/python/python-original.svg` },
      { name: 'FastAPI',   icon: `${CDN}/fastapi/fastapi-original.svg` },
      { name: 'REST APIs', label: '</>' },
    ],
  },
  {
    label: 'Database',
    accent: '#a855f7',
    skills: [
      { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg` },
      { name: 'MongoDB',    icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'Supabase',   icon: `${CDN}/supabase/supabase-original.svg` },
      { name: 'Prisma',     icon: `${CDN}/prisma/prisma-original.svg`, invert: true },
      { name: 'MySQL',      icon: `${CDN}/mysql/mysql-original.svg` },
      { name: 'Firebase',   icon: `${CDN}/firebase/firebase-original.svg` },
    ],
  },
  {
    label: 'DevOps & Tools',
    accent: '#f97316',
    skills: [
      { name: 'Docker', icon: `${CDN}/docker/docker-original.svg` },
      { name: 'AWS',    icon: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, invert: true },
      { name: 'Vercel', icon: `${CDN}/vercel/vercel-original.svg`, invert: true },
      { name: 'Git',    icon: `${CDN}/git/git-original.svg` },
      { name: 'NGINX',  icon: `${CDN}/nginx/nginx-original.svg` },
    ],
  },
  {
    label: 'AI & Integrations',
    accent: '#ec4899',
    skills: [
      { name: 'Claude API',         iconType: 'brain',    iconColor: '#D97706' },
      { name: 'OpenAI API',         iconType: 'brain',    iconColor: '#10A37F' },
      { name: 'Stripe',             icon: `${SI}/stripe/635BFF` },
      { name: 'GraphQL',            icon: `${CDN}/graphql/graphql-plain.svg` },
      { name: 'Prompt Engineering', iconType: 'sparkles' },
    ],
  },
]
