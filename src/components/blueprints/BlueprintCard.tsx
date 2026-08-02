import { ArrowUpRight, Lightbulb, TriangleAlert } from 'lucide-react'
import type { Blueprint } from '../../types'
import { BlueprintWorkflow } from './BlueprintWorkflow'
import { IntegrationPills } from './IntegrationPills'
import './blueprints.css'

type BlueprintCardProps = {
  blueprint: Blueprint
}

export function BlueprintCard({ blueprint }: BlueprintCardProps) {
  const Icon = blueprint.icon
  const subject = encodeURIComponent(`GrowthSpark blueprint inquiry: ${blueprint.title}`)

  return (
    <article className={`blueprint-card blueprint-card--${blueprint.accent}`}>
      <div className="blueprint-card__accent" aria-hidden="true" />

      <header className="blueprint-card__header">
        <span className="blueprint-card__icon" aria-hidden="true"><Icon size={22} strokeWidth={1.8} /></span>
        <p>{blueprint.category}</p>
      </header>

      <h3>{blueprint.title}</h3>

      <div className="blueprint-card__narrative">
        <div className="blueprint-card__problem">
          <p className="blueprint-card__label"><TriangleAlert size={12} aria-hidden="true" /> Problem</p>
          <p>{blueprint.problem}</p>
        </div>
        <div className="blueprint-card__solution">
          <p className="blueprint-card__label"><Lightbulb size={12} aria-hidden="true" /> Solution</p>
          <p>{blueprint.solution}</p>
        </div>
      </div>

      <BlueprintWorkflow steps={blueprint.workflow} blueprintTitle={blueprint.title} />
      <IntegrationPills integrations={blueprint.integrations} blueprintTitle={blueprint.title} />

      <div className="blueprint-card__footer">
        <div className="blueprint-card__impact">
          <p className="blueprint-card__label">{blueprint.impactLabel}</p>
          <p>{blueprint.impact}</p>
        </div>
        <a
          href={`mailto:hello@growthspark.solutions?subject=${subject}`}
          aria-label={`View the ${blueprint.title} blueprint with GrowthSpark Solutions`}
        >
          View blueprint
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
