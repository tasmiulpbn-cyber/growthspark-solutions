import { Sparkles } from 'lucide-react'

export function Brand() {
  return (
    <a className="brand" href="#hero" aria-label="GrowthSpark Solutions home">
      <span className="brand__mark" aria-hidden="true">
        <Sparkles size={17} strokeWidth={2.25} />
      </span>
      <span className="brand__name">
        GrowthSpark <span>Solutions</span>
      </span>
    </a>
  )
}
