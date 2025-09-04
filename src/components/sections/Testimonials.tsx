"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Kyle Roberts DVM",
    role: "Customer Web Consultant",
    text: "Excellent platform! Easy to find the best business-class deals, and their customer service is always prompt and helpful. My recent booking was hassle-free. Highly recommend!",
    title: "Seamless Booking & Great Service",
    image: "/assets/testimonials/Testi1.png",
  },
  {
    id: 2,
    name: "Stephen Brekke",
    role: "Legacy Integration Producer",
    text: "If you want real marketing that works and I travel often, this platform always offers the best prices on premium airlines. Easy to find flights with the amenities I need. Great for business travelers! If you want real marketing that works and I travel often, this platform always offers the best prices on premium airlines. Easy to find flights with the amenities I need. Great for business travelers!",
    title: "Best Deals & User-Friendly",
    image: "/assets/testimonials/Testi1.png",
  },
  {
    id: 3,
    name: "Sophia Anderson",
    role: "Internal Implementation Officer",
    text: "Booked a last-minute flight to Europe, and everything was flawless. Great selection, fast booking, and good value for business-class. Will use again!",
    title: "Smooth & Efficient",
    image: "/assets/testimonials/Testi1.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-wide">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our Clients <span className="text-yellow-600">Say</span>
          </h2>
        </div>

        {/* Swiper for Mobile, Grid for Desktop */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`bg-[#1E1E1E] text-white rounded-2xl shadow-lg p-6 relative
      ${t.id === 2 ? "lg:row-span-2" : ""}`}
            >
              {/* Profile Image */}
<div className="absolute -top-6 sm:-top-8 left-6">
                <img
                  src={t.image}
                  alt={t.name}
    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-end mb-2">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 mt-6">{t.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>

              {/* Footer */}
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
                <p className="text-yellow-500 text-xs mt-1 flex items-center gap-1">
                  <span>●</span> Testimonial
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
  <div className="bg-[#1E1E1E] text-white rounded-2xl shadow-lg p-6 pt-12 relative">
    {/* Profile Image */}
    <div className="absolute -top-8 left-6">
      <img
        src={t.image}
        alt={t.name}
        className="w-16 h-16 rounded-full border-4 border-white shadow-md"
      />
    </div>

    {/* Stars */}
    <div className="flex justify-end mb-2">
      {"★★★★★".split("").map((star, i) => (
        <span key={i} className="text-yellow-500 text-lg">
          ★
        </span>
      ))}
    </div>

    {/* Title */}
    <h3 className="font-semibold text-lg mb-2 mt-6">{t.title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>

    {/* Footer */}
    <div className="mt-6">
      <p className="font-semibold">{t.name}</p>
      <p className="text-gray-400 text-sm">{t.role}</p>
      <p className="text-yellow-500 text-xs mt-1 flex items-center gap-1">
        <span>●</span> Testimonial
      </p>
    </div>
  </div>
</SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
