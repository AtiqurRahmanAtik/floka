import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StatsGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      });
      
      gsap.from(".progress-fill", {
        width: "0%",
        duration: 1.5,
        delay: 0.8,
        ease: "power2.out",
        stagger: 0.1
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    /* Change: Added bg-[#F9F8F3] and z-20 
       This creates a solid "floor" that blocks the video sitting at z-negative 
    */
    <section 
      ref={gridRef} 
      className="relative z-20 py-20 px-6 md:px-16 lg:px-24 bg-[#F9F8F3]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
        
        {/* Card 1: Years Experience */}
        <div className="stat-card md:col-span-1 bg-white rounded-[40px] p-10 flex flex-col justify-between min-h-[450px] shadow-sm">
          <div>
            <h2 className="text-[100px] font-bold tracking-tighter leading-none text-[#1A1A1A]">
              25<span className="text-gray-200">+</span>
            </h2>
            <p className="text-gray-400 font-medium mt-2">Years of experience</p>
            <hr className="my-8 border-gray-100" />
            <p className="text-[#1A1A1A] text-lg leading-snug font-medium">
              Explore how we transform ideas into extraordinary digital experiences.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-[#1A1A1A]">1200+ happy users review</p>
          </div>
        </div>

        {/* Card 2: Main Feature (CEO Quote) */}
        <div className="stat-card md:col-span-2 relative bg-black rounded-[40px] overflow-hidden min-h-[450px] group shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" 
            alt="CEO" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-white text-2xl md:text-3xl font-medium leading-tight mb-8">
              “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
            </p>
            <p className="text-white text-sm">
              <span className="font-bold">Merizo H. Yelso</span> <span className="text-white/40 ml-1">/ CEO</span>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN (Stacked Socials & Impressions) */}
        <div className="flex flex-col gap-6 md:col-span-1">
          <div className="stat-card bg-white rounded-[40px] p-8 flex flex-col h-fit shadow-sm">
            <p className="text-gray-400 text-sm font-medium mb-4">Follow us</p>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 leading-tight">For check updates</h3>
            <div className="flex flex-wrap gap-2">
              {['DRIBBBLE', 'BEHANCE', 'LINKEDIN'].map((tag) => (
                <button key={tag} className="px-4 py-2 rounded-full border border-gray-100 text-[10px] font-bold text-[#1A1A1A] hover:bg-black hover:text-white transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="stat-card bg-white rounded-[40px] p-8 flex flex-col h-fit shadow-sm">
            <p className="text-gray-400 text-sm font-medium mb-6">Impressions</p>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-[#1A1A1A]">
                  <span>UI/UX</span>
                  <span>90%</span>
                </div>
                <div className="h-12 bg-black rounded-2xl overflow-hidden p-1">
                  <div className="progress-fill h-full bg-[#333] border border-white/10 rounded-xl" style={{ width: '90%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;