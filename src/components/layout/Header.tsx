'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Iravath</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Projects
            </a>
            <a href="/founders-initiative" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Founders Initiative
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Projects
              </a>
              <a href="/founders-initiative" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Founders Initiative
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                About
              </a>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-left">
                  Sign In
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 w-fit">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
