import { ArrowRight, CalendarDays } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'

export function CaseStudiesCta() {
  const reduceMotion = useReducedMotion()

  return (
    <m.aside
      className="case-studies-cta"
      aria-labelledby="case-studies-cta-title"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p>Have a workflow worth improving?</p>
        <h3 id="case-studies-cta-title">Let’s turn your operating challenge into a practical AI system.</h3>
      </div>
      <div className="case-studies-cta__actions">
        <a className="btn btn-primary" href="mailto:hello@growthspark.solutions?subject=GrowthSpark%20AI%20opportunity">
          <CalendarDays size={16} aria-hidden="true" />
          Discuss Your Use Case
        </a>
        <a className="btn btn-secondary" href="#blueprints-title">
          View Solution Blueprints
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </m.aside>
  )
}
