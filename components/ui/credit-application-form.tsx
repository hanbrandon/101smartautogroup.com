"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Loader2, CheckCircle2, User, Building2, ShieldCheck } from 'lucide-react';

export const CreditApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [appType, setAppType] = useState<'personal' | 'business'>('personal');
  
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', zipCode: '',
    ssn: '', dob: '', employmentStatus: '',
    signature: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      window.scrollTo(0, 0);
      return;
    }
    
    setStatus('submitting');
    try {
      const response = await fetch('/api/credit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          applicationType: appType,
          personalData: { ssn: formData.ssn, dob: formData.dob, employmentStatus: formData.employmentStatus },
          residenceHistory: [], // Simplified for now
          workHistory: [],
          signature: formData.signature
        })
      });
      if (response.ok) setStatus('success');
    } catch (error) {
      console.error(error);
    }
  };

  if (status === 'success') {
    return (
      <div className="py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mx-auto">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-bold italic tracking-tighter uppercase">Application Received</h2>
        <p className="text-white/40 max-w-md mx-auto">
          Thank you for trusting 101 Smart Auto Group. Our financing team will review your application and contact you shortly.
        </p>
        <button onClick={() => window.location.href = '/'} className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
      <div className="flex justify-center gap-4 mb-12">
        <button
          type="button"
          onClick={() => setAppType('personal')}
          className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${
            appType === 'personal' ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/40'
          }`}
        >
          <User size={14} /> Personal
        </button>
        <button
          type="button"
          onClick={() => setAppType('business')}
          className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${
            appType === 'business' ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/40'
          }`}
        >
          <Building2 size={14} /> Business
        </button>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">First Name</label>
                <input required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors" placeholder="Sang Hyun" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Last Name</label>
                <input required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors" placeholder="Han" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors" placeholder="hello@gawoori.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors" placeholder="(123) 456-7890" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Zip Code</label>
              <input required value={formData.zipCode} onChange={e => setFormData({...formData, zipCode: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors" placeholder="92606" />
            </div>
            <button type="button" onClick={() => setStep(2)} className="w-full bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Continue <ChevronRight size={18} />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Date of Birth</label>
                <input required type="date" value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">SSN / ITIN</label>
                <input required type="password" value={formData.ssn} onChange={e => setFormData({...formData, ssn: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors" placeholder="XXX-XX-XXXX" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Employment Status</label>
              <select required value={formData.employmentStatus} onChange={e => setFormData({...formData, employmentStatus: e.target.value})} className="w-full bg-[#0D0D0D] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors appearance-none">
                <option value="">Select Status</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="retired">Retired</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Digital Signature (Type Full Name)</label>
              <input required value={formData.signature} onChange={e => setFormData({...formData, signature: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 transition-colors font-serif italic text-xl" placeholder="Sang Hyun Han" />
            </div>
            
            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white/5 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                <ChevronLeft size={18} /> Back
              </button>
              <button type="submit" disabled={status === 'submitting'} className="flex-[2] bg-orange-600 hover:bg-orange-500 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,122,0,0.3)]">
                {status === 'submitting' ? <Loader2 className="animate-spin" /> : <><ShieldCheck size={18} /> Submit Application</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};
