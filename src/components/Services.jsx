import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  { id: '01', title: 'User Interface & Experience', tags: 'branding, magazine, product' },
  { id: '02', title: 'Web Development', tags: 'branding, module, ux' },
  { id: '03', title: 'Search Engine Optimization', tags: 'marketing, seo, ranking' },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="py-32 px-8 md:px-20 bg-brandGray text-brandDark rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between mb-20">
        <h2 className="text-5xl font-bold uppercase tracking-tight">Company Expertise</h2>
        <p className="max-w-md text-gray-600 mt-4 md:mt-0">
          From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.
        </p>
      </div>

      <div className="border-t border-black">
        {services.map((srv) => (
          <div key={srv.id} className="service-item group flex flex-col md:flex-row justify-between items-center py-10 border-b border-black hover:bg-gray-200 transition-colors cursor-pointer px-4">
            <div className="flex items-center gap-8">
              <span className="text-sm font-bold text-gray-400">({srv.id})</span>
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">
                {srv.title}
              </h3>
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0">
              {srv.tags}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;