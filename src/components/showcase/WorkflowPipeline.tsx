import { BrainCircuit, Database, Gauge, MessageSquare, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type WorkflowStep = {
  label: string
  icon: LucideIcon
  status: 'complete' | 'active' | 'queued'
}

const workflowSteps: WorkflowStep[] = [
  { label: 'Inquiry', icon: MessageSquare, status: 'complete' },
  { label: 'AI Analysis', icon: BrainCircuit, status: 'complete' },
  { label: 'Lead Scoring', icon: Gauge, status: 'active' },
  { label: 'CRM Update', icon: Database, status: 'queued' },
  { label: 'Personalized Follow-up', icon: Send, status: 'queued' },
]

export function WorkflowPipeline() {
  return (
    <article className="showcase-panel workflow-pipeline" id="growthflow-workflow" aria-labelledby="workflow-title">
      <div className="workflow-pipeline__heading">
        <div>
          <p className="showcase-panel__eyebrow">Automation workflow</p>
          <h3 id="workflow-title">Inquiry-to-opportunity pipeline</h3>
        </div>
        <span className="workflow-pipeline__live"><i aria-hidden="true" /> Processing live</span>
      </div>

      <ol className="workflow-pipeline__steps">
        {workflowSteps.map(({ label, icon: Icon, status }, index) => (
          <li className={`workflow-step workflow-step--${status}`} key={label}>
            <span className="workflow-step__node" aria-hidden="true">
              <Icon size={17} />
            </span>
            <span className="workflow-step__label">{label}</span>
            <span className="workflow-step__status">{status}</span>
            {index < workflowSteps.length - 1 && <span className="workflow-step__connector" aria-hidden="true"><i /></span>}
          </li>
        ))}
      </ol>
    </article>
  )
}
