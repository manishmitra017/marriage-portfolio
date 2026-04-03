'use client';

import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import GallerySection from '@/components/GallerySection';
import ParallaxDivider from '@/components/ParallaxDivider';
import VideoSection from '@/components/VideoSection';
import SaveTheDate from '@/components/SaveTheDate';
import Footer from '@/components/Footer';
import SectionNav from '@/components/SectionNav';

const weddingVideos = [
  { src: '/images/videos/WhatsApp Video 2026-02-26 at 11.56.53.mp4', title: 'Wedding highlights' },
];
import {
  preWeddingGalleryPhotos,
  blessingPhotos,
  couplePhotos,
  signingPhotos,
  familyPhotos,
  portraitSectionPhotos,
  feastPhotos,
  preHaldiPhotos,
  haldiPhotos,
  weddingPhotos,
  sindoorDaanPhotos,
  postWeddingPhotos,
  receptionGalleryPhotos,
  bhaathKapodPhotos,
} from '@/utils/galleryData';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />
      <SectionNav />

      {/* Hero / cover */}
      <Hero />

      {/* Our Story timeline */}
      <OurStory />

      {/* Pre-Wedding gallery */}
      <GallerySection
        id="pre-wedding"
        title="Before Forever"
        subtitle="বিয়ের আগের গল্প — heritage corridors, palace halls, and sunlit parks became the backdrop for a love story unfolding."
        emoji="📸"
        photos={preWeddingGalleryPhotos}
        columns={2}
        bg="white"
      />

      <ParallaxDivider
        imageSrc="/images/pre-wedding/prewedding_11.jpg"
        quote="Every love story is beautiful, but ours is my favourite."
        bengaliQuote="প্রতিটি প্রেমের গল্পই সুন্দর, তবে আমাদেরটা আমার সবচেয়ে প্রিয়"
      />

      {/* Ashirwad Blessings gallery */}
      <GallerySection
        id="ashirwad-blessings"
        title="The Blessings"
        subtitle="এক এক করে, বড়রা তাঁদের হাত রাখলেন মাথায় — one by one, elders placed their hands and hearts."
        emoji="🙏"
        photos={blessingPhotos}
        columns={3}
        bg="cream"
      />

      <ParallaxDivider
        imageSrc="/images/couple/ashirwad_044.jpg"
        quote="Two souls with but a single thought, two hearts that beat as one."
        bengaliQuote="দুটি মন, একটি ভাবনা"
      />

      {/* Couple moments gallery */}
      <GallerySection
        id="couple"
        title="Rituparna & Shoumo"
        subtitle="মালাবদল, হাসি, আর ভালোবাসা — garlands exchanged, smiles that lit up the room."
        emoji="💐"
        photos={couplePhotos}
        columns={2}
        bg="white"
      />

      <ParallaxDivider
        imageSrc="/images/couple/ashirwad_062.jpg"
        quote="In all the world, there is no heart for me like yours."
        bengaliQuote="সারা পৃথিবীতে তোমার মতো আর কেউ নেই"
        attribution="Maya Angelou"
      />

      {/* Signing & formalities */}
      <GallerySection
        id="signing"
        title="The Signing"
        subtitle="কলম হাতে নিলেন, সাক্ষী হলেন বড়রা — pen met paper, elders witnessed, promises were sealed."
        emoji="✍️"
        photos={signingPhotos}
        columns={3}
        bg="cream"
      />

      <ParallaxDivider
        imageSrc="/images/family/ashirwad_000.jpg"
        quote="Family is not an important thing. It is everything."
        bengaliQuote="পরিবারই সব"
        attribution="Michael J. Fox"
      />

      {/* Family gallery */}
      <GallerySection
        id="family"
        title="Family & Loved Ones"
        subtitle="দুটি পরিবার, একটি হৃদয় — two families became one, surrounded by love and laughter."
        emoji="👨‍👩‍👧‍👦"
        photos={familyPhotos}
        columns={3}
        bg="cream"
      />

      {/* Rituparna Portraits */}
      <GallerySection
        id="portraits"
        title="Rituparna"
        subtitle="রিতুপর্ণা — grace, beauty, and a smile that lights up every room."
        emoji="✨"
        photos={portraitSectionPhotos}
        columns={2}
        bg="white"
      />

      <ParallaxDivider
        imageSrc="/images/blessings/ashirwad_091.jpg"
        quote="Where there is love, there is life."
        bengaliQuote="যেখানে ভালোবাসা, সেখানেই জীবন"
        attribution="Mahatma Gandhi"
      />

      {/* Feast gallery */}
      <GallerySection
        id="feast"
        title="The Feast"
        subtitle="বিরিয়ানি, হাসি, আর ছাদের আড্ডা — because no Bengali ceremony is complete without good food."
        emoji="🍛"
        photos={feastPhotos}
        columns={2}
        bg="white"
      />

      <ParallaxDivider
        imageSrc="/images/pre-wedding/prewedding_14.jpg"
        quote="And so the celebration continues..."
        bengaliQuote="আর এইভাবে উৎসব চলতে থাকে"
      />

      {/* Pre-Haldi */}
      <GallerySection
        id="pre-haldi"
        title="Pre-Haldi"
        subtitle="হলুদের আগে — the calm before the turmeric storm, preparations and anticipation."
        emoji="🌸"
        photos={preHaldiPhotos}
        columns={3}
        bg="cream"
      />

      {/* Haldi */}
      <GallerySection
        id="haldi"
        title="Haldi"
        subtitle="গায়ে হলুদ — turmeric, laughter, and the golden glow of blessings."
        emoji="💛"
        photos={haldiPhotos}
        columns={3}
        bg="white"
      />

      <ParallaxDivider
        imageSrc="/images/couple/ashirwad_076.jpg"
        quote="With every sacred step, two souls become one."
        bengaliQuote="প্রতিটি পবিত্র পদক্ষেপে, দুটি আত্মা এক হয়"
      />

      {/* Wedding */}
      <GallerySection
        id="wedding"
        title="The Wedding"
        subtitle="বিবাহ — the sacred ceremony where two hearts were bound forever."
        emoji="💍"
        photos={weddingPhotos}
        columns={3}
        bg="cream"
      />

      {/* Sindoor Daan */}
      <GallerySection
        id="sindoor-daan"
        title="Sindoor Daan"
        subtitle="সিঁদুর দান — the vermillion mark of eternal togetherness."
        emoji="🔴"
        photos={sindoorDaanPhotos}
        columns={2}
        bg="white"
      />

      {/* Reception */}
      <GallerySection
        id="reception"
        title="The Reception"
        subtitle="অভ্যর্থনা — flowers, lights, and a room full of love — the grand celebration of two becoming one."
        emoji="🌹"
        photos={receptionGalleryPhotos}
        columns={3}
        bg="cream"
      />

      <ParallaxDivider
        imageSrc="/images/reception/RAH00064.JPG"
        quote="The best thing to hold onto in life is each other."
        bengaliQuote="জীবনে সবচেয়ে ভালো যা আঁকড়ে ধরা যায়, তা হলো একে অপরকে"
        attribution="Audrey Hepburn"
      />

      {/* Post-Wedding */}
      <GallerySection
        id="post-wedding"
        title="Post-Wedding"
        subtitle="বিয়ের পর — the beginning of forever, captured in the afterglow."
        emoji="🎉"
        photos={postWeddingPhotos}
        columns={2}
        bg="white"
      />

      <ParallaxDivider
        imageSrc="/images/post-wedding/Bhaath-Kapod-Er-Bhaar/RAH00013.JPG"
        quote="Home is not a place, it is a person."
        bengaliQuote="বাড়ি কোনো জায়গা নয়, বাড়ি হলো একজন মানুষ"
      />

      {/* Bhaath-Kapod Er Bhaar */}
      <GallerySection
        id="bhaath-kapod"
        title="Bhaath-Kapod Er Bhaar"
        subtitle="ভাত-কাপড়ের ভার — rice, clothes, and blessings — the groom's family welcomes the bride with love and tradition."
        emoji="🍚"
        photos={bhaathKapodPhotos}
        columns={2}
        bg="cream"
      />

      {/* Videos */}
      <VideoSection
        id="videos"
        title="Videos"
        subtitle="চলচ্চিত্র — moments that move, captured in motion."
        emoji="🎬"
        videos={weddingVideos}
        bg="white"
      />

      {/* Save the Date */}
      <SaveTheDate />

      <Footer />
    </main>
  );
}
