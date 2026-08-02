import { useMemo, useState } from 'react'
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { CaseStudiesCta, CaseStudyCard, CaseStudyFilter, CaseStudyStats, caseStudies } from '../components/case-studies'
import type { IndustryFilter } from '../components/case-studies'
import { SectionHeading } from '../components/common'
import '../components/case-studies/case-studies.css'

export function FeaturedCaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState<IndustryFilter>('All')
  const reduceMotion = useReducedMotion()
  const filteredCaseStudies = useMemo(
    () => activeFilter === 'All' ? caseStudies : caseStudies.filter(({ industry }) => industry === activeFilter),
    [activeFilter],
  )

  return (
    <LazyMotion features={domAnimation}>
      <section className="case-studies-section" aria-labelledby="case-studies-title">
        <div className="case-studies-section__grid" aria-hidden="true" />
        <div className="case-studies-section__glow" aria-hidden="true" />
        <div className="container-content case-studies-section__inner">
          <SectionHeading
            eyebrow="Featured AI case studies"
            headingId="case-studies-title"
            title={<>See how practical AI can reshape <span className="text-gradient-brand">real business workflows</span></>}
            description="Explore concept case studies that show how we would approach common operational challenges across modern industries."
          />

          <p className="case-studies-section__disclaimer">Concept scenarios — expected outcomes are directional, not verified client results.</p>
          <CaseStudyFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          <m.div className="case-studies-grid" layout={!reduceMotion} aria-live="polite">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredCaseStudies.map((caseStudy) => <CaseStudyCard caseStudy={caseStudy} key={caseStudy.slug} />)}
            </AnimatePresence>
          </m.div>

          <CaseStudyStats />
          <CaseStudiesCta />
        </div>
      </section>
    </LazyMotion>
  )
}
