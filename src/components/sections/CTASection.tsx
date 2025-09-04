"use client";

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <motion.section
      className="relative bg-black text-white"
      style={{
        backgroundImage: `url('/assets/about/Iravath.png')`, // full background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Left Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div 
          className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-yellow-500 font-semibold mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About <span className="text-white">Iravath Airlines</span>
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            More Than Flights
          </motion.h2>
          <motion.p 
            className="text-gray-300 mb-10 leading-relaxed text-base sm:text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A Journey for Every Traveller. From private jets to air ambulances, from cargo 
            to pet-friendly cabins, Iravath Airlines redefines global travel. Wherever you&apos;re headed, 
            we bring you safety, comfort, and innovation at every step.
          </motion.p>

          {/* Call to Action Box */}
          <motion.div 
            className="bg-white text-black rounded-xl shadow-md flex items-center justify-between px-6 py-5 gap-6 max-w-md"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <p className="text-lg font-medium">Call for book an order</p>
              <p className="text-2xl font-bold">9-999-99-99</p>
            </div>
            <motion.button 
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✈</span> Book Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side is just background image (no extra img tag needed) */}
        <div className="h-96 lg:h-auto"></div>
      </div>
    </motion.section>
  );
}
