"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('/assets/header/hero-bg.jpg')`,
        }}></div>
        {/* Cloud Background Overlay */}
        <div className="absolute inset-0 bg-cover bg-center " style={{
          backgroundImage: `url('/assets/header/cloudBg.png')`,
          animation: 'float 60s linear infinite',
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl" 
          style={{ animation: 'floatElement 15s ease-in-out infinite' }}></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-indigo-600 rounded-full opacity-10 blur-3xl" 
          style={{ animation: 'floatElement 20s ease-in-out infinite 2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-3xl" 
          style={{ animation: 'floatElement 18s ease-in-out infinite 1s' }}></div>
      </div>
      
      {/* Add animations */}
      <style jsx>{`
        @keyframes float {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
        
        @keyframes floatElement {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#D4A761] mb-4">
            IRAVATH AIRLINES
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-[32px] md:text-[64px] text-[#262829] mb-6">
            Boundless<br/>Journeys for Every <br/>Traveller
          </h2>
          
          {/* Description */}
          <p className="text-lg text-[#757681] mb-8 max-w-xl">
            Iravath Airlines is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-transparent text-black font-medium rounded-full border-2 border-black  transition-all duration-300">
              Explore Founders' Initiative
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative w-full max-w-lg">
            {/* <div className="rounded-lg overflow-hidden shadow-2xl"> */}
              <img 
                src="/assets/hero/Aeroplane.png" 
                alt="Iravath Airlines Aircraft" 
                className="w-full h-auto scale-150" 
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
