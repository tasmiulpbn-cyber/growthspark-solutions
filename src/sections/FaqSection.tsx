import { LazyMotion, domAnimation } from 'framer-motion'
import { SectionHeading } from '../components/common'
import { FaqAccordion, FaqCta } from '../components/faq'
import '../components/faq/faq.css'

export function FaqSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="faq-section" aria-labelledby="faq-title">
        <div className="faq-section__grid" aria-hidden="true" />
        <div className="faq-section__glow" aria-hidden="true" />

        <div className="container-content faq-section__inner">
          <SectionHeading
            eyebrow="Frequently asked questions"
            headingId="faq-title"
            title={<>Clear answers for your <span className="text-gradient-brand">next AI initiative</span></>}
            description="Practical guidance on fit, delivery, integrations, security, and what happens after launch."
          />

          <FaqAccordion />
          <FaqCta />
        </div>
      </section>
    </LazyMotion>
  )
}
