'use client';

import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { siteData } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, href: siteData.github },
    { name: 'LinkedIn', icon: LinkedinIcon, href: siteData.linkedin },
    { name: 'Email', icon: Mail, href: `mailto:${siteData.email}` },
  ];

  return (
    <footer className="section-band border-t border-[var(--border)] py-10">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black text-[var(--text)]">Kumari Rupam</p>
            <p className="body-copy mt-2 max-w-md">
              Data analytics professional building clear reports, useful systems and decision-ready visualizations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-bold text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              Top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-soft)]">
          &copy; {year} Kumari Rupam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
