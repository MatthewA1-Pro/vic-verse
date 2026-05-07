'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  LayoutDashboard, 
  PieChart, 
  Users, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  LogOut,
  ChevronRight,
  TrendingUp,
  Zap,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
  { name: 'Users', icon: Users, href: '/dashboard/users' },
  { name: 'Projects', icon: Briefcase, href: '/dashboard/projects' },
  { name: 'Automation', icon: Zap, href: '/dashboard/automation' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 flex overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl shrink-0">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Vortex</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                link.name === 'Overview' 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <link.icon className={cn("w-5 h-5", link.name === 'Overview' ? "text-primary" : "group-hover:text-primary transition-colors")} />
              <span className="font-semibold">{link.name}</span>
              {link.name === 'Overview' && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-sm font-bold text-white mb-2">Pro Plan</h4>
              <p className="text-xs text-slate-400 mb-4">You are using 45% of your data quota.</p>
              <button className="w-full py-2 bg-white text-slate-950 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">
                Upgrade Now
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 mt-6 text-slate-400 hover:text-rose-400 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-semibold">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-400">
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/5 px-4 py-2 rounded-xl w-96">
            <Search className="w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search data, users, reports..."
              className="bg-transparent border-none text-sm text-white focus:outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-white transition-all">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-950" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/5">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white">Elena Vance</div>
                <div className="text-xs text-slate-500">Admin Account</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 p-0.5">
                <img src="https://i.pravatar.cc/150?u=elena" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <motion.aside 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            className="absolute top-0 left-0 bottom-0 w-72 bg-slate-900 border-r border-white/10 flex flex-col"
          >
            <div className="p-8 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-white w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-white">Vortex</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-2 text-slate-400">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-4 space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-semibold">{link.name}</span>
                </Link>
              ))}
            </nav>
          </motion.aside>
        </div>
      )}
    </div>
  );
}
