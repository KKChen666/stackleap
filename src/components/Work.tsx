import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project, SiteContent } from '../content'

type WorkProps = {
  copy: SiteContent['work']
}

export default function Work({ copy }: WorkProps) {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useGSAP(() => {
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 76%',
        toggleActions: 'restart none none reset',
        invalidateOnRefresh: true,
      },
    })

    sectionTl
      .from('.work-heading', { y: 24, autoAlpha: 0, duration: 0.5, ease: 'power3.out', immediateRender: false })
      .from('.work-line', { scaleX: 0, duration: 0.45, ease: 'power3.inOut', immediateRender: false }, 0.12)
      .fromTo('.work-carousel', {
        autoAlpha: 0,
        x: 48,
      }, {
        autoAlpha: 1,
        x: 0,
        duration: 0.65,
        ease: 'power3.out',
      }, 0.28)

    ScrollTrigger.refresh()
  }, { scope: ref })

  useEffect(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (shouldReduceMotion) {
      return
    }

    const distance = track.scrollWidth / 2
    const tween = gsap.fromTo(track, {
      x: 0,
    }, {
      x: -distance,
      duration: 28,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((value) => Number.parseFloat(value) % distance),
      },
    })

    const pause = () => tween.pause()
    const resume = () => {
      if (!selectedProject) {
        tween.resume()
      }
    }

    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    if (selectedProject) {
      tween.pause()
    }

    return () => {
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
      tween.kill()
    }
  }, [copy.projects.length, selectedProject])

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedProject])

  const carouselProjects = [...copy.projects, ...copy.projects]

  return (
    <section id="work" ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-surface/85">
      <div className="max-w-[1400px] mx-auto">
        <div className="work-heading mb-10 md:mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] font-mono text-ink-3 tracking-wider">{copy.label}</span>
            <div className="h-px flex-1 bg-border max-w-12" />
          </div>
          <h2 className="font-display text-section font-normal text-ink">
            {copy.title}
          </h2>
          <div className="work-line h-px bg-border mt-6 origin-left" />
        </div>

        <div
          className="work-carousel overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex w-max gap-6 will-change-transform"
          >
            {carouselProjects.map((p, index) => {
              const projectIndex = index % copy.projects.length

              return (
                <button
                  key={`${p.name}-${index}`}
                  type="button"
                  className="work-card group flex min-h-[340px] w-[calc((100vw-96px)/1)] max-w-[420px] flex-col justify-between rounded-lg border border-border/60 bg-canvas p-8 text-left transition-colors duration-500 hover:border-ink-3/40 md:w-[calc((100vw-144px)/3)] xl:w-[calc((1400px-48px)/3)]"
                  onClick={() => setSelectedProject(p)}
                  aria-label={p.name}
                >
                  <div>
                    <span className="text-[10px] font-mono text-ink-3 mb-4 block">{p.year}</span>
                    <h3 className="font-display text-2xl md:text-3xl text-ink mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
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
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-4">
                    <span className="inline-flex text-xs font-medium text-ink border-b border-ink pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                      {copy.openProject}
                    </span>
                    <span className="text-[10px] font-mono text-ink-3">
                      {String(projectIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[80] bg-ink/25 backdrop-blur-sm px-4 py-6 md:p-10 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null)
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-border bg-canvas shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-canvas/95 px-6 py-4 backdrop-blur md:px-8">
              <span className="text-[10px] font-mono text-ink-3">{selectedProject.year}</span>
              <button
                type="button"
                className="h-9 w-9 rounded-full border border-border text-lg leading-none text-ink-3 transition-colors hover:border-ink hover:text-ink"
                aria-label={copy.closeProject}
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 gap-10 p-6 md:grid-cols-12 md:p-8">
              <div className="md:col-span-5">
                <h3 id="project-dialog-title" className="font-display text-3xl md:text-4xl leading-tight text-ink mb-5">
                  {selectedProject.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink-2 mb-6">{selectedProject.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono text-ink-3 border border-border rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ink-3 block mb-2">{copy.sections.role}</span>
                  <p className="text-sm text-ink-2 leading-relaxed">{selectedProject.role}</p>
                </div>
              </div>

              <div className="md:col-span-7 space-y-7">
                <ProjectDetail title={copy.sections.challenge} text={selectedProject.challenge} />
                <ProjectDetail title={copy.sections.solution} text={selectedProject.solution} />
                <ProjectDetail title={copy.sections.outcome} text={selectedProject.outcome} />
                <div>
                  <span className="text-[10px] font-mono text-ink-3 block mb-3">{copy.sections.metrics}</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric) => (
                      <div key={metric} className="rounded border border-border bg-surface px-4 py-3 text-xs font-mono text-ink-2">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectDetail({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <span className="text-[10px] font-mono text-ink-3 block mb-2">{title}</span>
      <p className="text-sm leading-relaxed text-ink-2">{text}</p>
    </div>
  )
}
