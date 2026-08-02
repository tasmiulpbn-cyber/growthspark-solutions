import { TrendingUp } from 'lucide-react'

type MetricBadgeProps = {
  className: string
  label: string
  value: string
  trend: string
}

export function MetricBadge({ className, label, value, trend }: MetricBadgeProps) {
  return (
    <aside className={`metric-badge glass-subtle ${className}`} aria-label={`${label}: ${value}, ${trend}`}>
      <span className="metric-badge__icon" aria-hidden="true">
        <TrendingUp size={13} />
      </span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
      <em>{trend}</em>
    </aside>
  )
}
