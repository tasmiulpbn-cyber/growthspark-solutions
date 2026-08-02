import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  headingId: string
}

export function SectionHeading({ eyebrow, title, description, headingId }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title" id={headingId}>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}
