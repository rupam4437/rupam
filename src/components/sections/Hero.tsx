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
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] text-[#f5f5f5] pt-24">
      {/* 3D Background */}
      <HeroScene />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 w-full max-w-[1400px]">
        {/* Left Side: Professional Profile Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="backdrop-blur-md bg-[#12121a]/40 border border-white/10 p-10 md:p-14 rounded-[32px] shadow-2xl w-full">
            <span className="text-[#8b8b9e] text-xs md:text-sm mb-4 font-bold tracking-[0.25em] uppercase block">
              Hello, I&apos;m
            </span>

            {/* Profile Avatar inside the card */}
            <div className="flex items-center gap-5 mb-8 justify-center lg:justify-start">
              <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-violet-500 to-cyan-500 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                <img
                  src="/images/rupam-profile.jpg"
                  alt="Kumari Rupam"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text leading-tight">
                  Kumari Rupam
                </h1>
                <p className="text-zinc-400 text-sm md:text-base mt-1">Data Analyst @ Wipro</p>
              </div>
            </div>

            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6 text-xl sm:text-2xl font-bold text-[#f5f5f5]">
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

            <p className="text-[#8b8b9e] text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              I specialize in data visualization, reporting, and trend analysis at Wipro. Passionate about leveraging analytics and technology to drive innovation and strategic growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start pb-2">
              <MagneticButton>
                <button
                  onClick={() => handleScroll('projects')}
                  className="px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] active:scale-95 cursor-pointer text-sm w-full sm:w-auto shadow-md"
                >
                  View My Work
                </button>
              </MagneticButton>
              
              <MagneticButton>
                <button
                  onClick={() => handleScroll('contact')}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer text-sm w-full sm:w-auto shadow-md"
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
          className="w-full lg:w-6/12 flex items-center justify-center"
        >
          <div className="relative group max-w-[340px] sm:max-w-[400px] aspect-[4/5] w-full">
            {/* Multi-layered Glowing Background Ring */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-violet-600 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-violet-600 via-cyan-500 to-violet-600 opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow" />
            
            {/* Frame Container */}
            <div className="relative h-full w-full rounded-[28px] overflow-hidden border border-white/10 bg-[#12121a]/80 backdrop-blur-xl">
              <img
                src="/images/rupam-profile.jpg"
                alt="Kumari Rupam Portrait"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom overlay with name details */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl">Kumari Rupam</h3>
                  <p className="text-zinc-400 text-xs font-semibold mt-1">Bengaluru, India</p>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#8b8b9e] cursor-pointer z-10"
        onClick={() => handleScroll('about')}
      >
        <span className="text-xs font-semibold mb-2 tracking-widest uppercase">Scroll</span>
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
