'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <header className="bg-transparent shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/assets/footerImage.png" alt="Iravath logo" className="h-10 w-auto" />
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Founder’s Initiative</a>
            <a href="#" className="hover:text-black">Public Information</a>
          </nav>

          {/* Contact button */}
          <button className="px-5 py-2 border border-black rounded-full font-medium text-black hover:bg-black hover:text-white transition">
            Contact Us
          </button>
        </div>
      </header>
  );
}
