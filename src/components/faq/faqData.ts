export type Faq = {
  id: string
  category: string
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    id: 'ai-suitability',
    category: 'AI suitability',
    question: 'How do I know whether AI is right for my business?',
    answer: 'AI is most useful when a workflow involves repeated decisions, high volumes of information, manual handoffs, or frequent customer questions. We begin with discovery to identify where AI can create practical value—and where a simpler solution would be more appropriate.',
  },
  {
    id: 'integrations',
    category: 'Integrations',
    question: 'Can your AI systems connect with our existing tools?',
    answer: 'Yes. We design around your current operating environment and can connect websites, CRM platforms, forms, calendars, email, messaging tools, knowledge bases, and internal systems when suitable APIs or secure integration methods are available.',
  },
  {
    id: 'timeline',
    category: 'Timeline',
    question: 'How long does an AI project usually take?',
    answer: 'Timelines depend on scope, integrations, data readiness, and security requirements. A focused prototype may take a few weeks, while a production system with multiple workflows and integrations requires a longer phased delivery plan. You receive a clear roadmap before development begins.',
  },
  {
    id: 'security',
    category: 'Security',
    question: 'How do you approach privacy, security, and responsible AI?',
    answer: 'Security is considered throughout architecture and delivery. We minimize unnecessary data exposure, use appropriate access controls, define retention boundaries, validate integrations, and design human oversight for sensitive actions. Specific compliance requirements are evaluated during discovery.',
  },
  {
    id: 'support',
    category: 'Post-launch support',
    question: 'What happens after the system launches?',
    answer: 'We can continue monitoring performance, resolving issues, refining prompts and workflows, improving knowledge sources, and expanding integrations. Support is structured around the operational needs and growth plans of each system.',
  },
  {
    id: 'pilots',
    category: 'Pilot projects',
    question: 'Can we start with a smaller pilot before a full implementation?',
    answer: 'Absolutely. A focused pilot is often the best way to validate user experience, technical feasibility, and workflow value before expanding. We define a narrow use case, success criteria, safeguards, and a clear path to production if the pilot proves worthwhile.',
  },
]
