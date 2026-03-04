'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const milestones = [
  {
    year: 'Before Forever',
    title: 'প্রাক-বিবাহ',
    description:
      'It started in a sun-drenched haveli in Kolkata — Rituparna in flowing elegance, Shoumo in quiet adoration. Between amber corridors and ancient banyan trees, they rehearsed what the heart already knew. Every stolen glance, every burst of laughter, every forehead kiss was a promise waiting to be spoken aloud.',
    icon: '📸',
    photo: '/images/pre-wedding/prewedding_02.jpg',
  },
  {
    year: 'The Ashirwad',
    title: 'শুভ আশীর্বাদ',
    description:
      'Under one roof in Kolkata, two families became one. Elders lined up to place their hands on Rituparna and Shoumo\'s heads — feeding them mishti, tying sacred threads, and whispering prayers passed down for generations. The carpet, the brass thali, the lit diya — every detail carried the weight of tradition and the warmth of unconditional love.',
    icon: '🙏',
    photo: '/images/blessings/ashirwad_001.jpg',
  },
  {
    year: 'The Promise',
    title: 'মালাবদল',
    description:
      'The room held its breath. Rituparna, resplendent in her purple Banarasi, and Shoumo, handsome in his red kurta, exchanged flower garlands. মালা বদল — the moment when two souls make their promise visible to the world. The house erupted in joy, smiles, tears, and the sound of দুটি পরিবার becoming one.',
    icon: '💐',
    photo: '/images/couple/ashirwad_044.jpg',
  },
  {
    year: 'The Haldi',
    title: 'হলুদ',
    description:
      'Golden turmeric, golden laughter. Family and friends smeared haldi on the couple\'s faces with the joyful abandon that only love can excuse. The air was thick with music, teasing, and the fragrance of raw turmeric — a centuries-old ritual to bless the couple with radiance and ward off every shadow from their path.',
    icon: '💛',
    photo: '/images/pre-haldi/WhatsApp Image 2026-02-25 at 14.38.02.jpeg',
  },
  {
    year: 'The Wedding',
    title: 'শুভ বিবাহ',
    description:
      'On 25th February 2026, under sacred fire and chanted mantras, Rituparna and Shoumo walked seven circles together — সাত পাক. Each step a vow, each circle a lifetime. With sindoor on her parting and garlands around their necks, the prologue finally became the story. Two families, one bond, forever.',
    icon: '💍',
    photo: '/images/wedding/WhatsApp Image 2026-02-26 at 01.20.16.jpeg',
  },
  {
    year: 'Sindoor Daan',
    title: 'সিঁদুর দান',
    description:
      'The most sacred moment — Shoumo filled Rituparna\'s parting with vermillion. সিঁদুর দান, the seal of a Bengali marriage. In that single gesture, witnessed by gods and family alike, a new chapter was written in red — bold, permanent, and brimming with devotion.',
    icon: '🔴',
    photo: '/images/sindoor-daan/WhatsApp Image 2026-02-26 at 11.56.41.jpeg',
  },
  {
    year: 'Ever After',
    title: 'শুভ যাত্রা',
    description:
      'The ceremonies ended, but the celebration never did. Surrounded by the people who made it all possible — parents, siblings, cousins, friends — Rituparna and Shoumo stepped into married life with full hearts and wide smiles. This is not an ending. This is where the real story begins.',
    icon: '🎉',
    photo: '/images/post-wedding/WhatsApp Image 2026-02-26 at 01.20.23.jpeg',
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
            ভালোবাসার গল্প — from the first photo to the last phera, a love story written in turmeric, vermillion, and the laughter of family.
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
