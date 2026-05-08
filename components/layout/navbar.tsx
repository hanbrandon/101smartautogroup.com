"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Plus, LayoutGrid, ChevronDown, Instagram, Linkedin, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  currentTime: string;
  onContactClick?: () => void;
}

export const Navbar = ({ currentTime, onContactClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/#hero" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Process", href: "/#process" },
    { name: "Services", href: "/#services" },
    { name: "Credit Application", href: "/credit-application" },
    { name: "Privacy", href: "/do-not-sell" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4",
      scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-black font-black text-xl italic tracking-tighter">1</span>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="font-bold text-lg tracking-tighter text-white uppercase leading-none">101 Smart</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">Auto Group</span>
          </div>
        </a>

        {/* Center: Menu Button */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex items-center gap-4 bg-[#0D0D0D] border border-white/10 rounded-full px-5 py-2.5 transition-all hover:border-white/20 active:scale-95 group",
              isOpen ? "border-white/40 bg-white/10" : ""
            )}
          >
            <div className="flex items-center gap-2">
              <LayoutGrid size={14} className={cn("transition-transform duration-500", isOpen ? "rotate-90 text-orange-500" : "text-white/40")} />
              <span className="text-xs font-bold uppercase tracking-widest text-white">Menu</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest whitespace-nowrap">
              2/5 slots for May
            </span>
            <ChevronDown size={14} className={cn("transition-transform duration-500 text-white/40", isOpen ? "rotate-180" : "")} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="absolute top-full mt-4 w-[280px] bg-[#0D0D0D] border border-white/10 rounded-[32px] p-2 shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col gap-1">
                  {menuItems.map((item, i) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">{item.name}</span>
                      <Plus size={14} className="text-white/0 group-hover:text-white/40 transition-all group-hover:rotate-90" />
                    </a>
                  ))}
                </div>
                
                <div className="mt-2 p-6 bg-white/[0.02] border-t border-white/5 rounded-b-[24px]">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Socials</span>
                    <div className="flex gap-4">
                      <Instagram size={14} className="text-white/40 hover:text-white cursor-pointer" />
                      <Linkedin size={14} className="text-white/40 hover:text-white cursor-pointer" />
                      <Globe size={14} className="text-white/40 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                  <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest leading-relaxed">
                    Based in Los Angeles & Orange County
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: CTA */}
        <button 
          onClick={onContactClick}
          className="hidden md:flex items-center gap-3 bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
        >
          <Plus size={16} />
          Get in touch
        </button>

        {/* Mobile Contact Button (Icon only) */}
        <button 
          onClick={onContactClick}
          className="md:hidden w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
        >
          <Plus size={20} />
        </button>

      </div>
    </nav>
  );
};
