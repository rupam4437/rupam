'use client';

import { GraduationCap } from 'lucide-react';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Education() {
  return (
    <section id="education" className="section-band alt section-padding">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <FadeIn>
            <p className="eyebrow">Education</p>
            <h2 className="section-title mt-4">A technical foundation across systems, data and web.</h2>
          </FadeIn>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {siteData.education.map((edu, index) => (
            <FadeIn key={edu.id} delay={index * 0.07}>
              <article className="premium-card h-full p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--accent)]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="tag">{edu.duration}</span>
                      {edu.grade && <span className="tag">{edu.grade}</span>}
                    </div>
                    <h3 className="mt-5 text-xl font-black leading-tight text-[var(--text)] md:text-2xl">
                      {edu.institution}
                    </h3>
                    <p className="mt-3 font-bold text-[var(--accent)]">
                      {edu.degree} - {edu.field}
                    </p>
                  </div>
                </div>

                {edu.description && <p className="body-copy mt-6">{edu.description}</p>}

                {edu.skills && edu.skills.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
