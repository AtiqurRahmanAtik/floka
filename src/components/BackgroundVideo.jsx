import React from 'react';
// Ensure the path is correct. In Vite, assets are usually in /src/assets
import backgroundVideo from '../assets/PixVerse_V6_Image_Text_360P_robot_woman_moving (1).mp4'; 

const BackgroundVideo = () => {
  return (
    <>
      {/* The actual video container */}
      <div className="video-background-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* The tint overlay to make text readable */}
      <div className="video-overlay-tint"></div>
    </>
  );
};

export default BackgroundVideo;