'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-[#0a0a0f]">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-500 tracking-tighter">
              KR
            </span>
            <p className="mt-2 text-sm text-zinc-400 max-w-xs">
              Crafting premium digital experiences through thoughtful design and modern engineering.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-colors text-zinc-300 hover:text-cyan-400"
                aria-label={`Follow on ${link.name}`}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {year} Kumari Rupam. All rights reserved.
          </p>
          
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-400 transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-violet-500/20 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
