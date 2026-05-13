'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Shield, Zap, ArrowDown, Phone } from 'lucide-react';

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
                        <span className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer flex flex-wrap items-center gap-x-4 gap-y-1">
                            <span className="whitespace-nowrap">101 Auto Group</span>
                            <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                            <span className="whitespace-nowrap">Jake Kim</span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>LA & OC | Car Dealer & Auto Leasing</span>
                        </span>
                    </div>

                    <h1 className="text-[40px] md:text-[48px] font-[550] leading-[1.05] text-white select-none max-w-3xl tracking-[-0.03em] normal-case antialiased [font-feature-settings:'blwf'_on,'cv09'_on,'cv03'_on,'cv04'_on,'cv11'_on]">
                        <motion.span 
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="text-red-600 inline-block"
                        >
                            Los Angeles & <br className="md:hidden" /> Orange County
                        </motion.span> 
                        <br />
                        <motion.span 
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="text-white/60 inline-block"
                        >
                            Car Dealer & <br className="md:hidden" /> Auto Leasing
                        </motion.span>
                        <br />
                        <motion.span 
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="text-[18px] md:text-[22px] opacity-60 font-medium block mt-4 leading-relaxed"
                        >
                            Luxury sourcing, financing, trade-in, and delivery support.
                        </motion.span>

                        {/* Mobile Phone Button */}
                        <div className="md:hidden mt-10 w-full">
                            <a 
                                href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/[^\d+]/g, '')}`}
                                className="inline-flex items-center gap-3 bg-white text-[#030303] px-8 py-4 rounded-[20px] font-bold text-[16px] tracking-[-0.03em] leading-[1.1] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] group cursor-pointer"
                            >
                                <div className="w-3 h-3 flex-shrink-0">
                                    <SparkleIcon />
                                </div>
                                <span>{process.env.NEXT_PUBLIC_PHONE}</span>
                            </a>
                        </div>
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

const SparkleIcon = () => (
    <svg
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <path
            d="M11.762 5.697L10.043 5.205C8.469 4.762 7.238 3.531 6.795 1.958L6.302 0.238C6.252 0.115 6.132 0.035 5.999 0.035C5.866 0.035 5.747 0.115 5.696 0.238L5.205 1.958C4.762 3.531 3.531 4.762 1.958 5.205L0.238 5.697C0.102 5.735 0.009 5.859 0.009 6C0.009 6.141 0.102 6.265 0.238 6.303L1.957 6.794C3.531 7.238 4.761 8.468 5.204 10.042L5.696 11.762C5.735 11.897 5.858 11.99 5.999 11.99C6.14 11.99 6.264 11.897 6.302 11.762L6.794 10.043C7.237 8.469 8.467 7.238 10.041 6.795L11.761 6.303C11.896 6.265 11.99 6.141 11.99 6C11.99 5.859 11.896 5.735 11.761 5.697Z"
            fill="currentColor"
        />
    </svg>
);
