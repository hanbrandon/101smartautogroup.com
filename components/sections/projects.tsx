"use client";

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { PROJECTS } from '@/constants';

export const Projects = () => {
  return (
    <section id="projects" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Our highlights. Recent projects we're proud of."
          subtitle="Explore how Jake has helped businesses elevate their digital presence. We work with startups, scaleups, and established brands to launch digital products that stand out and convert."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, i) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-8 relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} project thumbnail`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-white/80 backdrop-blur-md text-black text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-2xl font-bold tracking-tighter mb-2">{project.title}</h4>
                  <p className="text-sm font-medium text-white/40 uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
