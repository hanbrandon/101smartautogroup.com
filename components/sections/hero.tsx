'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { Shield, Zap } from 'lucide-react';
import { Ticker } from '@/components/ui/ticker';

interface HeroProps {
    currentTime: string;
}

export const Hero = ({ currentTime }: HeroProps) => {
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
            className={`sticky top-0 h-screen flex flex-col items-center justify-between py-10 overflow-hidden z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Background Gradient Animation Iframe */}
            <div className="absolute inset-0 z-0 pointer-events-none scale-110">
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
                        filter: 'hue-rotate(25deg) brightness(1.2) saturate(1.2)',
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

            {/* Center/Bottom: HeroLogo - MIDU-style layering */}
            {/* Layer 1: color-dodge parent blends with the background shader */}
            <div
                className="absolute inset-x-0 bottom-0 z-10 pointer-events-none overflow-hidden"
                style={{
                    mixBlendMode: 'color-dodge',
                    bottom: '4vw',
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
                        WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 365"><text x="50%" y="88%" text-anchor="middle" font-family="Switzer,Inter,sans-serif" font-weight="900" font-size="420" letter-spacing="-0.08em" fill="white">JAKE</text></svg>')}")`,
                        WebkitMaskSize: 'cover',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 365"><text x="50%" y="88%" text-anchor="middle" font-family="Switzer,Inter,sans-serif" font-weight="900" font-size="420" letter-spacing="-0.08em" fill="white">JAKE</text></svg>')}")`,
                        maskSize: 'cover',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                    }}
                />
            </div>

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
                    onClick={() =>
                        document
                            .getElementById('projects')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
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
    );
};
