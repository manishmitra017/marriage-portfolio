'use client';

import { motion } from 'framer-motion';

interface ParallaxDividerProps {
  imageSrc: string;
  quote: string;
  bengaliQuote?: string;
  attribution?: string;
}

export default function ParallaxDivider({
  imageSrc,
  quote,
  bengaliQuote,
  attribution,
}: ParallaxDividerProps) {
  return (
    <div className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Fixed background image — parallax on desktop, static on iOS */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative z-10 text-center px-8 max-w-3xl"
      >
        {bengaliQuote && (
          <p className="font-serif text-lg md:text-xl text-champagne-300/70 mb-4 leading-relaxed">
            {bengaliQuote}
          </p>
        )}
        <p className="font-script text-3xl md:text-5xl text-white/90 leading-relaxed mb-4">
          &ldquo;{quote}&rdquo;
        </p>
        {attribution && (
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40">
            {attribution}
          </p>
        )}
      </motion.div>
    </div>
  );
}
