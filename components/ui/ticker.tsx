"use client";

import { ArrowRight } from "lucide-react";

interface TickerProps {
  text: string;
  dark?: boolean;
}

export const Ticker = ({ text, dark = false }: TickerProps) => (
  <div className={`overflow-hidden whitespace-nowrap py-4 border-y ${dark ? 'border-white/10' : 'border-black/5'}`}>
    <div className="flex animate-ticker whitespace-nowrap">
      {[...Array(20)].map((_, i) => (
        <span key={i} className="flex items-center mx-4 gap-4">
          <span className="text-xs font-bold uppercase tracking-widest">{text}</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      ))}
    </div>
  </div>
);
