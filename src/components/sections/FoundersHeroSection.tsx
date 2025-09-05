"use client";

import { images } from "@/utils/images";

export default function FoundersHeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${images.founderHeroBg})`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {/* Main Content - Bottom */}
        <div className="flex items-end justify-center min-h-screen pt-20 pb-16">
          <div className="text-center px-4">
            {/* Main Slogan */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#DCBB87] leading-tight font-playfair"
            >
              Connecting People,<br />
              <span className="mt-2 block">Economies & Futures.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}