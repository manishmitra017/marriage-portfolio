'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiCamera } from 'react-icons/fi';

const WEDDING_DATE = 'Wedding Coming Soon';
const COUPLE_NAMES = 'Rituparna & Shoumo';
const TAGLINE = 'A Journey That Began with Ashirwad';
const VENUE = 'Kolkata';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-ivory via-blush-50 to-champagne-50 dark:from-[#1a0f14] dark:via-[#2d1020] dark:to-[#1a0f14]"
    >
      {/* Decorative petals / orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blush-200/20 dark:bg-blush-900/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-champagne-200/20 dark:bg-champagne-900/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-100/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-blush-300 dark:bg-blush-700" />
          <FiHeart className="text-blush-500 dark:text-blush-400" size={18} />
          <div className="h-px w-16 bg-blush-300 dark:bg-blush-700" />
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-script text-6xl md:text-8xl text-blush-700 dark:text-blush-300 mb-4 leading-tight"
        >
          {COUPLE_NAMES}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-xl md:text-2xl text-[#2d1a24]/60 dark:text-blush-200/60 tracking-wide mb-6"
        >
          {TAGLINE}
        </motion.p>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-sans tracking-widest uppercase text-[#2d1a24]/50 dark:text-blush-300/50 mb-12"
        >
          <span>{WEDDING_DATE}</span>
          <span className="hidden sm:block text-blush-300">◆</span>
          <span>{VENUE}</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#ashirwad-blessings"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blush-600 hover:bg-blush-700 text-white rounded-full font-sans text-sm tracking-wide transition-all duration-200 shadow-soft hover:shadow-glow"
          >
            <FiCamera size={16} />
            View Gallery
          </a>
          <a
            href="#our-story"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-blush-300 dark:border-blush-700 text-blush-700 dark:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20 rounded-full font-sans text-sm tracking-wide transition-all duration-200"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-blush-400 dark:text-blush-600">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-blush-400 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
