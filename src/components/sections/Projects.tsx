'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const categories = ['All', 'Data Analytics', 'Web Development', 'Cloud'];

const getProjectSpan = (index: number) => {
  // Bento Grid asymmetric layout spans
  if (index === 0 || index === 3 || index === 4) {
    return 'lg:col-span-2 md:col-span-2';
  }
  return 'lg:col-span-1 md:col-span-2';
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? siteData.projects 
    : siteData.projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-[#0c0c14] border-t border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="awwwards-h2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Featured Projects
            </h2>
            <p className="text-[#8b8b9e] max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
              A selection of projects showcasing my expertise in data analytics, web development, and cloud technologies.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-transparent shadow-[0_0_15px_rgba(124,58,237,0.3)] scale-105'
                    : 'bg-[#12121a]/60 text-[#8b8b9e] border-white/10 hover:border-violet-500/50 hover:text-[#f5f5f5] backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Bento Grid Projects Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1200px] mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className={`${getProjectSpan(idx)} bg-[#12121a]/85 backdrop-blur-md rounded-[28px] p-10 lg:p-12 border border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.35)] flex flex-col justify-between group transition-all duration-350`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                    <span className="inline-block px-4 py-1.5 bg-violet-500/10 text-violet-400 rounded-full text-xs font-bold border border-violet-500/15 tracking-wide uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors leading-tight mb-5">
                    {project.title}
                  </h3>
                  <p className="text-[#8b8b9e] text-sm lg:text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech tags and action link aligned at bottom */}
                <div className="flex items-center justify-between gap-6 pt-6 border-t border-white/5 w-full mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs bg-white/5 text-[#d1d1d1] rounded border border-white/5 font-semibold">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 text-xs bg-white/5 text-[#8b8b9e] rounded border border-white/5 font-semibold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={project.githubUrl || siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-violet-400 hover:text-cyan-400 transition-colors uppercase tracking-wider whitespace-nowrap flex items-center gap-1 group/link"
                  >
                    <span>View Project</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
