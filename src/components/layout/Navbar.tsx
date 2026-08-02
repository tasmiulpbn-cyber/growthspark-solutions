import { ArrowUpRight } from 'lucide-react'
import { Brand } from '../common'

export function Navbar() {
  return (
    <header className="hero-nav glass" aria-label="Primary navigation">
      <Brand />
      <p className="hero-nav__descriptor">AI systems for ambitious teams</p>
      <a className="btn btn-ghost hero-nav__cta" href="mailto:hello@growthspark.solutions">
        Talk to us
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </header>
  )
}
