import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 px-8 md:px-20 border-t border-gray-800 bg-brandDark text-gray-500 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="uppercase tracking-tighter text-white font-bold text-xl">
          Floka<span className="text-brandAccent">.</span>
        </div>
        
        <p>© 2026 Case-Themes™ Studio. All rights reserved.</p>
        
        <div className="flex gap-6 uppercase tracking-widest text-[10px]">
          <a href="#" className="hover:text-brandAccent transition-colors">Dribbble</a>
          <a href="#" className="hover:text-brandAccent transition-colors">Behance</a>
          <a href="#" className="hover:text-brandAccent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;