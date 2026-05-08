"use client";

import { useCurrentTime } from "@/hooks/use-current-time";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CreditApplicationForm } from "@/components/ui/credit-application-form";

export default function CreditApplicationPage() {
  const currentTime = useCurrentTime();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentTime={currentTime} />

      <main className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-orange-500 mb-4 block">Financing</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Credit Application</h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Get pre-approved in minutes. Our secure application process is fast, easy, and designed to get you behind the wheel sooner.
            </p>
          </div>

          <div className="bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
            <CreditApplicationForm />
          </div>
        </div>
      </main>

      <Footer currentTime={currentTime} />
    </div>
  );
}
