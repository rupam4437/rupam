'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const ProgressBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-[#f5f5f5]">{name}</span>
        <span className="text-xs text-[#8b8b9e]">{level}%</span>
      </div>
      <div className="h-2 w-full bg-[#0a0a0f] rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0a0a0f] relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.skillCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#12121a]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-lg hover:shadow-violet-500/20 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-semibold text-violet-400 mb-6">{category.title}</h3>
                <div>
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
