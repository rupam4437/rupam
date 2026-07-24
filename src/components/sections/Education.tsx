'use client';

import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[#0c0c14] border-t border-b border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
              Education
            </h2>
            <p className="text-[#8b8b9e] max-w-2xl mx-auto">
              My academic journey across prestigious institutions.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {siteData.education.map((edu, index) => (
              <FadeIn key={edu.id} delay={index * 0.15}>
                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transform -translate-x-1/2 mt-6 z-10 shadow-[0_0_12px_rgba(124,58,237,0.5)]" />

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-3rem)] ml-10 md:ml-0">
                    <div className="bg-[#12121a]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <h3 className="text-lg font-bold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors">
                          {edu.institution}
                        </h3>
                        {edu.grade && (
                          <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs font-medium whitespace-nowrap">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-medium text-sm mb-1">
                        {edu.degree} &mdash; {edu.field}
                      </p>
                      {edu.duration && (
                        <p className="text-[#8b8b9e] text-xs mb-3">{edu.duration}</p>
                      )}
                      {edu.description && (
                        <p className="text-[#8b8b9e] text-sm leading-relaxed mb-4">{edu.description}</p>
                      )}
                      {edu.skills && edu.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-white/5 text-[#d1d1d1] rounded border border-white/5">
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
