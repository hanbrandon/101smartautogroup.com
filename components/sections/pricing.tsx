import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-40 bg-zinc-950 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] glow-red opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">Choose your pace: <br /><span className="text-white/30">ongoing partnership or focused sprint.</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-24 text-left">
          {/* Retainer Plan */}
          <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Retainer model</span>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">📦</div>
              </div>
              <div className="mb-10">
                <div className="text-5xl font-bold tracking-tighter mb-2">$3000 <span className="text-xs text-white/40">/ per month</span></div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Standard Plan</p>
              </div>
              <ul className="space-y-4 text-xs font-bold text-white/60 mb-12">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Up to 40 design hours per month</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Dedicated focus: one active task at a time</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Progress updates every 48 hours or sooner</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Unlimited revisions until you're happy</li>
              </ul>
            </div>
            <button className="w-full py-4 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all">Get started</button>
          </div>

          {/* Pro Plan */}
          <div className="p-10 rounded-[48px] bg-white/5 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 bg-white text-black text-[8px] font-bold uppercase tracking-widest rotate-90 origin-bottom-right">Recommended</div>
            <div>
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Retainer model</span>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">🚀</div>
              </div>
              <div className="mb-10">
                <div className="text-5xl font-bold tracking-tighter mb-2">$5000 <span className="text-xs text-white/40">/ per month</span></div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Pro Plan</p>
              </div>
              <ul className="space-y-4 text-xs font-bold text-white/60 mb-12">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Up to 70 design hours per month</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Dedicated focus: two active tasks at a time</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Progress updates every 24 hours or sooner</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Priority scheduling and faster turnaround</li>
              </ul>
            </div>
            <button className="w-full py-4 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all">Get started</button>
          </div>
        </div>

        {/* Project Box */}
        <div className="w-full p-12 rounded-[48px] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between text-left gap-12">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-4xl">🎯</div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Project-based collaboration</p>
              <div className="text-4xl font-bold tracking-tighter">$3500+ <span className="text-xs text-white/40">/ per project</span></div>
            </div>
          </div>
          <div className="space-y-2 text-xs font-bold text-white/60">
            <p className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Scoped and priced per project</p>
            <p className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Clear timeline with fixed milestones</p>
            <p className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Unlimited revisions within the agreed scope</p>
            <p className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> 50% to start, 50% on delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};
