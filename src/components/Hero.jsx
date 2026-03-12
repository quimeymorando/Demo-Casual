import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup (Will be replaced with generated image) */}
      <div className="absolute inset-0 w-full h-full bg-brand-green/80 z-0">
        <img 
          src={heroBg} 
          alt="La Terraza Vibe" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          id="hero-bg"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-brand-cream font-bold tracking-tight mb-4 drop-shadow-lg"
        >
          La Terraza
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-brand-cream/90 font-light mb-10 tracking-wide"
        >
          Fresh food, good vibes
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#menu" className="px-8 py-4 bg-brand-terracotta text-brand-cream rounded-full font-medium hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl hover:-translate-y-1">
            View Menu
          </a>
          <a href="#reservation" className="px-8 py-4 bg-transparent border-2 border-brand-cream text-brand-cream rounded-full font-medium hover:bg-brand-cream hover:text-brand-green transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl hover:-translate-y-1">
            Reserve Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-brand-cream/70 hover:text-brand-cream">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
