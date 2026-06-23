import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function About() {
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
        toggleActions: 'play none none none',
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
        toggleActions: 'play none none none',
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
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.about-line', {
      scaleX: 0,
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.about-line',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: ref })

  return (
    <section id="关于" ref={ref} className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="about-label flex items-center gap-4 mb-4">
              <span className="text-[11px] font-mono text-ink-3 tracking-wider">关于</span>
              <div className="h-px flex-1 bg-border max-w-12" />
            </div>
            <h2 className="about-title font-display text-section font-normal text-ink">
              关于我们
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="about-text text-ink-2 text-base md:text-lg leading-[1.8] mb-8">
              StackLeap 是一支专注于全栈技术的团队。我们相信好的技术应该像空气一样——
              你感受不到它的存在，但它支撑着一切。
            </p>
            <div className="about-line h-px bg-border my-8 origin-left" />
            <p className="about-text text-ink-2 text-base md:text-lg leading-[1.8] mb-8">
              从 Web 应用到人工智能，从云原生架构到物联网平台，
              我们在多个领域积累了深厚的工程经验。每一个项目，我们都追求优雅的解决方案和卓越的用户体验。
            </p>
            <p className="about-text text-ink-3 text-sm leading-relaxed">
              我们不追逐热点，只解决真正的问题。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
