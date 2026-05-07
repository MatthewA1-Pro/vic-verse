'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Revenue Growth', value: '+340%', sub: 'Avg per client' },
  { label: 'Users Tracked', value: '2.5B+', sub: 'Last 12 months' },
  { label: 'Performance', value: '10x', sub: 'Faster insights' },
  { label: 'Satisfaction', value: '99.9%', sub: 'Client retention' },
];

export const Results = () => {
  return (
    <section className="py-24 relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full" />
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-gradient">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-slate-200 mb-2">{stat.label}</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};
