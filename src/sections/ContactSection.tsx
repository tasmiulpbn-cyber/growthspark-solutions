import { LazyMotion, domAnimation } from 'framer-motion'
import { ContactForm, DiscoveryCard } from '../components/contact'
import '../components/contact/contact.css'

export function ContactSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-section__grid" aria-hidden="true" />
        <div className="contact-section__aurora" aria-hidden="true" />
        <div className="container-content contact-section__inner">
          <div className="contact-section__layout">
            <div className="contact-section__primary">
              <p className="contact-section__eyebrow">Start a conversation</p>
              <h2 id="contact-title">Let’s build the system that moves your business <span className="text-gradient-brand">forward.</span></h2>
              <p className="contact-section__description">Share the workflow, customer experience, or operational challenge you want to improve. We’ll help you identify the right AI approach.</p>
              <ContactForm />
            </div>
            <DiscoveryCard />
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
