import { m, useReducedMotion } from 'framer-motion'

const metrics = [
  { value: '6', label: 'Core delivery phases', detail: 'From discovery through growth' },
  { value: '1', label: 'Shared roadmap', detail: 'Clear priorities and ownership' },
  { value: 'Weekly', label: 'Progress cadence', detail: 'Visible delivery checkpoints' },
  { value: 'Ongoing', label: 'Growth support', detail: 'Iteration beyond launch' },
]

export function ProcessMetrics() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="process-metrics" aria-label="AI delivery framework metrics">
      {metrics.map((metric, index) => (
        <m.article
          className="process-metric glass-subtle"
          key={metric.label}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: index * 0.07 }}
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <small>{metric.detail}</small>
        </m.article>
      ))}
    </div>
  )
}
