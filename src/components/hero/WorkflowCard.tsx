import { BrainCircuit, Check, Database, GitBranch, Send } from 'lucide-react'

const pipeline = [
  { label: 'Ingest', icon: Database },
  { label: 'Reason', icon: BrainCircuit, active: true },
  { label: 'Route', icon: GitBranch },
  { label: 'Sync', icon: Send },
]

export function WorkflowCard() {
  return (
    <aside className="workflow-card glass-strong" aria-label="AI workflow status">
      <div className="workflow-card__header">
        <div>
          <span className="workflow-card__eyebrow">Live workflow</span>
          <p>Lead intelligence agent</p>
        </div>
        <span className="workflow-card__complete" aria-label="Workflow completed">
          <Check size={13} strokeWidth={3} />
        </span>
      </div>

      <div className="workflow-card__flow" aria-label="Ingest, reason, route, and sync pipeline">
        {pipeline.map((stage, index) => {
          const Icon = stage.icon

          return (
            <div className="workflow-card__stage" key={stage.label}>
              <span className={`workflow-card__node${stage.active ? ' workflow-card__node--active' : ''}`}>
                <Icon size={15} aria-hidden="true" />
              </span>
              <small>{stage.label}</small>
              {index < pipeline.length - 1 && <span className="workflow-card__line" aria-hidden="true"><i /></span>}
            </div>
          )
        })}
      </div>

      <div className="workflow-card__footer">
        <span>1,248 records analyzed</span>
        <strong>98.6%</strong>
      </div>
    </aside>
  )
}
