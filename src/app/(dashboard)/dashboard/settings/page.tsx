'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe,
  Trash2,
  Save
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
        <p className="text-slate-400">Manage your profile, security, and subscription preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation */}
        <div className="md:col-span-1 space-y-1">
          {[
            { name: 'General', icon: User },
            { name: 'Security', icon: Lock },
            { name: 'Notifications', icon: Bell },
            { name: 'Billing', icon: CreditCard },
            { name: 'Team', icon: Shield },
          ].map((item, i) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                i === 0 ? 'bg-primary/10 text-primary border border-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-8">
          <div className="glass-card p-8 rounded-[2rem] border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Profile Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 relative group">
                  <img src="https://i.pravatar.cc/150?u=elena" className="w-full h-full rounded-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/60 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-all">
                    <span className="text-[10px] font-bold text-white uppercase">Change</span>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Elena Vance</div>
                  <div className="text-sm text-slate-500">Member since May 2022</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                  <input type="text" defaultValue="Elena" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                  <input type="text" defaultValue="Vance" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" defaultValue="elena@lumon.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Bio</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary resize-none" defaultValue="Managing data streams at Lumon Industries. Focused on efficiency and predictive trends." />
              </div>

              <div className="flex justify-end pt-4">
                <button className="px-6 py-3 bg-primary rounded-xl text-white font-bold flex items-center gap-2 hover:bg-primary/90 transition-all">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border-white/5 border-rose-500/20">
            <h3 className="text-xl font-bold text-rose-500 mb-2">Danger Zone</h3>
            <p className="text-slate-500 text-sm mb-6">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="px-6 py-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-500 font-bold hover:bg-rose-500 hover:text-white transition-all flex items-center gap-2">
              <Trash2 className="w-4 h-4" /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
