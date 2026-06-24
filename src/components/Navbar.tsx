import { useState, useEffect } from 'react'
import type { Locale, NavItem } from '../content'

type NavbarProps = {
  locale: Locale
  navItems: NavItem[]
  onToggleLocale: () => void
}

export default function Navbar({ locale, navItems, onToggleLocale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-canvas/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl text-ink tracking-tight">
          StackLeap
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[13px] text-ink-3 hover:text-ink transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="h-8 border-l border-border pl-6 text-[11px] font-mono uppercase tracking-wider text-ink-3 transition-colors hover:text-ink"
            onClick={onToggleLocale}
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            className="h-9 px-2 text-[11px] font-mono uppercase tracking-wider text-ink-3"
            onClick={onToggleLocale}
          >
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center text-ink"
            aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                open ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                open ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden border-t border-border/50 bg-canvas/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="py-3 text-sm text-ink-2 transition-colors hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
