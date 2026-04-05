import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LetsTalk() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big text slide-up
      gsap.fromTo(textRef.current.querySelectorAll('.cta-word'),
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.06, duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )

      // Parallax BG
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const words = ['next', 'can', 'be', 'you.']

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden bg-dark-3">
      {/* Parallax BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(200,240,78,0.4) 0%, transparent 70%)`,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(200,240,78,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,240,78,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <p className="text-muted text-sm tracking-[0.3em] uppercase mb-6">next can be you.</p>

        <div ref={textRef} className="overflow-hidden mb-10">
          <h2 className="text-6xl lg:text-[10vw] font-serif font-bold leading-[0.9] tracking-tighter">
            {['let\'s', 'talk'].map((word, i) => (
              <span key={i} className="cta-word inline-block mr-6">
                {i === 1
                  ? <span className="italic text-accent">{word}</span>
                  : word
                }
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 bg-accent text-dark font-semibold rounded-full hover:bg-accent-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,240,78,0.4)] text-sm"
          >
            Start a Project
            <span className="w-6 h-6 rounded-full bg-dark flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-white/10 text-sm text-muted rounded-full hover:border-white/30 hover:text-light transition-all duration-300"
          >
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path d="M2 1.5l7 4.5-7 4.5V1.5z" fill="currentColor"/>
              </svg>
            </span>
            Play Reel
          </a>
        </div>
      </div>
    </section>
  )
}
