'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

export default function SaveTheDate() {
  return (
    <section className="py-28 md:py-32 px-6 bg-gradient-to-br from-blush-50 via-ivory to-champagne-50 dark:from-[#1a0f14] dark:via-[#2d1020] dark:to-[#1a0f14]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Decorative border card */}
        <div className="border-2 border-blush-200 dark:border-blush-800 rounded-3xl p-12 md:p-16 bg-white/50 dark:bg-[#1a0f14]/50 backdrop-blur-sm">
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-champagne-300 dark:bg-champagne-700" />
            <FiHeart className="text-champagne-500 dark:text-champagne-400" size={18} />
            <div className="h-px w-16 bg-champagne-300 dark:bg-champagne-700" />
          </div>

          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-blush-400 dark:text-blush-500 mb-4">
            Save the Date
          </p>

          <h2 className="font-script text-5xl md:text-7xl text-blush-700 dark:text-blush-300 mb-4">
            Coming Soon
          </h2>

          <p className="font-serif text-base md:text-lg text-[#2d1a24]/55 dark:text-blush-200/55 mb-3 max-w-md mx-auto leading-relaxed">
            The wedding celebrations are on the horizon. Stay tuned for the next beautiful chapter.
          </p>

          <p className="font-serif text-sm text-champagne-600 dark:text-champagne-400/70 mb-8">
            শুভ বিবাহ — the auspicious union awaits
          </p>

          {/* Monogram */}
          <div className="font-script text-4xl md:text-5xl text-champagne-500 dark:text-champagne-400">
            R & S
          </div>
        </div>
      </motion.div>
    </section>
  );
}
