'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    Send,
    Loader2,
    CheckCircle2,
    Car,
    BadgeDollarSign,
    Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const COLORS = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#000000' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Grey', hex: '#808080' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Brown', hex: '#A52A2A' },
    { name: 'Gold', hex: '#FFD700' },
    { name: 'Beige', hex: '#F5F5DC' },
    { name: 'Green', hex: '#008000' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Other', hex: 'transparent' },
];

export const ContactSection = () => {
    const [activeTab, setActiveTab] = useState<'new_car' | 'sell_car'>(
        'new_car',
    );
    const [status, setStatus] = useState<
        'idle' | 'loading' | 'success' | 'error'
    >('idle');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        // New Car Fields
        make: '',
        model: '',
        purchaseType: 'lease',
        // Sell Car Fields
        vin: '',
        mileage: '',
        exteriorColor: '',
        accidentHistory: 'No Accidents',
        financialStatus: 'Finance / Loan',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Google Ads Conversion Tracking
        if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
            (window as any).gtag_report_conversion();
        }

        setStatus('loading');

        const data =
            activeTab === 'new_car'
                ? {
                      make: formData.make,
                      model: formData.model,
                      purchaseType: formData.purchaseType,
                  }
                : {
                      vin: formData.vin,
                      mileage: formData.mileage,
                      exteriorColor: formData.exteriorColor,
                      accidentHistory: formData.accidentHistory,
                      financialStatus: formData.financialStatus,
                  };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    type: activeTab,
                    data: data,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setStatus('idle');
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                        make: '',
                        model: '',
                        purchaseType: 'lease',
                        vin: '',
                        mileage: '',
                        exteriorColor: '',
                        accidentHistory: 'No Accidents',
                        financialStatus: 'Finance / Loan',
                    });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const inputStyles =
        'w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-red-500 outline-none transition-colors placeholder:text-white/20';
    const labelStyles =
        'text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block pl-1';
    const selectStyles =
        'w-full bg-[#0D0D0D] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-red-500 outline-none transition-colors appearance-none cursor-pointer';

    return (
        <section className="py-40 bg-black relative overflow-hidden scroll-mt-24" id="contact">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.9] mb-8">
                            Start Your <br /> Journey.
                        </h2>
                        <p className="text-xl text-white/40 max-w-md leading-relaxed mb-12">
                            Whether you're looking for a new high-performance vehicle or selling your current car, our team is ready to provide a seamless experience.
                        </p>
                        
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <BadgeDollarSign className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Best Rates</p>
                                    <p className="text-lg font-medium text-red-500">Guaranteed Financing</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Car className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Doorstep Delivery</p>
                                    <p className="text-lg font-medium text-red-500">Anywhere in SoCal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold">Request Sent!</h3>
                                <p className="text-white/40">We'll get back to you within 2 hours.</p>
                            </motion.div>
                        ) : (
                            <div className="space-y-10">
                                <div className="flex gap-2 p-1.5 bg-white/5 rounded-[24px] border border-white/5">
                                    <button
                                        onClick={() => setActiveTab('new_car')}
                                        className={cn(
                                            'flex-1 flex items-center justify-center gap-3 py-4 rounded-[20px] text-[10px] font-bold uppercase tracking-widest transition-all',
                                            activeTab === 'new_car'
                                                ? 'bg-white text-black shadow-xl'
                                                : 'text-white/40 hover:text-white hover:bg-white/5',
                                        )}
                                    >
                                        <Car size={16} />
                                        New Car
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('sell_car')}
                                        className={cn(
                                            'flex-1 flex items-center justify-center gap-3 py-4 rounded-[20px] text-[10px] font-bold uppercase tracking-widest transition-all',
                                            activeTab === 'sell_car'
                                                ? 'bg-white text-black shadow-xl'
                                                : 'text-white/40 hover:text-white hover:bg-white/5',
                                        )}
                                    >
                                        <BadgeDollarSign size={16} />
                                        Sell Car
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={inputStyles}
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyles}>Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className={inputStyles}
                                                placeholder="(123) 456-7890"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className={labelStyles}>Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={inputStyles}
                                            placeholder="hello@gawoori.com"
                                        />
                                    </div>

                                    {activeTab === 'new_car' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className={labelStyles}>Make</label>
                                                    <input required value={formData.make} onChange={(e) => setFormData({ ...formData, make: e.target.value })} className={inputStyles} placeholder="e.g. Porsche" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className={labelStyles}>Model</label>
                                                    <input required value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} className={inputStyles} placeholder="e.g. 911 GT3" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className={labelStyles}>Purchase Type</label>
                                                <select
                                                    value={formData.purchaseType}
                                                    onChange={(e) => setFormData({ ...formData, purchaseType: e.target.value })}
                                                    className={selectStyles}
                                                >
                                                    <option value="lease">Lease</option>
                                                    <option value="finance">Finance</option>
                                                    <option value="cash">Cash Purchase</option>
                                                </select>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'sell_car' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className={labelStyles}>VIN (17 Digits)</label>
                                                    <input required value={formData.vin} onChange={(e) => setFormData({ ...formData, vin: e.target.value })} className={inputStyles} placeholder="Vehicle VIN" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className={labelStyles}>Mileage</label>
                                                    <input required type="number" value={formData.mileage} onChange={(e) => setFormData({ ...formData, mileage: e.target.value })} className={inputStyles} placeholder="Current Miles" />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className={labelStyles}>Exterior Color</label>
                                                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                                    {COLORS.map((color) => (
                                                        <label key={color.name} className="group cursor-pointer flex flex-col items-center gap-2">
                                                            <input
                                                                type="radio"
                                                                name="exteriorColorSection"
                                                                required
                                                                value={color.name}
                                                                checked={formData.exteriorColor === color.name}
                                                                onChange={(e) => setFormData({ ...formData, exteriorColor: e.target.value })}
                                                                className="sr-only peer"
                                                            />
                                                            <div
                                                                className={cn(
                                                                    'w-10 h-10 rounded-full border-2 border-white/5 transition-all peer-checked:border-red-500 peer-checked:scale-110',
                                                                    color.name === 'Other' ? 'bg-gradient-to-tr from-white/20 via-white/40 to-white/20' : '',
                                                                )}
                                                                style={{ backgroundColor: color.hex }}
                                                            />
                                                            <span className="text-[9px] font-bold uppercase tracking-wider text-white/30 group-hover:text-white transition-colors text-center">
                                                                {color.name}
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className={labelStyles}>Accident History</label>
                                                    <select
                                                        value={formData.accidentHistory}
                                                        onChange={(e) => setFormData({ ...formData, accidentHistory: e.target.value })}
                                                        className={selectStyles}
                                                    >
                                                        <option value="No Accidents">No Accidents</option>
                                                        <option value="1 Incident">1 Incident</option>
                                                        <option value="2+ Incidents">2+ Incidents</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className={labelStyles}>Financial Status</label>
                                                    <select
                                                        value={formData.financialStatus}
                                                        onChange={(e) => setFormData({ ...formData, financialStatus: e.target.value })}
                                                        className={selectStyles}
                                                    >
                                                        <option value="Finance / Loan">Finance / Loan</option>
                                                        <option value="Active Lease">Active Lease</option>
                                                        <option value="Paid In Full">Paid In Full</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    <div className="space-y-2">
                                        <label className={labelStyles}>Message / Notes</label>
                                        <textarea
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={cn(inputStyles, 'resize-none')}
                                            placeholder="Any additional details..."
                                        />
                                    </div>

                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-start">
                                        <Info size={20} className="text-red-500 shrink-0" />
                                        <p className="text-[10px] text-white/40 leading-relaxed uppercase font-bold tracking-wider">
                                            By submitting, you agree to our privacy policy and consent to receive communications regarding your request.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-red-600 hover:bg-red-500 text-white py-5 rounded-[20px] font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-[0_10px_30px_rgba(220,38,38,0.3)] mt-8"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Processing
                                            </>
                                        ) : (
                                            <>
                                                Send Request
                                                <Send size={16} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
};
