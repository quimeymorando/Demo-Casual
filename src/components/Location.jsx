import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 px-4 bg-brand-green text-brand-cream border-t border-brand-cream/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-heading mb-4 text-brand-terracotta">Find Us</h2>
            <p className="text-brand-cream/80 text-lg">Located in the heart of the city.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-terracotta mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Address</h4>
                <p className="text-brand-cream/70">123 Culinary Avenue, Food District<br/>Cityville, ST 12345</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-terracotta mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Opening Hours</h4>
                <p className="text-brand-cream/70">Tue - Sun: 11:00 AM - 10:00 PM<br/>Monday: Closed</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-brand-terracotta mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-brand-cream/70">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] bg-brand-cream/10 rounded-3xl overflow-hidden relative">
          {/* Simulated Map / Image representation of map */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
            alt="Location Map Area" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 cursor-pointer"
          />
          <div className="absolute inset-0 bg-brand-green/20 pointer-events-none"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-8 h-8 bg-brand-terracotta rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(224,122,95,0.6)] animate-bounce">
                <MapPin className="w-4 h-4 text-white" />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
