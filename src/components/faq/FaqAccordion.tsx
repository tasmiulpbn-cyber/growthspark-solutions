import { useState } from 'react'
import { FaqItem } from './FaqItem'
import { faqs } from './faqData'

export function FaqAccordion() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <FaqItem
          faq={faq}
          index={index}
          isOpen={openFaqId === faq.id}
          onToggle={() => setOpenFaqId((currentId) => currentId === faq.id ? null : faq.id)}
          key={faq.id}
        />
      ))}
    </div>
  )
}
