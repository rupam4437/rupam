'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/animations/MagneticButton';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

const TITLES = [
  'Data Analytics Professional',
  'Full Stack Developer',
  'Cloud Enthusiast'
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] text-[#f5f5f5]">
      {/* 3D Background */}
      <HeroScene />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 w-full mt-16">
        {/* Left Side: Professional Profile Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="backdrop-blur-md bg-[#12121a]/60 border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl w-full">
            <span className="text-[#8b8b9e] text-sm sm:text-base mb-3 font-semibold tracking-widest uppercase block">
              Hello, I&apos;m
            </span>

            {/* Profile Avatar inside the card right under "Hello, I'm" */}
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-violet-500 to-cyan-500 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                <img
                  src="/images/rupam-profile.jpg"
                  alt="Kumari Rupam"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
                  Kumari Rupam
                </h1>
                <p className="text-zinc-400 text-sm">Data Analyst @ Wipro</p>
              </div>
            </div>

            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-4 text-xl sm:text-2xl font-semibold text-[#f5f5f5]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={TITLES[titleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400"
                >
                  {TITLES[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-[#8b8b9e] text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              I specialize in data visualization, reporting, and trend analysis at Wipro. Passionate about leveraging analytics and technology to drive innovation and strategic growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <MagneticButton>
                <button
                  onClick={() => handleScroll('projects')}
                  className="px-6 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] active:scale-95 cursor-pointer text-sm w-full sm:w-auto"
                >
                  View My Work
                </button>
              </MagneticButton>
              
              <MagneticButton>
                <button
                  onClick={() => handleScroll('contact')}
                  className="px-6 py-3.5 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white rounded-full font-medium transition-colors cursor-pointer text-sm w-full sm:w-auto"
                >
                  Get In Touch
                </button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Large Glowing Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full lg:w-5/12 flex items-center justify-center"
        >
          <div className="relative group max-w-[320px] sm:max-w-[360px] aspect-[4/5] w-full">
            {/* Multi-layered Glowing Background Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600 via-cyan-500 to-violet-600 opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow" />
            
            {/* Frame Container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-[#12121a]/80 backdrop-blur-xl">
              <img
                src="/images/rupam-profile.jpg"
                alt="Kumari Rupam Portrait"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom overlay with mini logo */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">Kumari Rupam</h3>
                  <p className="text-zinc-300 text-xs">Bengaluru, India</p>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text font-mono">
                  KR
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#8b8b9e] cursor-pointer z-10"
        onClick={() => handleScroll('about')}
      >
        <span className="text-xs font-medium mb-1.5 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
