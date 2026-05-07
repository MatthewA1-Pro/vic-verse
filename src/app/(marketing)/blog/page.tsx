'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Search, Calendar, User, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "How to Build a Data-Driven Culture in 2026",
    excerpt: "Building a culture that values data starts with education and the right tools. Here's our roadmap.",
    category: "Strategy",
    author: "Elena Vance",
    date: "May 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea70288?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Predictive Analytics vs. Traditional BI",
    excerpt: "Understanding the fundamental differences and why your business needs both to thrive.",
    category: "Insights",
    author: "Mark S.",
    date: "May 10, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Next-Gen Dashboard Design Patterns",
    excerpt: "Explore the UX trends that are making data more accessible and actionable for non-technical users.",
    category: "Design",
    author: "Dylan C.",
    date: "May 08, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            The <span className="text-gradient">Vortex Blog</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Insights, tutorials, and news from the intersection of AI and data analytics.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured Post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
              <span className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Featured Article
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                The Future of Autonomous Analytics is Already Here
              </h2>
              <div className="flex items-center gap-6 text-slate-300 text-sm mb-8">
                <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Elena Vance</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> May 15, 2026</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 15 min read</span>
              </div>
              <button className="px-8 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all">
                Read Article
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
