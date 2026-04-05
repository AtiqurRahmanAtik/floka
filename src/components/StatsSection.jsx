import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the main image and text from the left/right
      gsap.from(".reveal-up", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });

      // Stagger reveal for the small bento cards
      gsap.from(".bento-card", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-24 px-6 md:px-16 lg:px-24 bg-[#F9F8F3] relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- LEFT COLUMN: Main Image --- */}
        <div className="reveal-up relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000" 
            alt="Team lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- RIGHT COLUMN: Content & Bento --- */}
        <div className="flex flex-col">
          <div className="reveal-up mb-12">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Fun Facts</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tighter leading-[1.1] mb-8">
              Consistently delivering impactful results through a perfect blend of design and functionality.
            </h2>
          </div>

          {/* Bento Grid Logic from T7 */}
          <div className="bento-grid grid grid-cols-2 gap-4">
            
            {/* Card 1: 2k+ Completed */}
            <div className="bento-card col-span-2 bg-white rounded-3xl p-8 flex justify-between items-center shadow-sm">
              <span className="text-gray-400 font-medium text-sm">Successful projects <br/> completed</span>
              <span className="text-5xl font-bold tracking-tighter text-[#1A1A1A]">2k<span className="text-gray-200">+</span></span>
            </div>

            {/* Card 2: Dark Image/Description Card */}
            <div className="bento-card col-span-1 bg-[#121212] rounded-3xl p-6 flex flex-col justify-between min-h-[320px]">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-800">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=300" className="w-full h-full object-cover" alt="work" />
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mt-4">
                More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
              </p>
            </div>

            {/* Card 3: Rating & Hire Us */}
            <div className="bento-card col-span-1 flex flex-col gap-4">
              {/* Rating Sub-card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex-grow">
                <div className="flex text-orange-400 gap-0.5 mb-2 text-[10px]">★★★★★</div>
                <h4 className="text-5xl font-bold tracking-tighter mb-2">4.9/5</h4>
                <p className="text-[10px] text-gray-400 font-medium leading-tight">We offer end-to-end creative solutions that make brands unforgettable.</p>
                <button className="mt-6 flex items-center gap-2 text-[10px] font-bold text-[#1A1A1A] group">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">+</span>
                  HIRE US NOW
                </button>
              </div>

              {/* Worldwide Sub-card */}
              <div className="relative h-24 rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500" className="absolute inset-0 w-full h-full object-cover" alt="office" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                  <span className="text-[10px] text-white font-bold leading-tight w-20">Worldwide base around the world</span>
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;