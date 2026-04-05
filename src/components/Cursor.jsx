import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const moveDot = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 })
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      gsap.set(ring, { x: ringX, y: ringY })
      requestAnimationFrame(animateRing)
    }

    const handleEnter = () => gsap.to(ring, { scale: 2, borderColor: 'rgba(200,240,78,0.6)', duration: 0.3 })
    const handleLeave = () => gsap.to(ring, { scale: 1, borderColor: 'rgba(200,240,78,0.3)', duration: 0.3 })

    window.addEventListener('mousemove', moveDot)
    document.querySelectorAll('a, button, [class*="cursor-pointer"]').forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    const raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', moveDot)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1 -translate-y-1 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -translate-x-4 -translate-y-4 rounded-full border border-accent/30 pointer-events-none z-[9998] hidden lg:block"
      />
    </>
  )
}
