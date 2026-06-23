import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })
  })

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-ink/20 via-accent/60 to-ink/20 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
