'use client';

import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

function getIssuerStyle(issuer: string) {
  if (issuer.toLowerCase().includes('microsoft')) {
    return 'bg-blue-500/10 text-blue-400';
  }
  if (issuer.toLowerCase().includes('linkedin')) {
    return 'bg-cyan-500/10 text-cyan-400';
  }
  return 'bg-violet-500/10 text-violet-400';
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
              Certifications
            </h2>
            <p className="text-[#8b8b9e] max-w-2xl mx-auto">
              Industry-recognized certifications validating my expertise.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.certifications.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.1}>
              <div className="bg-[#12121a]/80 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.2)] transition-all duration-300 group h-full">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 mt-1">
                    🏆
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIssuerStyle(cert.issuer)}`}>
                        {cert.issuer}
                      </span>
                      <span className="text-[#8b8b9e] text-xs">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
