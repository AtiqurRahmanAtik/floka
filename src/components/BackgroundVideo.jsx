import React from 'react';
// Verify this path is correct in your Vite project
import backgroundVideo from '../assets/PixVerse_V6_Image_Text_360P_robot_woman_moving (1).mp4'; 

const BackgroundVideo = () => {
  return (
    <div className="video-background-wrapper">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;