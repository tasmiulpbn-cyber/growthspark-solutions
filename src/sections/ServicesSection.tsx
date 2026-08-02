import { Bot, Globe2, Sparkles, Workflow } from 'lucide-react'
import { SectionHeading } from '../components/common'
import { ServiceCard } from '../components/services'

const services = [
  {
    icon: Globe2,
    tag: 'Digital Experience',
    title: 'AI-Powered Websites',
    description: 'High-converting websites with intelligent search, lead capture, personalization, and AI-assisted customer journeys.',
  },
  {
    icon: Bot,
    tag: 'Customer Intelligence',
    title: 'AI Assistants & Chatbots',
    description: 'Context-aware assistants that answer questions, qualify leads, support customers, and connect with business knowledge.',
  },
  {
    icon: Workflow,
    tag: 'Operational Efficiency',
    title: 'Workflow Automation',
    description: 'Automated workflows that connect forms, email, CRM, spreadsheets, messaging, and internal business tools.',
  },
  {
    icon: Sparkles,
    tag: 'Business Innovation',
    title: 'Custom AI Solutions',
    description: 'Purpose-built AI systems, internal tools, agents, and integrations tailored to specific business processes.',
  },
]

export function ServicesSection() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="services-section__glow" aria-hidden="true" />
      <div className="container-content services-section__inner">
        <SectionHeading
          eyebrow="What we build"
          headingId="services-title"
          title={<>AI solutions designed around <span className="text-gradient-brand">real business outcomes</span></>}
          description="From intelligent customer experiences to automated operations, we design and deploy practical AI systems that reduce friction, improve efficiency, and create scalable growth."
        />

        <div className="services-grid">
          {services.map((service) => <ServiceCard {...service} key={service.title} />)}
        </div>
      </div>
    </section>
  )
}
