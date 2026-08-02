import { ArrowRight, CheckCircle2, Globe2, Mail, Route } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'

const benefits = [
  'A focused review of your workflow and business goals',
  'An honest assessment of where AI fits—and where it does not',
  'Clear next steps for a pilot, roadmap, or implementation',
]

export function DiscoveryCard() {
  const reduceMotion = useReducedMotion()

  return (
    <m.aside
      className="discovery-card glass-strong"
      aria-labelledby="discovery-card-title"
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
    >
      <div className="discovery-card__glow" aria-hidden="true" />
      <span className="discovery-card__eyebrow">Discovery call</span>
      <h3 id="discovery-card-title">A practical first conversation—not a sales script.</h3>
      <p>We’ll explore the challenge, clarify what success should look like, and identify a sensible way forward.</p>

      <ul className="discovery-card__benefits">
        {benefits.map((benefit) => (
          <li key={benefit}><CheckCircle2 size={16} aria-hidden="true" />{benefit}</li>
        ))}
      </ul>

      <div className="discovery-card__details">
        <a href="mailto:hello@growthspark.solutions">
          <Mail size={16} aria-hidden="true" />
          <span><small>Email</small>hello@growthspark.solutions</span>
        </a>
        <div>
          <Globe2 size={16} aria-hidden="true" />
          <span><small>Collaboration</small>Remote, worldwide</span>
        </div>
        <div>
          <Route size={16} aria-hidden="true" />
          <span><small>Project scope</small>Strategy through launch</span>
        </div>
      </div>

      <a className="discovery-card__link" href="#delivery-process-title">
        See how delivery works
        <ArrowRight size={15} aria-hidden="true" />
      </a>
    </m.aside>
  )
}
