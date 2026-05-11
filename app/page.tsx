"use client";

import { useState, useEffect } from "react";
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
import { ContactSection } from "@/components/sections/contact-section";
import { ContactDrawer } from "@/components/ui/contact-drawer";

export default function Home() {
  const time = useCurrentTime();
  const [mounted, setMounted] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ 
            top: top - 40, // Small offset for the menu bar
            behavior: 'smooth' 
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash on load after a short delay for hydration
    if (window.location.hash) {
      setTimeout(handleHashChange, 800);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // Avoid hydration mismatch by not rendering time-dependent content on server
  const currentTime = mounted ? time : "";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar currentTime={currentTime} onContactClick={openContact} />

      <main>
        <Hero />
        
        <div className="relative z-10 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
          <ValueProposition />
          <FeaturedCard />
          <InstagramGallery />
          <Partner />
          <Services />
          <Process onContactClick={openContact} />
          <FAQ />
          <ContactSection />
        </div>
      </main>

      <Footer currentTime={currentTime} onContactClick={openContact} />
      
      <ContactDrawer isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
