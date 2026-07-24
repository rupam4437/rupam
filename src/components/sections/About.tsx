'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { aboutText } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const statDescriptions: Record<string, string> = {
  Certifications: 'Azure, AI, security and data credentials.',
  'Projects Done': 'Analytics, cloud and web builds shipped end-to-end.',
  'M.Tech Student': 'Computing Systems and Infrastructure at BITS Pilani.',
  'Wipro Role': 'Dashboards, reports and insight workflows for business teams.',
};

const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView || Number.isNaN(numericValue)) return;

    const duration = 1200;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed < duration) {
        setCount(Math.floor((elapsed / duration) * numericValue));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-3xl font-black text-[var(--text)] md:text-4xl">
      {Number.isNaN(numericValue) ? value : `${count}${suffix}`}
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="section-band alt section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <FadeIn className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">About</p>
            <h2 className="section-title mt-4">{aboutText.headline}</h2>
            <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/rupam-profile-2.png"
                alt="Kumari Rupam"
                width={900}
                height={1125}
                className="aspect-[4/5] w-full rounded-[18px] object-cover object-top"
              />
            </div>
          </FadeIn>

          <div>
            <div className="space-y-6">
              {aboutText.paragraphs.map((paragraph, index) => (
                <FadeIn key={paragraph} delay={index * 0.08}>
                  <p className="body-large">{paragraph}</p>
                </FadeIn>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {aboutText.stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={0.18 + index * 0.08}>
                  <div className="premium-card h-full p-6">
                    <Counter value={stat.value} />
                    <p className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-[var(--accent)]">
                      {stat.label}
                    </p>
                    <p className="body-copy mt-3">
                      {statDescriptions[stat.label] ?? 'Professional career highlight.'}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
