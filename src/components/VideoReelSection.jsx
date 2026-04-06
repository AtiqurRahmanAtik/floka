import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoReelSection = () => {
  const containerRef = useRef(null);
  
  // State to toggle between the Poster Image and the Iframe
  const [showVideo, setShowVideo] = useState(false);

  // Replace with your actual YouTube ID
  const youtubeVideoId = "jNQXAC9IVRw"; 

  // Poster Image matching the suit/architecture theme
  const posterImage = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation for the section
      gsap.from(".video-wrapper", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-16 lg:px-24 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Container with rounded corners */}
        <div className="video-wrapper relative aspect-[16/10] md:aspect-[21/9] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl bg-black">
          
          {!showVideo ? (
            /* --- POSTER VIEW --- */
            <div 
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              {/* Cover Image */}
              <img 
                src={posterImage} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              
              {/* Bottom Gradient for Button Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Play Button Pill */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <button className="flex items-center gap-4 bg-white pl-2 pr-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                  {/* Black Icon Circle */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  {/* Button Text */}
                  <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-black">
                    Play Reel
                  </span>
                </button>
              </div>
            </div>
          ) : (
            /* --- IFRAME VIEW (Triggered on click) --- */
            <div className="w-full h-full animate-fadeIn">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              
              {/* Optional: Close Button to return to Poster View */}
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default VideoReelSection;