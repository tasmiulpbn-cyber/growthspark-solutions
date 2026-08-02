import { CalendarCheck, Check, CheckCircle2, Clock3, Database } from 'lucide-react'

const results = [
  { label: 'Lead qualified', icon: CheckCircle2 },
  { label: 'CRM updated', icon: Database },
  { label: 'Follow-up scheduled', icon: CalendarCheck },
]

export function ResultPanel() {
  return (
    <article className="showcase-panel result-panel" aria-labelledby="result-panel-title">
      <div className="showcase-panel__header">
        <span className="showcase-panel__icon showcase-panel__icon--success" aria-hidden="true">
          <Check size={17} />
        </span>
        <div>
          <p className="showcase-panel__eyebrow">Result</p>
          <h3 id="result-panel-title">Opportunity ready</h3>
        </div>
      </div>

      <ul className="result-panel__list">
        {results.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Icon size={14} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      <p className="result-panel__time">
        <Clock3 size={14} aria-hidden="true" />
        Estimated response time <strong>12 seconds</strong>
      </p>
    </article>
  )
}
