import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const componentRef = useRef(null);

  // 1. Fake Image URLs based on your T5.PNG themes
  const carImg = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000"; // Black Car
  const vrImg = "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000";  // VR Headset
  const sewingImg = "https://images.unsplash.com/photo-1550005808-898492066f12?q=80&w=2000"; // Textile/Sewing
  const runnerImg = "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=1000"; // Runner
  const silhouetteImg = "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000"; // Cinema/Silhouette

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation for the Title
      gsap.from(".portfolio-header", {
        x: -100, // Reveal from left to right
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
        x: -50, // Slight slide from left
        y: 30,  // Subtle lift
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Wave effect
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
    { id: 1, type: "Branding", year: "2024", title: "AI Cars", image: carImg, columns: "col-span-1" },
    { id: 2, type: "Branding", year: "2024", title: "Virtual Reality", image: vrImg, columns: "col-span-1" },
    { id: 3, type: "Product", year: "2024", title: "Textile Robotics", image: sewingImg, columns: "md:col-span-2" },
    { id: 4, type: "UI/UX", year: "2024", title: "Human Mobility", image: runnerImg, columns: "col-span-1" },
    { id: 5, type: "UI/UX", year: "2024", title: "Cinematic", image: silhouetteImg, columns: "col-span-1" },
  ];

  return (
    <section ref={componentRef} className="py-32 px-6 md:px-16 lg:px-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="portfolio-header mb-20">
          <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Selected Works</p>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] tracking-tighter">
            Strategy to build powerful <br /> digital solutions.
          </h2>
        </div>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className={`project-card group ${project.columns}`}>
              <div className="aspect-[16/10] rounded-[40px] overflow-hidden bg-gray-200 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                />
              </div>
              <div className="flex justify-between items-center mt-6 px-4">
                <h3 className="text-xl font-bold text-[#1A1A1A]">
                  {project.title} <span className="text-gray-400 font-medium ml-1">/{project.type}</span>
                </h3>
                <span className="text-sm font-bold text-gray-300">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
           <button className="flex items-center gap-4 text-xs font-bold tracking-widest text-gray-400 hover:text-black transition-all">
              <span className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-2xl font-light hover:border-black">+</span>
              MORE WORKS
           </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;