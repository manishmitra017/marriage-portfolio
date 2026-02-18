'use client';

import { FiHeart, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-[#2d1a24] to-[#1a0f14] dark:from-[#0f0008] dark:to-[#050003] text-center overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blush-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        {/* Back to top */}
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="mx-auto mb-10 flex items-center gap-2 px-6 py-2.5 rounded-full border border-blush-700/50 text-blush-400/70 hover:text-blush-300 hover:border-blush-500 transition-all duration-300 text-[10px] tracking-[0.2em] uppercase font-sans"
        >
          <FiArrowUp size={12} />
          Back to Top
        </motion.button>

        {/* Large monogram */}
        <p className="font-script text-5xl md:text-6xl text-blush-300/60 mb-4">
          R & S
        </p>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 text-blush-400/40 text-sm font-sans mb-2">
          <span>Made with</span>
          <FiHeart size={11} className="text-blush-500/60" />
          <span>in Kolkata</span>
        </div>

        <p className="font-serif text-xs text-blush-500/30 mb-6">
          ভালোবাসায় তৈরি
        </p>

        {/* Separator */}
        <div className="h-px w-20 mx-auto bg-blush-800/40 mb-6" />

        <p className="font-sans text-[10px] text-blush-600/30 tracking-wider">
          &copy; {year} &mdash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
