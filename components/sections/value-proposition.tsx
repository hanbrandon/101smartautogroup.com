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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm md:text-base text-white/50 pt-12">
          <div className="space-y-4">
            <p className="font-bold text-white uppercase tracking-widest text-xs">The Mission.</p>
            <p className="leading-relaxed">As a premium car dealer in Los Angeles and Orange County, Jake Kim provides a transparent, hassle-free car buying and leasing experience. We negotiate the best auto deals to find the perfect vehicle for your lifestyle and budget.</p>
          </div>
          <div className="space-y-4">
            <p className="font-bold text-white uppercase tracking-widest text-xs">The Expertise.</p>
            <p className="leading-relaxed">From luxury imports to reliable daily drivers, our deep understanding of the SoCal market ensures you get the best value whether you're buying, leasing, selling, or trading in your car.</p>
          </div>
          <div className="space-y-4">
            <p className="font-bold text-white uppercase tracking-widest text-xs">The Advantage.</p>
            <p className="leading-relaxed">Skip the traditional dealership waiting game. We leverage our extensive dealer network to secure exclusive auto loan rates and offer seamless door-to-door vehicle delivery directly to your home or office.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
