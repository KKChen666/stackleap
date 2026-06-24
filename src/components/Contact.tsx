import { type FormEvent, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import type { SiteContent } from '../content'

type ContactProps = {
  copy: SiteContent['contact']
}

type FormValues = {
  name: string
  email: string
  projectType: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

export default function Contact({ copy }: ContactProps) {
  const ref = useRef<HTMLElement>(null)
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 75%',
        toggleActions: 'play none none reset',
      },
    })

    tl.from('.contact-label', { x: -20, opacity: 0, duration: 0.6 }, 0)
      .from('.contact-title', { y: 40, opacity: 0, duration: 1 }, 0.15)
      .from('.contact-desc', { y: 20, opacity: 0, duration: 0.8 }, 0.4)
      .from('.contact-email', { y: 15, opacity: 0, duration: 0.6 }, 0.6)
      .from('.contact-links', { y: 15, opacity: 0, duration: 0.6 }, 0.7)
      .from('.contact-form', { y: 20, opacity: 0, duration: 0.7 }, 0.8)
  }, { scope: ref })

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = copy.form.required
    }

    if (!values.email.trim()) {
      nextErrors.email = copy.form.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = copy.form.emailError
    }

    if (!values.projectType) {
      nextErrors.projectType = copy.form.required
    }

    if (!values.message.trim()) {
      nextErrors.message = copy.form.required
    }

    return nextErrors
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setValues(initialValues)
  }

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitted(false)
  }

  return (
    <section id="contact" ref={ref} className="py-32 md:py-48 px-6 md:px-12 bg-surface/85">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="contact-label flex items-center gap-4 mb-4">
              <span className="text-[11px] font-mono text-ink-3 tracking-wider">{copy.label}</span>
              <div className="h-px flex-1 bg-border max-w-12" />
            </div>
            <h2 className="contact-title font-display text-section font-normal text-ink mb-6">
              {copy.title}
              <br />
              <span className="italic text-ink-3">{copy.mutedTitle}</span>
            </h2>
            <p className="contact-desc text-ink-2 text-base max-w-md leading-relaxed mb-10">
              {copy.desc}
            </p>
            <a
              href={`mailto:${copy.email}`}
              className="contact-email group inline-flex items-center gap-3 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              {copy.email}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <form className="contact-form grid grid-cols-1 gap-5" onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  label={copy.form.name}
                  error={errors.name}
                  value={values.name}
                  onChange={(value) => updateValue('name', value)}
                />
                <Field
                  label={copy.form.email}
                  error={errors.email}
                  type="email"
                  value={values.email}
                  onChange={(value) => updateValue('email', value)}
                />
              </div>

              <label className="block">
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-3 block mb-2">{copy.form.projectType}</span>
                <select
                  className="h-12 w-full rounded border border-border bg-canvas px-4 text-sm text-ink outline-none transition-colors focus:border-ink"
                  value={values.projectType}
                  onChange={(event) => updateValue('projectType', event.target.value)}
                  aria-invalid={Boolean(errors.projectType)}
                >
                  <option value="">{copy.form.projectType}</option>
                  {copy.form.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.projectType && <span className="mt-2 block text-xs text-accent">{errors.projectType}</span>}
              </label>

              <label className="block">
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-3 block mb-2">{copy.form.message}</span>
                <textarea
                  className="min-h-36 w-full resize-y rounded border border-border bg-canvas px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors focus:border-ink"
                  value={values.message}
                  onChange={(event) => updateValue('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="mt-2 block text-xs text-accent">{errors.message}</span>}
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="h-11 rounded border border-ink bg-ink px-5 text-sm font-medium text-canvas transition-colors hover:bg-accent hover:border-accent"
                >
                  {copy.form.submit}
                </button>
                {submitted && <p className="text-sm text-ink-2">{copy.form.success}</p>}
              </div>
            </form>
          </div>

          <div className="contact-links lg:col-span-12 flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <span className="text-[10px] font-mono text-ink-3 block mb-2">GitHub</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-2 hover:text-ink transition-colors">
                github.com/stackleap
              </a>
            </div>
            <div>
              <span className="text-[10px] font-mono text-ink-3 block mb-2">LinkedIn</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-2 hover:text-ink transition-colors">
                linkedin.com/company/stackleap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  value,
  onChange,
  type = 'text',
}: {
  label: string
  error?: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'email'
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-3 block mb-2">{label}</span>
      <input
        className="h-12 w-full rounded border border-border bg-canvas px-4 text-sm text-ink outline-none transition-colors focus:border-ink"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
      />
      {error && <span className="mt-2 block text-xs text-accent">{error}</span>}
    </label>
  )
}
