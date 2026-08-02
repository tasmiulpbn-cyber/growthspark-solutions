import { BrainCircuit } from 'lucide-react'

const analysis = [
  { label: 'Intent', value: 'AI assistant implementation' },
  { label: 'Budget signal', value: 'Medium–High' },
  { label: 'Urgency', value: 'Within 30 days' },
  { label: 'Fit score', value: '92%', emphasized: true },
  { label: 'Sentiment', value: 'Positive', positive: true },
]

export function AnalysisPanel() {
  return (
    <article className="showcase-panel analysis-panel" aria-labelledby="analysis-panel-title">
      <div className="showcase-panel__header">
        <span className="showcase-panel__icon showcase-panel__icon--violet" aria-hidden="true">
          <BrainCircuit size={17} />
        </span>
        <div>
          <p className="showcase-panel__eyebrow">AI analysis</p>
          <h3 id="analysis-panel-title">Opportunity profile</h3>
        </div>
        <span className="analysis-panel__processing">Analyzed</span>
      </div>

      <dl className="analysis-panel__list">
        {analysis.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd className={`${item.emphasized ? 'is-emphasized' : ''}${item.positive ? ' is-positive' : ''}`}>
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="analysis-panel__confidence" aria-label="Fit score 92 percent">
        <span style={{ width: '92%' }} />
      </div>
    </article>
  )
}
