import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

        <div className="hidden md:flex items-center gap-10">
          {['关于', '作品', '能力', '联系'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[13px] text-ink-3 hover:text-ink transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
