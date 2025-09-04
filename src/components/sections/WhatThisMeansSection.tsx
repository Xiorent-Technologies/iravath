import React from 'react';

export default function WhatThisMeansSection() {
  return (
    <section className="bg-gray-800">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 min-h-[400px] lg:min-h-[550px]">
          {/* Image - First on mobile, Right on desktop */}
          <div className="relative h-[300px] lg:h-[550px] lg:col-span-3 lg:order-2 mx-4 my-4 lg:mx-0 lg:my-0">
            <img
              src="/assets/header/public-info/right-girl.png"
              alt="Woman looking out airplane window"
              className="w-full h-full object-contain lg:object-cover rounded-lg"
            />
          </div>
          
          {/* Text Content - Second on mobile, Left on desktop */}
          <div className="bg-gray-800 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 h-[400px] lg:h-[550px] lg:col-span-7 lg:order-1 mx-4 my-4 lg:mx-0 lg:my-0 rounded-lg">
            <div className="max-w-2xl">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 lg:mb-6 leading-tight">
                What This Means For You
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-white mb-6 lg:mb-8 leading-relaxed">
                Iravath Airline takes pride in boasting one of the top air charter safety records in the region, ensuring peace of mind for our passengers.
              </p>
              
              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  <span>Domestic & International Travel</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  <span>Emergency & Medical Flights</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  <span>Business & Luxury Travel</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  <span>Air Taxi & Regional Mobility</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  <span>Cargo Access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
