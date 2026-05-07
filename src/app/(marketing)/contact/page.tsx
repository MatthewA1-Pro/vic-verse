'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-lg">
                Have questions about our platform or want to discuss a custom solution? 
                Our team is ready to help you unlock the power of your data.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email us at', value: 'hello@vortexanalytics.com' },
                  { icon: Phone, label: 'Call us at', value: '+1 (555) 000-0000' },
                  { icon: MapPin, label: 'Visit our office', value: '123 Tech Plaza, San Francisco, CA' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-xl font-bold text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-white/5">
                <div className="flex items-center gap-4 text-slate-400 font-medium">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full border-2 border-slate-950" />
                    ))}
                  </div>
                  <span>Our support team is online and ready to chat.</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-12 rounded-[2.5rem]"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">How can we help?</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all appearance-none">
                    <option className="bg-slate-900">General Inquiry</option>
                    <option className="bg-slate-900">Sales</option>
                    <option className="bg-slate-900">Partnerships</option>
                    <option className="bg-slate-900">Technical Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all resize-none"
                  />
                </div>

                <button className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
                  Send Message <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-slate-500 text-xs">
                  By clicking send, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
