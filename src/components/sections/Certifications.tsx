'use client';

import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

function getIssuerStyle(issuer: string) {
  if (issuer.toLowerCase().includes('microsoft')) {
    return 'bg-blue-500/10 text-blue-400 border-blue-500/15';
  }
  if (issuer.toLowerCase().includes('linkedin')) {
    return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/15';
  }
  return 'bg-violet-500/10 text-violet-400 border-violet-500/15';
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="awwwards-h2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Certifications
            </h2>
            <div className="h-1.5 w-20 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-6" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-[1200px] mx-auto">
          {siteData.certifications.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.1}>
              <div className="bg-[#12121a]/85 backdrop-blur-md rounded-[24px] p-10 lg:p-12 border border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.25)] transition-all duration-300 group h-full flex flex-col justify-between hover:scale-[1.01]">
                <div className="flex items-start gap-6">
                  <div className="text-4xl flex-shrink-0 mt-1">
                    🏆
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#f5f5f5] group-hover:text-cyan-400 transition-colors mb-5 leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-3.5 flex-wrap">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${getIssuerStyle(cert.issuer)}`}>
                        {cert.issuer}
                      </span>
                      <span className="text-[#8b8b9e] text-xs font-semibold tracking-wider uppercase">
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
