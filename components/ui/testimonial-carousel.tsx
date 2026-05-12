"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '@/constants';

export const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full flex flex-col justify-between">
      {/* Pagination Dots */}
      <div className="flex gap-1.5 mb-10">
        {TESTIMONIALS.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-700 ${i === index ? 'bg-red-600 w-4' : 'bg-white/10 w-1'}`}
          />
        ))}
      </div>

      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col h-full justify-between"
          >
            <p className="text-xl md:text-2xl font-bold tracking-tight leading-snug text-white/90">
              {TESTIMONIALS[index].quote}
            </p>

            <div className="flex items-center justify-between mt-12">
              <div className="flex items-center gap-4">
                <img 
                  src={TESTIMONIALS[index].avatar} 
                  alt={TESTIMONIALS[index].author} 
                  className="w-10 h-10 rounded-full object-cover grayscale border border-white/5"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-tight text-white">{TESTIMONIALS[index].author}</span>
                  <span className="text-[10px] font-medium uppercase tracking-tight text-white/40">{TESTIMONIALS[index].company}</span>
                </div>
              </div>
              <div className="text-[10px] font-black italic tracking-tighter text-white/40 uppercase">
                {TESTIMONIALS[index].logo}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
