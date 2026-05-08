"use client";

import { useState } from "react";
import { useCurrentTime } from "@/hooks/use-current-time";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ValueProposition } from "@/components/sections/value-proposition";
import { FeaturedCard } from "@/components/sections/featured-card";
import { InstagramGallery } from "@/components/sections/instagram-gallery";
import { Partner } from "@/components/sections/partner";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { ContactDrawer } from "@/components/ui/contact-drawer";

export default function Home() {
  const currentTime = useCurrentTime();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentTime={currentTime} onContactClick={openContact} />

      <main>
        <Hero currentTime={currentTime} />
        
        <div className="relative z-10 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
          <ValueProposition />
          <FeaturedCard />
          <InstagramGallery />
          <Partner />
          <Services />
          <Process onContactClick={openContact} />
          <FAQ />
        </div>
      </main>

      <Footer currentTime={currentTime} onContactClick={openContact} />
      
      <ContactDrawer isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
