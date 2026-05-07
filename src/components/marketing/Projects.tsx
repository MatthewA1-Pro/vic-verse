'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/marketing';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const Projects = () => {
  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Proven Results For Global Tech Leaders</h3>
          </div>
          <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            View All Projects <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 bg-slate-900/80 backdrop-blur-md border-t border-white/5 h-full">
                <h4 className="text-2xl font-bold text-white mb-3 flex justify-between items-center">
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                </h4>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Impact</span>
                    <span className="text-lg font-bold text-green-400">{project.results}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
