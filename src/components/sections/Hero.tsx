'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/animations/MagneticButton';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

const TITLES = [
  'Quality Assurance Engineer',
  'Test Automation Expert',
  'Software Quality Advocate'
];

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    // GSAP text animation for the name
    if (nameRef.current) {
      const chars = nameRef.current.innerText.split('');
      nameRef.current.innerHTML = '';
      
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        nameRef.current?.appendChild(span);
      });

      gsap.to(nameRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });
    }

    // Typing effect cycle
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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0f] text-[#f5f5f5]">
      {/* 3D Background */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center sm:items-start text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md bg-[#12121a]/60 border border-white/10 p-8 sm:p-12 rounded-3xl max-w-3xl shadow-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-[#8b8b9e] text-lg sm:text-xl mb-4 font-medium tracking-wide uppercase block"
          >
            Hello, I&apos;m
          </motion.span>
          
          <h1
            ref={nameRef}
            className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-transparent bg-clip-text leading-tight"
          >
            Kumari Rupam
          </h1>
          
          <div className="h-10 sm:h-12 flex items-center justify-center sm:justify-start mb-6 text-xl sm:text-3xl font-light text-[#f5f5f5]">
            <AnimatePresence mode="wait">
              <motion.span
                key={TITLES[titleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {TITLES[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-[#8b8b9e] text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            I specialize in crafting robust automated test suites, ensuring flawless user experiences, and elevating software quality from development to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start"
          >
            <MagneticButton>
              <button
                onClick={() => handleScroll('projects')}
                className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-colors w-full sm:w-auto cursor-pointer"
              >
                View My Work
              </button>
            </MagneticButton>
            
            <MagneticButton>
              <button
                onClick={() => handleScroll('contact')}
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white rounded-full font-medium transition-colors w-full sm:w-auto cursor-pointer"
              >
                Get In Touch
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#8b8b9e] cursor-pointer"
        onClick={() => handleScroll('about')}
      >
        <span className="text-sm font-medium mb-2 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
