'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#our-story', label: 'Our Story' },
  { href: '#ashirwad-blessings', label: 'Blessings' },
  { href: '#couple', label: 'Couple' },
  { href: '#signing', label: 'Signing' },
  { href: '#family', label: 'Family' },
  { href: '#feast', label: 'Feast' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
            const el = document.getElementById('home');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="font-script text-2xl text-blush-600 dark:text-blush-300 hover:text-blush-700 transition-colors"
        >
          ♡ R &amp; S
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = link.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="font-sans text-sm tracking-wide text-[#2d1a24]/70 dark:text-blush-200/70 hover:text-blush-600 dark:hover:text-blush-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-blush-600 dark:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20"
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
            className="md:hidden bg-ivory/95 dark:bg-[#1a0f14]/95 border-t border-blush-100 dark:border-blush-900"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      const id = link.href.replace('#', '');
                      // Small delay so the menu closes first
                      setTimeout(() => {
                        const el = document.getElementById(id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className="block font-sans text-sm tracking-wide text-[#2d1a24]/70 dark:text-blush-200/70 hover:text-blush-600 dark:hover:text-blush-300 transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
