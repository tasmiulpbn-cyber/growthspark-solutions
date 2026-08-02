import { Activity, Layers3 } from 'lucide-react'
import { AnalysisPanel } from './AnalysisPanel'
import { LeadPanel } from './LeadPanel'
import { ResultPanel } from './ResultPanel'
import { WorkflowPipeline } from './WorkflowPipeline'
import './showcase.css'

type DemoMetric = {
  value: string
  label: string
}

const demoMetrics: DemoMetric[] = [
  { value: '92%', label: 'Qualification confidence' },
  { value: '12 sec', label: 'Response workflow' },
  { value: '4', label: 'Connected systems' },
]

export function ShowcaseDashboard() {
  return (
    <div className="showcase-dashboard" id="growthflow-dashboard">
      <div className="showcase-dashboard__chrome">
        <div className="showcase-dashboard__identity">
          <span className="showcase-dashboard__logo" aria-hidden="true"><Layers3 size={17} /></span>
          <div>
            <p>GrowthFlow</p>
            <span>Lead Intelligence</span>
          </div>
        </div>
        <span className="showcase-dashboard__demo"><Activity size={12} aria-hidden="true" /> Demo workflow</span>
      </div>

      <div className="showcase-dashboard__scan" aria-hidden="true" />

      <div className="showcase-dashboard__layout">
        <LeadPanel />
        <AnalysisPanel />
        <WorkflowPipeline />
        <ResultPanel />

        <aside className="demo-metrics" aria-label="Demonstration workflow metrics">
          <p>Demo data</p>
          <dl>
            {demoMetrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </div>
  )
}
