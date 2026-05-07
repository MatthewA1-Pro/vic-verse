'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Instagram, 
  Slack, 
  MessageCircle,
  Users,
  Star,
  ExternalLink
} from 'lucide-react';

const socialChannels = [
  { name: 'Twitter / X', icon: Twitter, color: 'hover:text-sky-400', handle: '@vortex_analytics', members: '45k' },
  { name: 'LinkedIn', icon: Linkedin, color: 'hover:text-blue-600', handle: 'Vortex Analytics', members: '12k' },
  { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-500', handle: '@vortex.ai', members: '28k' },
  { name: 'GitHub', icon: Github, color: 'hover:text-white', handle: 'vortex-org', members: '500+ repos' },
];

export default function CommunityPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Join the <span className="text-gradient">Vortex Community</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Connect with thousands of data enthusiasts, engineers, and analysts building the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {socialChannels.map((social, i) => (
              <motion.a
                key={social.name}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl bg-slate-900/50 border border-white/5 transition-all group ${social.color} hover:border-primary/30`}
              >
                <social.icon className="w-10 h-10 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                <div className="text-sm text-slate-500 mb-4">{social.handle}</div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                   <Users className="w-3 h-3" /> {social.members} Followers
                </div>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Discord/Slack Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-indigo-600 relative overflow-hidden group"
            >
              <Slack className="absolute -top-10 -right-10 w-64 h-64 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Vortex Slack Community</h2>
              <p className="text-indigo-100 mb-8 max-w-sm relative z-10">
                Get real-time support, share your projects, and collaborate with our engineering team.
              </p>
              <button className="px-8 py-4 rounded-xl bg-white text-indigo-600 font-bold hover:bg-indigo-50 transition-all relative z-10 flex items-center gap-2">
                Join Community <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Newsletter Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-slate-900 border border-white/10 relative overflow-hidden group"
            >
              <MessageCircle className="absolute -top-10 -right-10 w-64 h-64 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Vortex Weekly</h2>
              <p className="text-slate-400 mb-8 max-w-sm relative z-10">
                The most important data analytics news and tutorials delivered to your inbox every Monday.
              </p>
              <div className="flex gap-3 relative z-10">
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary"
                />
                <button className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
