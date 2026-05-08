"use client";

import { useCurrentTime } from "@/hooks/use-current-time";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  const currentTime = useCurrentTime();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentTime={currentTime} />

      <main className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[10px] uppercase font-black tracking-widest text-red-500 mb-4 block">Privacy</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Privacy Policy</h1>
            <p className="text-white/60 text-sm font-medium">Last updated: May 8, 2026</p>
          </div>

          <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Information We Collect
              </h2>
              <p className="text-white/60 leading-relaxed">
                We collect information you provide directly to us when you inquire about a vehicle, 
                sign up for our newsletter, or communicate with us. This may include your name, 
                email address, phone number, and preferences regarding vehicles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                How We Use Your Information
              </h2>
              <p className="text-white/60 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                to process your requests, to communicate with you about vehicles and services that 
                may be of interest, and to monitor and analyze trends and usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Sharing of Information
              </h2>
              <p className="text-white/60 leading-relaxed">
                We do not share your personal information with third parties except as described 
                in this policy. We may share information with vendors, consultants, and other 
                service providers who need access to such information to carry out work on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Security
              </h2>
              <p className="text-white/60 leading-relaxed">
                We take reasonable measures to help protect information about you from loss, 
                theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Cookies
              </h2>
              <p className="text-white/60 leading-relaxed">
                Most web browsers are set to accept cookies by default. If you prefer, you can 
                usually choose to set your browser to remove or reject browser cookies. Please note 
                that if you choose to remove or reject cookies, this could affect the availability 
                and functionality of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                California Privacy Rights
              </h2>
              <p className="text-white/60 leading-relaxed">
                California law permits residents of California to request certain details about 
                how their information is shared with third parties for direct marketing purposes. 
                If you are a California resident, please see our "Do Not Sell My Personal Information" 
                page for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Changes to the Policy
              </h2>
              <p className="text-white/60 leading-relaxed">
                We may change this Privacy Policy from time to time. If we make changes, 
                we will notify you by revising the date at the top of the policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer currentTime={currentTime} />
    </div>
  );
}
