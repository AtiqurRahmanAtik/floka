import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Let's Talk Text Reveal
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        }
      });

      // 2. Bento Cards Entrance (T7/T15 Style)
      gsap.from(".bento-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        }
      });

      // 3. Footer Links Reveal
      gsap.from(".footer-link-item", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 95%",
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white w-full overflow-hidden">
      
      {/* --- CTA SECTION (T14 style) --- */}
      <div className="cta-section pt-32 pb-20 px-6 text-center border-b border-white/10">
        <div className="relative inline-block">
          <h2 className="reveal-text text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none opacity-80">
            Let’s <br /> talk now
          </h2>
          {/* Circular "Get in Touch" Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow cursor-pointer hover:bg-white hover:text-black transition-colors duration-500">
            <span className="text-[10px] font-bold tracking-widest uppercase">Get in touch —</span>
          </div>
        </div>
      </div>

     

      {/* --- BOTTOM FOOTER (T14 style) --- */}
      <div className="footer-bottom max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand/Logo Area */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div className="relative w-48 aspect-square rounded-[30px] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400" className="w-full h-full object-cover" alt="team" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-black text-white/20 select-none">F</span>
             </div>
          </div>
          <h1 className="text-8xl font-bold tracking-tighter mt-8 opacity-10">Floka</h1>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 space-y-4">
          {['About Us', 'Journal', 'Faq', 'Get In Touch', 'Careers'].map(link => (
            <a key={link} href="#" className="footer-link-item block text-xl font-bold hover:text-gray-400 transition-colors">{link}</a>
          ))}
        </div>

        {/* Contact/Description Column */}
        <div className="md:col-span-6 flex flex-col md:items-end text-left md:text-right">
          <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-8">
            At Floka, we believe design should be more than just functional—it should tell your story. With a focus on timeless design, expert craftsmanship, and unique digital presence.
          </p>
          <div className="space-y-1 mb-8">
            <p className="text-sm font-bold">info@floka-design.com</p>
            <p className="text-sm font-bold">+123 (456 789 00)</p>
            <p className="text-xs text-gray-500 font-medium">12/A, Boston Tower, NYC</p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4">
            {['f', 'x', 'in', 'be'].map(s => (
              <div key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
                {s.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="w-full py-6 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-600 font-medium tracking-widest uppercase">Copyright © 2026 Case-Themes</p>
      </div>

    </footer>
  );
};

export default Footer;