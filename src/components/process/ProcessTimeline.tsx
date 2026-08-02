import { m, useReducedMotion } from 'framer-motion'

type ProcessStep = {
  number: string
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  { number: '01', title: 'Discovery', description: 'We map your goals, customers, workflows, data, and operational constraints.' },
  { number: '02', title: 'AI Strategy', description: 'We identify the highest-value use cases and define a practical delivery roadmap.' },
  { number: '03', title: 'Design & Prototype', description: 'We shape the experience, validate key interactions, and prove the system concept.' },
  { number: '04', title: 'Development', description: 'We build the interfaces, automations, integrations, and AI orchestration layer.' },
  { number: '05', title: 'Testing & Launch', description: 'We test accuracy, edge cases, reliability, and user journeys before deployment.' },
  { number: '06', title: 'Growth Support', description: 'We monitor performance, refine workflows, and expand capability as your needs evolve.' },
]

export function ProcessTimeline() {
  const reduceMotion = useReducedMotion()

  return (
    <ol className="process-timeline" aria-label="GrowthSpark AI delivery process">
      {processSteps.map((step, index) => (
        <m.li
          className="process-step"
          key={step.number}
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
        >
          <span className="process-step__number" aria-hidden="true">{step.number}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </m.li>
      ))}
    </ol>
  )
}
