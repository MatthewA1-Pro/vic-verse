'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle 
} from 'lucide-react';

const socials = [
  { name: 'WhatsApp', icon: MessageCircle, color: 'bg-green-500', href: '#' },
  { name: 'Instagram', icon: Instagram, color: 'bg-pink-600', href: '#' },
  { name: 'Twitter', icon: Twitter, color: 'bg-sky-500', href: '#' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', href: '#' },
];

export const FloatingSocials = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-3">
      {socials.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.1 }}
          whileHover={{ scale: 1.1, x: 5 }}
          className={`${social.color} p-3 rounded-full text-white shadow-lg hover:brightness-110 transition-all`}
          title={social.name}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};
