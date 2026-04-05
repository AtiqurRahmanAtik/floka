import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".hero-title", { opacity: 0, x: -50, duration: 1, ease: "power3.out" })
      .from(".hero-card", { opacity: 0, scale: 0.8, duration: 0.8 }, "-=0.5");
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-slate-900 flex items-center px-10">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80" 
          alt="Astronaut Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Main Text */}
      <div className="relative z-10 hero-title mt-20">
        <h1 className="text-[140px] font-bold text-white leading-none tracking-tighter">
          Floka
        </h1>
        <h2 className="text-[100px] font-bold text-gray-400/50 leading-none tracking-tighter -mt-4 ml-32">
          Studio
        </h2>
      </div>

      {/* Floating Info Card (Right Side) */}
      <div className="absolute right-20 bottom-32 z-10 max-w-xs hero-card">
        <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 mb-6">
          <img src="https://i.pravatar.cc/100?img=12" alt="Almond" className="w-16 h-16 rounded-xl object-cover" />
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Head of Idea</p>
            <p className="text-sm font-bold text-black">Almond D. Nelsi</p>
            <button className="flex items-center gap-2 mt-1 text-[10px] font-black uppercase">
                <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center">+</span>
                Let's Talk
            </button>
          </div>
        </div>
        <p className="text-white text-sm font-medium leading-relaxed">
            No cookie-cutter websites. No fluff. <br/>
            <span className="text-gray-400">Just real tools and smart strategies to grow your business and elevate your brand.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;