'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    X,
    Send,
    Loader2,
    CheckCircle2,
    Car,
    BadgeDollarSign,
    Info,
    Phone,
    Mail,
    MessageSquare,
    MapPin,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

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

export const ContactDrawer = ({ isOpen, onClose }: ContactDrawerProps) => {
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
                    onClose();
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
                }, 2000);
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
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300]"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            damping: 25,
                            stiffness: 200,
                        }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-[#0A0A0A] border-l border-white/10 z-[301] shadow-2xl flex flex-col"
                    >
                        <div className="p-8 border-b border-white/5 flex justify-between items-center">
                            <h2 className="text-2xl font-bold tracking-tighter italic">
                                Get in touch
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            {status === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        Request Sent!
                                    </h3>
                                    <p className="text-white/40">
                                        We'll get back to you within 2 hours.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    <div className="flex gap-2 p-1.5 bg-white/5 rounded-[24px] border border-white/5">
                                        <button
                                            onClick={() =>
                                                setActiveTab('new_car')
                                            }
                                            className={cn(
                                                'flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-[20px] text-[10px] font-bold uppercase tracking-widest transition-all border border-transparent',
                                                activeTab === 'new_car'
                                                    ? 'bg-white text-black shadow-xl'
                                                    : 'text-white/40 hover:text-white hover:bg-white/5',
                                            )}
                                        >
                                            <Car size={18} />
                                            New Car
                                        </button>
                                        <button
                                            onClick={() =>
                                                setActiveTab('sell_car')
                                            }
                                            className={cn(
                                                'flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-[20px] text-[10px] font-bold uppercase tracking-widest transition-all border border-transparent',
                                                activeTab === 'sell_car'
                                                    ? 'bg-white text-black shadow-xl'
                                                    : 'text-white/40 hover:text-white hover:bg-white/5',
                                            )}
                                        >
                                            <BadgeDollarSign size={18} />
                                            Sell Car
                                        </button>
                                    </div>

                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className={labelStyles}>
                                                    Full Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className={inputStyles}
                                                    placeholder="Full Name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className={labelStyles}>
                                                    Phone Number
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            phone: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className={inputStyles}
                                                    placeholder="(123) 456-7890"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className={labelStyles}>
                                                Email Address
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                className={inputStyles}
                                                placeholder="hello@gawoori.com"
                                            />
                                        </div>

                                        {/* New Car Specific Fields */}
                                        {activeTab === 'new_car' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="space-y-6"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label
                                                            className={
                                                                labelStyles
                                                            }
                                                        >
                                                            Make
                                                        </label>
                                                        <input
                                                            required
                                                            value={
                                                                formData.make
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    make: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className={
                                                                inputStyles
                                                            }
                                                            placeholder="e.g. Porsche"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label
                                                            className={
                                                                labelStyles
                                                            }
                                                        >
                                                            Model
                                                        </label>
                                                        <input
                                                            required
                                                            value={
                                                                formData.model
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    model: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className={
                                                                inputStyles
                                                            }
                                                            placeholder="e.g. 911 GT3"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label
                                                        className={labelStyles}
                                                    >
                                                        Purchase Type
                                                    </label>
                                                    <select
                                                        value={
                                                            formData.purchaseType
                                                        }
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                purchaseType:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        className={selectStyles}
                                                    >
                                                        <option value="lease">
                                                            Lease
                                                        </option>
                                                        <option value="finance">
                                                            Finance
                                                        </option>
                                                        <option value="cash">
                                                            Cash Purchase
                                                        </option>
                                                    </select>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Sell Car Specific Fields */}
                                        {activeTab === 'sell_car' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="space-y-6"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label
                                                            className={
                                                                labelStyles
                                                            }
                                                        >
                                                            VIN (17 Digits)
                                                        </label>
                                                        <input
                                                            required
                                                            value={formData.vin}
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    vin: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className={
                                                                inputStyles
                                                            }
                                                            placeholder="Vehicle Identification Number"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label
                                                            className={
                                                                labelStyles
                                                            }
                                                        >
                                                            Mileage
                                                        </label>
                                                        <input
                                                            required
                                                            type="number"
                                                            value={
                                                                formData.mileage
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    mileage:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className={
                                                                inputStyles
                                                            }
                                                            placeholder="Current Miles"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <label
                                                        className={labelStyles}
                                                    >
                                                        Exterior Color
                                                    </label>
                                                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                                        {COLORS.map((color) => (
                                                            <label
                                                                key={color.name}
                                                                className="group cursor-pointer flex flex-col items-center gap-2"
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="exteriorColor"
                                                                    required
                                                                    value={
                                                                        color.name
                                                                    }
                                                                    checked={
                                                                        formData.exteriorColor ===
                                                                        color.name
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setFormData(
                                                                            {
                                                                                ...formData,
                                                                                exteriorColor:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            },
                                                                        )
                                                                    }
                                                                    className="sr-only peer"
                                                                />
                                                                <div
                                                                    className={cn(
                                                                        'w-10 h-10 rounded-full border-2 border-white/5 transition-all peer-checked:border-red-500 peer-checked:scale-110',
                                                                        color.name ===
                                                                            'Other'
                                                                            ? 'bg-gradient-to-tr from-white/20 via-white/40 to-white/20'
                                                                            : '',
                                                                    )}
                                                                    style={{
                                                                        backgroundColor:
                                                                            color.hex,
                                                                    }}
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
                                                        <label
                                                            className={
                                                                labelStyles
                                                            }
                                                        >
                                                            Accident History
                                                        </label>
                                                        <select
                                                            value={
                                                                formData.accidentHistory
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    accidentHistory:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className={
                                                                selectStyles
                                                            }
                                                        >
                                                            <option value="No Accidents">
                                                                No Accidents
                                                            </option>
                                                            <option value="1 Incident">
                                                                1 Incident
                                                            </option>
                                                            <option value="2+ Incidents">
                                                                2+ Incidents
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label
                                                            className={
                                                                labelStyles
                                                            }
                                                        >
                                                            Financial Status
                                                        </label>
                                                        <select
                                                            value={
                                                                formData.financialStatus
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    financialStatus:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className={
                                                                selectStyles
                                                            }
                                                        >
                                                            <option value="Finance / Loan">
                                                                Finance / Loan
                                                            </option>
                                                            <option value="Active Lease">
                                                                Active Lease
                                                            </option>
                                                            <option value="Paid In Full">
                                                                Paid In Full
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="space-y-2">
                                            <label className={labelStyles}>
                                                Message / Notes
                                            </label>
                                            <textarea
                                                rows={3}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        message: e.target.value,
                                                    })
                                                }
                                                className={cn(
                                                    inputStyles,
                                                    'resize-none',
                                                )}
                                                placeholder="Any additional details..."
                                            />
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-start">
                                            <Info
                                                size={20}
                                                className="text-red-500 shrink-0"
                                            />
                                            <p className="text-[10px] text-white/40 leading-relaxed uppercase font-bold tracking-wider">
                                                By submitting, you agree to our
                                                privacy policy and consent to
                                                receive communications regarding
                                                your inquiry.
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white py-6 rounded-[24px] font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(255,122,0,0.2)]"
                                        >
                                            {status === 'loading' ? (
                                                <Loader2
                                                    className="animate-spin"
                                                    size={20}
                                                />
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    Submit Request
                                                </>
                                            )}
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-center text-xs text-red-500 font-bold uppercase tracking-widest">
                                                Something went wrong. Please try
                                                again.
                                            </p>
                                        )}
                                    </form>

                                    <div className="pt-12 mt-12 border-t border-white/5 flex flex-col gap-10">
                                        {/* Mobile: 4 Minimal Icons in a Row */}
                                        <div className="flex md:hidden items-center justify-center gap-4">
                                            <a 
                                                href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, '')}`}
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-red-500 hover:border-red-500 transition-all group"
                                            >
                                                <Phone size={16} className="text-white group-hover:scale-110 transition-transform" />
                                            </a>
                                            <a 
                                                href={`sms:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, '')}`}
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all group"
                                            >
                                                <MessageSquare size={16} className="text-white group-hover:text-black group-hover:scale-110 transition-transform" />
                                            </a>
                                            <a 
                                                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all group"
                                            >
                                                <Mail size={16} className="text-white group-hover:text-black group-hover:scale-110 transition-transform" />
                                            </a>
                                            <a 
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(process.env.NEXT_PUBLIC_OFFICE_ADDRESS || '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all group"
                                            >
                                                <MapPin size={16} className="text-white group-hover:text-black group-hover:scale-110 transition-transform" />
                                            </a>
                                        </div>

                                        {/* Desktop/Tablet: Text Layout */}
                                        <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-10">
                                            <div className="space-y-4">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                                                    Phone
                                                </span>
                                                <div className="flex flex-col gap-3">
                                                    <a
                                                        href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, '')}`}
                                                        className="text-[16px] font-bold hover:text-red-500 transition-colors block"
                                                    >
                                                        {process.env.NEXT_PUBLIC_PHONE}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                                                    Email
                                                </span>
                                                <a
                                                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                                    className="text-[16px] font-bold hover:text-red-500 transition-colors block truncate"
                                                >
                                                    {process.env.NEXT_PUBLIC_EMAIL}
                                                </a>
                                            </div>

                                            <div className="col-span-2 space-y-4">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                                                    Office Address
                                                </span>
                                                <div className="space-y-3">
                                                    <a
                                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(process.env.NEXT_PUBLIC_OFFICE_ADDRESS || '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[16px] font-bold text-white/60 leading-tight"
                                                    >
                                                        {process.env.NEXT_PUBLIC_OFFICE_ADDRESS}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-[9px] text-white/10 font-bold uppercase tracking-[0.4em] text-center pt-8 border-t border-white/5">
                                            <span className="text-red-600">101 Auto Group</span> &bull;{' '}
                                            {
                                                process.env
                                                    .NEXT_PUBLIC_MANAGER_NAME
                                            }
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
