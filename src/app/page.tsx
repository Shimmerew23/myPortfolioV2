import Navbar         from '@/components/layout/Navbar'
import Footer         from '@/components/layout/Footer'
import HeroSection    from '@/components/sections/HeroSection'
import AboutSection   from '@/components/sections/AboutSection'
import JourneySection from '@/components/sections/JourneySection'
import ArsenalSection from '@/components/sections/ArsenalSection'
import WhatIDoSection from '@/components/sections/WhatIDoSection'
import WorkSection    from '@/components/sections/WorkSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ArsenalSection />
        <WhatIDoSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
