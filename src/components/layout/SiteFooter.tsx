import { ArrowUpRight, AtSign, Mail, Share2 } from 'lucide-react'
import { Brand } from '../common'

const navigationLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services-title' },
  { label: 'Blueprints', href: '#blueprints-title' },
  { label: 'Case Studies', href: '#case-studies-title' },
  { label: 'FAQ', href: '#faq-title' },
]

const serviceLinks = [
  { label: 'AI Websites', subject: 'AI-powered website' },
  { label: 'AI Assistants', subject: 'AI assistant' },
  { label: 'Workflow Automation', subject: 'Workflow automation' },
  { label: 'Custom AI Systems', subject: 'Custom AI system' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-page site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Brand />
            <p>Practical AI systems for ambitious businesses.</p>
            <a href="mailto:hello@growthspark.solutions"><Mail size={14} aria-hidden="true" />hello@growthspark.solutions</a>
          </div>

          <nav className="site-footer__column" aria-label="Footer navigation">
            <h2>Navigation</h2>
            <ul>{navigationLinks.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul>
          </nav>

          <nav className="site-footer__column" aria-label="Service inquiries">
            <h2>Services</h2>
            <ul>{serviceLinks.map((link) => (
              <li key={link.label}><a href={`mailto:hello@growthspark.solutions?subject=${encodeURIComponent(link.subject)}`}>{link.label}</a></li>
            ))}</ul>
          </nav>

          <div className="site-footer__column">
            <h2>Connect</h2>
            <ul className="site-footer__socials">
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn"><Share2 size={15} aria-hidden="true" />LinkedIn<ArrowUpRight size={12} aria-hidden="true" /></a></li>
              <li><a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Visit X"><AtSign size={15} aria-hidden="true" />X / Twitter<ArrowUpRight size={12} aria-hidden="true" /></a></li>
              <li><a href="mailto:hello@growthspark.solutions" aria-label="Email GrowthSpark Solutions"><Mail size={15} aria-hidden="true" />Email<ArrowUpRight size={12} aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} GrowthSpark Solutions. All rights reserved.</p>
          <div><a href="#hero">Back to top</a><span aria-hidden="true">•</span><a href="mailto:hello@growthspark.solutions?subject=Privacy%20inquiry">Privacy inquiries</a></div>
        </div>
      </div>
    </footer>
  )
}
