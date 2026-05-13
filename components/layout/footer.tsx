'use client';

import { Sparkles } from 'lucide-react';
import { FaInstagram, FaThreads, FaXTwitter, FaFacebook } from "react-icons/fa6";

interface FooterProps {
    currentTime: string;
    onContactClick?: () => void;
}

export const Footer = ({ currentTime, onContactClick }: FooterProps) => {
    const managerName = process.env.NEXT_PUBLIC_MANAGER_NAME;
    const managerTitle = process.env.NEXT_PUBLIC_MANAGER_TITLE;
    const phone = process.env.NEXT_PUBLIC_PHONE;
    const officePhone = process.env.NEXT_PUBLIC_OFFICE_PHONE;
    const email = process.env.NEXT_PUBLIC_EMAIL;
    const phoneHref = phone?.replace(/[^\d+]/g, '');
    const officePhoneHref = officePhone?.replace(/[^\d+]/g, '');

    return (
        <footer className="relative pt-40 pb-0 overflow-hidden bg-black flex flex-col items-center">
            <div className="mx-auto px-6 w-full relative z-20 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-20">
                    <div className="md:col-span-2 flex flex-col gap-8">
                        <h3 className="text-2xl font-bold tracking-tight max-w-xs">
                            <span className="text-red-600">Your Premium Car Dealer in</span> <br /> Los Angeles &
                            Orange County.
                        </h3>
                        <a
                            href={phoneHref ? `tel:${phoneHref}` : undefined}
                            className="flex items-center gap-[12px] bg-white text-[#030303] px-10 py-4 rounded-[20px] font-bold text-[18px] tracking-[-0.03em] leading-[1.1] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] group w-fit cursor-pointer"
                        >
                            <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                            Get in touch
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-sm font-medium text-white/20">
                            Explore
                        </span>
                        <div className="flex flex-col gap-2 text-lg text-white/60">
                            <a
                                href="/#hero"
                                onClick={(e) => { e.preventDefault(); window.location.hash = '#hero'; }}
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="/#gallery"
                                onClick={(e) => { e.preventDefault(); window.location.hash = '#gallery'; }}
                                className="hover:text-white transition-colors"
                            >
                                Gallery
                            </a>
                            <a
                                href="/#process"
                                onClick={(e) => { e.preventDefault(); window.location.hash = '#process'; }}
                                className="hover:text-white transition-colors"
                            >
                                Process
                            </a>
                            <a
                                href="/#services"
                                onClick={(e) => { e.preventDefault(); window.location.hash = '#services'; }}
                                className="hover:text-white transition-colors"
                            >
                                Services
                            </a>
                            <a
                                href="/#faq"
                                onClick={(e) => { e.preventDefault(); window.location.hash = '#faq'; }}
                                className="hover:text-white transition-colors"
                            >
                                FAQ
                            </a>
                            <a
                                href="/#contact"
                                onClick={(e) => { e.preventDefault(); window.location.hash = '#contact'; }}
                                className="hover:text-white transition-colors"
                            >
                                Contact Us
                            </a>
                            <a
                                href="/credit-application"
                                className="hover:text-white transition-colors"
                            >
                                Credit Application
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-sm font-medium text-white/20">
                            Policies
                        </span>
                        <div className="flex flex-col gap-2 text-lg text-white/60">
                            <a
                                href="/terms"
                                className="hover:text-white transition-colors"
                            >
                                Terms
                            </a>
                            <a
                                href="/privacy"
                                className="hover:text-white transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="/do-not-sell"
                                className="hover:text-white transition-colors"
                            >
                                Do not sell my info
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-sm font-medium text-white/20">
                            Contact
                        </span>
                        <div className="flex flex-col gap-6 text-base text-white/60">
                            <div className="flex flex-col gap-1">
                                {(managerName || managerTitle) && (
                                    <span className="text-white">
                                        {[managerName, managerTitle && `(${managerTitle})`]
                                            .filter(Boolean)
                                            .join(' ')}
                                    </span>
                                )}
                                {phone && (
                                    <a
                                        href={phoneHref ? `tel:${phoneHref}` : undefined}
                                        className="hover:text-red-500 transition-colors"
                                    >
                                        P: {phone}
                                    </a>
                                )}
                                {officePhone && (
                                    <a
                                        href={
                                            officePhoneHref
                                                ? `tel:${officePhoneHref}`
                                                : undefined
                                        }
                                        className="hover:text-red-500 transition-colors"
                                    >
                                        O: {officePhone}
                                    </a>
                                )}
                                {email && (
                                    <a
                                        href={`mailto:${email}`}
                                        className="hover:text-red-500 transition-colors"
                                    >
                                        {email}
                                    </a>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-medium text-white/20">
                                    Office
                                </span>
                                <span className="leading-relaxed text-base">
                                    936 Crenshaw Blvd. #303 <br />
                                    Los Angeles, CA 90019
                                </span>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <a
                                    href="https://www.facebook.com/kim.jake.315/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-red-600"
                                >
                                    <FaFacebook size={14} />
                                </a>
                                <a
                                    href="https://www.instagram.com/goldenkeyautogroup/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-red-600"
                                >
                                    <FaInstagram size={14} />
                                </a>
                                <a
                                    href="https://www.threads.net/@goldenkeyautogroup"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-red-600"
                                >
                                    <FaThreads size={14} />
                                </a>
                                <a
                                    href="https://x.com/goldenkeyauto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-red-600"
                                >
                                    <FaXTwitter size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-32 pt-8 border-t border-white/5 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                    <div>2026 <span className="text-red-600">101 AUTO GROUP</span>. ALL RIGHTS RESERVED.</div>
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
