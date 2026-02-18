'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const milestones = [
  {
    year: 'The Ashirwad',
    title: 'Blessings from Elders',
    description:
      'The Ashirwad ceremony brought both families together under one roof in Kolkata. One by one, elders placed their hands on Rituparna and Shoumo\'s heads, offering blessings, feeding them sweets, and showering them with love and good wishes for the journey ahead.',
    icon: '🙏',
  },
  {
    year: 'The Rituals',
    title: 'Sacred Traditions',
    description:
      'Seated on a beautifully laid carpet with a brass thali, lit diya, and sacred durba grass, Rituparna and Shoumo received ashirwad from Babai, Ma, KumKum Ma, Kaki, Meson Mama, and many more — each blessing carrying decades of love and wisdom.',
    icon: '🪔',
  },
  {
    year: 'The Promise',
    title: 'Garlands & Commitment',
    description:
      'The highlight of the evening — Rituparna in her stunning purple Banarasi and Shoumo in his red kurta exchanged flower garlands, sealing their promise with beaming smiles. The house filled with joy as two families became one.',
    icon: '💐',
  },
  {
    year: 'Coming Soon',
    title: 'The Wedding',
    description:
      'The Ashirwad was just the beautiful beginning. The wedding celebrations are on the horizon, and the best is yet to come. Stay tuned for the next chapter of Rituparna and Shoumo\'s love story.',
    icon: '💍',
  },
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="py-24 px-6 bg-white dark:bg-[#1f1118]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
            <FiHeart className="text-blush-500" size={16} />
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-blush-700 dark:text-blush-300 mb-4">
            Our Story
          </h2>
          <p className="font-serif text-lg text-[#2d1a24]/60 dark:text-blush-200/60 max-w-xl mx-auto">
            A journey of love, laughter, and everything in between.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blush-200 dark:via-blush-800 to-transparent hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`bg-blush-50 dark:bg-[#2d1020] rounded-2xl p-6 border border-blush-100 dark:border-blush-900/50 shadow-soft hover:shadow-glow transition-all duration-300 ${
                      i % 2 !== 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <span className="text-3xl mb-3 block">{milestone.icon}</span>
                    <span className="font-sans text-xs tracking-widest uppercase text-blush-400 dark:text-blush-500 block mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-[#2d1a24] dark:text-blush-100 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-sans text-sm text-[#2d1a24]/60 dark:text-blush-200/60 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-blush-400 dark:bg-blush-600 border-2 border-ivory dark:border-[#1a0f14] shadow-soft flex-shrink-0 z-10" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
