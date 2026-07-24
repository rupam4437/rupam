'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/SocialIcons';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-[#0c0c14] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="awwwards-h2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Get In Touch
            </h2>
            <p className="text-[#8b8b9e] max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
              Have a project in mind or want to connect? I&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 bg-[#12121a]/85 p-10 md:p-14 lg:p-16 rounded-[32px] border border-white/5 backdrop-blur-xl shadow-2xl max-w-[1200px] mx-auto">
          {/* Left: Contact Info */}
          <div className="w-full lg:col-span-5 flex flex-col justify-between">
            <FadeIn delay={0.1}>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#f5f5f5] mb-6">Contact Information</h3>
              <p className="text-[#8b8b9e] mb-12 leading-relaxed text-sm md:text-base lg:text-lg">
                Fill out the form and I will get back to you within 24 hours.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-all shadow-md">
                    <Mail className="text-violet-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8b8b9e] uppercase font-bold tracking-wider mb-1.5">Email</p>
                    <a href={`mailto:${siteData.email}`} className="text-[#f5f5f5] hover:text-cyan-400 transition-colors text-base md:text-lg font-bold">
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-all shadow-md">
                    <Phone className="text-violet-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8b8b9e] uppercase font-bold tracking-wider mb-1.5">Phone</p>
                    <p className="text-[#f5f5f5] text-base md:text-lg font-bold">{siteData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-all shadow-md">
                    <MapPin className="text-violet-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8b8b9e] uppercase font-bold tracking-wider mb-1.5">Location</p>
                    <p className="text-[#f5f5f5] text-base md:text-lg font-bold">{siteData.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <p className="text-xs text-[#8b8b9e] uppercase font-bold tracking-wider mb-5">Connect with me</p>
                <div className="flex gap-4.5">
                  {siteData.socialLinks.map((link, idx) => {
                    const Icon = link.icon === 'linkedin' ? LinkedinIcon : link.icon === 'github' ? GithubIcon : Mail;
                    return (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[#8b8b9e] hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 hover:text-white transition-all hover:scale-110 border border-white/5"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:col-span-7 mt-12 lg:mt-0">
            <FadeIn delay={0.2} className="h-full">
              <form onSubmit={handleSubmit} className="bg-[#0a0a0f]/80 p-10 md:p-12 rounded-[24px] border border-white/10 h-full flex flex-col justify-between shadow-2xl">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-[#8b8b9e] tracking-wide uppercase">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#12121a] border border-white/10 rounded-xl px-5 py-4 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-[#8b8b9e] tracking-wide uppercase">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#12121a] border border-white/10 rounded-xl px-5 py-4 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-bold text-[#8b8b9e] tracking-wide uppercase">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#12121a] border border-white/10 rounded-xl px-5 py-4 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors text-base"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-[#8b8b9e] tracking-wide uppercase">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-[#12121a] border border-white/10 rounded-xl px-5 py-4 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none text-base"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between flex-wrap gap-6">
                  <button
                    type="submit"
                    className="flex items-center gap-2.5 px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] active:scale-95 text-base cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                  
                  {isSubmitted && (
                    <span className="text-green-400 text-base font-bold animate-pulse">
                      Message sent successfully!
                    </span>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
