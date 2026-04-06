import CustomCursor from "./Animation/CustomCursor";
import Approach from "./components/Approach";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import StatsGrid from "./components/StatsGrid";
import Portfolio from "./components/Portfolio";
import StatsSection from "./components/StatsSection";
import ClientLogoGrid from "./components/ClientLogoGrid";
import Footer from "./components/Footer";
import InsightsSection from "./components/InsightsSection";
import VideoReelSection from "./components/VideoReelSection";



function App() {
  return (
    <div className="relative min-h-screen">
      {/* 1. FIXED BACK LAYERS */}
      <CustomCursor />
      <BackgroundVideo />

      {/* 2. UI LAYERS */}
      <Navbar />
      
      <main className="relative z-10">
        
        {/* --- Section 1: Hero (Video is Visible) --- */}
        <section className="h-screen flex items-center justify-center bg-transparent px-8 text-center">
          <h1 className="text-8xl md:text-[140px] font-bold tracking-tighter text-white leading-none drop-shadow-sm">
            Floka Studio.
          </h1>
        </section>

        {/* --- Section 2: Approach (Video is Visible) --- */}
        <Approach />
         {/* New Stats Section (T4 Design) */}
          <StatsGrid />

        {/* --- Section 3: THE SOLID OPAQUE BLOCK (Video is HIDDEN) --- 
            We wrap solid sections in this container to cut off the video.
        */}
        <div className="opaque-content-block">
          
          {/* New Portfolio Section (T5 Design) */}
          <Portfolio />

          <StatsSection/>

          <ClientLogoGrid/>
          <VideoReelSection/>

          <InsightsSection/>

         

         
          
         
        </div>

      </main>


      <Footer/>
    </div>
  );
}

export default App;