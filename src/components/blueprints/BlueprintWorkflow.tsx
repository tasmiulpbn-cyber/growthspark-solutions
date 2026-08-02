import { ArrowRight } from 'lucide-react'
import type { WorkflowStep } from '../../types'

type BlueprintWorkflowProps = {
  steps: WorkflowStep[]
  blueprintTitle: string
}

export function BlueprintWorkflow({ steps, blueprintTitle }: BlueprintWorkflowProps) {
  return (
    <div className="blueprint-workflow" aria-label={`${blueprintTitle} workflow`}>
      <p className="blueprint-card__label">Workflow</p>
      <ol>
        {steps.map((step, index) => (
          <li key={step.label}>
            <span className="blueprint-workflow__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span className="blueprint-workflow__name">{step.label}</span>
            {index < steps.length - 1 && (
              <span className="blueprint-workflow__connector" aria-hidden="true">
                <i />
                <ArrowRight size={10} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
