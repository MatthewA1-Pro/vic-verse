'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  LayoutDashboard, 
  Zap, 
  Cloud, 
  Palette,
  CheckCircle2
} from 'lucide-react';
import { services } from '@/data/marketing';

const iconMap: { [key: string]: any } = {
  BarChart3,
  PieChart,
  LayoutDashboard,
  Zap,
  Cloud,
  Palette
};

export const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Need <br /> To Scale Your SaaS</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We provide a comprehensive suite of analytics tools and professional services 
            designed to help you make data-driven decisions at lightning speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                
                <div className={
                  `w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-lg
                  ${service.color === 'primary' ? 'bg-primary/20 text-primary shadow-primary/20' : 
                    service.color === 'secondary' ? 'bg-secondary/20 text-secondary shadow-secondary/20' : 
                    'bg-accent/20 text-accent shadow-accent/20'}`
                }>
                  <Icon className="w-7 h-7" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {['Real-time tracking', 'Advanced AI models', 'Exportable reports'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>

                <button className="text-primary font-bold flex items-center gap-2 group/btn">
                  Learn more <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
