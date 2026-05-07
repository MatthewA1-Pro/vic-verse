'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Star, BarChart3, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Introducing Vortex 2.0 • AI-Powered Insights
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Turn Your Raw Data <br />
            <span className="text-gradient">Into Infinite Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
          >
            The world's most advanced data analytics platform. Predictive insights, 
            real-time dashboards, and AI automation built for modern startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all">
              <Play className="w-5 h-5 fill-white" /> Watch Demo
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
          >
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tighter">
              <BarChart3 className="w-6 h-6 text-primary" /> FORTUNE 500
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tighter">
              <TrendingUp className="w-6 h-6 text-secondary" /> STRIPE
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tighter">
              <Users className="w-6 h-6 text-accent" /> NOTION
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass-card rounded-[2rem] overflow-hidden border border-white/10 aspect-[16/10] md:aspect-[16/9]">
              {/* Mock Dashboard UI */}
              <div className="p-6 bg-slate-900/50 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-4">
                    <div className="w-32 h-8 bg-white/5 rounded-lg"></div>
                    <div className="w-32 h-8 bg-white/5 rounded-lg"></div>
                  </div>
                  <div className="w-10 h-10 bg-primary/20 rounded-full border border-primary/30"></div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-white/5 rounded-2xl border border-white/5 p-4">
                      <div className="w-1/2 h-3 bg-white/10 rounded-full mb-4"></div>
                      <div className="w-3/4 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 bg-white/5 rounded-2xl border border-white/5 relative overflow-hidden">
                   {/* Animated line chart mock */}
                   <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <path 
                        d="M0 80 Q 25 20, 50 70 T 100 40 T 150 90 T 200 30 T 250 60 T 300 10" 
                        fill="none" 
                        stroke="url(#grad)" 
                        strokeWidth="3"
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                      </defs>
                   </svg>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 md:-right-20 hidden md:block"
            >
              <div className="glass-card p-4 rounded-2xl w-48 border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500/20 rounded-lg text-green-500"><TrendingUp className="w-4 h-4" /></div>
                  <span className="text-xs font-bold text-slate-300">Revenue</span>
                </div>
                <div className="text-xl font-bold text-white">+$124.5k</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 md:-left-20 hidden md:block"
            >
              <div className="glass-card p-4 rounded-2xl w-48 border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500"><Users className="w-4 h-4" /></div>
                  <span className="text-xs font-bold text-slate-300">New Users</span>
                </div>
                <div className="text-xl font-bold text-white">+12,402</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
