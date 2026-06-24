import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import type { SiteContent } from '../content'

type AboutProps = {
  copy: SiteContent['about']
}

export default function About({ copy }: AboutProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.about-label', {
      x: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 75%',
        toggleActions: 'play none none reset',
      },
    })

    gsap.from('.about-title', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 70%',
        toggleActions: 'play none none reset',
      },
    })

    gsap.from('.about-text', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
    })

    gsap.from('.about-line', {
      scaleX: 0,
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.about-line',
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
    })
  }, { scope: ref })

  return (
    <section id="about" ref={ref} className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="about-label flex items-center gap-4 mb-4">
              <span className="text-[11px] font-mono text-ink-3 tracking-wider">{copy.label}</span>
              <div className="h-px flex-1 bg-border max-w-12" />
            </div>
            <h2 className="about-title font-display text-section font-normal text-ink">
              {copy.title}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="about-text text-ink-2 text-base md:text-lg leading-[1.8] mb-8">{copy.paragraphs[0]}</p>
            <div className="about-line h-px bg-border my-8 origin-left" />
            <p className="about-text text-ink-2 text-base md:text-lg leading-[1.8] mb-8">{copy.paragraphs[1]}</p>
            <p className="about-text text-ink-3 text-sm leading-relaxed">
              {copy.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
