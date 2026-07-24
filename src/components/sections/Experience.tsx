'use client';

import { BriefcaseBusiness } from 'lucide-react';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Experience() {
  return (
    <section id="experience" className="section-band section-padding">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <FadeIn>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title mt-4">Analytics practice with business context.</h2>
            <p className="body-large mt-5">
              Current work centered on reporting, visualization, and turning operational patterns into decisions teams can act on.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border-strong)] to-transparent md:left-[31%]" />

          <div className="space-y-8">
            {siteData.experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.08}>
                <article className="relative grid gap-6 pl-14 md:grid-cols-[0.38fr_0.62fr] md:gap-12 md:pl-0">
                  <div className="absolute left-0 top-7 grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--accent)] shadow-[var(--shadow-soft)] md:left-[31%] md:-translate-x-1/2">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>

                  <div className="md:pr-12">
                    <p className="tag">{exp.duration}</p>
                    <h3 className="mt-5 text-2xl font-black text-[var(--text)]">{exp.role}</h3>
                    <p className="mt-2 text-lg font-bold text-[var(--accent)]">{exp.company}</p>
                  </div>

                  <div className="premium-card p-6 md:p-8">
                    <ul className="space-y-4">
                      {exp.description.map((desc) => (
                        <li key={desc} className="flex gap-3 body-copy">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-2 border-t border-[var(--border)] pt-6">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
