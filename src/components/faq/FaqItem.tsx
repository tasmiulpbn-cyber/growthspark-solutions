import { ChevronDown } from 'lucide-react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import type { Faq } from './faqData'

type FaqItemProps = {
  faq: Faq
  index: number
  isOpen: boolean
  onToggle: () => void
}

export function FaqItem({ faq, index, isOpen, onToggle }: FaqItemProps) {
  const reduceMotion = useReducedMotion()
  const triggerId = `faq-trigger-${faq.id}`
  const panelId = `faq-panel-${faq.id}`

  return (
    <article className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq-item__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <span className="faq-item__title">
            <small>{faq.category}</small>
            <strong>{faq.question}</strong>
          </span>
          <m.span
            className="faq-item__chevron"
            aria-hidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}
          >
            <ChevronDown size={18} />
          </m.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            className="faq-item__panel"
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { display: 'none' } : { height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { height: { duration: 0.32 }, opacity: { duration: 0.22, delay: 0.05 } }}
          >
            <div><p>{faq.answer}</p></div>
          </m.div>
        )}
      </AnimatePresence>
    </article>
  )
}
