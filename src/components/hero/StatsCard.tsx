import { ArrowUpRight } from 'lucide-react'

const stats = [
  { value: '3.2×', label: 'Faster delivery' },
  { value: '42%', label: 'Lower overhead' },
  { value: '24/7', label: 'AI operations' },
]

export function StatsCard() {
  return (
    <aside className="stats-card card card-glass" aria-label="Representative client outcomes">
      <p className="stats-card__title">Business impact</p>
      <div className="stats-card__grid">
        {stats.map((stat) => (
          <div className="stats-card__item" key={stat.label}>
            <strong>{stat.value}<ArrowUpRight size={12} aria-hidden="true" /></strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
