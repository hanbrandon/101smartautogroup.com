"use client";

import { motion } from 'motion/react';
import Image from 'next/image';

export const FeaturedCard = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video rounded-[40px] overflow-hidden group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2000" 
            alt="Feature" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Choose your next step, whenever you're ready.</h3>
            <div className="flex gap-4">
              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/20">Luxury Sourcing</span>
              <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/20">Private Network</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
