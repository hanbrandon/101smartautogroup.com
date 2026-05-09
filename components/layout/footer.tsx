import {
    Moon,
    Sparkles,
    Instagram,
    Linkedin,
    ExternalLink,
} from 'lucide-react';

interface FooterProps {
    currentTime: string;
    onContactClick?: () => void;
}

export const Footer = ({ currentTime, onContactClick }: FooterProps) => {
    return (
        <footer className="relative pt-40 pb-0 overflow-hidden bg-black flex flex-col items-center">
            <div className="mx-auto px-6 w-full relative z-20 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-20">
                    <div className="md:col-span-2 flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <Moon className="w-3 h-3 text-white/40" />
                            <span className="text-[11px] font-bold text-white/40">
                                {currentTime}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight max-w-xs">
                            Your Premium Car Dealer in <br /> Los Angeles &
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
                            Policies
                        </span>
                        <div className="flex flex-col gap-2 font-bold text-sm text-white/60">
                            <a
                                href="/terms"
                                className="hover:text-white transition-colors uppercase"
                            >
                                Terms
                            </a>
                            <a
                                href="/privacy"
                                className="hover:text-white transition-colors uppercase"
                            >
                                Privacy
                            </a>
                            <a
                                href="/do-not-sell"
                                className="hover:text-white transition-colors uppercase"
                            >
                                Do Not Sell My Info
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] uppercase font-black tracking-widest text-white/20">
                            Contact
                        </span>
                        <div className="flex flex-col gap-4 text-xs text-white/60">
                            <div className="flex flex-col gap-1">
                                <span className="text-white font-bold">
                                    {process.env.NEXT_PUBLIC_MANAGER_NAME} (
                                    {process.env.NEXT_PUBLIC_MANAGER_TITLE})
                                </span>
                                <a
                                    href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, '')}`}
                                    className="hover:text-white transition-colors"
                                >
                                    P: {process.env.NEXT_PUBLIC_PHONE}
                                </a>
                                <a
                                    href={`tel:${process.env.NEXT_PUBLIC_OFFICE_PHONE?.replace(/\s/g, '')}`}
                                    className="hover:text-white transition-colors"
                                >
                                    O: {process.env.NEXT_PUBLIC_OFFICE_PHONE}
                                </a>
                                <a
                                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {process.env.NEXT_PUBLIC_EMAIL}
                                </a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="uppercase text-[9px] font-black tracking-widest text-white/20">
                                    Office
                                </span>
                                <span className="leading-relaxed">
                                    {process.env.NEXT_PUBLIC_OFFICE_ADDRESS}
                                </span>
                            </div>
                            <div className="flex items-center gap-4 pt-2 border-t border-white/5 mt-2">
                                <a
                                    href="#"
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                                >
                                    <Instagram size={14} />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                                >
                                    <Linkedin size={14} />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-32 pt-8 border-t border-white/5 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                    <div>2026 101 AUTO GROUP. ALL RIGHTS RESERVED.</div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                        <a
                            href="https://gawoori.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white/40 transition-colors"
                        >
                            DEVELOPED BY GAWOORI.COM
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
