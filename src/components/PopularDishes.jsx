import React from 'react';
import { motion } from 'framer-motion';

const dishes = [
  { img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80", name: "Grilled Salmon", desc: "Fresh herbs & lemon butter", price: "$24" },
  { img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", name: "Terraza Burger", desc: "Aged cheddar & truffle fries", price: "$18" },
  { img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80", name: "Truffle Pasta", desc: "Handmade linguine & parmesan", price: "$22" },
];

export default function PopularDishes() {
  return (
    <section className="py-24 px-4 bg-brand-cream border-t border-brand-terracotta/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brand-terracotta mb-4"
          >
            Signature Dishes
          </motion.h2>
          <p className="text-brand-green/70 text-lg">Our absolute favorites, handpicked for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dishes.map((dish, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-6 relative bg-white flex flex-col items-center text-center">
                <div className="absolute -top-6 bg-brand-terracotta text-brand-cream font-bold px-4 py-2 rounded-full shadow-lg">
                  {dish.price}
                </div>
                <h3 className="text-2xl font-heading text-brand-green mt-4 mb-2">{dish.name}</h3>
                <p className="text-brand-green/60">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
