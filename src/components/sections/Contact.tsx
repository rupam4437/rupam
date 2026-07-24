'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactItems = [
    { label: 'Email', value: siteData.email, href: `mailto:${siteData.email}`, icon: Mail },
    { label: 'Phone', value: siteData.phone, icon: Phone },
    { label: 'Location', value: siteData.location, icon: MapPin },
  ];

  return (
    <section id="contact" className="section-band alt section-padding">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn className="min-w-0">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-4">Let&apos;s turn a business question into a clear system.</h2>
            <p className="body-large mt-5">
              Have a project in mind or want to connect? Send a note and I will get back to you.
            </p>

            <div className="mt-10 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="premium-card flex items-center gap-4 p-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-soft)]">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words font-bold text-[var(--text)]">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {siteData.socialLinks.map((link) => {
                const Icon = link.icon === 'linkedin' ? LinkedinIcon : link.icon === 'github' ? GithubIcon : Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="min-w-0">
            <form onSubmit={handleSubmit} className="premium-card p-5 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[var(--text-muted)]">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus-ring min-h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-[var(--text)] placeholder:text-[var(--text-soft)]"
                    placeholder="John Doe"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[var(--text-muted)]">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus-ring min-h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-[var(--text)] placeholder:text-[var(--text-soft)]"
                    placeholder="john@example.com"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-bold text-[var(--text-muted)]">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="focus-ring min-h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-[var(--text)] placeholder:text-[var(--text-soft)]"
                  placeholder="Project Inquiry"
                />
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-bold text-[var(--text-muted)]">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="focus-ring w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-soft)]"
                  placeholder="How can I help you?"
                />
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-5 text-sm font-bold text-[var(--bg)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>

                {isSubmitted && (
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent successfully
                  </span>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
