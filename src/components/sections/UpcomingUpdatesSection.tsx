import React from 'react';

export default function UpcomingUpdatesSection() {
  return (
    <section className="py-16 md:py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Side - Image with Code Overlay */}
          <div className="relative h-[400px] lg:h-[500px] mx-4 my-4 lg:mx-0 lg:my-0 rounded-lg overflow-hidden">
            {/* Background Image */}
            <img
              src="/assets/header/public-info/girl-laptop.png"
              alt="Woman working on laptop"
              className="w-full h-full object-cover"
            />
            
            {/* Code Overlay */}
            <div className="absolute inset-0 bg-black/20">
              {/* Code lines overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="text-green-400 font-mono text-xs p-4 space-y-1">
                  <div className="text-white">const airline = new Iravath();</div>
                  <div className="text-green-400">airline.launchSuperApp();</div>
                  <div className="text-blue-400">airline.connectGlobally();</div>
                  <div className="text-yellow-400">airline.createJobsPortal();</div>
                  <div className="text-purple-400">airline.innovate();</div>
                </div>
              </div>
              
              {/* Network dots overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Upcoming Updates */}
          <div className="bg-white flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 h-[400px] lg:h-[500px] relative mx-4 my-4 lg:mx-0 lg:my-0 rounded-lg">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
              }}></div>
            </div>
            
            <div className="relative z-10 max-w-lg">
              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
                Upcoming Updates:
              </h2>
              
              {/* Update Cards */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {/* Card 1 */}
                <div className="bg-[#343637] rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Super App Launch – flights, cargo, and ambulance bookings in one place.
                    </p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-[#343637] rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4v8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Loyalty Program with global partners.
                    </p>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="bg-[#343637] rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Jobs & Careers Portal opening in 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
