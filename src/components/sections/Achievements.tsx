'use client';

import { Trophy, Award, Star, Zap } from 'lucide-react';
import { siteData, testimonial } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

const iconMap = [Trophy, Award, Star, Zap];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500 mb-4">
              Awards & Achievements
            </h2>
            <p className="text-[#8b8b9e]">Recognitions that highlight my dedication to quality.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {siteData.achievements.map((achievement, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <FadeIn key={achievement.id} delay={idx * 0.1}>
                <div className="bg-[#12121a]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/5 relative overflow-hidden group h-full flex flex-col">
                  {/* Top Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-violet-500/10 rounded-xl">
                      <Icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-cyan-400">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#f5f5f5] mb-3 group-hover:text-violet-300 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-[#8b8b9e] text-sm leading-relaxed flex-grow">
                    {achievement.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <FadeIn delay={0.4}>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#12121a] to-[#1a1a24] p-8 md:p-12 rounded-3xl border border-white/10 relative">
            <div className="absolute -top-6 -left-2 text-8xl text-violet-500/20 font-serif leading-none">
              &ldquo;
            </div>
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-[#d1d1d1] italic leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 p-[2px]">
                  <div className="w-full h-full bg-[#12121a] rounded-full flex items-center justify-center font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#f5f5f5]">{testimonial.author}</h4>
                  <p className="text-sm text-cyan-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
