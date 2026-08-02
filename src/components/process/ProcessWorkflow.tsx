import { BrainCircuit, CheckCircle2, Code2, Compass, LineChart, PanelsTopLeft } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type WorkflowNode = {
  label: string
  detail: string
  icon: LucideIcon
}

const workflowNodes: WorkflowNode[] = [
  { label: 'Discover', detail: 'Business context', icon: Compass },
  { label: 'Strategize', detail: 'AI opportunity map', icon: BrainCircuit },
  { label: 'Prototype', detail: 'Experience validation', icon: PanelsTopLeft },
  { label: 'Build', detail: 'Production system', icon: Code2 },
  { label: 'Validate', detail: 'Quality assurance', icon: CheckCircle2 },
  { label: 'Optimize', detail: 'Continuous growth', icon: LineChart },
]

export function ProcessWorkflow() {
  const reduceMotion = useReducedMotion()

  return (
    <m.div
      className="process-workflow glass-strong"
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
    >
      <div className="process-workflow__header">
        <div>
          <span>Delivery orchestration</span>
          <h3>From signal to scalable system</h3>
        </div>
        <span className="process-workflow__status"><i aria-hidden="true" /> Active framework</span>
      </div>

      <div className="process-workflow__canvas" aria-label="Animated visualization of the six delivery phases">
        <div className="process-workflow__spine" aria-hidden="true"><i /></div>
        {workflowNodes.map(({ label, detail, icon: Icon }, index) => (
          <m.div
            className="process-node"
            key={label}
            animate={reduceMotion ? undefined : {
              borderColor: ['rgba(255,255,255,.1)', 'rgba(139,92,246,.55)', 'rgba(255,255,255,.1)'],
              boxShadow: ['0 0 0 rgba(139,92,246,0)', '0 0 32px rgba(139,92,246,.18)', '0 0 0 rgba(139,92,246,0)'],
            }}
            transition={{ duration: 2.8, delay: index * 0.5, repeat: Infinity, repeatDelay: 0.2 }}
          >
            <span className="process-node__icon" aria-hidden="true"><Icon size={17} /></span>
            <span><strong>{label}</strong><small>{detail}</small></span>
            <em>{String(index + 1).padStart(2, '0')}</em>
          </m.div>
        ))}
      </div>

      <div className="process-workflow__footer">
        <span>Human-guided</span>
        <span>Business-aligned</span>
        <span>Production-ready</span>
      </div>
    </m.div>
  )
}
