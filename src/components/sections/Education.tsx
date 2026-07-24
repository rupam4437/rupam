'use client';

import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[#0c0c14] border-t border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="awwwards-h2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Education
            </h2>
            <div className="h-1.5 w-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-6" />
          </FadeIn>
        </div>

        <div className="relative mt-16 max-w-[1100px] mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 transform md:-translate-x-1/2" />

          <div className="space-y-24">
            {siteData.education.map((edu, index) => (
              <FadeIn key={edu.id} delay={index * 0.15}>
                <div className={`relative flex flex-col md:flex-row gap-12 lg:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transform -translate-x-1/2 mt-12 z-10 shadow-[0_0_12px_rgba(124,58,237,0.5)] border-4 border-[#0c0c14]" />

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-3rem)] ml-10 md:ml-0">
                    <div className="bg-[#12121a]/85 backdrop-blur-md rounded-[24px] p-10 lg:p-12 border border-white/5 hover:border-violet-500/30 transition-all duration-300 group shadow-2xl hover:scale-[1.01]">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors leading-snug">
                          {edu.institution}
                        </h3>
                        {edu.grade && (
                          <span className="px-4 py-1.5 bg-violet-500/10 text-violet-400 rounded-full text-xs font-bold whitespace-nowrap border border-violet-500/15">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-semibold text-base md:text-lg mb-2">
                        {edu.degree} &mdash; {edu.field}
                      </p>
                      {edu.duration && (
                        <p className="text-[#8b8b9e] text-xs font-bold uppercase tracking-wider mb-4">{edu.duration}</p>
                      )}
                      {edu.description && (
                        <p className="text-[#8b8b9e] text-sm lg:text-base leading-relaxed mb-6">{edu.description}</p>
                      )}
                      {edu.skills && edu.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                          {edu.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 text-xs bg-white/5 text-[#d1d1d1] rounded border border-white/5 font-semibold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
