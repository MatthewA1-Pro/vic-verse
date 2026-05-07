'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$49',
    description: 'Perfect for small teams and early-stage startups.',
    features: ['Up to 10k users', 'Basic Dashboards', 'Email Support', '24h Data Latency', '1 Team Member'],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Pro',
    price: '$199',
    description: 'Everything you need to scale your business.',
    features: ['Up to 1M users', 'Advanced Analytics', 'Priority Support', 'Real-time Sync', '10 Team Members'],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke solutions for global organizations.',
    features: ['Unlimited users', 'Custom AI Models', '24/7 Dedicated Support', 'On-premise option', 'Unlimited Members'],
    cta: 'Contact Sales',
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Scale Fast, Pay Fair</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose the plan that's right for your growth stage. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${
                plan.popular ? 'bg-primary/10 border-primary shadow-2xl shadow-primary/10' : 'bg-slate-900/50 border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-white" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.popular 
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
