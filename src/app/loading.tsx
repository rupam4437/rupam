'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
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

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl font-light tracking-widest text-[#8b8b9e] mb-8 uppercase"
          >
            Kumari Rupam
          </motion.h2>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-[#1a1a2e] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Loading dots */}
          <div className="flex gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#7c3aed] loader-dot"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
