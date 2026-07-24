'use client';

import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Education() {
  return (
    <section id="education" className="py-36 bg-[#0c0c14] border-t border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Education
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4" />
          </FadeIn>
        </div>

        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {siteData.education.map((edu, index) => (
              <FadeIn key={edu.id} delay={index * 0.15}>
                <div className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transform -translate-x-1/2 mt-8 z-10 shadow-[0_0_12px_rgba(124,58,237,0.5)]" />

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-3rem)] ml-10 md:ml-0">
                    <div className="bg-[#12121a]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-violet-500/30 transition-all duration-300 group shadow-xl">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <h3 className="text-xl font-bold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors leading-snug">
                          {edu.institution}
                        </h3>
                        {edu.grade && (
                          <span className="px-3.5 py-1.5 bg-violet-500/10 text-violet-400 rounded-full text-xs font-semibold whitespace-nowrap border border-violet-500/15">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-semibold text-base mb-2">
                        {edu.degree} &mdash; {edu.field}
                      </p>
                      {edu.duration && (
                        <p className="text-[#8b8b9e] text-xs font-medium mb-4">{edu.duration}</p>
                      )}
                      {edu.description && (
                        <p className="text-[#8b8b9e] text-sm leading-relaxed mb-6">{edu.description}</p>
                      )}
                      {edu.skills && edu.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, i) => (
                            <span key={i} className="px-2.5 py-1 text-xs bg-white/5 text-[#d1d1d1] rounded border border-white/5">
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
