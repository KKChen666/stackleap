import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    tl.from('.contact-label', { x: -20, opacity: 0, duration: 0.6 }, 0)
      .from('.contact-title', { y: 40, opacity: 0, duration: 1 }, 0.15)
      .from('.contact-desc', { y: 20, opacity: 0, duration: 0.8 }, 0.4)
      .from('.contact-email', { y: 15, opacity: 0, duration: 0.6 }, 0.6)
      .from('.contact-links', { y: 15, opacity: 0, duration: 0.6 }, 0.7)
  }, { scope: ref })

  return (
    <section id="联系" ref={ref} className="py-32 md:py-48 px-6 md:px-12 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="contact-label flex items-center gap-4 mb-4">
              <span className="text-[11px] font-mono text-ink-3 tracking-wider">联系</span>
              <div className="h-px flex-1 bg-border max-w-12" />
            </div>
            <h2 className="contact-title font-display text-section font-normal text-ink mb-6">
              一起做点
              <br />
              <span className="italic text-ink-3">有意思的事</span>
            </h2>
            <p className="contact-desc text-ink-2 text-base max-w-md leading-relaxed mb-10">
              如果你有想法、有项目、或者只是想聊聊技术，欢迎联系我们。
            </p>
            <a
              href="mailto:hello@stackleap.dev"
              className="contact-email group inline-flex items-center gap-3 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              hello@stackleap.dev
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="contact-links lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-6">
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
