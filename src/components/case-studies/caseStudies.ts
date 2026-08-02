import { Building2, GraduationCap, HeartPulse, Hotel, House, ShoppingBag } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const industries = ['All', 'Healthcare', 'Education', 'Retail', 'Hospitality', 'Real Estate'] as const

export type Industry = Exclude<(typeof industries)[number], 'All'>
export type IndustryFilter = (typeof industries)[number]

export type CaseStudy = {
  slug: string
  industry: Industry
  title: string
  problem: string
  solution: string
  technologies: string[]
  expectedOutcome: string
  workflow: string[]
  icon: LucideIcon
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-patient-navigation',
    industry: 'Healthcare',
    title: 'AI Patient Navigation System',
    problem: 'Patient questions, intake details, and appointment requests arrive across disconnected channels.',
    solution: 'A secure conversational layer that handles common questions, structures intake data, and routes sensitive requests to staff.',
    technologies: ['Conversational AI', 'Knowledge Retrieval', 'Scheduling API', 'Secure CRM'],
    expectedOutcome: 'Faster routing and less repetitive administrative work while preserving human oversight.',
    workflow: ['Patient request', 'Intent check', 'Secure routing', 'Team handoff'],
    icon: HeartPulse,
  },
  {
    slug: 'education-enrollment-assistant',
    industry: 'Education',
    title: 'Enrollment Intelligence Assistant',
    problem: 'Prospective students struggle to find accurate program, admissions, and enrollment information quickly.',
    solution: 'A source-grounded assistant that answers program questions, captures student intent, and guides next steps.',
    technologies: ['RAG', 'Document Search', 'Lead Scoring', 'Email Automation'],
    expectedOutcome: 'A clearer prospective-student journey and more consistent admissions follow-up.',
    workflow: ['Student question', 'Knowledge search', 'Fit guidance', 'Advisor follow-up'],
    icon: GraduationCap,
  },
  {
    slug: 'retail-commerce-personalization',
    industry: 'Retail',
    title: 'Intelligent Commerce Concierge',
    problem: 'Shoppers face large catalogs, inconsistent product discovery, and limited pre-purchase guidance.',
    solution: 'An AI concierge that interprets customer needs, recommends relevant products, and supports purchase decisions.',
    technologies: ['Semantic Search', 'Recommendations', 'Product API', 'Analytics'],
    expectedOutcome: 'More relevant product discovery and less friction during high-intent shopping journeys.',
    workflow: ['Customer need', 'Catalog analysis', 'Recommendation', 'Purchase handoff'],
    icon: ShoppingBag,
  },
  {
    slug: 'hospitality-guest-operations',
    industry: 'Hospitality',
    title: 'AI Guest Operations Desk',
    problem: 'Guest requests span booking, amenities, policies, and service coordination across every hour of the day.',
    solution: 'A multilingual guest assistant that resolves common requests and coordinates operational tasks with staff.',
    technologies: ['Multilingual AI', 'Booking API', 'Task Routing', 'Messaging'],
    expectedOutcome: 'Quicker guest support and better-organized service requests across operating teams.',
    workflow: ['Guest message', 'Request classify', 'Resolve or route', 'Status update'],
    icon: Hotel,
  },
  {
    slug: 'real-estate-lead-qualification',
    industry: 'Real Estate',
    title: 'Property Lead Qualification Engine',
    problem: 'Agents spend significant time sorting inquiries with incomplete budgets, timelines, and property requirements.',
    solution: 'An intake and qualification system that enriches buyer intent, prioritizes fit, and synchronizes CRM records.',
    technologies: ['Lead Intelligence', 'Property Data', 'CRM Sync', 'Workflow Automation'],
    expectedOutcome: 'More structured inquiries and a clearer path for agents to prioritize follow-up.',
    workflow: ['Property inquiry', 'Needs capture', 'Fit scoring', 'Agent routing'],
    icon: House,
  },
  {
    slug: 'commercial-property-operations',
    industry: 'Real Estate',
    title: 'Property Operations Copilot',
    problem: 'Maintenance requests, tenant messages, vendor coordination, and property records live in separate tools.',
    solution: 'An operations copilot that classifies requests, retrieves property context, and triggers the right workflow.',
    technologies: ['AI Classification', 'Document Retrieval', 'Ticketing API', 'Notifications'],
    expectedOutcome: 'Cleaner operational handoffs and less manual coordination across property teams.',
    workflow: ['Tenant request', 'Context retrieval', 'Task creation', 'Resolution update'],
    icon: Building2,
  },
]
