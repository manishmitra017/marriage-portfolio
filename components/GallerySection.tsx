'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
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
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const bgClass =
    bg === 'white'
      ? 'bg-white dark:bg-[#1f1118]'
      : 'bg-ivory dark:bg-[#1a0f14]';

  const heroPhoto = photos[0];
  const gridPhotos = photos.slice(1);

  return (
    <section id={id} className={`py-28 md:py-32 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
            <FiHeart className="text-blush-400" size={14} />
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
          </div>
          <span className="text-4xl block mb-4">{emoji}</span>
          <h2 className="font-script text-5xl md:text-6xl text-blush-700 dark:text-blush-300 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="font-serif text-lg md:text-xl text-[#2d1a24]/55 dark:text-blush-200/55 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Featured hero photo — full width cinematic crop */}
        {heroPhoto && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl mb-8 cursor-pointer group"
            onClick={() => setLightboxIndex(0)}
          >
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {heroPhoto.caption && (
                <p className="absolute bottom-5 left-6 right-6 font-serif text-sm text-white/90">
                  {heroPhoto.caption}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Masonry gallery grid — remaining photos */}
        <PhotoGallery
          photos={gridPhotos}
          columns={columns}
          lightboxPhotos={photos}
          lightboxOffset={1}
        />
      </div>

      {/* Lightbox for hero photo click */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </section>
  );
}
