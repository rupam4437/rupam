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
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-tight">
      {!isNaN(numericValue) ? `${count}${suffix}` : value}
    </div>
  );
};

const getBentoDetails = (label: string) => {
  switch (label.toLowerCase()) {
    case 'certifications':
      return {
        span: 'col-span-2 md:col-span-2 lg:col-span-2',
        desc: 'Industry certifications validating cloud, AI, and security engineering expertise.'
      };
    case 'projects done':
      return {
        span: 'col-span-2 md:col-span-2 lg:col-span-1',
        desc: 'Successful deployments.'
      };
    case 'm.tech student':
      return {
        span: 'col-span-2 md:col-span-2 lg:col-span-2',
        desc: 'BITS Pilani program in Computing Systems & Infrastructure.'
      };
    case 'wipro role':
      return {
        span: 'col-span-2 md:col-span-2 lg:col-span-3',
        desc: 'Driving analytics, dashboard automation, and data visualization at Wipro.'
      };
    default:
      return {
        span: 'col-span-2 md:col-span-2 lg:col-span-2',
        desc: 'Professional career highlight.'
      };
  }
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
            
            <div className="awwwards-body awwwards-max-w-text space-y-6 mb-12 text-lg leading-[1.8] text-zinc-400">
              {aboutText.paragraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <p className="leading-relaxed">{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            
            {/* Bento Grid Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 w-full mt-4">
              {aboutText.stats.map((stat, index) => {
                const bento = getBentoDetails(stat.label);
                return (
                  <FadeIn 
                    key={index} 
                    delay={0.4 + index * 0.1} 
                    className={`${bento.span} flex flex-col justify-between bg-[#12121a]/60 backdrop-blur-xl p-8 lg:p-10 rounded-[28px] border border-white/5 shadow-2xl hover:border-violet-500/30 transition-all duration-300 hover:scale-[1.02] group`}
                  >
                    <div>
                      <Counter value={stat.value} />
                      <h4 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-wider uppercase mt-4 mb-2">
                        {stat.label}
                      </h4>
                    </div>
                    <p className="text-xs text-[#8b8b9e] leading-relaxed mt-1">
                      {bento.desc}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Spacious bottom padding spacer */}
      <div className="h-16 md:h-24" />
    </section>
  );
}
