'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/marketing';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Loved by Innovative Teams</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border-white/5 relative"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400" />)}
              </div>
              <p className="text-slate-300 mb-8 italic leading-relaxed text-lg">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} className="w-12 h-12 rounded-full border border-white/10" alt={t.name} />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
