import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-chef.png';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-brand-cream border-b border-brand-terracotta/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-brand-terracotta">
            Our Story
          </h2>
          <p className="text-lg text-brand-green/80 leading-relaxed font-sans">
            Welcome to La Terraza, where family traditions meet modern culinary creativity. Born out of a passion for bringing people together, we believe that great food is best enjoyed in a comfortable, inviting atmosphere. 
          </p>
          <p className="text-lg text-brand-green/80 leading-relaxed font-sans">
            Every dish is crafted with fresh, local ingredients and a lot of heart. Whether you are dropping by for a quick bite or celebrating a special moment, our home is your home. Come for the food, stay for the good vibes.
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-square md:aspect-[4/5] bg-brand-green/10">
            <img 
              id="about-image"
              src={aboutImg} 
              alt="Our Chef" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-terracotta rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
