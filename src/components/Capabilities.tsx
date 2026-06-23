import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const items = [
  { label: '前端', techs: 'React · Vue · Next.js · TypeScript' },
  { label: '后端', techs: 'Node.js · Go · Python · FastAPI' },
  { label: '云原生', techs: 'Docker · Kubernetes · Terraform' },
  { label: '人工智能', techs: 'TensorFlow · PyTorch · LLM' },
]

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.cap-heading', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.cap-line', {
      scaleX: 0,
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.cap-line',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.cap-item', {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cap-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: ref })

  return (
    <section id="能力" ref={ref} className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="cap-heading mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] font-mono text-ink-3 tracking-wider">能力</span>
            <div className="h-px flex-1 bg-border max-w-12" />
          </div>
          <h2 className="font-display text-section font-normal text-ink max-w-2xl">
            技术能力
          </h2>
          <div className="cap-line h-px bg-border mt-6 origin-left" />
        </div>

        <div className="cap-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {items.map((item) => (
            <div
              key={item.label}
              className="cap-item bg-canvas p-8 md:p-10 hover:bg-surface transition-colors duration-500 group"
            >
              <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 group-hover:text-accent transition-colors duration-300">{item.label}</h3>
              <p className="text-sm text-ink-3 font-mono">{item.techs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
