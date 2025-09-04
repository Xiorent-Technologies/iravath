"use client";

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('/assets/header/hero-bg.jpg')`,
        }}></div>
        {/* Cloud Background Overlay */}
        <div className="absolute inset-0 bg-cover bg-center " style={{
          backgroundImage: `url('/assets/header/cloudBg.png')`,
          animation: 'float 60s linear infinite',
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl" 
          style={{ animation: 'floatElement 15s ease-in-out infinite' }}></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-indigo-600 rounded-full opacity-10 blur-3xl" 
          style={{ animation: 'floatElement 20s ease-in-out infinite 2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-3xl" 
          style={{ animation: 'floatElement 18s ease-in-out infinite 1s' }}></div>
      </div>
      
      {/* Add animations */}
      <style jsx>{`
        @keyframes float {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
        
        @keyframes floatElement {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-[#D4A761] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            IRAVATH AIRLINES
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            className="text-[32px] md:text-[64px] text-[#262829] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Boundless<br/>Journeys for Every <br/>Traveller
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-lg text-[#757681] mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Iravath Airlines is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button 
              className="px-8 py-3 bg-transparent text-black font-medium rounded-full border-2 border-black transition-all duration-300 hover:bg-black hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Founders&apos; Initiative
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative w-full max-w-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src="/assets/hero/Aeroplane.png" 
              alt="Iravath Airlines Aircraft" 
              className="w-full h-auto scale-150" 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.7,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
