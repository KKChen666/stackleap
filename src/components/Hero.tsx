import { type MouseEvent, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import type { SiteContent } from '../content'

type HeroProps = {
  copy: SiteContent['hero']
}

type QuickSetter = (value: number) => void

type HeroMotion = {
  rotateX: QuickSetter
  rotateY: QuickSetter
  layers: Array<{
    depth: number
    x: QuickSetter
    y: QuickSetter
  }>
}

export default function Hero({ copy }: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const motionRef = useRef<HeroMotion | null>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-marquee', { opacity: 0, duration: 1.5 }, 0)
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

    const stage = copyRef.current
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!stage || shouldReduceMotion) {
      return
    }

    gsap.set(stage, {
      transformPerspective: 1200,
      transformStyle: 'preserve-3d',
      transformOrigin: '50% 55%',
    })

    const rotateX = gsap.quickTo(stage, 'rotationX', { duration: 0.65, ease: 'power3.out' })
    const rotateY = gsap.quickTo(stage, 'rotationY', { duration: 0.65, ease: 'power3.out' })
    const layers = gsap.utils.toArray<HTMLElement>('.hero-copy-depth', stage).map((layer) => ({
      layer,
      depth: Number(layer.dataset.depth ?? 1),
      x: gsap.quickTo(layer, 'x', { duration: 0.65, ease: 'power3.out' }),
      y: gsap.quickTo(layer, 'y', { duration: 0.65, ease: 'power3.out' }),
    }))

    motionRef.current = { rotateX, rotateY, layers }

    return () => {
      motionRef.current = null
    }
  }, { scope: ref })

  const onCopyMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const stage = copyRef.current
    const motion = motionRef.current

    if (!stage || !motion) {
      return
    }

    const rect = stage.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    motion.rotateX(y * -7)
    motion.rotateY(x * 9)
    motion.layers.forEach((item) => {
      item.x(x * item.depth)
      item.y(y * item.depth)
    })
  }

  const onCopyMouseLeave = () => {
    const motion = motionRef.current

    if (!motion) {
      return
    }

    motion.rotateX(0)
    motion.rotateY(0)
    motion.layers.forEach((item) => {
      item.x(0)
      item.y(0)
    })
  }

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div ref={pinRef} className="sticky top-0 h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
        {/* Marquee */}
        <div className="hero-marquee absolute top-20 left-0 right-0 overflow-hidden whitespace-nowrap opacity-[0.06]">
          <div className="animate-[marquee_40s_linear_infinite] text-[10px] font-mono tracking-[0.3em] text-ink">
            {copy.marquee}{copy.marquee}{copy.marquee}
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div
            ref={copyRef}
            className="hero-copy max-w-5xl cursor-default"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={onCopyMouseMove}
            onMouseLeave={onCopyMouseLeave}
          >
              <p
                className="hero-tag hero-copy-depth text-[11px] font-mono text-ink-3 tracking-[0.15em] uppercase mb-6"
                data-depth="8"
                style={{ transform: 'translateZ(24px)' }}
              >
                {copy.tag}
              </p>

              <h1
                className="hero-line hero-copy-depth font-display text-hero font-normal text-ink mb-6 max-w-5xl"
                data-depth="18"
                style={{ transform: 'translateZ(56px)' }}
              >
                {copy.title}
                <br />
                <span className="text-ink-3">{copy.mutedTitle}</span>
              </h1>

              <p
                className="hero-sub hero-copy-depth text-ink-2 text-base md:text-lg max-w-md mb-10 leading-relaxed"
                data-depth="12"
                style={{ transform: 'translateZ(36px)' }}
              >
                {copy.desc}
              </p>

              <div
                className="hero-cta hero-copy-depth flex items-center gap-8"
                data-depth="16"
                style={{ transform: 'translateZ(48px)' }}
              >
                <a
                  href="#work"
                  className="group text-sm font-medium text-ink inline-flex items-center gap-2 border-b border-ink pb-0.5 hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  {copy.primaryCta}
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#contact" className="text-sm text-ink-3 hover:text-ink-2 transition-colors duration-300">
                  {copy.secondaryCta}
                </a>
              </div>
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
