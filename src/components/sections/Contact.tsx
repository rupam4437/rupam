'use client';

import Script from 'next/script';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { siteData } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type FieldErrors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
      theme: 'auto';
    }
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [formState, setFormState] = useState<FormState>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const contactItems = useMemo(
    () => [
      { label: 'Email', value: siteData.email, href: `mailto:${siteData.email}`, icon: Mail },
      { label: 'Phone', value: siteData.phone, icon: Phone },
      { label: 'Location', value: siteData.location, icon: MapPin },
    ],
    []
  );

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileReady || !turnstileRef.current || !window.turnstile || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: turnstileSiteKey,
      theme: 'auto',
      callback: (token) => {
        setTurnstileToken(token);
        setStatusMessage('');
      },
      'expired-callback': () => {
        setTurnstileToken('');
        setStatusMessage('Security check expired. Please verify again.');
      },
      'error-callback': () => {
        setTurnstileToken('');
        setStatusMessage('Security check failed to load. Please refresh and try again.');
      },
    });

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [turnstileReady, turnstileSiteKey]);

  const resetTurnstile = () => {
    if (window.turnstile && widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setTurnstileToken('');
  };

  const validateClientFields = () => {
    const errors: FieldErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) errors.name = 'Please enter your name.';
    if (!email) errors.email = 'Please enter your email.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email.';
    if (!subject) errors.subject = 'Please enter a subject.';
    if (!message) errors.message = 'Please enter a message.';
    if (message.length > 2000) errors.message = 'Message must be 2000 characters or less.';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState === 'submitting') return;

    setStatusMessage('');
    setFormState('idle');

    if (!validateClientFields()) {
      setFormState('error');
      setStatusMessage('Please correct the highlighted fields.');
      return;
    }

    if (!turnstileSiteKey) {
      setFormState('error');
      setStatusMessage('Contact form security is not configured yet. Please email directly.');
      return;
    }

    if (!turnstileToken) {
      setFormState('error');
      setStatusMessage('Please complete the security check before sending.');
      return;
    }

    setFormState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          startedAt,
          turnstileToken,
        }),
      });

      const result = (await response.json()) as {
        message?: string;
        errors?: FieldErrors;
      };

      if (!response.ok) {
        setFieldErrors(result.errors ?? {});
        setStatusMessage(result.message ?? 'Message could not be sent. Please try again.');
        setFormState('error');
        resetTurnstile();
        return;
      }

      setFormState('success');
      setStatusMessage(result.message ?? 'Message sent successfully.');
      setFieldErrors({});
      setFormData(initialFormData);
      setStartedAt(Date.now());
      resetTurnstile();
    } catch {
      setFormState('error');
      setStatusMessage('Network error. Please try again or email directly.');
      resetTurnstile();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const isSubmitting = formState === 'submitting';

  return (
    <section id="contact" className="section-band alt section-padding">
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setTurnstileReady(true)}
        />
      )}

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
            <form onSubmit={handleSubmit} className="premium-card p-5 md:p-8" noValidate>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[var(--text-muted)]">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={80}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                    className="focus-ring min-h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-[var(--text)] placeholder:text-[var(--text-soft)] disabled:opacity-60"
                    placeholder="John Doe"
                  />
                  {fieldErrors.name && (
                    <p id="contact-name-error" className="mt-2 text-sm font-semibold text-red-400">
                      {fieldErrors.name}
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[var(--text-muted)]">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                    className="focus-ring min-h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-[var(--text)] placeholder:text-[var(--text-soft)] disabled:opacity-60"
                    placeholder="john@example.com"
                  />
                  {fieldErrors.email && (
                    <p id="contact-email-error" className="mt-2 text-sm font-semibold text-red-400">
                      {fieldErrors.email}
                    </p>
                  )}
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
                  maxLength={120}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(fieldErrors.subject)}
                  aria-describedby={fieldErrors.subject ? 'contact-subject-error' : undefined}
                  className="focus-ring min-h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-[var(--text)] placeholder:text-[var(--text-soft)] disabled:opacity-60"
                  placeholder="Project Inquiry"
                />
                {fieldErrors.subject && (
                  <p id="contact-subject-error" className="mt-2 text-sm font-semibold text-red-400">
                    {fieldErrors.subject}
                  </p>
                )}
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-bold text-[var(--text-muted)]">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  rows={7}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'contact-message-error' : 'contact-message-help'}
                  className="focus-ring w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-soft)] disabled:opacity-60"
                  placeholder="How can I help you?"
                />
                <div className="mt-2 flex items-center justify-between gap-4">
                  {fieldErrors.message ? (
                    <p id="contact-message-error" className="text-sm font-semibold text-red-400">
                      {fieldErrors.message}
                    </p>
                  ) : (
                    <p id="contact-message-help" className="text-sm text-[var(--text-soft)]">
                      Keep it concise. Maximum 2000 characters.
                    </p>
                  )}
                  <span className="shrink-0 font-mono text-xs text-[var(--text-soft)]">
                    {formData.message.length}/2000
                  </span>
                </div>
              </label>

              <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[var(--text-muted)]">
                  <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
                  Spam protected
                </div>
                {turnstileSiteKey ? (
                  <div ref={turnstileRef} />
                ) : (
                  <p className="text-sm font-semibold text-amber-400">
                    Security verification is waiting for the Turnstile site key.
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-5 text-sm font-bold text-[var(--bg)] shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <AnimatePresence mode="wait">
                  {statusMessage && (
                    <motion.p
                      key={`${formState}-${statusMessage}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`inline-flex items-center gap-2 text-sm font-bold ${
                        formState === 'success' ? 'text-[var(--accent)]' : 'text-red-400'
                      }`}
                      role={formState === 'success' ? 'status' : 'alert'}
                    >
                      {formState === 'success' ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                      {statusMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
