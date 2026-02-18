'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import PhotoGallery, { GalleryPhoto } from './PhotoGallery';

interface GallerySectionProps {
  id: string;
  title: string;
  subtitle?: string;
  emoji?: string;
  photos: GalleryPhoto[];
  columns?: 2 | 3 | 4;
  bg?: 'white' | 'cream';
}

export default function GallerySection({
  id,
  title,
  subtitle,
  emoji = '📷',
  photos,
  columns = 3,
  bg = 'cream',
}: GallerySectionProps) {
  const bgClass =
    bg === 'white'
      ? 'bg-white dark:bg-[#1f1118]'
      : 'bg-ivory dark:bg-[#1a0f14]';

  return (
    <section id={id} className={`py-24 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
            <FiHeart className="text-blush-500" size={14} />
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
          </div>
          <span className="text-4xl block mb-4">{emoji}</span>
          <h2 className="font-script text-5xl md:text-6xl text-blush-700 dark:text-blush-300 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="font-serif text-lg text-[#2d1a24]/55 dark:text-blush-200/55 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Gallery grid */}
        <PhotoGallery photos={photos} columns={columns} />
      </div>
    </section>
  );
}
