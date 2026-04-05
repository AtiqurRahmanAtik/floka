import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClientLogoGrid = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Immediate Reveal for Header (No duration/opacity)
      gsap.from(".logo-header-item", {
        y: 20,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        }
      });

      // Immediate Reveal for Grid (No duration/opacity)
      // Elements will simply snap into place from their X/Y offset
      gsap.from(".logo-box", {
        x: -20,
        y: 20,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".logo-container-grid",
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const clients = [
    { name: "Logoipsum", color: "bg-[#6366F1]" },
    { name: "LOGOIPSUM", color: "bg-[#10B981]" },
    { name: "Logoipsum", color: "bg-[#F59E0B]" },
    { name: "Logoipsum", color: "bg-[#3B82F6]" },
    { name: "logo ipsum", color: "bg-[#EC4899]" },
    { name: "Logoipsum", color: "bg-[#EF4444]" },
    { name: "Logoipsum", color: "bg-[#8B5CF6]" },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 md:px-16 lg:px-24 bg-[#F9F8F3] relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Metadata (T8 Style) --- */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
          <span className="logo-header-item text-[10px] font-black tracking-widest text-black uppercase">
            Happy Users
          </span>
          <span className="logo-header-item text-[10px] font-medium text-gray-400 italic">
            ©2026 FLOKA STUDIO
          </span>
        </div>

        {/* --- The Logo Grid --- */}
        <div className="logo-container-grid grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-100 rounded-tl-[40px] overflow-hidden">
          
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="logo-box group aspect-video border-r border-b border-gray-100 flex items-center justify-center p-8 bg-white/40 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:z-10"
            >
              <div className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-110">
                {/* Colorful Logo Icon */}
                <div className={`w-6 h-6 rounded-lg shadow-sm ${client.color} ring-4 ring-white/20`} />
                
                {/* Bold Black Brand Name */}
                <span className="text-xl font-bold tracking-tighter text-black">
                  {client.name}
                </span>
              </div>
            </div>
          ))}

          {/* --- "Next Can Be You" CTA Card --- */}
          <div className="logo-box aspect-video border-r border-b border-gray-100 flex flex-col items-center justify-center p-8 bg-white/20 text-center">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Next can be you.
            </p>
            <button className="text-xs font-black text-black border-b-2 border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all cursor-pointer">
              LET'S TALK
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientLogoGrid;