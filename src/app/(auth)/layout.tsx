import React from 'react';
import Link from 'next/link';
import { BarChart3 } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-secondary/10 blur-[150px] rounded-full" />
      </div>

      <div className="mb-12">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
            <BarChart3 className="text-white w-7 h-7" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Vortex<span className="text-primary">Analytics</span>
          </span>
        </Link>
      </div>

      <div className="w-full max-w-md">
        {children}
      </div>

      <div className="mt-12 text-slate-500 text-sm">
        © 2026 Vortex Analytics Inc.
      </div>
    </div>
  );
}
