import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const marquee = 'STACKLEAP · 技术驱动创新 · STACKLEAP · 技术驱动创新 · STACKLEAP · 技术驱动创新 · '

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-marquee', { opacity: 0, duration: 1.5 }, 0)
      .from('.hero-deco', { opacity: 0, scale: 0.95, duration: 1.8, ease: 'power2.out' }, 0.2)
      .from('.hero-tag', { opacity: 0, y: 12, duration: 0.8 }, 0.6)
      .from('.hero-line', { opacity: 0, y: 20, duration: 0.9 }, 0.8)
      .from('.hero-sub', { opacity: 0, y: 15, duration: 0.8 }, 1.1)
      .from('.hero-cta', { opacity: 0, duration: 0.8 }, 1.4)

    gsap.to(pinRef.current, {
      y: -80,
      opacity: 0,
      scale: 0.97,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top',
        end: '+=40%',
        scrub: 1.5,
      },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div ref={pinRef} className="sticky top-0 h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="hero-deco absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none select-none">
          <span className="font-display text-[28vw] leading-none text-ink/[0.03] italic">
            S
          </span>
        </div>

        {/* Marquee */}
        <div className="hero-marquee absolute top-20 left-0 right-0 overflow-hidden whitespace-nowrap opacity-[0.06]">
          <div className="animate-[marquee_40s_linear_infinite] text-[10px] font-mono tracking-[0.3em] text-ink">
            {marquee}{marquee}{marquee}
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <p className="hero-tag text-[11px] font-mono text-ink-3 tracking-[0.15em] uppercase mb-6">
            技术团队 · Est. 2023
          </p>

          <h1 className="hero-line font-display text-hero font-normal text-ink mb-6 max-w-5xl">
            构建未来
            <br />
            <span className="text-ink-3">创造价值</span>
          </h1>

          <p className="hero-sub text-ink-2 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            以技术为核心驱动力，在 Web、AI、云原生领域持续创造有价值的产品。
          </p>

          <div className="hero-cta flex items-center gap-8">
            <a
              href="#作品"
              className="group text-sm font-medium text-ink inline-flex items-center gap-2 border-b border-ink pb-0.5 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              查看作品
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#联系" className="text-sm text-ink-3 hover:text-ink-2 transition-colors duration-300">
              联系我们
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  )
}
