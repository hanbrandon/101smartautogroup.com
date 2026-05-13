"use client";

import { motion } from 'motion/react';
import { FaInstagram, FaThreads, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { SectionHeader } from '@/components/ui/section-header';
import { INSTAGRAM_POSTS } from '@/constants';

export const InstagramGallery = () => {
  return (
    <section id="instagram" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Recent highlights. Follow our journey."
          subtitle="Explore our latest deliveries, rare finds, and the lifestyle behind the drive. We share real-time updates across our social channels."
        />

        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {INSTAGRAM_POSTS.slice(0, 9).map((post, i) => (
            <motion.a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative aspect-square rounded-[12px] md:rounded-[24px] overflow-hidden bg-white/5",
                i >= 4 && "md:hidden lg:hidden" // Only show 4 on desktop/tablet
              )}
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
                <FaInstagram className="w-8 h-8 mb-4" />
                <h4 className="text-sm font-bold leading-tight">{post.title}</h4>
                <p className="text-[10px] uppercase tracking-widest mt-2 text-white/60">{post.category}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Follow us at</span>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/kim.jake.315/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <FaFacebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/goldenkeyautogroup/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href="https://www.threads.net/@goldenkeyautogroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <FaThreads size={18} />
            </a>
            <a 
              href="https://x.com/goldenkeyauto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
