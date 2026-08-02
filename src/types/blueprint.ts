import type { LucideIcon } from 'lucide-react'

export type BlueprintAccent = 'violet' | 'cyan' | 'emerald' | 'indigo'

export type WorkflowStep = {
  label: string
}

export type Blueprint = {
  slug: string
  title: string
  category: string
  problem: string
  solution: string
  workflow: WorkflowStep[]
  integrations: string[]
  impactLabel: string
  impact: string
  icon: LucideIcon
  accent: BlueprintAccent
}
