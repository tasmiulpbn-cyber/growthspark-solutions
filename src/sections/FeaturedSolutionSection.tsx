import { ArrowRight, CheckCircle2, Play } from 'lucide-react'
import { ShowcaseDashboard } from '../components/showcase'

export function FeaturedSolutionSection() {
  return (
    <section className="featured-solution" aria-labelledby="featured-solution-title">
      <div className="featured-solution__grid" aria-hidden="true" />
      <div className="featured-solution__aurora" aria-hidden="true" />

      <div className="container-page featured-solution__inner">
        <div className="featured-solution__intro">
          <div className="featured-solution__copy">
            <p className="featured-solution__eyebrow">Featured AI solution</p>
            <h2 id="featured-solution-title">
              Turn every customer conversation into a <span className="text-gradient-brand">qualified opportunity</span>
            </h2>
          </div>

          <div className="featured-solution__details">
            <p>
              GrowthFlow Lead Intelligence captures inquiries, understands intent, qualifies prospects,
              updates your CRM, and triggers personalized follow-up automatically.
            </p>
            <div className="featured-solution__actions">
              <a className="btn btn-primary" href="#growthflow-dashboard">
                Explore GrowthFlow
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="btn btn-secondary" href="#growthflow-workflow">
                <Play size={14} fill="currentColor" aria-hidden="true" />
                See the workflow
              </a>
            </div>
            <p className="featured-solution__trust">
              <CheckCircle2 size={14} aria-hidden="true" />
              Built for websites, WhatsApp, email, forms, and CRM workflows.
            </p>
          </div>
        </div>

        <div className="featured-solution__product-label">
          <span>GrowthFlow Lead Intelligence</span>
          <small>AI lead qualification system</small>
        </div>

        <ShowcaseDashboard />
      </div>
    </section>
  )
}
