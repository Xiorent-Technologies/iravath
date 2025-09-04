"use client";

import { useState } from "react";
import { Button } from "@/components/layout/Button";
import { images } from "@/utils/images";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo (Left Side) */}
        <div className="flex items-center gap-3">
          <img
            width={48}
            height={48}
            className="sm:w-[70px] sm:h-[70px] lg:w-[70px] lg:h-[70px]"
            src={images.logo}
            alt="Airline Logo"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-black hover:text-primary airline-transition font-medium"
            >
              Home
            </a>
            <a
              href="/founders-initiative"
              className="text-black hover:text-primary airline-transition font-medium"
            >
              Founders’ Initiative
            </a>
            <a
              href="/public-information"
              className="text-black hover:text-primary airline-transition font-medium"
            >
              Public Information
            </a>
          </nav>

          {/* Contact Button (Same for Desktop & Mobile) */}
          <Button
            variant="gold"
            className="px-4 py-2 rounded-full text-sm flex items-center"
          >
            <span className="mr-1">📞</span> Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className="w-full h-0.5 bg-black"></div>
              <div className="w-full h-0.5 bg-black"></div>
              <div className="w-full h-0.5 bg-black"></div>
            </div>
          </Button>
        </div>
      </div>

      {/* Overlay + Side Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40">
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="absolute top-0 right-0 h-full w-1/2 bg-white shadow-lg border-l border-gray-200 p-6 flex flex-col gap-6 animate-slideIn">
            <button
              className="self-end text-black font-bold"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>

            <nav className="flex flex-col items-start gap-6">
              <a
                href="/"
                className="text-black hover:text-primary font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </a>
              <a
                href="/founders-initiative"
                className="text-black hover:text-primary font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Founders’ Initiative
              </a>
              <a
                href="/public-information"
                className="text-black hover:text-primary font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Public Information
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
