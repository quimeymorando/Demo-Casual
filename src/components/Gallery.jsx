import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-0 bg-brand-green">
      <div className="text-center mb-16 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-brand-cream mb-4"
        >
          Atmosphere
        </motion.h2>
        <p className="text-brand-cream/70 text-lg">A glimpse into our restaurant.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="aspect-square overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-brand-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
            <img 
              src={img} 
              alt="Gallery item"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
