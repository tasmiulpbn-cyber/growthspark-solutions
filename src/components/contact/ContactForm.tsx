import { Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

type FormStatus = 'idle' | 'ready'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const company = String(data.get('company') ?? '')
    const projectType = String(data.get('projectType') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`GrowthSpark project inquiry from ${name}`)
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      `Project type: ${projectType}`,
      '',
      message,
    ].join('\n'))

    setStatus('ready')
    window.location.href = `mailto:hello@growthspark.solutions?subject=${subject}&body=${body}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Work email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="form-field">
          <label htmlFor="contact-company">Company <span>Optional</span></label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Company name" />
        </div>
        <div className="form-field">
          <label htmlFor="contact-project">Project type</label>
          <select id="contact-project" name="projectType" defaultValue="" required>
            <option value="" disabled>Select a solution</option>
            <option>AI-powered website</option>
            <option>AI assistant or chatbot</option>
            <option>Workflow automation</option>
            <option>Custom AI solution</option>
            <option>AI strategy or pilot</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">What would you like to improve?</label>
        <textarea id="contact-message" name="message" rows={5} placeholder="Tell us about the workflow, challenge, or opportunity..." required />
      </div>

      <div className="contact-form__footer">
        <p>Submitting opens your email application with these details pre-filled.</p>
        <button className="btn btn-primary" type="submit">
          Start a conversation
          <Send size={16} aria-hidden="true" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">{status === 'ready' ? 'Your email application is opening with the project details.' : ''}</p>
    </form>
  )
}
