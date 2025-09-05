import React from 'react';
import Link from 'next/link';
import { images } from '@/utils/images';

export default function Footer() {
  return (
    <footer className="bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="bg-white rounded-2xl border-2 border-yellow-400 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left Section - Logo and About */}
            <div className="lg:col-span-1 text-center lg:text-left">
              {/* Logo */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img
                  src={images.logo}
                  alt="Iravath Airlines Logo"
                  className="w-32 h-32 md:w-20 md:h-20 mr-5"
                />
              </div>

              {/* About Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                Iravath Airlines is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.
              </p>
            </div>

            {/* Company Column */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-4 relative">
                Company
                <div className="absolute bottom-0 left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 lg:translate-x-0 w-8 h-0.5 bg-yellow-400"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/founders-initiative" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                    Founder&apos;s Initiative
                  </Link>
                </li>
                <li>
                  <Link href="/public-information" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                    Public Information
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-4 relative">
                Legal
                <div className="absolute bottom-0 left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 lg:translate-x-0 w-8 h-0.5 bg-yellow-400"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                    Legal Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                    Aircraft Management
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Social Media and Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
                         <a href="#" className="w-10 h-10 border-2 border-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
               <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
               </svg>
             </a>
             <a href="#" className="w-10 h-10 border-2 border-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
               <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
               </svg>
             </a>
             <a href="#" className="w-10 h-10 border-2 border-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
               <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
               </svg>
             </a>
             <a href="#" className="w-10 h-10 border-2 border-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
               <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
               </svg>
             </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-700 text-sm">
            © 2025 Iravath Airlines™ · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}