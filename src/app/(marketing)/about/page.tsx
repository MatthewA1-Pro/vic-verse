'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Target, Eye, Shield, Zap, Users, Trophy } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            We Are <span className="text-gradient">Vortex Analytics</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Founded in 2022, we're on a mission to democratize advanced data science for every startup on the planet.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Vortex began as a small research project at Stanford, focusing on how AI could predict consumer behavior with minimal data points. Today, we process billions of events daily for some of the world's most innovative companies.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We believe that data shouldn't be a burden—it should be a superpower. Our team of world-class engineers and designers work tirelessly to make that a reality.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">Global Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">120+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">Team Members</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden glass-card"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/20 backdrop-blur-xl rounded-full flex items-center justify-center text-primary">
                  <Target className="w-10 h-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Privacy First', icon: Shield, desc: 'We treat user data with the highest level of respect and security.' },
              { title: 'Radical Innovation', icon: Zap, desc: 'We are never satisfied with the status quo.' },
              { title: 'User Obsessed', icon: Users, desc: 'We build for the people who use our tools every single day.' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
