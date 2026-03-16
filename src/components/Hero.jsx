import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 w-full h-full bg-[#182e22] z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
          alt="La Terraza Vibe" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          id="hero-bg"
        />
      </div>

      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#182e22]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl font-heading text-brand-cream font-bold leading-none tracking-tight">La Terraza</h2>
            <span className="text-[0.6rem] font-sans text-brand-terracotta tracking-[0.2em] mt-1 font-semibold">FRESH • CASUAL • GOOD VIBES</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-sans tracking-widest text-[#d4d7d1] hover:text-brand-cream transition-colors uppercase">Inicio</a>
            <a href="#menu" className="text-sm font-sans tracking-widest text-[#d4d7d1] hover:text-brand-cream transition-colors uppercase">Menú</a>
            <a href="#gallery" className="text-sm font-sans tracking-widest text-[#d4d7d1] hover:text-brand-cream transition-colors uppercase">Galería</a>
            <a href="#reservation" className="ml-4 px-6 py-2.5 bg-brand-terracotta text-brand-cream rounded-full text-sm font-medium hover:bg-orange-600 transition-all duration-300 flex items-center gap-2">
              Reservar <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-8xl lg:text-[9rem] font-heading text-brand-cream font-bold tracking-tight mb-2 drop-shadow-xl"
        >
          La Terraza
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl text-[#d4d7d1] font-heading italic font-light mb-12 tracking-wide"
        >
          Fresh food, good vibes
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#menu" className="px-10 py-4 bg-brand-terracotta text-brand-cream rounded-full font-medium text-lg hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            View Menu <span className="text-xl">🍽</span>
          </a>
          <a href="#reservation" className="px-10 py-4 bg-transparent border border-[#d4d7d1] text-brand-cream rounded-full text-lg font-medium hover:bg-brand-cream hover:text-[#182e22] transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm">
            Reserve Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-[#d4d7d1]">Scroll</span>
        <a href="#about" className="text-[#d4d7d1] hover:text-brand-cream transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>


    </section>
  );
}
