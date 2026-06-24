import { useState } from 'react'
import Navbar from './components/Navbar'
import SectionProgress from './components/SectionProgress'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { content, type Locale } from './content'

export default function App() {
  const [locale, setLocale] = useState<Locale>('zh')
  const copy = content[locale]
  const nextLocale: Locale = locale === 'zh' ? 'en' : 'zh'

  return (
    <div className="relative min-h-screen bg-canvas text-ink font-body">
      <div className="fixed inset-0 z-[1] pointer-events-none select-none overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] whitespace-nowrap font-display text-[18vw] leading-none text-ink/[0.035] italic">
          StackLeap
        </span>
      </div>
      <div className="relative z-[2]">
      <ScrollProgress />
      <SectionProgress items={copy.nav} />
      <Navbar
        locale={locale}
        navItems={copy.nav}
        onToggleLocale={() => setLocale(nextLocale)}
      />
      <Hero copy={copy.hero} />
      <About copy={copy.about} />
      <Work copy={copy.work} />
      <Capabilities copy={copy.capabilities} />
      <Contact copy={copy.contact} />
      <Footer />
      </div>
    </div>
  )
}
