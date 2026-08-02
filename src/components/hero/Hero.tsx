import { ArrowRight, Play } from 'lucide-react'
import { Navbar } from '../layout'
import { HeroVisual } from './HeroVisual'
import './hero.css'

export function Hero() {
  return (
    <main className="hero-shell" id="hero">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-grid surface-grid" aria-hidden="true" />

      <div className="container-page hero-shell__inner">
        <Navbar />

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              AI transformation, engineered for growth
            </div>

            <h1 className="hero__title" id="hero-title">
              Turn ambitious ideas into
              <span className="text-gradient-brand"> intelligent growth.</span>
            </h1>

            <p className="hero__description">
              We design and deploy production-grade AI systems that automate operations,
              elevate customer experiences, and create measurable business advantage.
            </p>

            <div className="hero__actions">
              <a className="btn btn-primary hero__button" href="mailto:hello@growthspark.solutions">
                Start your AI roadmap
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="btn btn-secondary hero__button" href="#hero-visual">
                <Play size={15} fill="currentColor" aria-hidden="true" />
                See how we work
              </a>
            </div>

            <p className="hero__trust">
              Strategy <span aria-hidden="true">•</span> Automation <span aria-hidden="true">•</span> AI products
            </p>
          </div>

          <HeroVisual />
        </section>
      </div>
    </main>
  )
}
