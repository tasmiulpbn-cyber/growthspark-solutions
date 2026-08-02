import { LazyMotion, domAnimation } from 'framer-motion'
import { SectionHeading } from '../components/common'
import { ClientReceivesGrid, ProcessCta, ProcessMetrics, ProcessTimeline, ProcessWorkflow } from '../components/process'
import '../components/process/process.css'

export function AiDeliveryProcessSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="delivery-process" aria-labelledby="delivery-process-title">
        <div className="delivery-process__grid" aria-hidden="true" />
        <div className="delivery-process__aurora" aria-hidden="true" />

        <div className="container-content delivery-process__inner">
          <SectionHeading
            eyebrow="AI delivery process"
            headingId="delivery-process-title"
            title={<>A clear path from business challenge to <span className="text-gradient-brand">operational AI</span></>}
            description="A focused, collaborative process that turns the right opportunities into reliable AI systems—without losing sight of users, operations, or measurable business value."
          />

          <div className="delivery-process__core">
            <ProcessTimeline />
            <ProcessWorkflow />
          </div>

          <ProcessMetrics />
          <ClientReceivesGrid />
          <ProcessCta />
        </div>
      </section>
    </LazyMotion>
  )
}
