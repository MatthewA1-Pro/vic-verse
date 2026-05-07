import React from 'react';
import { FloatingSocials } from '@/components/marketing/FloatingSocials';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <FloatingSocials />
    </div>
  );
}
