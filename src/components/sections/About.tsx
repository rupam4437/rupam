'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { aboutText } from '@/lib/constants';
import TextReveal from '@/components/animations/TextReveal';
import FadeIn from '@/components/animations/FadeIn';

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);
  
  const hasNumber = /[0-9]/.test(value);
  const numericValue = hasNumber ? parseInt(value.replace(/[^0-9]/g, ''), 10) : NaN;
  const suffix = hasNumber ? value.replace(/[0-9]/g, '') : value;

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const duration = 2000;
      const startTime = performance.now();
      
      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          setCount(Math.min(numericValue, Math.floor((elapsedTime / duration) * numericValue)));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(numericValue);
        }
      };
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
      {!isNaN(numericValue) ? `${count}${suffix}` : value}
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Photo Placeholder */}
          <div className="w-full md:w-5/12">
            <FadeIn>
              <div className="relative aspect-[4/5] rounded-2xl p-1 bg-gradient-to-b from-violet-500 to-cyan-500">
                <div className="absolute inset-[1px] bg-[#0a0a0f] rounded-2xl backdrop-blur-xl" />
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <img
                    src="/images/rupam-profile.jpg"
                    alt="Kumari Rupam"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Right: Bio */}
          <div className="w-full md:w-7/12">
            <div className="mb-6">
              <TextReveal>
                <h2 className="text-3xl md:text-5xl font-bold text-[#f5f5f5]">
                  {aboutText.headline}
                </h2>
              </TextReveal>
            </div>
            
            <div className="space-y-4 text-[#8b8b9e] mb-10 text-lg">
              {aboutText.paragraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aboutText.stats.map((stat, index) => (
                <FadeIn key={index} delay={0.4 + index * 0.1} className="flex flex-col bg-[#12121a]/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                  <Counter value={stat.value} />
                  <span className="text-sm text-[#8b8b9e] mt-1">{stat.label}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
