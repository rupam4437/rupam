'use client';

import { BadgeCheck } from 'lucide-react';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Certifications() {
  return (
    <section id="certifications" className="section-band section-padding">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <FadeIn>
            <p className="eyebrow">Certifications</p>
            <h2 className="section-title mt-4">Validated cloud, AI and data capability.</h2>
          </FadeIn>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {siteData.certifications.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.06}>
              <article className="premium-card h-full p-6 md:p-8">
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--accent)]">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="tag">{cert.issuer}</span>
                      <span className="tag">{cert.date}</span>
                    </div>
                    <h3 className="text-xl font-black leading-tight text-[var(--text)]">{cert.title}</h3>
                    {cert.description && <p className="body-copy mt-4">{cert.description}</p>}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
