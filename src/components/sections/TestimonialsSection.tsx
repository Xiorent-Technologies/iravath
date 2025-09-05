"use client";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "VIP & VVIP Travel",
      description: "private jet and luxury cabin experiences",
      image: "/assets/about/card1.png"
    },
    {
      id: 2,
      title: "Air Ambulance Services",
      description: "rapid medical transfers, global med-evac network",
      image: "/assets/about/card2.png"
    },
    {
      id: 3,
      title: "Pet-Friendly Travel",
      description: "dedicated cabins & cargo solutions for pets",
      image: "/assets/about/card3.png"
    },
    {
      id: 4,
      title: "Domestic & International Flights",
      description: "safe, comfortable, affordable",
      image: "/assets/about/card4.png"
    },
    {
      id: 5,
      title: "General Passenger Flights",
      description: "all segments from economy to premium",
      image: "/assets/about/card5.png"
    },
    {
      id: 6,
      title: "Cargo Operations",
      description: "global trade routes, specialized freighters",
      image: "/assets/about/card6.png"
    }
  ];

  return (
    <motion.section 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium text-gray-600 mb-2">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover <span className="text-yellow-600">Iravath Airlines</span> Benefits
          </h2>
        </motion.div>

        {/* Mobile View - Swiper */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={false}
            pagination={{ clickable: true }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <div
                    className="relative h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 mt-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="relative h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
