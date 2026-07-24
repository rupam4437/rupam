'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const ProgressBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="font-bold text-[var(--text)]">{name}</span>
        <span className="font-mono text-xs font-bold text-[var(--text-soft)]">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-2)] via-[var(--accent-3)] to-[var(--accent)]"
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="section-band section-padding">
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title mt-4">Tools for analytics, systems and product delivery.</h2>
          </FadeIn>
          <p className="body-copy max-w-md">
            Balanced between business reporting, cloud infrastructure, and modern application development.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {siteData.skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.08}>
              <article className="premium-card h-full p-6 md:p-8">
                <h3 className="mb-8 text-sm font-black uppercase tracking-[0.14em] text-[var(--accent)]">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
