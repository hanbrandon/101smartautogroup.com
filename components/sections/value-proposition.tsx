"use client";

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ValueProposition = () => {
  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-20 text-center md:text-left"
        >
          Finding the right car <br /> should be as smooth as <br /> the drive itself.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm md:text-base text-white/50 border-t border-white/10 pt-12">
          <div className="space-y-4">
            <p className="font-bold text-white uppercase tracking-widest text-xs">The Mission.</p>
            <p className="leading-relaxed">Based in Los Angeles and Orange County, Jake Kim is dedicated to providing a transparent and personalized car buying experience. We don't just sell cars; we find the perfect match for your lifestyle and budget.</p>
          </div>
          <div className="space-y-4">
            <p className="font-bold text-white uppercase tracking-widest text-xs">The Expertise.</p>
            <p className="leading-relaxed">From luxury imports to reliable daily drivers, our deep understanding of the SoCal market ensures you get the best value whether you're buying, selling, or trading in.</p>
            <p className="font-bold text-white uppercase tracking-widest text-xs pt-4 flex items-center gap-2 cursor-pointer hover:gap-4 transition-all group">
              <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </span>
              View our services
            </p>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};
