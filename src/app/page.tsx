'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = dynamic(() => import('@/components/layout/Navbar'), { ssr: false });
const SmoothScroll = dynamic(() => import('@/components/layout/SmoothScroll'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Experience = dynamic(() => import('@/components/sections/Experience'), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });

const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return prev + Math.random() * 12 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{ backgroundColor: '#0a0a0f' }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="mb-8"
            >
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] opacity-20 blur-xl" />
                <div className="relative flex items-center justify-center w-full h-full rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#06b6d4]">
                  <span className="text-2xl font-bold text-white">KR</span>
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl font-light tracking-widest mb-8 uppercase"
              style={{ color: '#8b8b9e' }}
            >
              Kumari Rupam
            </motion.h2>

            <div
              className="w-48 h-[2px] rounded-full overflow-hidden"
              style={{ backgroundColor: '#1a1a2e' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(to right, #7c3aed, #06b6d4)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="flex gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full loader-dot"
                  style={{ backgroundColor: '#7c3aed' }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />

              <Contact />
            </main>
            <Footer />
          </SmoothScroll>
        </motion.div>
      )}
    </>
  );
}
