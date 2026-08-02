import { BrainCircuit, Globe2, MessageSquareText, Workflow } from 'lucide-react'

const capabilities = [
  { label: 'AI Websites', icon: Globe2 },
  { label: 'Intelligent Assistants', icon: MessageSquareText },
  { label: 'Workflow Automation', icon: Workflow },
  { label: 'Business AI Systems', icon: BrainCircuit },
]

export function CapabilitiesSection() {
  return (
    <section className="capabilities glass-subtle" aria-labelledby="capabilities-title">
      <div className="container-page capabilities__inner">
        <div className="capabilities__intro">
          <p className="capabilities__eyebrow">Built for modern business</p>
          <h2 id="capabilities-title">
            Strategy. Automation. Intelligent products. Measurable growth.
          </h2>
        </div>

        <ul className="capabilities__list" aria-label="GrowthSpark capabilities">
          {capabilities.map(({ label, icon: Icon }) => (
            <li className="capabilities__item" key={label}>
              <span className="capabilities__icon" aria-hidden="true">
                <Icon size={17} strokeWidth={1.8} />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
