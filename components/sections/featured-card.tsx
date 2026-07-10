"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const DEALS = [
  {
    image: "/featured/deal-1.png",
    title: "Start 4th of July Sale Event Banner",
    price: "Inquire for Price",
    tag: "Special Event"
  },
  {
    image: "/featured/deal-2.png",
    title: "101 Auto Group One-Stop Services & FAQ",
    price: "Inquire for Price",
    tag: "Information"
  },
  {
    image: "/featured/deal-3.png",
    title: "Mercedes-Benz Luxury Lease Deals (C 300, GLA 250, GLB 250, GLC 300)",
    price: "Inquire for Price",
    tag: "Special Lease"
  },
  {
    image: "/featured/deal-4.png",
    title: "Hyundai Popular Models Sourcing (Elantra SE, Kona SE, Ioniq 5 SE, Tucson SE)",
    price: "Inquire for Price",
    tag: "Limited Time"
  },
  {
    image: "/featured/deal-5.png",
    title: "Lexus Premium Models Special Lease (ES 350E PRE, NX 350, RX 350, RZ 350)",
    price: "Inquire for Price",
    tag: "Best Value"
  },
  {
    image: "/featured/deal-6.png",
    title: "Toyota Reliable Vehicle Lineup (Tacoma SR5, Camry LE, RAV4 LE)",
    price: "Inquire for Price",
    tag: "Hot Deal"
  },
  {
    image: "/featured/deal-7.png",
    title: "BMW Ultimate Driving Lease (330, X1, X3, X5)",
    price: "Inquire for Price",
    tag: "Special Offer"
  },
  {
    image: "/featured/deal-8.png",
    title: "Kia Modern Electrified & SUV Lineup (K4 LXS, EV9 Light Long, Telluride S)",
    price: "Inquire for Price",
    tag: "New Arrival"
  },
  {
    image: "/featured/deal-9.png",
    title: "Genesis Elegant Luxury Car Lease (G 70 2.5T, GV 70 2.5T, GV 80 2.5T Select)",
    price: "Inquire for Price",
    tag: "Premium Choice"
  },
  {
    image: "/featured/deal-10.png",
    title: "Acura Performance Premium Leasing (Integra, ADX)",
    price: "Inquire for Price",
    tag: "Available Now"
  }
];

export const FeaturedCard = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 scroll-mt-24" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-red-500 mb-4 block">Deals of the Month</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Exclusive Featured Vehicles</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEALS.map((deal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(deal.image)}
              className="relative aspect-video rounded-[32px] overflow-hidden group cursor-pointer bg-white/5"
            >
              <img 
                src={deal.image}
                alt={deal.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged featured vehicle from 101 Auto Group"
                className="w-full h-full object-contain"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
