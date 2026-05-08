"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, ArrowDown, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTime: string;
}

export const Navbar = ({ currentTime }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/#hero", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=300" },
    { name: "Process", href: "/#process", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300" },
    { name: "Services", href: "/#services", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300" },
    { name: "Gallery", href: "/#gallery", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=300" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-black font-black text-xl md:text-2xl italic tracking-tighter">1</span>
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tighter text-white whitespace-nowrap">101 Auto Group</span>
          </a>
          
          <button 
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="bg-white/5 backdrop-blur-2xl border border-white/5 rounded-[20px] px-6 py-3.5 flex items-center gap-3 text-base font-bold text-white hover:bg-white/10 transition-all active:scale-95 group shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            Menu
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black overflow-hidden flex flex-col text-white"
          >
            <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-red-600/40 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-[-5vw] left-0 w-full flex justify-center pointer-events-none opacity-20">
              <span className="text-[40vw] font-black tracking-tighter leading-none text-white mix-blend-overlay select-none">JAKE</span>
            </div>

            <div className="relative z-10 flex justify-between items-center px-6 py-6 md:py-8">
              <a href="/" className="flex items-center gap-3 cursor-pointer">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-black font-black text-xl md:text-2xl italic tracking-tighter">1</span>
                </div>
                <span className="text-white font-bold tracking-tighter text-xl md:text-2xl whitespace-nowrap">101 Auto Group</span>
              </a>
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-xl border border-white/10 px-6 py-3.5 rounded-[20px] flex items-center gap-3 text-base font-bold text-white shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                Close
              </button>
            </div>

            <div className="relative z-10 flex-1 px-4 py-0 flex flex-col max-w-lg mx-auto w-full">
              <div className="bg-[#0A0A0A] rounded-[40px] overflow-hidden border border-white/5 p-3 flex flex-col gap-1 shadow-2xl mt-4 md:mt-10">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center p-4 rounded-3xl hover:bg-white/5 transition-colors group border-b border-white/5 last:border-0"
                  >
                    <span className="text-xl font-bold tracking-tight text-white">{item.name}</span>
                    <div className="w-16 h-11 rounded-xl overflow-hidden bg-white/10 relative">
                      <img src={item.img} alt="" className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </motion.a>
                ))}

                <div className="p-6 pt-10 flex justify-between items-end bg-gradient-to-b from-transparent to-white/[0.02]">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">Social media</span>
                    <div className="flex flex-col gap-1.5">
                      <a href="#" className="text-xs font-bold text-white/60 hover:text-white transition-colors">Instagram</a>
                      <a href="#" className="text-xs font-bold text-white/60 hover:text-white transition-colors">LinkedIn</a>
                      <a href="#" className="text-xs font-bold text-white/60 hover:text-white transition-colors">Yelp</a>
                    </div>
                  </div>
                  <button className="bg-white text-black px-5 py-3.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all shadow-xl">
                    <Sparkles className="w-3.5 h-3.5 fill-black" />
                    Get in touch
                  </button>
                </div>
              </div>

              <div className="mt-8 pb-8 pt-4 flex flex-col gap-5">
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Premium Automotive Services in LA & OC</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <Moon className="w-3 h-3 text-white/40" />
                    </div>
                    <span className="text-xs font-bold text-white/80">{currentTime}</span>
                  </div>
                  <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsOpen(false)}>
                    <span className="text-xs font-bold text-white/40 group-hover:text-white transition-colors tracking-tight">Scroll to explore</span>
                    <ArrowDown className="w-4 h-4 text-white/40 group-hover:translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
