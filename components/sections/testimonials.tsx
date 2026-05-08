"use client";

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Jake made finding my new BMW in Irvine so easy. No pressure, just honest advice and a great deal. Highly recommended for anyone in OC!",
    author: "Sarah J.",
    location: "Irvine, OC",
    role: "BMW X5 Owner"
  },
  {
    quote: "Best car buying experience in LA. Jake found exactly the spec I wanted for my Porsche when no one else could. Professional from start to finish.",
    author: "Michael R.",
    location: "Santa Monica, LA",
    role: "Porsche 911 Owner"
  },
  {
    quote: "Transparent, fast, and reliable. I've bought three cars through Jake now, and I wouldn't go anywhere else in Southern California.",
    author: "David K.",
    location: "Newport Beach, OC",
    role: "Repeat Client"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-40 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-none"
          >
            What our clients <br /> in SoCal say.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xs text-sm uppercase tracking-widest font-bold opacity-50"
          >
            Real stories from real drivers across Los Angeles and Orange County.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-black/10">
                <p className="font-bold text-lg">{t.author}</p>
                <p className="text-sm opacity-50">{t.role} • {t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
