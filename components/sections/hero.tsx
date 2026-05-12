'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Shield, Zap, ArrowDown } from 'lucide-react';

export const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulating image load
        const timer = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    return (
        <section
            id="hero"
            ref={heroRef}
            className="sticky top-0 h-screen flex flex-col items-center justify-between py-10 overflow-hidden z-0 bg-black"
        >
            <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                {/* Desktop Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                    style={{
                        backgroundImage: 'url("/hero-desktop.png")',
                        filter: 'brightness(0.4)'
                    }}
                />
                
                {/* Mobile Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
                    style={{
                        backgroundImage: 'url("/hero-mobile.png")',
                        filter: 'brightness(0.4)'
                    }}
                />

                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>

            {/* Top Content: HeroIntroHeading */}
            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex flex-col items-start gap-4"
                >
                    {/* Status Text Moved Above Title */}
                    <div className="text-[13px] md:text-[14px] font-medium uppercase tracking-[0.2em] flex items-center gap-4">
                        <span className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer flex items-center gap-4">
                            <span>101 Auto Group • Jake Kim</span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>Expert Car Dealer • LA & OC</span>
                        </span>
                    </div>

                    <h1 className="text-[40px] md:text-[48px] font-[550] leading-[1.05] text-white select-none max-w-3xl tracking-[-0.03em] normal-case antialiased [font-feature-settings:'blwf'_on,'cv09'_on,'cv03'_on,'cv04'_on,'cv11'_on]">
                        <motion.span 
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="text-red-600 inline-block"
                        >
                            Your Premium Car Dealer in
                        </motion.span> 
                        <br />
                        <motion.span 
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="text-white/60 inline-block"
                        >
                            Los Angeles & Orange County
                        </motion.span>
                        .
                        <br />
                        <motion.span 
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="text-[18px] md:text-[22px] opacity-60 font-medium block mt-4 leading-relaxed"
                        >
                            Expert car buying, leasing, and auto financing services.
                        </motion.span>
                    </h1>
                </motion.div>
            </div>

            {/* Scroll Button - Moved to Center Bottom */}
            <div className="relative z-30 w-full flex justify-center items-center pb-8">
                <motion.div
                    whileHover={{ y: 5 }}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                    onClick={() => {
                        const element = document.getElementById('featured');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[13px] md:text-[14px] uppercase font-bold tracking-[0.2em] relative overflow-hidden">
                            <span className="bg-gradient-to-r from-white/20 via-white to-white/20 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer flex items-center gap-2">
                                Scroll to explore
                            </span>
                        </span>
                        <ArrowDown className="w-3 h-4 text-white/40 group-hover:text-white transition-colors animate-bounce" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
