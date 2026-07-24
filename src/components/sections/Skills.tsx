'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const ProgressBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-base font-bold text-[#f5f5f5]">{name}</span>
        <span className="text-xs font-bold text-cyan-400">{level}%</span>
      </div>
      <div className="h-3 w-full bg-[#0a0a0f] rounded-full overflow-hidden border border-white/5 p-[1px]">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="awwwards-h2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Skills & Expertise
            </h2>
            <div className="h-1.5 w-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-6" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[1200px] mx-auto">
          {siteData.skillCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#12121a]/85 backdrop-blur-xl p-10 lg:p-12 rounded-[24px] border border-white/5 shadow-2xl hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-300 relative group overflow-hidden flex flex-col h-full min-h-[350px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-extrabold text-violet-400 mb-8 tracking-wide border-b border-white/5 pb-4 uppercase text-xs md:text-sm tracking-[0.2em]">{category.title}</h3>
                <div className="space-y-4 flex-grow">
                  {category.skills.map((skill, i) => (
                    <ProgressBar key={i} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
