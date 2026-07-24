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
    // In a real app, you would handle form submission here
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
    <section id="contact" className="py-28 bg-[#0c0c14] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
              Get In Touch
            </h2>
            <p className="text-[#8b8b9e] max-w-2xl mx-auto">
              Have a project in mind or want to connect? I&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-[#12121a]/50 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-xl">
          {/* Left: Contact Info */}
          <div className="w-full lg:w-5/12">
            <FadeIn delay={0.1}>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-6">Contact Information</h3>
              <p className="text-[#8b8b9e] mb-8">
                Fill out the form and I will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-all">
                    <Mail className="text-violet-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8b8b9e]">Email</p>
                    <a href={`mailto:${siteData.email}`} className="text-[#f5f5f5] hover:text-cyan-400 transition-colors">
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-all">
                    <Phone className="text-violet-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8b8b9e]">Phone</p>
                    <p className="text-[#f5f5f5]">{siteData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-all">
                    <MapPin className="text-violet-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8b8b9e]">Location</p>
                    <p className="text-[#f5f5f5]">{siteData.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-[#8b8b9e] mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {siteData.socialLinks.map((link, idx) => {
                    const Icon = link.icon === 'linkedin' ? LinkedinIcon : link.icon === 'github' ? GithubIcon : Mail;
                    return (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#8b8b9e] hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 hover:text-white transition-all hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-7/12">
            <FadeIn delay={0.2} className="h-full">
              <form onSubmit={handleSubmit} className="bg-[#0a0a0f]/80 p-6 md:p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm text-[#8b8b9e]">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#12121a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm text-[#8b8b9e]">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#12121a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-sm text-[#8b8b9e]">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#12121a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm text-[#8b8b9e]">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#12121a] border border-white/10 rounded-lg px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white rounded-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] active:scale-95"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                  
                  {isSubmitted && (
                    <span className="text-green-400 text-sm font-medium animate-pulse">
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
