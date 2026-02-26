'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

// Desktop nav shows only top-level links; SectionNav handles gallery sections
const desktopNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#our-story', label: 'Our Story' },
];

// Mobile menu shows all sections
const allNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#our-story', label: 'Our Story' },
  { href: '#pre-wedding', label: 'Pre-Wedding' },
  { href: '#ashirwad-blessings', label: 'Blessings' },
  { href: '#couple', label: 'Couple' },
  { href: '#signing', label: 'Signing' },
  { href: '#family', label: 'Family' },
  { href: '#portraits', label: 'Portraits' },
  { href: '#feast', label: 'Feast' },
  { href: '#pre-haldi', label: 'Pre-Haldi' },
  { href: '#haldi', label: 'Haldi' },
  { href: '#wedding', label: 'Wedding' },
  { href: '#sindoor-daan', label: 'Sindoor Daan' },
  { href: '#post-wedding', label: 'Post-Wedding' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string, instant = false) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    // Use scrollIntoView which respects CSS scroll-margin-top.
    // On mobile (instant mode), re-scroll after layout shifts from lazy-loaded images.
    el.scrollIntoView({ behavior: 'instant', block: 'start' });

    if (instant) {
      // Re-scroll a few times to handle layout shifts from lazy-loaded images
      let attempts = 0;
      const maxAttempts = 5;
      const verify = () => {
        if (attempts >= maxAttempts) return;
        attempts++;
        const top = el.getBoundingClientRect().top;
        if (Math.abs(top - 80) > 5) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
        requestAnimationFrame(verify);
      };
      // Start verification after a brief delay for images to begin loading
      setTimeout(() => requestAnimationFrame(verify), 100);
    } else {
      // Desktop: instant jump first, then smooth-scroll from nearby for visual polish
      // This avoids smooth scroll drifting due to layout shifts
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/90 dark:bg-[#1a0f14]/90 backdrop-blur-md shadow-soft border-b border-blush-100 dark:border-blush-900'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / monogram */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-script text-2xl transition-colors ${
            scrolled
              ? 'text-blush-600 dark:text-blush-300 hover:text-blush-700'
              : 'text-white/90 hover:text-white'
          }`}
        >
          R & S
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {desktopNavLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className={`font-sans text-sm tracking-wide transition-colors ${
                    scrolled
                      ? isActive
                        ? 'text-blush-600 dark:text-blush-300'
                        : 'text-[#2d1a24]/60 dark:text-blush-200/60 hover:text-blush-600 dark:hover:text-blush-300'
                      : isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white/90'
                  }`}
                >
                  {link.label}
                </a>
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavDot"
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      scrolled ? 'bg-blush-500' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-blush-600 dark:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory/95 dark:bg-[#1a0f14]/95 backdrop-blur-md border-t border-blush-100 dark:border-blush-900"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {allNavLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        // Use instant scroll on mobile to avoid layout shift
                        // from lazy-loaded images during smooth scroll animation
                        setTimeout(() => scrollToSection(sectionId, true), 300);
                      }}
                      className={`block font-sans text-sm tracking-wide transition-colors py-1 ${
                        isActive
                          ? 'text-blush-600 dark:text-blush-300 font-medium'
                          : 'text-[#2d1a24]/60 dark:text-blush-200/60 hover:text-blush-600 dark:hover:text-blush-300'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
