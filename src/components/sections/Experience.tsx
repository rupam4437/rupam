'use client';

import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
              Experience
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {siteData.experiences.map((exp, index) => (
              <FadeIn 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] transform -translate-x-[5px] md:-translate-x-1/2" />

                {/* Left/Right Side Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 flex flex-col pt-1">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                    <h3 className="text-xl font-semibold text-[#f5f5f5]">{exp.role}</h3>
                    <h4 className="text-lg text-violet-400 mt-1">{exp.company}</h4>
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#8b8b9e] mt-2 mb-4">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Descriptions */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className="bg-[#12121a]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-colors">
                    <ul className="list-disc list-inside space-y-2 text-[#8b8b9e] mb-6">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-md">
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
