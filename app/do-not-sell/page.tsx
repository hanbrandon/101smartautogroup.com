"use client";

import { useState, useEffect } from "react";
import { useCurrentTime } from "@/hooks/use-current-time";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ShieldCheck, Zap, CheckCircle2, Loader2, Scale, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function DoNotSellPage() {
  const currentTime = useCurrentTime();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isOptedOut, setIsOptedOut] = useState(false);

  useEffect(() => {
    const optedOut = localStorage.getItem('101-privacy-opt-out');
    if (optedOut === 'true') setIsOptedOut(true);
    
    // @ts-ignore
    if (navigator.globalPrivacyControl === true) {
      localStorage.setItem('101-privacy-opt-out', 'true');
      setIsOptedOut(true);
    }
  }, []);

  const handleOptOut = () => {
    setStatus('loading');
    setTimeout(() => {
      localStorage.setItem('101-privacy-opt-out', 'true');
      setIsOptedOut(true);
      setStatus('idle');
    }, 800);
  };

  const handleReset = () => {
    localStorage.removeItem('101-privacy-opt-out');
    setIsOptedOut(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentTime={currentTime} />

      <main className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-16">
            <div className="flex items-center gap-3 text-orange-500/60 mb-6">
              <Scale size={16} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">Privacy Rights</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">
              Do Not Sell or Share My <br />
              <span className="text-white/40">Personal Information</span>
            </h1>
            <p className="text-white/40 text-sm font-medium">Last updated: May 8, 2026</p>
          </header>

          <div className="space-y-12">
            {/* 1. One-Click Fast Opt-Out */}
            <section className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-orange-500">
                    <Zap size={20} className="fill-orange-500" />
                    <h3 className="text-xl font-bold uppercase tracking-wider">Fast Opt-Out</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    Instantly block all tracking and data sharing for this browser session. The fastest way to protect your privacy.
                  </p>
                </div>
                
                <div className="w-full md:w-auto">
                  {isOptedOut ? (
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-8 text-center px-12 min-w-[280px]">
                      <CheckCircle2 size={32} className="text-orange-500 mx-auto mb-4" />
                      <p className="text-sm font-bold text-orange-500 mb-2 uppercase tracking-tighter">Privacy Shield Active</p>
                      <button onClick={handleReset} className="text-[10px] font-black tracking-widest uppercase text-white/20 hover:text-white transition-colors">
                        Reset Preferences
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleOptOut}
                      disabled={status === 'loading'}
                      className="w-full md:w-64 bg-white text-black py-8 rounded-3xl flex flex-col items-center justify-center hover:bg-orange-500 hover:text-white transition-all active:scale-95 group shadow-2xl"
                    >
                      {status === 'loading' ? (
                        <Loader2 size={24} className="animate-spin" />
                      ) : (
                        <>
                          <span className="text-xl font-black uppercase tracking-tight">One-Click</span>
                          <span className="text-[10px] font-bold opacity-50 uppercase mt-1">Activate Protection</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* 2. Policy Text */}
            <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-12 bg-white/2 p-8 md:p-12 rounded-[40px] border border-white/5">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Your Privacy Rights
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Under the California Consumer Privacy Act (CCPA), you have the right to opt-out of the "sale" or "sharing" of your personal information. 101 Smart Auto Group respects your privacy and provides this tool to help you exercise your rights easily.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  How We Use Data
                </h2>
                <p className="text-white/60 leading-relaxed">
                  We do not sell your personal information for money. However, we use third-party analytics and advertising tools that may use cookies. You can use the "One-Click" tool above to block these activities on this browser.
                </p>
              </section>
            </div>

            {/* 3. Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Email Support</p>
                  <p className="text-sm font-medium">hello@101smartautogroup.com</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Location</p>
                  <p className="text-sm font-medium">Los Angeles & Orange County</p>
                </div>
              </div>
            </div>

            <footer className="pt-12 border-t border-white/10">
              <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-orange-500 transition-colors uppercase text-[10px] font-black tracking-widest">
                ← Back to Home
              </Link>
            </footer>
          </div>
        </div>
      </main>

      <Footer currentTime={currentTime} />
    </div>
  );
}
