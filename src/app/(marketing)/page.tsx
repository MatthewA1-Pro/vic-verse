import React from 'react';
import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { Services } from '@/components/marketing/Services';
import { Projects } from '@/components/marketing/Projects';
import { Results } from '@/components/marketing/Results';
import { Testimonials } from '@/components/marketing/Testimonials';
import { FAQ } from '@/components/marketing/FAQ';
import { Pricing } from '@/components/marketing/Pricing';
import { Footer } from '@/components/marketing/Footer';

export default function HomePage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Results />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}
