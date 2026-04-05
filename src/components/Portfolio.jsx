import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const componentRef = useRef(null);

  // 1. Reliable Image URLs with formatting parameters to ensure they load
  const carImg = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"; 
  const vrImg = "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1000";  
  // Replaced broken link with a working green textile/cutting image
  const sewingImg = "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000"; 
  const runnerImg = "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&q=80&w=1000"; 
  const silhouetteImg = "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1000"; 

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation for the Title
      gsap.from(".portfolio-header", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 80%",
        }
      });

      // Reveal animation for Project Cards
      gsap.from(".project-card", {
        x: -50,
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 75%",
        }
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    { id: 1, type: "Branding", year: "2024", title: "AI CAR BRANDING", image: carImg, columns: "col-span-1" },
    { id: 2, type: "Branding", year: "2024", title: "VIRTUAL REALITY", image: vrImg, columns: "col-span-1" },
    { id: 3, type: "Product", year: "2024", title: "TEXTILE ROBOTICS", image: sewingImg, columns: "md:col-span-2" },
    { id: 4, type: "UI/UX", year: "2024", title: "HUMAN MOBILITY", image: runnerImg, columns: "col-span-1" },
    { id: 5, type: "UI/UX", year: "2024", title: "CINEMATIC", image: silhouetteImg, columns: "col-span-1" },
  ];

  return (
    <section ref={componentRef} className="py-32 px-6 md:px-16 lg:px-24 bg-[#F9F8F3] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="portfolio-header mb-20 border-t border-gray-200 pt-8">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-8">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tighter max-w-2xl">
            Strategy to build powerful digital solutions.
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <div key={project.id} className={`project-card group ${project.columns}`}>
              
              {/* Image Container */}
              <div className="aspect-[16/10] rounded-[40px] overflow-hidden bg-gray-200 shadow-sm mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                />
              </div>

              {/* Text Meta Data (Added to match UI design) */}
              <div className="flex justify-between items-center px-2">
                <p className="text-[10px] font-bold tracking-widest text-black uppercase">
                  {project.title}
                </p>
                <p className="text-[10px] font-medium text-gray-400">
                  {project.year}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="mt-20 flex justify-center">
           <button className="flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-black hover:text-gray-500 transition-all uppercase">
              <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-light hover:scale-110 transition-transform">
                +
              </span>
              MORE WORKS
           </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;