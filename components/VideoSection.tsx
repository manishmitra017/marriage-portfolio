'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

interface VideoItem {
  src: string;
  title?: string;
}

interface VideoSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  emoji?: string;
  videos: VideoItem[];
  bg?: 'white' | 'cream';
}

export default function VideoSection({
  id,
  title,
  subtitle,
  emoji = '🎬',
  videos,
  bg = 'cream',
}: VideoSectionProps) {
  const bgClass =
    bg === 'white'
      ? 'bg-white dark:bg-[#1f1118]'
      : 'bg-ivory dark:bg-[#1a0f14]';

  if (videos.length === 0) return null;

  return (
    <section id={id} className={`py-28 md:py-32 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
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

        {/* Video grid */}
        <div className="space-y-8">
          {videos.map((video) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="overflow-hidden rounded-2xl bg-blush-50 dark:bg-[#2d1020] border border-blush-100 dark:border-blush-900/30 shadow-soft"
            >
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto"
              />
              {video.title && (
                <p className="px-5 py-3 font-serif text-sm text-[#2d1a24]/60 dark:text-blush-200/60">
                  {video.title}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
