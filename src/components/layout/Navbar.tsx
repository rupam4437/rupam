'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { siteData } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    siteData.navItems.forEach((item) => {
      const element = document.getElementById(item.href.slice(1));
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(item.href);
        },
        { rootMargin: '-42% 0px -52% 0px' }
      );

      observer.observe(element);
      observers.set(item.href, observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  const isLight = resolvedTheme === 'light';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={cn(
          'mx-auto flex h-16 max-w-[1180px] items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:px-5',
          scrolled
            ? 'border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] backdrop-blur-2xl'
            : 'border-transparent bg-transparent'
        )}
      >
        <Link
          href="#home"
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="flex items-center gap-3"
          aria-label="Kumari Rupam home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] text-sm font-black text-[var(--text)] shadow-[var(--shadow-soft)]">
            KR
          </span>
          <span className="hidden text-sm font-bold text-[var(--text)] sm:inline">
            Kumari Rupam
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteData.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={cn(
                'relative rounded-full px-3 py-2 text-sm font-semibold transition-colors',
                activeSection === item.href
                  ? 'text-[var(--text)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              )}
            >
              {activeSection === item.href && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-full bg-[var(--surface-muted)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:text-[var(--text)]"
            aria-label="Toggle theme"
          >
            {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-[1180px] rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3 shadow-[var(--shadow)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {siteData.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    'rounded-xl px-3 py-3 text-sm font-semibold transition',
                    activeSection === item.href
                      ? 'bg-[var(--surface-muted)] text-[var(--text)]'
                      : 'text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)]'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
