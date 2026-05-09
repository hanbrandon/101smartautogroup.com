"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DEALS = [
  {
    image: "/featured/deal-1.png",
    title: "Premium Vehicle 1",
    price: "Special Rate",
    tag: "Luxury"
  },
  {
    image: "/featured/deal-2.png",
    title: "Premium Vehicle 2",
    price: "Immediate Delivery",
    tag: "Sports"
  }
];

export const FeaturedCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEALS.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-red-500 mb-4 block">Deals of the Month</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Exclusive Featured Vehicles</h3>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] md:aspect-video rounded-[40px] overflow-hidden group cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={DEALS[currentIndex].image}
              alt={DEALS[currentIndex].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
            {/* Carousel Indicators */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-2">
              {DEALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentIndex === idx ? 'w-8 bg-red-500' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
