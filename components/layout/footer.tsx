import { Moon, Sparkles } from 'lucide-react';

interface FooterProps {
    currentTime: string;
    onContactClick?: () => void;
}

export const Footer = ({ currentTime, onContactClick }: FooterProps) => {
    return (
        <footer className="relative pt-40 pb-0 overflow-hidden bg-black flex flex-col items-center">
            <div className="mx-auto px-6 w-full relative z-20 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
                    <div className="md:col-span-2 flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <Moon className="w-3 h-3 text-white/40" />
                            <span className="text-[11px] font-bold text-white/40">
                                {currentTime}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight max-w-xs">
                            Your Trusted Car Partner in <br /> Los Angeles &
                            Orange County.
                        </h3>
                        <button
                            onClick={onContactClick}
                            className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 w-fit hover:scale-105 transition-transform active:scale-95 shadow-2xl"
                        >
                            <Sparkles className="w-4 h-4" />
                            Get in touch
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-10 md:col-span-2">
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] uppercase font-black tracking-widest text-white/20">
                                Explore
                            </span>
                            <div className="flex flex-col gap-2 font-bold text-sm text-white/60">
                                <a
                                    href="/#hero"
                                    className="hover:text-white transition-colors"
                                >
                                    Home
                                </a>
                                <a
                                    href="/#gallery"
                                    className="hover:text-white transition-colors"
                                >
                                    Gallery
                                </a>
                                <a
                                    href="/#process"
                                    className="hover:text-white transition-colors"
                                >
                                    How it works
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] uppercase font-black tracking-widest text-white/20">
                                Socials
                            </span>
                            <div className="flex flex-col gap-2 font-bold text-sm text-white/60">
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Yelp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-32 pt-8 border-t border-white/5 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                    <div className="flex flex-col gap-1">
                        <span>2026 Jake Kim,</span>
                        <span>ALL RIGHTS RESERVED</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                        <a
                            href="/terms"
                            className="hover:text-white/40 transition-colors"
                        >
                            TERMS
                        </a>
                        <a
                            href="/privacy"
                            className="hover:text-white/40 transition-colors"
                        >
                            PRIVACY POLICY
                        </a>
                        <a
                            href="/do-not-sell"
                            className="hover:text-white/40 transition-colors"
                        >
                            DO NOT SELL MY PERSONAL INFORMATION
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative w-full pointer-events-none mb-[-4vw] flex justify-center items-end">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/80 to-transparent h-1/2" />
                <div
                    className="w-full"
                    style={{
                        aspectRatio: '3.29298',
                        background:
                            'linear-gradient(to top, rgba(220,0,0,0.6) 0%, rgba(180,0,0,0.1) 100%)',
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
        </footer>
    );
};
