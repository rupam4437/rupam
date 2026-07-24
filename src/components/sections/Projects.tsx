'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const categories = ['All', 'Automation', 'API Testing', 'Performance', 'Mobile Testing', 'DevOps', 'Accessibility'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? siteData.projects 
    : siteData.projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
              Featured Projects
            </h2>
            <p className="text-[#8b8b9e] max-w-2xl mx-auto">
              A selection of testing frameworks, automation pipelines, and quality engineering initiatives I&apos;ve built.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-transparent'
                    : 'bg-[#12121a]/50 text-[#8b8b9e] border-white/10 hover:border-violet-500/50 hover:text-[#f5f5f5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-[#12121a]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] flex flex-col h-full group"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-[#8b8b9e] text-sm flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-white/5 text-[#d1d1d1] rounded border border-white/5">
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
