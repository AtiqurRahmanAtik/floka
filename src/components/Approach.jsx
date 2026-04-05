import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Approach = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP reveal animation for the heading
    gsap.fromTo(
      textRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.8 }
    );
  }, []);

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* Left: Rotating Badge & Description */}
        <div className="md:col-span-4 space-y-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* SVG Circular Text */}
            <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
              />
              <text className="text-[7px] uppercase tracking-[0.2em] fill-gray-400 font-medium">
                <textPath xlinkHref="#circlePath">
                  Luxury • Playful • Luxurious • Or More • Want It • To Sound •
                </textPath>
              </text>
            </svg>
            
            {/* Center "F" Logo */}
            <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm z-10">
              <svg width="20" height="20" viewBox="0 0 15 15" fill="none">
                <path d="M3 2h9v2.5H5.8v2.3h5.5v2.4H5.8V13H3V2Z" fill="white" />
              </svg>
            </div>
          </div>
          
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[220px] font-dm-sans">
            We design every project with long-term success in mind.
          </p>
        </div>

        {/* Right: Main Headline */}
        <div className="md:col-span-8">
          <h2 
            ref={textRef}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] text-[#1A1A1A] font-dm-sans tracking-tight"
          >
            Our approach is straightforward—prioritizing functionality, speed, and clarity for solutions.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Approach;