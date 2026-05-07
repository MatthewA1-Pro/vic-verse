'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { 
  BarChart3, 
  Search, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Zap, 
  PieChart, 
  Layers,
  ArrowRight
} from 'lucide-react';

const serviceDetails = [
  {
    title: 'Enterprise Analytics',
    description: 'Bespoke analytics solutions for massive data sets. We handle trillions of events with sub-second latency.',
    icon: BarChart3,
    features: ['Real-time streaming', 'Data warehousing', 'Custom ETL pipelines']
  },
  {
    title: 'Predictive Modeling',
    description: 'AI-driven forecasting that helps you anticipate market shifts before they happen.',
    icon: Cpu,
    features: ['Churn prediction', 'LTV forecasting', 'Anomaly detection']
  },
  {
    title: 'Advanced BI',
    description: 'Transform your data into a narrative. Beautiful, interactive reports for board-level decision making.',
    icon: PieChart,
    features: ['Interactive drilling', 'Automated reporting', 'Multi-source sync']
  },
  {
    title: 'Data Governance',
    description: 'Ensure compliance and security across your entire data infrastructure.',
    icon: ShieldCheck,
    features: ['SOC2 Compliance', 'GDPR Ready', 'Role-based access']
  },
  {
    title: 'Global Infrastructure',
    description: 'Deploy your analytics edge-first. Low latency reporting from anywhere in the world.',
    icon: Globe,
    features: ['Edge computing', 'Global CDN', 'Local data residency']
  },
  {
    title: 'API First Integration',
    description: 'Connect Vortex to your existing stack with our robust, documented API.',
    icon: Zap,
    features: ['REST & GraphQL', 'Webhook support', 'SDKs for all languages']
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Capabilities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Built for the <span className="text-gradient">Next Generation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just provide charts. We provide the infrastructure, intelligence, and 
            security needed to scale your business into the future.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-primary/40 transition-all relative"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-primary font-bold group/btn">
                  Explore {service.title} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
           <div className="glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to modernize <br /> your data stack?</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                Join 500+ companies already using Vortex to power their analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                  Get Started for Free
                </button>
                <button className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                  Schedule a Demo
                </button>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
