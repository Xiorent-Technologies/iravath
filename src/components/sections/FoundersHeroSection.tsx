"use client";

import Link from "next/link";
import { Button } from "@/components/layout/Button";
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
        {/* Navigation Overlay */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo (Left Side) */}
            <div className="flex items-center gap-3">
              <img
                width={48}
                height={48}
                className="sm:w-[70px] sm:h-[70px] lg:w-[70px] lg:h-[70px]"
                src={images.logo}
                alt="Iravath Logo"
              />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/founders-initiative"
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  Founders&apos; Initiative
                </Link>
                <Link
                  href="/public-information"
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  Public Information
                </Link>
              </nav>

              {/* Contact Button */}
              <Button
                variant="outline"
                className="px-4 py-2 rounded-full text-sm flex items-center border-yellow-400 text-white hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <span className="mr-1">📞</span> Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content - Bottom */}
        <div className="flex items-end justify-center min-h-screen pt-20 pb-16">
          <div className="text-center px-4">
            {/* Main Slogan */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#DCBB87] leading-tight font-playfair"
            >
              Connecting People,<br />
              Economies & Futures.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}