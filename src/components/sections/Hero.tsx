'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowRight, BarChart3, MapPin, Sparkles } from 'lucide-react';
import { aboutText, siteData } from '@/lib/constants';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

const TITLES = ['Data Analytics Professional', 'Full Stack Developer', 'Cloud Enthusiast'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="section-band relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <HeroScene />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text-muted)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
            <span>Analytics, cloud and full-stack delivery</span>
          </div>

          <h1 className="display-title">
            Kumari Rupam builds <span className="gradient-text">clear data stories</span> for better decisions.
          </h1>

          <div className="mt-6 flex min-h-8 items-center text-xl font-bold text-[var(--text)]">
            <AnimatePresence mode="wait">
              <motion.span
                key={TITLES[titleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24 }}
              >
                {TITLES[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="body-large mt-6">
            {siteData.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => handleScroll('projects')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-5 text-sm font-bold text-[var(--bg)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('contact')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-bold text-[var(--text)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
            >
              Get In Touch
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-4">
            {aboutText.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-[var(--text)]">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[520px]"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[var(--accent-2)]/24 via-transparent to-[var(--accent)]/24 blur-3xl sm:-inset-6" />
          <div className="premium-card p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--surface-muted)]">
              <Image
                src="/images/rupam-profile.jpg"
                alt="Kumari Rupam"
                width={900}
                height={1125}
                priority
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/22 to-transparent p-6 text-white">
                <p className="text-2xl font-black">Kumari Rupam</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/78">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 backdrop-blur-md">
                    <BarChart3 className="h-4 w-4" />
                    Data Analyst @ Wipro
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 backdrop-blur-md">
                    <MapPin className="h-4 w-4" />
                    Bengaluru
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
