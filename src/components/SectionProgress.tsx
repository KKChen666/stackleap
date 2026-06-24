import { useEffect, useMemo, useState } from 'react'
import type { NavItem } from '../content'

type SectionProgressProps = {
  items: NavItem[]
}

export default function SectionProgress({ items }: SectionProgressProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  const sectionItems = useMemo(() => items.filter((item) => item.id !== 'hero'), [items])

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.42
      let current = sectionItems[0]?.id ?? ''

      sectionItems.forEach((item) => {
        const section = document.getElementById(item.id)

        if (!section) {
          return
        }

        if (section.getBoundingClientRect().top <= viewportAnchor) {
          current = item.id
        }
      })

      setActiveId(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionItems])

  return (
    <aside
      className="group fixed right-5 top-1/2 z-[55] hidden -translate-y-1/2 items-center lg:flex"
      aria-label="Section progress"
    >
      <nav className="rounded-lg border border-transparent bg-canvas/0 px-2 py-3 transition-all duration-300 group-hover:border-border/70 group-hover:bg-canvas/80 group-hover:px-3 group-hover:shadow-sm group-hover:backdrop-blur-xl">
        <ul className="flex flex-col gap-5">
          {sectionItems.map((item) => {
            const active = item.id === activeId

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group flex max-w-36 items-center justify-end gap-2 text-right text-[11px] leading-tight transition-colors ${
                    active ? 'text-accent' : 'text-ink-3 hover:text-ink'
                  }`}
                  aria-current={active ? 'location' : undefined}
                >
                  <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-32 group-hover:opacity-100">
                    {item.label}
                  </span>
                  <span
                    className={`h-[2px] rounded-full transition-all ${
                      active ? 'w-6 bg-accent' : 'w-3 bg-ink/20 group-hover:w-5 group-hover:bg-ink/40'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
