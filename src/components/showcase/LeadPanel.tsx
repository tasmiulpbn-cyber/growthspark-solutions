import { MessageSquare, Radio } from 'lucide-react'

export function LeadPanel() {
  return (
    <article className="showcase-panel lead-panel" aria-labelledby="lead-panel-title">
      <div className="showcase-panel__header">
        <span className="showcase-panel__icon" aria-hidden="true">
          <MessageSquare size={17} />
        </span>
        <div>
          <p className="showcase-panel__eyebrow">Incoming lead</p>
          <h3 id="lead-panel-title">Sarah Mitchell</h3>
        </div>
        <span className="lead-panel__status">
          <Radio size={11} aria-hidden="true" />
          New inquiry
        </span>
      </div>

      <dl className="lead-panel__details">
        <div>
          <dt>Company</dt>
          <dd>Northstar Studio</dd>
        </div>
        <div>
          <dt>Source</dt>
          <dd>Website inquiry</dd>
        </div>
      </dl>

      <blockquote className="lead-panel__message">
        “We need an AI assistant to handle incoming client questions and qualify leads.”
      </blockquote>
    </article>
  )
}
