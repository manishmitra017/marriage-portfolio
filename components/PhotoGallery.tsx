'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMaximize2, FiPlay } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export interface GalleryPhoto {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  type?: 'image' | 'video';
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  columns?: 2 | 3 | 4;
  /** Full photo array for lightbox (when hero photo is extracted) */
  lightboxPhotos?: GalleryPhoto[];
  /** Offset to add to grid index for lightbox (when hero is index 0) */
  lightboxOffset?: number;
}

export default function PhotoGallery({
  photos,
  columns = 3,
  lightboxPhotos,
  lightboxOffset = 0,
}: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const allPhotos = lightboxPhotos || photos;

  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-4xl mb-4">&#128247;</p>
        <p className="font-serif text-lg text-[#2d1a24]/50 dark:text-blush-200/50">
          Photos coming soon...
        </p>
      </div>
    );
  }

  const colClasses = {
    2: 'columns-1 sm:columns-2',
    3: 'columns-1 sm:columns-2 lg:columns-3',
    4: 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4',
  }[columns];

  return (
    <>
      <div className={`${colClasses} gap-4`}>
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (idx % 6) * 0.07, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-pointer bg-blush-50 dark:bg-[#2d1020] border border-blush-100 dark:border-blush-900/30 shadow-soft hover:shadow-glow transition-shadow duration-300"
            onClick={() => {
              if (photo.type === 'video') return; // video handles its own playback
              setLightboxIndex(idx + lightboxOffset);
            }}
          >
            {photo.type === 'video' ? (
              <video
                src={photo.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto object-cover"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1a24]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 pointer-events-none">
              {photo.type === 'video' ? (
                <FiPlay className="text-white/70 flex-shrink-0" size={14} />
              ) : (
                <FiMaximize2 className="text-white/70 flex-shrink-0" size={14} />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={allPhotos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </>
  );
}
