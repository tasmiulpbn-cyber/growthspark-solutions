import { ArrowRight, CalendarDays } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'

export function ProcessCta() {
  const reduceMotion = useReducedMotion()

  return (
    <m.aside
      className="process-cta"
      aria-labelledby="process-cta-title"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <div className="process-cta__glow" aria-hidden="true" />
      <div>
        <p>Ready to move from idea to implementation?</p>
        <h3 id="process-cta-title">Build an AI system your business can actually use.</h3>
      </div>
      <div className="process-cta__actions">
        <a className="btn btn-primary" href="mailto:hello@growthspark.solutions?subject=GrowthSpark%20discovery%20call">
          <CalendarDays size={16} aria-hidden="true" />
          Book Discovery Call
        </a>
        <a className="btn btn-secondary" href="#services-title">
          View AI Solutions
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </m.aside>
  )
}
