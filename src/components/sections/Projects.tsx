'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const categories = ['All', 'Data Analytics', 'Web Development', 'Cloud'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? siteData.projects 
    : siteData.projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-36 bg-[#0c0c14] border-t border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Featured Projects
            </h2>
            <p className="text-[#8b8b9e] max-w-2xl mx-auto mt-4 text-base md:text-lg">
              A selection of projects showcasing my expertise in data analytics, web development, and cloud technologies.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-transparent shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                    : 'bg-[#12121a]/60 text-[#8b8b9e] border-white/10 hover:border-violet-500/50 hover:text-[#f5f5f5] backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-[#12121a]/85 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] flex flex-col h-full group"
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs font-semibold mb-4 border border-violet-500/15">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-[#8b8b9e] text-sm flex-grow mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs bg-white/5 text-[#d1d1d1] rounded border border-white/5 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
