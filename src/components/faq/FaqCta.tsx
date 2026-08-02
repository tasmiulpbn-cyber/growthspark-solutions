import { ArrowRight, MessageCircle } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'

export function FaqCta() {
  const reduceMotion = useReducedMotion()

  return (
    <m.aside
      className="faq-cta glass-subtle"
      aria-labelledby="faq-cta-title"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45 }}
    >
      <div>
        <p>Still exploring what’s possible?</p>
        <h3 id="faq-cta-title">Bring us your workflow. We’ll help you find the right next step.</h3>
      </div>
      <div className="faq-cta__actions">
        <a className="btn btn-primary" href="mailto:hello@growthspark.solutions?subject=GrowthSpark%20AI%20question">
          <MessageCircle size={16} aria-hidden="true" />
          Ask a Question
        </a>
        <a className="btn btn-secondary" href="#delivery-process-title">
          View Our Process
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </m.aside>
  )
}
