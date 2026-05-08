"use client";

import { motion } from 'motion/react';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';
import { TOOLS } from '@/constants';

export const Partner = () => {
  return (
    <section className="py-40 border-y border-white/10 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold tracking-[-0.04em] text-center leading-[0.9] max-w-4xl mx-auto mb-24 text-balance"
        >
          A partner you can trust. <br />
          <span className="text-white/25">High standards. Reliable delivery.</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-x-6">
          {/* Left Card: Static Stats */}
          <div className="lg:col-span-4 p-10 md:p-12 rounded-[40px] bg-[#0D0D0D] border border-white/5 flex flex-col justify-between min-h-[400px] group hover:border-white/10 transition-all">
            <div className="text-8xl md:text-9xl font-serif text-white/5 select-none transition-transform group-hover:scale-110">“</div>
            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Trusted by 100+ <br />car owners.</h3>
              <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/20">Why drivers trust Jake Kim</p>
            </div>
          </div>

          {/* Right Card: Carousel */}
          <div className="lg:col-span-8 p-10 md:p-12 rounded-[40px] bg-[#0D0D0D] border border-white/5 flex flex-col min-h-[400px] group hover:border-white/10 transition-all">
            <TestimonialCarousel />
          </div>
        </div>
      </div>

      <div className="flex animate-ticker whitespace-nowrap opacity-40 mt-20 select-none">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center px-10">
            {TOOLS.map(tool => (
              <div key={tool.name} className="flex items-center gap-4 filter grayscale invert brightness-200">
                <img src={tool.icon} alt={tool.name} className="h-8 w-auto" />
                <span className="text-2xl font-bold tracking-tighter">{tool.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
