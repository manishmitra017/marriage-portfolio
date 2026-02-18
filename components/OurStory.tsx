'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const milestones = [
  {
    year: 'The Ashirwad',
    title: 'শুভ আশীর্বাদ',
    description:
      'Under one roof in Kolkata, two families became one. Elders lined up to place their hands on Rituparna and Shoumo\'s heads — feeding them mishti, tying sacred threads, and whispering prayers that have been passed down for generations. The carpet, the brass thali, the lit diya — every detail carried the weight of tradition and the warmth of unconditional love.',
    icon: '🙏',
    photo: '/images/ashirwad/ashirwad_001.jpg',
  },
  {
    year: 'The Rituals',
    title: 'পবিত্র অনুষ্ঠান',
    description:
      'Seated on the beautifully laid carpet with sacred durba grass and a glowing diya, Rituparna and Shoumo received ashirwad from Babai, Ma, KumKum Ma, Kaki, Meson Mama, and so many more. Each blessing carried decades of love — some whispered, some with tears, all from the heart. This was not just a ceremony; it was a family pouring its soul into two lives joining together.',
    icon: '🪔',
    photo: '/images/ashirwad/ashirwad_040.jpg',
  },
  {
    year: 'The Promise',
    title: 'মালাবদল',
    description:
      'The room held its breath. Rituparna, resplendent in her purple Banarasi, and Shoumo, handsome in his red kurta, exchanged flower garlands. মালা বদল — the moment when two souls make their promise visible to the world. The house erupted in joy. Smiles, tears, and the sound of দুটি পরিবার becoming one.',
    icon: '💐',
    photo: '/images/ashirwad/ashirwad_044.jpg',
  },
  {
    year: 'Coming Soon',
    title: 'শুভ বিবাহ',
    description:
      'The Ashirwad was the prologue — beautiful, emotional, unforgettable. But the best chapters are still being written. The wedding is on the horizon, and with it, a new beginning. Stay with us for what comes next in Rituparna and Shoumo\'s love story. সবাই আমন্ত্রিত — everyone is invited to witness this next chapter.',
    icon: '💍',
    photo: null,
  },
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="py-28 md:py-32 px-6 bg-white dark:bg-[#1f1118]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
            <FiHeart className="text-blush-500" size={16} />
            <div className="h-px w-12 bg-blush-200 dark:bg-blush-800" />
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-blush-700 dark:text-blush-300 mb-4">
            Our Story
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#2d1a24]/60 dark:text-blush-200/60 max-w-xl mx-auto leading-relaxed">
            ভালোবাসার গল্প — a story written in blessings, garlands, and the laughter of family.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blush-200 dark:via-blush-800 to-transparent hidden md:block" />

          <div className="space-y-14 md:space-y-16">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`bg-blush-50 dark:bg-[#2d1020] rounded-2xl p-6 md:p-8 border border-blush-100 dark:border-blush-900/50 shadow-soft hover:shadow-glow transition-all duration-300 ${
                      i % 2 !== 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {/* Photo thumbnail or emoji */}
                    {milestone.photo ? (
                      <div className={`w-20 h-20 rounded-xl overflow-hidden mb-4 ${i % 2 !== 0 ? 'md:ml-auto' : ''} mx-auto md:mx-0`}>
                        <Image
                          src={milestone.photo}
                          alt={milestone.title}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <span className="text-3xl mb-4 block">{milestone.icon}</span>
                    )}

                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-blush-400 dark:text-blush-500 block mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-[#2d1a24] dark:text-blush-100 mb-3">
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
