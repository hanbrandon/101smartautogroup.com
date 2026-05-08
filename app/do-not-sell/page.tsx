"use client";

import { useCurrentTime } from "@/hooks/use-current-time";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function DoNotSellPage() {
  const currentTime = useCurrentTime();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentTime={currentTime} />

      <main className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[10px] uppercase font-black tracking-widest text-red-500 mb-4 block">Compliance</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Do Not Sell My Personal Information</h1>
            <p className="text-white/60 text-sm font-medium">Last updated: May 8, 2026</p>
          </div>

          <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Your Rights Under the CCPA
              </h2>
              <p className="text-white/60 leading-relaxed">
                The California Consumer Privacy Act (CCPA) provides California residents with 
                specific rights regarding their personal information. One of these rights is 
                the ability to opt-out of the "sale" of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                How We Handle Your Data
              </h2>
              <p className="text-white/60 leading-relaxed">
                We take your privacy seriously. While we do not "sell" personal information 
                in the traditional sense of exchanging it for money, some of our data sharing 
                with advertising partners may be considered a "sale" under the broad definition 
                provided by the CCPA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                How to Opt-Out
              </h2>
              <p className="text-white/60 leading-relaxed">
                If you are a California resident and would like to exercise your right to 
                opt-out of the sale of your personal information, please use one of the 
                following methods:
              </p>
              <ul className="list-disc list-inside text-white/60 mt-4 space-y-2">
                <li>Email us at <a href="mailto:privacy@jakekim.com" className="text-red-500 hover:underline">privacy@jakekim.com</a> with the subject line "CCPA Opt-Out Request"</li>
                <li>Call our toll-free number: (800) 555-JAKE</li>
                <li>Complete our online privacy request form (coming soon)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Verification Process
              </h2>
              <p className="text-white/60 leading-relaxed">
                To protect your privacy and security, we will take steps to verify your identity 
                before fulfilling your request. This may require you to provide additional 
                information to confirm your residency and identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                No Discrimination
              </h2>
              <p className="text-white/60 leading-relaxed">
                We will not discriminate against you for exercising any of your CCPA rights. 
                Unless permitted by the CCPA, we will not deny you goods or services, 
                charge you different prices or rates, or provide you with a different level 
                or quality of services.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer currentTime={currentTime} />
    </div>
  );
}
