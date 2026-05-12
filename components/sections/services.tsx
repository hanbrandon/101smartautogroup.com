import { Car, Search, ShieldCheck, CreditCard, ArrowUpRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-40 text-center scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-9xl font-bold tracking-tighter mb-20 leading-[0.8] opacity-80 select-none uppercase">LA & OC Auto Services.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-10 rounded-[32px] bg-white text-black group hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-10"><Search /></div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Los Angeles Car Buying & Custom Sourcing</h3>
            <p className="text-black/60 mb-8 leading-relaxed">Tell us exactly what you're looking for. We source luxury, performance, and daily-driver vehicles across Los Angeles, Koreatown, Torrance, and nearby markets. Typical searches take 3-14 days depending on trim, budget, and availability.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
          <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors text-white">
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-10"><ShieldCheck /></div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Inspection, Pricing & Trust</h3>
            <p className="text-white/60 mb-8 leading-relaxed">Every sourced vehicle is reviewed for condition, history, and market value before you decide. Consultation is free, pricing varies by vehicle, and final purchase or lease numbers are confirmed before paperwork.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
          <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors text-white">
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-10"><CreditCard /></div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Orange County Auto Leasing & Financing</h3>
            <p className="text-white/60 mb-8 leading-relaxed">We help compare lease and finance options for Irvine, Buena Park, Fullerton, Garden Grove, and surrounding OC drivers. Pre-approval can often begin the same day once the required documents are ready.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
          <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors text-white">
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-10"><Car /></div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Trade-in, Consignment & Delivery</h3>
            <p className="text-white/60 mb-8 leading-relaxed">Ready to upgrade? We help evaluate trade-in and consignment options, coordinate paperwork, and arrange delivery across LA and OC. Timing depends on lender approval, vehicle availability, and DMV processing.</p>
            <ArrowUpRight className="w-6 h-6 ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
