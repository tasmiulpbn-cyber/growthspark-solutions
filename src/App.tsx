import { Hero } from './components/hero'
import { AiDeliveryProcessSection, CapabilitiesSection, ContactSection, FaqSection, FeaturedCaseStudiesSection, FeaturedSolutionSection, ServicesSection, SolutionBlueprintsSection } from './sections'
import { SiteFooter } from './components/layout'
import './sections/sections.css'

function App() {
  return (
    <>
      <Hero />
      <CapabilitiesSection />
      <ServicesSection />
      <FeaturedSolutionSection />
      <SolutionBlueprintsSection />
      <AiDeliveryProcessSection />
      <FeaturedCaseStudiesSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </>
  )
}

export default App
