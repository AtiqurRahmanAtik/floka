import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // 1. Move the cursor on mouse move
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Small dot follows instantly
      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.1,
      });

      // Larger circle follows with slight delay (inertia)
      gsap.to(follower, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // 2. Hover Effects (Scaling)
    const onMouseEnter = () => {
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: "rgba(26, 26, 26, 0.1)",
        borderColor: "transparent",
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "#1a1a1a",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Attach listeners to all interactive elements
    const targets = document.querySelectorAll("a, button, .cursor-pointer");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", onMouseEnter);
      target.addEventListener("mouseleave", onMouseLeave);
    });

    

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", onMouseEnter);
        target.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);



  return (
    <>
      {/* Small Center Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#1a1a1a] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Large Outer Circle */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[#1a1a1a] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;