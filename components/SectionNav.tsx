'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';

const sections = [
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'ashirwad-blessings', label: 'Blessings' },
  { id: 'couple', label: 'Couple' },
  { id: 'signing', label: 'Signing' },
  { id: 'family', label: 'Family' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'feast', label: 'Feast' },
  { id: 'pre-haldi', label: 'Pre-Haldi' },
  { id: 'haldi', label: 'Haldi' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'sindoor-daan', label: 'Sindoor Daan' },
  { id: 'post-wedding', label: 'Post-Wedding' },
];

export default function SectionNav() {
  const [visible, setVisible] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop: sticky bar below main nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block fixed top-[64px] left-0 right-0 z-40 bg-ivory/80 dark:bg-[#1a0f14]/80 backdrop-blur-md border-b border-blush-100/50 dark:border-blush-900/30"
          >
            <div className="max-w-6xl mx-auto px-6 py-2 flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {sections.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`relative whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-colors ${
                      isActive
                        ? 'text-blush-700 dark:text-blush-200 bg-blush-100 dark:bg-blush-900/40'
                        : 'text-[#2d1a24]/50 dark:text-blush-200/40 hover:text-blush-600 dark:hover:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20'
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Mobile: bottom floating pill bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-4 left-3 right-3 z-40 bg-ivory/90 dark:bg-[#1a0f14]/90 backdrop-blur-md rounded-2xl border border-blush-100 dark:border-blush-900/30 shadow-lg"
          >
            <div className="flex items-center gap-1 px-3 py-2.5 overflow-x-auto scrollbar-hide">
              {sections.map((s) => {
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-colors flex-shrink-0 ${
                      isActive
                        ? 'text-blush-700 dark:text-blush-200 bg-blush-200/60 dark:bg-blush-900/40'
                        : 'text-[#2d1a24]/50 dark:text-blush-200/40'
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
