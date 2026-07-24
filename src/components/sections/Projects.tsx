'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const categories = ['All', 'Data Analytics', 'Web Development', 'Cloud'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects =
    activeFilter === 'All'
      ? siteData.projects
      : siteData.projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-band alt section-padding">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <FadeIn>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title mt-4">Selected work across analytics, cloud and web.</h2>
            <p className="body-large mt-5">
              A focused set of projects showing dashboards, infrastructure thinking, and full-stack implementation.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <div className="mb-10 flex flex-wrap gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 backdrop-blur-xl">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`min-h-10 rounded-xl px-4 text-sm font-bold transition ${
                  activeFilter === category
                    ? 'bg-[var(--text)] text-[var(--bg)] shadow-[var(--shadow-soft)]'
                    : 'text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.26, delay: index * 0.03 }}
                className={`premium-card flex min-h-[320px] flex-col p-6 md:p-8 ${
                  index === 0 || index === 3 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="tag">{project.category}</span>
                  <a
                    href={project.githubUrl || siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>

                <h3 className="text-2xl font-black leading-tight text-[var(--text)]">{project.title}</h3>
                <p className="body-copy mt-5">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-[var(--border)] pt-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
