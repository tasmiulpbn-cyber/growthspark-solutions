import { m, useReducedMotion } from 'framer-motion'

const statistics = [
  { value: '6', label: 'Solution concepts' },
  { value: '5', label: 'Business sectors' },
  { value: '4', label: 'Workflow stages each' },
  { value: 'Tailored', label: 'Final architecture' },
]

export function CaseStudyStats() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="case-study-stats" aria-label="Case study collection statistics">
      {statistics.map((stat, index) => (
        <m.div
          key={stat.label}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
        >
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </m.div>
      ))}
    </div>
  )
}
