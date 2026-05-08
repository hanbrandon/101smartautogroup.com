"use client";

import { useCurrentTime } from "@/hooks/use-current-time";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  const currentTime = useCurrentTime();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentTime={currentTime} />

      <main className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[10px] uppercase font-black tracking-widest text-red-500 mb-4 block">Legal</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Terms of Service</h1>
            <p className="text-white/60 text-sm font-medium">Last updated: May 8, 2026</p>
          </div>

          <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Acceptance of Terms
              </h2>
              <p className="text-white/60 leading-relaxed">
                By accessing and using the services provided by Jake Kim ("we," "us," or "our"), 
                including our website and automotive dealership services in Los Angeles and Orange County, 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Services Provided
              </h2>
              <p className="text-white/60 leading-relaxed">
                We provide automotive dealership services, including vehicle sales, sourcing, and consultation. 
                All service descriptions and pricing are subject to change without notice. We reserve the right 
                to refuse service to anyone for any reason at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                User Obligations
              </h2>
              <p className="text-white/60 leading-relaxed">
                You agree to provide accurate, current, and complete information when engaging with our services. 
                You are responsible for maintaining the confidentiality of any account information and for all 
                activities that occur under your account or interaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Intellectual Property
              </h2>
              <p className="text-white/60 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of Jake Kim or its content suppliers and is protected by international 
                copyright laws. The "JAKE" logo and branding are trademarks of Jake Kim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Limitation of Liability
              </h2>
              <p className="text-white/60 leading-relaxed">
                Jake Kim shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our services, or for the cost of 
                procurement of substitute goods and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Governing Law
              </h2>
              <p className="text-white/60 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the 
                State of California, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Contact Information
              </h2>
              <p className="text-white/60 leading-relaxed">
                If you have any questions about these Terms, please contact us at hello@jakekim.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer currentTime={currentTime} />
    </div>
  );
}
