'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMaximize2 } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export interface GalleryPhoto {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  columns?: 2 | 3 | 4;
}

export default function PhotoGallery({ photos, columns = 3 }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-4xl mb-4">📷</p>
        <p className="font-serif text-lg text-[#2d1a24]/50 dark:text-blush-200/50">
          Photos coming soon…
        </p>
        <p className="font-sans text-sm text-[#2d1a24]/40 dark:text-blush-200/40 mt-2">
          Add images to the <code className="text-blush-500">public/images</code> folder and update
          the gallery data.
        </p>
      </div>
    );
  }

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <>
      <div className={`grid ${gridCols} gap-4`}>
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-blush-50 dark:bg-[#2d1020] border border-blush-100 dark:border-blush-900/30 shadow-soft hover:shadow-glow transition-all duration-300"
            onClick={() => setLightboxIndex(idx)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1a24]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="flex items-center justify-between w-full">
                {photo.caption && (
                  <p className="font-sans text-xs text-white/90 leading-snug">{photo.caption}</p>
                )}
                <FiMaximize2 className="text-white ml-auto" size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </>
  );
}
