"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"
export default function TestimonialsSection() {
  
  const offers = [
    {
      
      id: 1,
     img:"/assets/1.png",
     title: "Domestic & International Flights",
     desc: "safe, comfortable, affordable",

    },
    {
      id: 2,
      img:"/assets/2.png",
      title: "VIP & VVIP Travel",
      desc: "private jet & luxury cabin experiences",

    },
    {
      id: 3,
      img:"/assets/3.png",
      title: "Air Ambulance Services",
     desc: "rapid med-evac network",

    },
    {
      id: 4,
      img:"/assets/4.png",
      title: "Air Mobility (Taxi)",
      desc: "eVTOLs and helicopters for travel.",
    },
    {
      id: 5,
      img:"/assets/5.png",
      title: " General Passenger Flights",
      desc: "all segments from economy to premium ",
    },
    {
      id: 6,
      img:"/assets/6.png",
      title: "Cargo Operations",
      desc: "global trade routes, freighters",
    }, {
      id: 7,
      img:"/assets/7.png",
      title: "Pet-Friendly Travel",
      desc: "dedicated cabins & cargo",
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What we Offer</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Iravath Airline is totally committed to supporting our clients by
            providing safe and reliable solutions for their air charter needs.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((offer, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition p-4 text-center">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <h3
                  className="mt-4 font-bold text-gray-900 uppercase"
                  style={{ fontSize: "15px" }}
                >
                  {offer.title}
                </h3>
                <p className="text-gray-600 mt-1">{offer.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
