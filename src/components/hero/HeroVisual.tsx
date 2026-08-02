import heroImage from '../../assets/ai-engineer-workspace.webp'
import { MetricBadge } from './MetricBadge'
import { StatsCard } from './StatsCard'
import { WorkflowCard } from './WorkflowCard'

export function HeroVisual() {
  return (
    <div className="hero-visual" id="hero-visual">
      <div className="hero-visual__glow" aria-hidden="true" />
      <div className="hero-visual__frame">
        <img
          className="hero-visual__image"
          src={heroImage}
          alt="AI engineer working with automation dashboards in a modern office"
          width="1600"
          height="1024"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-visual__overlay" aria-hidden="true" />
        <div className="hero-visual__label glass-subtle">
          <span className="hero-visual__status" aria-hidden="true" />
          AI operations online
        </div>
      </div>

      <StatsCard />
      <WorkflowCard />
      <MetricBadge className="metric-badge--revenue" label="Pipeline value" value="$1.4M" trend="+18.4%" />
      <MetricBadge className="metric-badge--efficiency" label="Hours reclaimed" value="680" trend="This month" />
    </div>
  )
}
