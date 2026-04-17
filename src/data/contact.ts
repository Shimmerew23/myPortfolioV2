import { Mail } from 'lucide-react'
import type { ContactLink } from '@/types'

export const contactLinks: ContactLink[] = [
  {
    type: 'lucide',
    Icon: Mail,
    label: 'justine.psalm23@gmail.com',
    href: 'mailto:justine.psalm23@gmail.com',
  },
  {
    type: 'svg',
    src: '/github.svg',
    alt: 'GitHub',
    label: 'GitHub: @Shimmerew23',
    href: 'https://github.com/Shimmerew23',
  },
  {
    type: 'svg',
    src: '/linkedin.svg',
    alt: 'LinkedIn',
    label: 'LinkedIn: Justine Psalm Acosta',
    href: 'https://www.linkedin.com/in/justinesam023/',
  },
]
