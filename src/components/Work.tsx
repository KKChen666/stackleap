import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const projects = [
  {
    name: 'AI 智能分析仪表盘',
    desc: '基于机器学习的实时数据可视化平台，支持多维度分析与智能预警。',
    tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
    year: '2024',
  },
  {
    name: 'CloudDeploy 云原生平台',
    desc: '一键部署容器化应用到多云环境，支持 Kubernetes 编排与自动扩缩容。',
    tags: ['Vue 3', 'Go', 'Docker', 'K8s'],
    year: '2024',
  },
  {
    name: 'ShopFlow 智能电商平台',
    desc: '全栈电商解决方案，集成推荐算法、实时库存管理与多支付渠道。',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    year: '2024',
  },
]

export default function Work() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    })

    sectionTl
      .from('.work-heading', { y: 60, opacity: 0, duration: 1 })
      .from('.work-line', { scaleX: 0, duration: 0.8, ease: 'power3.inOut' }, 0.3)

    gsap.from('.work-card', {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.work-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.work-card', {
      y: -20,
      stagger: 0.15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.work-grid',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    })
  }, { scope: ref })

  return (
    <section id="作品" ref={ref} className="py-32 md:py-48 px-6 md:px-12 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="work-heading mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] font-mono text-ink-3 tracking-wider">作品</span>
            <div className="h-px flex-1 bg-border max-w-12" />
          </div>
          <h2 className="font-display text-section font-normal text-ink">
            精选项目
          </h2>
          <div className="work-line h-px bg-border mt-6 origin-left" />
        </div>

        <div className="work-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="work-card group p-8 rounded-lg border border-border/60 bg-canvas hover:border-ink-3/40 transition-all duration-500 cursor-pointer"
            >
              <span className="text-[10px] font-mono text-ink-3 mb-4 block">{p.year}</span>
              <h3 className="font-display text-xl md:text-2xl text-ink mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                {p.name}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-ink-3 border border-border rounded">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
