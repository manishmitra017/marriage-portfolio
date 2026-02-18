'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiHeart, FiCamera } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background photo with Ken Burns */}
      <div className="absolute inset-0">
        <Image
          src="/images/ashirwad/ashirwad_077.jpg"
          alt="Rituparna & Shoumo — a beautiful pair in garlands"
          fill
          className="object-cover animate-ken-burns"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.3)_100%)]" />

      {/* Text content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-white/40" />
          <FiHeart className="text-white/60" size={18} />
          <div className="h-px w-16 bg-white/40" />
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl text-white mb-4 leading-tight drop-shadow-lg"
        >
          Rituparna & Shoumo
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-xl md:text-2xl text-white/70 tracking-wide mb-6"
        >
          A Journey That Began with Ashirwad
        </motion.p>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-sans tracking-[0.2em] uppercase text-white/50 mb-14"
        >
          <span>Wedding Coming Soon</span>
          <span className="hidden sm:block text-champagne-400/60">&#x2726;</span>
          <span>Kolkata</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#ashirwad-blessings"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('ashirwad-blessings')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 rounded-full font-sans text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FiCamera size={16} />
            View Gallery
          </a>
          <a
            href="#our-story"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-white/70 hover:text-white rounded-full font-sans text-sm tracking-wide transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
