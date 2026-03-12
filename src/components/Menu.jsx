import React from 'react';
import { motion } from 'framer-motion';

const menuData = {
  starters: [
    { name: "Crispy Calamari", price: "$12", desc: "Served with house-made tartare sauce." },
    { name: "Bruschetta", price: "$9", desc: "Heirloom tomatoes, fresh basil, garlic, and olive oil." },
    { name: "Stuffed Mushrooms", price: "$11", desc: "Filled with spinach, cheese, and breadcrumbs." }
  ],
  mains: [
    { name: "Grilled Salmon", price: "$24", desc: "Served with roasted asparagus and lemon butter." },
    { name: "Terraza Burger", price: "$18", desc: "Double patty, aged cheddar, caramelized onions, fries." },
    { name: "Truffle Pasta", price: "$22", desc: "Fresh linguine tossed in creamy truffle sauce with parmesan." }
  ],
  drinks: [
    { name: "Artisan Lemonade", price: "$5", desc: "Freshly squeezed lemons with a hint of mint." },
    { name: "Craft Beer", price: "$7", desc: "Selection of local microbrews." },
    { name: "House Wine", price: "$9", desc: "Red or white, carefully selected seasonally." }
  ]
};

const MenuCategory = ({ title, items, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="mb-12"
  >
    <h3 className="text-3xl font-heading text-brand-terracotta mb-6 flex items-center">
      <span className="flex-1">{title}</span>
      <div className="h-px bg-brand-terracotta/30 flex-1 ml-4"></div>
    </h3>
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="group cursor-pointer">
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-xl font-medium text-brand-green group-hover:text-brand-terracotta transition-colors pr-4">{item.name}</h4>
            <span className="text-lg font-bold text-brand-green/80 shrink-0">{item.price}</span>
          </div>
          <p className="text-brand-green/60 text-sm italic mb-3">{item.desc}</p>
          <div className="w-full border-b border-dashed border-brand-green/20"></div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-4 bg-brand-cream">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brand-green mb-4"
          >
            Our Menu
          </motion.h2>
          <p className="text-brand-green/70">Simple, fresh, and made to order.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          <div className="col-span-1 md:col-span-2">
            <MenuCategory title="Starters" items={menuData.starters} delay={0.1} />
          </div>
          <div className="col-span-1">
            <MenuCategory title="Main Dishes" items={menuData.mains} delay={0.2} />
          </div>
          <div className="col-span-1">
            <MenuCategory title="Drinks" items={menuData.drinks} delay={0.3} />
          </div>
        </div>

      </div>
    </section>
  );
}
