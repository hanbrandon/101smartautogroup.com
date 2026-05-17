'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
    currentTime: string;
    onContactClick?: () => void;
}

export const Navbar = ({ currentTime, onContactClick }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const phone = process.env.NEXT_PUBLIC_PHONE;
    const phoneHref = phone?.replace(/[^\d+]/g, '');

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    const menuItems = [
        {
            name: 'Home',
            href: '/',
            img: '/images/menu/home.png',
        },
        {
            name: 'Gallery',
            href: '/#gallery',
            img: '/images/menu/gallery.png',
        },
        {
            name: 'Process',
            href: '/#process',
            img: '/images/menu/process.png',
        },
        {
            name: 'Services',
            href: '/#services',
            img: '/images/menu/services.png',
        },
        {
            name: 'FAQ',
            href: '/#faq',
            img: '/images/menu/services.png',
        },
        {
            name: 'Contact Us',
            href: '/#contact',
            img: '/images/menu/process.png',
        },
        {
            name: 'Credit Application',
            href: '/credit-application',
            img: '/images/menu/credit.png',
        },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 pointer-events-none">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between relative pointer-events-auto">
                {/* Left: Logo */}
                <a href="/" className="flex flex-col items-center group py-1">
                    <span className="font-bold text-[18px] md:text-[20px] tracking-[-0.03em] text-red-600 uppercase leading-none text-center">
                        101 Auto Group
                    </span>
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] mt-1 text-center">
                        {process.env.NEXT_PUBLIC_MANAGER_NAME || 'Jake Kim'}
                    </span>
                </a>

                {/* Desktop: Morphing Menu */}
                <div
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        layout
                        initial={false}
                        animate={{
                            width: isOpen ? 340 : 160,
                            height: isOpen ? 'auto' : 56,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className={cn(
                            'bg-[#222222]/20 backdrop-blur-2xl overflow-hidden shadow-2xl',
                            isOpen ? 'rounded-[32px]' : 'rounded-[20px]',
                        )}
                    >
                        {/* Menu Header */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full flex items-center justify-center h-[56px] relative group"
                        >
                            <div className="flex items-center gap-[12px]">
                                <div className="text-white opacity-80">
                                    <GridIcon />
                                </div>
                                <div className="relative overflow-hidden h-[18px]">
                                    <div
                                        className={cn(
                                            'flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                                            isOpen
                                                ? '-translate-y-1/2'
                                                : 'group-hover:-translate-y-1/2',
                                        )}
                                    >
                                        <span className="text-[18px] font-bold text-white tracking-[-0.03em] uppercase leading-[18px] h-[18px] block">
                                            Menu
                                        </span>
                                        <span className="text-[18px] font-bold text-red-500 tracking-[-0.03em] uppercase leading-[18px] h-[18px] block">
                                            Menu
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* Menu Items */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col gap-1 pb-2 px-2 w-[340px]"
                                >
                                    <div className="h-[1px] bg-white/10 -mx-2 mb-2" />
                                    {menuItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => {
                                                const isHomePage = window.location.pathname === '/';
                                                if (item.href === '/') {
                                                    setIsOpen(false);
                                                    // Do NOT prevent default: allows standard browser refresh/navigation like the navbar logo
                                                } else if (item.href.startsWith('/#')) {
                                                    if (isHomePage) {
                                                        e.preventDefault();
                                                        setIsOpen(false);
                                                        const targetHash = item.href.replace('/', ''); // e.g. "#hero" or "#gallery"
                                                        if (window.location.hash === targetHash) {
                                                            const id = targetHash.replace('#', '');
                                                            const element = document.getElementById(id);
                                                            if (element) {
                                                                const top = element.getBoundingClientRect().top + window.scrollY;
                                                                window.scrollTo({ 
                                                                    top: top - 40, 
                                                                    behavior: 'smooth' 
                                                                });
                                                            }
                                                        } else {
                                                            window.location.hash = targetHash.replace('#', '');
                                                        }
                                                    } else {
                                                        setIsOpen(false);
                                                        window.location.href = item.href;
                                                    }
                                                } else {
                                                    setIsOpen(false);
                                                    window.location.href = item.href;
                                                }
                                            }}
                                            className="flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-white/5 transition-colors group"
                                        >
                                            <span className="text-[20px] font-medium text-white/60 group-hover:text-white transition-colors tracking-tight">
                                                {item.name}
                                            </span>
                                            <div className="w-16 h-11 rounded-xl overflow-hidden bg-white/5 relative opacity-40 group-hover:opacity-100 transition-opacity">
                                                <img
                                                    src={item.img}
                                                    alt=""
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        </a>
                                    ))}

                                    <div className="p-5 bg-white/[0.02] border-t border-white/5 rounded-b-[24px]">
                                        <div className="flex flex-col gap-3">
                                            <span className="text-[11px] font-medium uppercase tracking-widest text-white/20">
                                                Social media
                                            </span>
                                            <div className="flex flex-col gap-1">
                                                <a
                                                    href="https://www.facebook.com/kim.jake.315/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                                >
                                                    Facebook
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/goldenkeyautogroup/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                                >
                                                    Instagram
                                                </a>
                                                <a
                                                    href="https://www.threads.net/@goldenkeyautogroup"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                                >
                                                    Threads
                                                </a>
                                                <a
                                                    href="https://x.com/goldenkeyauto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                                >
                                                    The X
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Mobile: Toggle Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-[56px] px-6 bg-[#222222]/40 backdrop-blur-2xl rounded-[20px] flex items-center gap-3 text-white font-bold shadow-xl pointer-events-auto transition-all active:scale-95"
                    >
                        <div className="text-white opacity-80">
                            {isOpen ? <X size={18} /> : <GridIcon />}
                        </div>
                        <div className="relative overflow-hidden h-[18px]">
                            <div
                                className={cn(
                                    'flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                                    isOpen
                                        ? '-translate-y-1/2'
                                        : 'translate-y-0',
                                )}
                            >
                                <span className="text-[16px] font-bold text-white tracking-tight uppercase leading-[18px] h-[18px] block">
                                    Menu
                                </span>
                                <span className="text-[16px] font-bold text-white tracking-tight uppercase leading-[18px] h-[18px] block">
                                    Close
                                </span>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Mobile: Modal Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 200,
                            }}
                            className="md:hidden fixed top-[100px] left-6 right-6 bg-[#111111]/80 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto z-[101]"
                        >
                            <div className="flex flex-col p-2">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            const isHomePage = window.location.pathname === '/';
                                            if (item.href === '/') {
                                                setIsOpen(false);
                                                // Do NOT prevent default: allows standard browser refresh/navigation like the navbar logo
                                            } else if (item.href.startsWith('/#')) {
                                                if (isHomePage) {
                                                    e.preventDefault();
                                                    setIsOpen(false);
                                                    const targetHash = item.href.replace('/', ''); // e.g. "#hero" or "#gallery"
                                                    if (window.location.hash === targetHash) {
                                                        const id = targetHash.replace('#', '');
                                                        const element = document.getElementById(id);
                                                        if (element) {
                                                            const top = element.getBoundingClientRect().top + window.scrollY;
                                                            window.scrollTo({ 
                                                                top: top - 40, 
                                                                behavior: 'smooth' 
                                                            });
                                                        }
                                                    } else {
                                                        window.location.hash = targetHash.replace('#', '');
                                                    }
                                                } else {
                                                    setIsOpen(false);
                                                    window.location.href = item.href;
                                                }
                                            } else {
                                                setIsOpen(false);
                                                window.location.href = item.href;
                                            }
                                        }}
                                        className="flex items-center justify-between px-6 py-3 rounded-2xl hover:bg-white/5 transition-colors group"
                                    >
                                        <span className="text-[18px] font-medium text-white/60 group-hover:text-white transition-colors tracking-tight">
                                            {item.name}
                                        </span>
                                        <div className="w-14 h-10 rounded-xl overflow-hidden bg-white/5 relative opacity-60 group-hover:opacity-100 transition-opacity">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="p-4 bg-white/[0.02] border-t border-white/5 flex items-end justify-between mt-1">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                                        Social media
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <a
                                            href="https://www.facebook.com/kim.jake.315/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                        >
                                            Facebook
                                        </a>
                                        <a
                                            href="https://www.instagram.com/goldenkeyautogroup/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                        >
                                            Instagram
                                        </a>
                                        <a
                                            href="https://www.threads.net/@goldenkeyautogroup"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                        >
                                            Threads
                                        </a>
                                        <a
                                            href="https://x.com/goldenkeyauto"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                        >
                                            The X
                                        </a>
                                    </div>
                                </div>

                                {/* Mobile CTA */}
                                <a
                                    href={phoneHref ? `tel:${phoneHref}` : undefined}
                                    onClick={() => {
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-full font-bold text-[12px] shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95 transition-all group shrink-0 whitespace-nowrap cursor-pointer"
                                >
                                    <div className="w-3.5 h-3.5">
                                        <SparkleIcon />
                                    </div>
                                    <span>{phone || 'Get in touch'}</span>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right: CTA (Desktop Only) */}
                <a
                    href={phoneHref ? `tel:${phoneHref}` : undefined}
                    className="hidden md:flex items-center gap-[12px] bg-white text-[#030303] px-10 py-4 rounded-[20px] font-bold text-[18px] tracking-[-0.03em] leading-[1.1] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] group cursor-pointer"
                >
                    <div className="w-3 h-3 flex-shrink-0 transition-transform group-hover:rotate-90">
                        <SparkleIcon />
                    </div>
                    <span className="group-hover:animate-[blur-pulse_1.5s_ease-in-out_forwards]">
                        {phone || 'Get in touch'}
                    </span>
                </a>
            </div>
        </nav>
    );
};

// Helper Components
const GridIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="1.5" y="1.5" width="4" height="4" rx="1" fill="currentColor" />
        <rect x="8.5" y="1.5" width="4" height="4" rx="1" fill="currentColor" />
        <rect x="1.5" y="8.5" width="4" height="4" rx="1" fill="currentColor" />
        <rect x="8.5" y="8.5" width="4" height="4" rx="1" fill="currentColor" />
    </svg>
);

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
