import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InsightsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the blog columns on scroll
      gsap.from(".blog-column", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Data array with real working image URLs from Unsplash
  const blogPosts = [
    {
      id: 1,
      tag: "WHK",
      date: "NOV 07, 2026",
      title: "Seamless user interfaces, crafted with intent.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      dark: true,
      reverse: false // Content card on TOP
    },
    {
      id: 2,
      tag: "WHK",
      date: "NOV 07, 2026",
      title: "Creative web platforms, designed for growth.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      dark: false,
      reverse: true // Image card on TOP
    },
    {
      id: 3,
      tag: "WHK",
      date: "NOV 07, 2026",
      title: "Immersive virtual journeys, built with precision.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      dark: true,
      reverse: false // Content card on TOP
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-16 lg:px-24 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-4">
            Insights
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter">
            Company blog & updates
          </h2>
        </div>

        {/* --- Blog Grid --- */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-column">
              <div className={`flex flex-col gap-6 ${post.reverse ? 'flex-col-reverse' : ''}`}>
                
                {/* 1. Text/Content Card */}
                <div className={`p-10 rounded-[32px] shadow-sm flex flex-col justify-between min-h-[220px] transition-transform duration-500 hover:-translate-y-1
                  ${post.dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] font-black tracking-widest">{post.tag}</span>
                      <span className="text-[9px] font-medium text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* 2. Image Card (Fixed Image Rendering) */}
                <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-lg bg-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;