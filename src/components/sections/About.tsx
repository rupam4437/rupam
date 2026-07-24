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
    <div ref={ref} className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
      {!isNaN(numericValue) ? `${count}${suffix}` : value}
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#0c0c14] border-t border-b border-white/5">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Photo Frame */}
          <div className="w-full lg:col-span-5 flex justify-center">
            <FadeIn className="w-full max-w-[380px]">
              <div className="relative aspect-[4/5] rounded-[32px] p-[2px] bg-gradient-to-b from-violet-500 to-cyan-500 shadow-2xl">
                <div className="absolute inset-[1px] bg-[#0a0a0f] rounded-[30px] backdrop-blur-xl" />
                <div className="relative h-full w-full rounded-[28px] overflow-hidden">
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
          <div className="w-full lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-8 w-full">
              <TextReveal>
                <h2 className="awwwards-h2 text-[#f5f5f5] leading-tight">
                  {aboutText.headline}
                </h2>
              </TextReveal>
            </div>
            
            <div className="awwwards-body awwwards-max-w-text space-y-6 mb-12">
              {aboutText.paragraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <p className="leading-relaxed">{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mt-4">
              {aboutText.stats.map((stat, index) => (
                <FadeIn key={index} delay={0.4 + index * 0.1} className="flex flex-col justify-between bg-[#12121a]/85 p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 backdrop-blur-md shadow-lg min-h-[130px] group hover:scale-[1.02]">
                  <Counter value={stat.value} />
                  <span className="text-xs md:text-sm text-[#8b8b9e] font-semibold tracking-wide mt-3 uppercase group-hover:text-cyan-400 transition-colors">{stat.label}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
