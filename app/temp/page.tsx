"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Shield, Zap } from 'lucide-react';
import { Ticker } from '@/components/ui/ticker';
import { Navbar } from '@/components/layout/navbar';

export default function TempPage() {
    const [currentTime, setCurrentTime] = useState("");
    const heroRef = useRef<HTMLElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set time
        const updateTime = () => {
            const timeString = new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/Los_Angeles'
            });
            setCurrentTime(`${timeString} PST`);
        };
        updateTime();
        
        // Simulating image load
        const timer = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    return (
        <main className="bg-black min-h-screen text-white font-sans">
            <Navbar currentTime={currentTime} />
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
                        className="flex flex-col items-start gap-2"
                    >
                        <h1 className="text-[24px] md:text-[32px] font-[550] leading-[1.1] text-white select-none max-w-2xl tracking-[-0.02em] normal-case antialiased [font-feature-settings:'blwf'_on,'cv09'_on,'cv03'_on,'cv04'_on,'cv11'_on]">
                            Your Trusted Car Partner in <br />
                            <span className="text-white/60">
                                Los Angeles & Orange County
                            </span>
                            .
                            <br /> Finding the perfect drive for your lifestyle.
                        </h1>
                    </motion.div>
                </div>

                {/* Center/Bottom: HeroLogo - REMOVED AS REQUESTED */}

                {/* Bottom Bar */}
                <div className="relative z-30 w-full max-w-7xl mx-auto flex justify-between items-end px-6 mb-2">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                                Premium Automotive Expert
                            </span>
                            <div className="flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 rounded-md backdrop-blur-md">
                                {(() => {
                                    const hour = new Date().getHours();
                                    const isNight = hour >= 20 || hour < 6;
                                    return isNight ? (
                                        <Shield className="w-3 h-3 text-white/60" />
                                    ) : (
                                        <Zap className="w-3 h-3 text-white/60" />
                                    );
                                })()}
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">
                                    {new Date().getHours() >= 20 ||
                                    new Date().getHours() < 6
                                        ? 'Currently Resting'
                                        : 'In Deep Focus'}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-[11px] font-bold text-white/80 tracking-tight">
                            <span>{currentTime}</span>
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ y: 5 }}
                        className="flex flex-col items-center gap-3 cursor-pointer group"
                    >
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 group-hover:text-white transition-colors animate-pulse">
                            Scroll to explore
                        </span>
                        <div className="w-8 h-12 border border-white/10 rounded-full flex justify-center p-2 relative overflow-hidden backdrop-blur-sm">
                            <motion.div
                                animate={{
                                    y: [0, 16, 0],
                                    opacity: [0.2, 1, 0.2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="w-1 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="w-full absolute bottom-0 left-0 bg-white/5 backdrop-blur-md border-t border-white/5">
                    <Ticker text="Quality & Trust" dark={true} />
                </div>
            </section>
        </main>
    );
}
