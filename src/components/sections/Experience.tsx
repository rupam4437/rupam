'use client';

import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="awwwards-h2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Experience
            </h2>
            <div className="h-1.5 w-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-6" />
          </FadeIn>
        </div>

        <div className="relative mt-16 max-w-[1100px] mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-24">
            {siteData.experiences.map((exp, index) => (
              <FadeIn 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row gap-12 lg:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-10 w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] transform -translate-x-[9px] md:-translate-x-1/2 z-10 border-4 border-[#0a0a0f]" />

                {/* Left/Right Side Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 flex flex-col pt-3">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-[#f5f5f5] tracking-tight">{exp.role}</h3>
                    <h4 className="text-lg lg:text-xl font-semibold text-violet-400 mt-1.5">{exp.company}</h4>
                    <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-[#8b8b9e] tracking-wider uppercase mt-4 mb-4">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Descriptions */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className="bg-[#12121a]/85 backdrop-blur-md p-10 lg:p-12 rounded-[24px] border border-white/5 hover:border-violet-500/30 transition-all duration-300 shadow-2xl hover:scale-[1.01]">
                    <ul className="list-disc list-inside space-y-3.5 text-[#8b8b9e] mb-8 text-sm lg:text-base leading-relaxed">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3.5 py-1.5 text-xs bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/15 font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
