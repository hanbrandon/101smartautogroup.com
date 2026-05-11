'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { Shield, Zap, ArrowDown } from 'lucide-react';
import { Ticker } from '@/components/ui/ticker';

export const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        // Fallback for iframe loading
        const timer = setTimeout(() => setIsLoaded(true), 1500);
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
            className="sticky top-0 h-screen flex flex-col items-center py-10 overflow-hidden z-0 bg-black"
        >
            <div
                className={`absolute inset-0 z-0 pointer-events-none scale-110 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <div className="w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full animate-pulse" />
                    </div>
                )}
                <iframe
                    src="https://gradientshader-nine.vercel.app/"
                    onLoad={() => setIsLoaded(true)}
                    className="w-full h-full border-none opacity-100 contrast-125 saturate-150 shadow-inner"
                    style={{
                        filter: 'brightness(1.2) saturate(1.2)',
                    }}
                    title="Background Gradient"
                    referrerPolicy="no-referrer"
                    sandbox="allow-same-origin allow-scripts"
                />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] pointer-events-none"></div>
            </div>

            {/* Top Content: HeroIntroHeading */}
            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex flex-col items-start gap-2"
                >
                    <h1 className="text-[36px] md:text-[32px] font-[550] leading-[1.05] text-white select-none max-w-2xl tracking-[-0.03em] normal-case antialiased [font-feature-settings:'blwf'_on,'cv09'_on,'cv03'_on,'cv04'_on,'cv11'_on]">
                        <span className="text-red-600">Your Premium Car Dealer in</span> <br />
                        <span className="text-white/60">
                            Los Angeles & Orange County
                        </span>
                        .
                        <br />
                        <span className="text-[16px] md:text-[18px] opacity-60 font-medium block mt-4 leading-relaxed">
                            Expert car buying, leasing, and auto financing services.
                        </span>
                    </h1>
                </motion.div>
            </div>

            {/* Status & Scroll Bar - Positioned right above the 'MOTOR' text (Middle of screen) */}
            <div className="absolute inset-x-0 bottom-[18vw] md:bottom-[20vw] z-40 w-full mx-auto px-6 flex justify-between items-end pointer-events-none">
                <div className="flex items-center gap-4 pointer-events-auto">
                    <div className="text-[11px] md:text-[10px] font-medium uppercase tracking-[0.2em] flex items-center gap-4">
                        <span className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer flex items-center gap-4">
                            <span>101 Auto Group • Jake Kim</span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>Expert Car Dealer • LA & OC</span>
                        </span>
                    </div>
                </div>

                <div
                    className="flex flex-col items-center gap-3 cursor-pointer group pointer-events-auto"
                    onClick={() => { window.location.href = '/#gallery'; }}
                >
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] md:text-[10px] uppercase font-bold tracking-[0.2em] relative overflow-hidden">
                            <span className="bg-gradient-to-r from-white/20 via-white to-white/20 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer flex items-center gap-2">
                                Scroll to explore
                            </span>
                        </span>
                        <ArrowDown className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>

            {/* Center/Bottom: HeroLogo - MIDU-style layering */}
            {/* Layer 1: color-dodge parent blends with the background shader */}
            <div
                className={`absolute inset-x-0 bottom-0 z-10 pointer-events-none overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                    mixBlendMode: 'color-dodge',
                    bottom: '-3vw',
                }}
            >
                {/* Layer 2: darken mask with radial gradient - MIDU technique */}
                <div
                    className="w-full"
                    style={{
                        aspectRatio: '3.29298',
                        mixBlendMode: 'darken',
                        background:
                            'radial-gradient(56% 156% at 47.1% 1.9%, rgba(255,255,255,0) 0%, rgba(217,182,182,1) 100%)',
                        WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 365"><text x="50%" y="88%" text-anchor="middle" font-family="Switzer,Inter,sans-serif" font-weight="900" font-size="300" letter-spacing="0em" fill="white">MOTOR</text></svg>')}")`,
                        WebkitMaskSize: 'cover',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 365"><text x="50%" y="88%" text-anchor="middle" font-family="Switzer,Inter,sans-serif" font-weight="900" font-size="300" letter-spacing="0em" fill="white">MOTOR</text></svg>')}")`,
                        maskSize: 'cover',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                    }}
                />
            </div>
        </section>
    );
};
