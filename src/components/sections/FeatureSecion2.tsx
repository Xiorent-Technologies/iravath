"use client";

import { motion } from 'framer-motion';

export default function FeaturesSection2() {
  const features = [
    {
      id: 1,
      title: "Official 2025 Brand & Trademark launch",
      description: "",
    },
    {
      id: 2,
      title: "Inspired by celestial Iravath",
      description: "Symbol of wisdom, strength & global connectivity.",
    },
    {
      id: 3,
      title: "Built to be the world's largest, smartest airline",
      description: "Headquartered in India but serving the world.",
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-cover bg-center" 
      style={{ backgroundImage: 'url(/assets/about/Bg.png)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row bg-transparent rounded-lg shadow-lg overflow-hidden gap-4 md:gap-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Column - Airplane Interior Image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/assets/about/TabPanel.png" 
                alt="Airplane Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            className="w-full md:w-1/2 p-8 md:p-12 bg-cover bg-center" 
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/about/Iravath.png)' }}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <motion.div 
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About Iravath Airlines
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl">
                Iravath Airlines is totally committed to supporting our clients by providing safe and reliable solutions for their air charter needs.
              </p>
              <p className="text-white">
                - - - -  - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - 
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div 
              className="space-y-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="p-4 bg-[#FFFFFF1A] bg-opacity-30 rounded-lg backdrop-blur-sm"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-white">•</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
