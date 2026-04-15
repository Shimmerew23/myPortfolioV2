import type { Metadata } from 'next'
import { Newsreader, Inter } from 'next/font/google'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Justine Acosta | Gallery Portfolio',
  description:
    'Full Stack Developer & Prompt Engineer — Building digital experiences that resonate emotionally.',
  keywords: ['Full Stack Developer', 'Prompt Engineer', 'Next.js', 'React', 'Portfolio'],
  openGraph: {
    title: 'Justine Acosta | Gallery Portfolio',
    description: 'Full Stack Developer & Prompt Engineer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased" style={{ background: '#171212' }}>
        {children}
      </body>
    </html>
  )
}
