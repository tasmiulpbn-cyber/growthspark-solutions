import type { IndustryFilter } from './caseStudies'
import { industries } from './caseStudies'

type CaseStudyFilterProps = {
  activeFilter: IndustryFilter
  onFilterChange: (filter: IndustryFilter) => void
}

export function CaseStudyFilter({ activeFilter, onFilterChange }: CaseStudyFilterProps) {
  return (
    <div className="case-study-filter" role="group" aria-label="Filter case studies by industry">
      {industries.map((industry) => (
        <button
          className={industry === activeFilter ? 'is-active' : ''}
          type="button"
          aria-pressed={industry === activeFilter}
          onClick={() => onFilterChange(industry)}
          key={industry}
        >
          {industry}
        </button>
      ))}
    </div>
  )
}
