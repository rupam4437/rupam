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
      <div className="flex justify-between items-center mb-2">
        <span className="text-base font-semibold text-[#f5f5f5]">{name}</span>
        <span className="text-xs font-bold text-cyan-400">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-[#0a0a0f] rounded-full overflow-hidden border border-white/5 p-[1px]">
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
    <section id="skills" className="py-36 bg-[#0a0a0f] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteData.skillCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#12121a]/85 backdrop-blur-xl p-10 rounded-2xl border border-white/5 shadow-xl hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold text-violet-400 mb-8 tracking-wide border-b border-white/5 pb-3">{category.title}</h3>
                <div className="space-y-2">
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
