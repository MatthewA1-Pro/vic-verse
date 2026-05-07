'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3, Twitter, Github, Linkedin, Instagram, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Vortex<span className="text-primary">Analytics</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
              The world's most advanced data analytics platform. Predictive insights, 
              real-time dashboards, and AI automation.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Product</h5>
            <ul className="space-y-4">
              {['Analytics', 'Predictive', 'Automation', 'Pricing', 'Security'].map((item) => (
                <li key={item}><Link href="#" className="text-slate-400 hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Projects', 'Careers', 'Blog', 'Community'].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Newsletter</h5>
            <p className="text-slate-400 mb-4 text-sm">Get the latest analytics trends in your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="absolute right-2 top-1.5 p-2 bg-primary rounded-lg text-white hover:bg-primary/90 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>© 2026 Vortex Analytics Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
