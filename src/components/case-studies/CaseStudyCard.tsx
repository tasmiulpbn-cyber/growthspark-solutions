import { ArrowUpRight, CircleCheckBig } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'
import type { CaseStudy } from './caseStudies'

type CaseStudyCardProps = {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const reduceMotion = useReducedMotion()
  const Icon = caseStudy.icon
  const subject = encodeURIComponent(`GrowthSpark concept inquiry: ${caseStudy.title}`)

  return (
    <m.article
      className="case-study-card"
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="case-study-card__accent" aria-hidden="true" />
      <header className="case-study-card__header">
        <span className="case-study-card__icon" aria-hidden="true"><Icon size={20} /></span>
        <div>
          <span>{caseStudy.industry}</span>
          <small>Concept case study</small>
        </div>
      </header>

      <h3>{caseStudy.title}</h3>

      <div className="case-study-card__content">
        <div>
          <p className="case-study-card__label">Problem</p>
          <p>{caseStudy.problem}</p>
        </div>
        <div>
          <p className="case-study-card__label">Solution</p>
          <p>{caseStudy.solution}</p>
        </div>
      </div>

      <div className="case-study-workflow" aria-label={`${caseStudy.title} workflow`}>
        {caseStudy.workflow.map((step, index) => (
          <span key={step}>
            <i aria-hidden="true">{index + 1}</i>
            <em>{step}</em>
            {index < caseStudy.workflow.length - 1 && <b aria-hidden="true"><u /></b>}
          </span>
        ))}
      </div>

      <div className="case-study-card__stack">
        <p className="case-study-card__label">Technology stack</p>
        <ul aria-label={`Technology stack for ${caseStudy.title}`}>
          {caseStudy.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>

      <div className="case-study-card__outcome">
        <CircleCheckBig size={15} aria-hidden="true" />
        <div><span>Expected outcome</span><p>{caseStudy.expectedOutcome}</p></div>
      </div>

      <a
        className="case-study-card__cta btn btn-ghost"
        href={`mailto:hello@growthspark.solutions?subject=${subject}`}
        aria-label={`Discuss the ${caseStudy.title} concept with GrowthSpark Solutions`}
      >
        Explore this concept
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </m.article>
  )
}
