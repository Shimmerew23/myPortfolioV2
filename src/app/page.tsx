import Navbar         from '@/components/Navbar'
import HeroSection    from '@/components/HeroSection'
import AboutSection   from '@/components/AboutSection'
import JourneySection from '@/components/JourneySection'
import ArsenalSection  from '@/components/ArsenalSection'
import WhatIDoSection  from '@/components/WhatIDoSection'
import WorkSection     from '@/components/WorkSection'
import ContactSection from '@/components/ContactSection'
import Footer         from '@/components/Footer'

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
