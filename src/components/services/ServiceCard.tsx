import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ServiceCardProps = {
  icon: LucideIcon
  tag: string
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, tag, title, description }: ServiceCardProps) {
  const subject = encodeURIComponent(`GrowthSpark inquiry: ${title}`)

  return (
    <article className="service-card card card-glass">
      <div className="service-card__accent" aria-hidden="true" />
      <div className="service-card__topline">
        <span className="service-card__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.8} />
        </span>
        <span className="service-card__tag">{tag}</span>
      </div>

      <div className="service-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <a
        className="service-card__link"
        href={`mailto:hello@growthspark.solutions?subject=${subject}`}
        aria-label={`Explore the ${title} solution with GrowthSpark Solutions`}
      >
        Explore solution
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  )
}
