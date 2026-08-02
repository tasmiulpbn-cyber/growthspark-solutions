import { BlueprintCard } from '../components/blueprints'
import { SectionHeading } from '../components/common'
import { blueprints } from '../constants'

export function SolutionBlueprintsSection() {
  return (
    <section className="blueprints-section" aria-labelledby="blueprints-title">
      <div className="blueprints-section__grid" aria-hidden="true" />
      <div className="blueprints-section__glow" aria-hidden="true" />

      <div className="container-content blueprints-section__inner">
        <SectionHeading
          eyebrow="Solution blueprints"
          headingId="blueprints-title"
          title={<>Practical AI systems for <span className="text-gradient-brand">high-friction business workflows</span></>}
          description="Explore practical system blueprints designed to improve customer experience, remove repetitive work, and connect fragmented business processes."
        />
        <p className="blueprints-section__disclaimer">Concept blueprints — final architecture is tailored to each business.</p>

        <div className="blueprints-grid">
          {blueprints.map((blueprint) => <BlueprintCard blueprint={blueprint} key={blueprint.slug} />)}
        </div>
      </div>
    </section>
  )
}
