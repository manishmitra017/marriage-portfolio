'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';

type NavItem = { type: 'link'; id: string; label: string } | { type: 'divider' };

const sections: NavItem[] = [
  { type: 'link', id: 'pre-wedding', label: 'Pre-Wedding' },
  { type: 'link', id: 'ashirwad-blessings', label: 'Blessings' },
  { type: 'link', id: 'couple', label: 'Couple' },
  { type: 'link', id: 'signing', label: 'Signing' },
  { type: 'link', id: 'family', label: 'Family' },
  { type: 'link', id: 'portraits', label: 'Portraits' },
  { type: 'link', id: 'feast', label: 'Feast' },
  { type: 'divider' },
  { type: 'link', id: 'pre-haldi', label: 'Pre-Haldi' },
  { type: 'link', id: 'haldi', label: 'Haldi' },
  { type: 'link', id: 'wedding', label: 'Wedding' },
  { type: 'link', id: 'sindoor-daan', label: 'Sindoor Daan' },
  { type: 'link', id: 'post-wedding', label: 'Post-Wedding' },
  { type: 'divider' },
  { type: 'link', id: 'videos', label: 'Videos' },
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
              {sections.map((item, i) => {
                if (item.type === 'divider') {
                  return <div key={`div-${i}`} className="w-px h-4 bg-blush-200 dark:bg-blush-800 mx-1.5 flex-shrink-0" />;
                }
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-colors ${
                      isActive
                        ? 'text-blush-700 dark:text-blush-200 bg-blush-100 dark:bg-blush-900/40'
                        : 'text-[#2d1a24]/50 dark:text-blush-200/40 hover:text-blush-600 dark:hover:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20'
                    }`}
                  >
                    {item.label}
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
              {sections.map((item, i) => {
                if (item.type === 'divider') {
                  return <div key={`div-${i}`} className="w-px h-4 bg-blush-200 dark:bg-blush-800 mx-1 flex-shrink-0" />;
                }
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-colors flex-shrink-0 ${
                      isActive
                        ? 'text-blush-700 dark:text-blush-200 bg-blush-200/60 dark:bg-blush-900/40'
                        : 'text-[#2d1a24]/50 dark:text-blush-200/40'
                    }`}
                  >
                    {item.label}
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
