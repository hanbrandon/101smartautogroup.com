'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
    currentTime: string;
    onContactClick?: () => void;
}

export const Navbar = ({ currentTime, onContactClick }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
            href: '/#hero',
            img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=300',
        },
        {
            name: 'Gallery',
            href: '/#gallery',
            img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=300',
        },
        {
            name: 'Process',
            href: '/#process',
            img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300',
        },
        {
            name: 'Services',
            href: '/#services',
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300',
        },
        {
            name: 'Credit Application',
            href: '/credit-application',
            img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=300',
        },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 pointer-events-none">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between relative pointer-events-auto">
                {/* Left: Logo */}
                <a href="/" className="flex flex-col items-center group py-1">
                    <span className="font-bold text-[18px] md:text-[20px] tracking-[-0.03em] text-white uppercase leading-none text-center">
                        101 Smart Auto Group
                    </span>
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] mt-1 text-center">
                        {process.env.NEXT_PUBLIC_MANAGER_NAME || 'Jake Kim'}
                    </span>
                </a>

                {/* Center: Morphing Menu */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0"
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
                        {/* Menu Header (Always visible & pinned to top) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full flex items-center justify-center h-[56px] relative group"
                        >
                            <div className="flex items-center gap-[12px]">
                                <div className="text-white opacity-80">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="1.5"
                                            y="1.5"
                                            width="4"
                                            height="4"
                                            rx="1"
                                            fill="currentColor"
                                        />
                                        <rect
                                            x="8.5"
                                            y="1.5"
                                            width="4"
                                            height="4"
                                            rx="1"
                                            fill="currentColor"
                                        />
                                        <rect
                                            x="1.5"
                                            y="8.5"
                                            width="4"
                                            height="4"
                                            rx="1"
                                            fill="currentColor"
                                        />
                                        <rect
                                            x="8.5"
                                            y="8.5"
                                            width="4"
                                            height="4"
                                            rx="1"
                                            fill="currentColor"
                                        />
                                    </svg>
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

                        {/* Menu Items (Visible when open) */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col gap-1 pb-2 px-2 w-[340px]"
                                >
                                    <div className="h-[1px] bg-white/10 -mx-2 mb-2" />
                                    {menuItems.map((item, i) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
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
                                                    href="#"
                                                    className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                                >
                                                    Instagram
                                                </a>
                                                <a
                                                    href="#"
                                                    className="text-[14px] font-medium text-white/40 hover:text-white transition-colors"
                                                >
                                                    LinkedIn
                                                </a>
                                                <a
                                                    href="#"
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

                {/* Right: CTA */}
                <button
                    onClick={onContactClick}
                    className="hidden md:flex items-center gap-[12px] bg-white text-[#030303] px-10 py-4 rounded-[20px] font-bold text-[18px] tracking-[-0.03em] leading-[1.1] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] group"
                >
                    <div className="w-3 h-3 flex-shrink-0 transition-transform group-hover:rotate-90">
                        <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <path
                                d="M11.762 5.697L10.043 5.205C8.469 4.762 7.238 3.531 6.795 1.958L6.302 0.238C6.252 0.115 6.132 0.035 5.999 0.035C5.866 0.035 5.747 0.115 5.696 0.238L5.205 1.958C4.762 3.531 3.531 4.762 1.958 5.205L0.238 5.697C0.102 5.735 0.009 5.859 0.009 6C0.009 6.141 0.102 6.265 0.238 6.303L1.957 6.794C3.531 7.238 4.761 8.468 5.204 10.042L5.696 11.762C5.735 11.897 5.858 11.99 5.999 11.99C6.14 11.99 6.264 11.897 6.302 11.762L6.794 10.043C7.237 8.469 8.467 7.238 10.041 6.795L11.761 6.303C11.896 6.265 11.99 6.141 11.99 6C11.99 5.859 11.896 5.735 11.761 5.697Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <span className="group-hover:animate-[blur-pulse_1.5s_ease-in-out_forwards]">
                        Get in touch
                    </span>
                </button>
            </div>
        </nav>
    );
};
