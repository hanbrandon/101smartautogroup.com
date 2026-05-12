'use client';

import { Check, MessageSquare, Search, ShieldCheck, Key } from 'lucide-react';
import { motion } from 'motion/react';

export const Process = ({
    onContactClick,
}: {
    onContactClick?: () => void;
}) => {
    const steps = [
        {
            id: '01',
            title: 'Consultation',
            icon: <MessageSquare className="w-6 h-6" />,
            description:
                'We discuss your lifestyle, budget, and specific car requirements to build a clear search profile.',
            features: [
                'Needs assessment',
                'Budget planning',
                'Timeline setting',
            ],
        },
        {
            id: '02',
            title: 'Sourcing',
            icon: <Search className="w-6 h-6" />,
            description:
                'We scan the market and our private network to find matches that meet our high standards.',
            features: [
                'Market scanning',
                'Private network access',
                'Price negotiation',
            ],
        },
        {
            id: '03',
            title: 'Inspection',
            icon: <ShieldCheck className="w-6 h-6" />,
            description:
                "Every car is thoroughly vetted and inspected to ensure it's mechanically sound and visually perfect.",
            features: [
                'Multi-point check',
                'Service history audit',
                'Detailed reporting',
            ],
        },
        {
            id: '04',
            title: 'Delivery',
            icon: <Key className="w-6 h-6" />,
            description:
                'We handle the paperwork and deliver your new car right to your doorstep in LA or OC.',
            features: [
                'DMV paperwork',
                'Financing finalization',
                'Doorstep delivery',
            ],
        },
    ];

    return (
        <section
            id="process"
            className="py-40 bg-black relative overflow-hidden scroll-mt-24"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
                    How it works: <br />
                    <span className="text-white/30">
                        Your journey to the perfect drive.
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24 text-left">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col hover:border-white/20 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
                                    {step.id}
                                </span>
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4 text-red-500">
                                {step.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed mb-8">
                                {step.description}
                            </p>
                            <ul className="mt-auto space-y-3">
                                {step.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest"
                                    >
                                        <Check className="w-3 h-3 text-red-500" />{' '}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
