"use client";

import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection2 from '@/components/sections/FeatureSecion2';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-black to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url('/assets/header/hero-bg.jpg')`,
          opacity: 0.4
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection2/>
          <TestimonialsSection />
          <CTASection />
          <Testimonials/>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}
