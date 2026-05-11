import { Car, Search, ShieldCheck, CreditCard, ArrowUpRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-40 text-center scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-9xl font-bold tracking-tighter mb-20 leading-[0.8] opacity-80 select-none uppercase">Expertise & Service.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-10 rounded-[32px] bg-white text-black group hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-10"><Search /></div>
            <h3 className="text-2xl font-bold mb-4">Custom Sourcing</h3>
            <p className="text-black/60 mb-8 leading-relaxed">Tell us exactly what you're looking for. We leverage our extensive dealer network and private connections to find the perfect match, from rare specs to everyday luxury.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
          <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors text-white">
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-10"><ShieldCheck /></div>
            <h3 className="text-2xl font-bold mb-4">Inspection & Trust</h3>
            <p className="text-white/60 mb-8 leading-relaxed">Every vehicle we source undergoes a rigorous multi-point inspection. We provide detailed reports and ensure complete transparency before you make a decision.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
          <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors text-white">
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-10"><CreditCard /></div>
            <h3 className="text-2xl font-bold mb-4">Financing & Leasing</h3>
            <p className="text-white/60 mb-8 leading-relaxed">We work with top lenders to secure competitive rates tailored to your credit profile, making the financial side of your purchase as smooth as the drive itself.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
          <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors text-white">
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-10"><Car /></div>
            <h3 className="text-2xl font-bold mb-4">Trade-in & Consignment</h3>
            <p className="text-white/60 mb-8 leading-relaxed">Ready to upgrade? We offer fair trade-in values and professional consignment services to help you sell your current vehicle for the best price possible.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
