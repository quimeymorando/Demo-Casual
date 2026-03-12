import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-green border-t border-brand-cream/20 pt-16 pb-8 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h3 className="text-3xl font-heading text-brand-cream mb-6">La Terraza</h3>
        
        <div className="flex gap-6 mb-10">
          {['Instagram', 'Facebook', 'TripAdvisor'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-brand-cream/70 hover:text-brand-terracotta transition-colors text-sm uppercase tracking-widest font-bold"
            >
              {social}
            </a>
          ))}
        </div>
        
        <div className="w-full h-px bg-brand-cream/10 mb-8"></div>
        
        <p className="text-brand-cream/40 text-sm">
          &copy; {new Date().getFullYear()} La Terraza Restaurant. All rights reserved.<br/>
          Designed for a comfortable and inviting atmosphere.
        </p>
      </div>
    </footer>
  );
}
