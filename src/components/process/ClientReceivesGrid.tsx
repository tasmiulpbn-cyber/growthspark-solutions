import { Boxes, FileCheck2, Headphones, PanelsTopLeft, Rocket, Route } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'

const deliverables = [
  { title: 'AI strategy roadmap', description: 'Prioritized opportunities, constraints, and a practical path to value.', icon: Route },
  { title: 'Solution architecture', description: 'A clear system design covering data, integrations, models, and safeguards.', icon: Boxes },
  { title: 'Interactive prototype', description: 'A tangible experience for validating workflows before full development.', icon: PanelsTopLeft },
  { title: 'Production implementation', description: 'Engineered interfaces, automations, integrations, and AI capabilities.', icon: FileCheck2 },
  { title: 'Launch playbook', description: 'Testing, rollout, documentation, and team-readiness guidance.', icon: Rocket },
  { title: 'Growth partnership', description: 'Post-launch monitoring, refinement, and expansion support.', icon: Headphones },
]

export function ClientReceivesGrid() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="client-receives">
      <div className="client-receives__heading">
        <p>What every client receives</p>
        <h3>A delivery system designed for clarity, momentum, and long-term value.</h3>
      </div>
      <div className="client-receives__grid">
        {deliverables.map(({ title, description, icon: Icon }, index) => (
          <m.article
            className="deliverable-card"
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.42, delay: (index % 3) * 0.07 }}
          >
            <span aria-hidden="true"><Icon size={18} /></span>
            <div><h4>{title}</h4><p>{description}</p></div>
          </m.article>
        ))}
      </div>
    </div>
  )
}
