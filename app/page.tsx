'use client';

import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import GallerySection from '@/components/GallerySection';
import ParallaxDivider from '@/components/ParallaxDivider';
import SaveTheDate from '@/components/SaveTheDate';
import Footer from '@/components/Footer';
import {
  blessingPhotos,
  couplePhotos,
  signingPhotos,
  familyPhotos,
  feastPhotos,
} from '@/utils/galleryData';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />

      {/* Hero / cover */}
      <Hero />

      {/* Our Story timeline */}
      <OurStory />

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
        imageSrc="/images/ashirwad/ashirwad_044.jpg"
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
        imageSrc="/images/ashirwad/ashirwad_062.jpg"
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
        imageSrc="/images/ashirwad/ashirwad_000.jpg"
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

      <ParallaxDivider
        imageSrc="/images/ashirwad/ashirwad_091.jpg"
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

      {/* Save the Date */}
      <SaveTheDate />

      <Footer />
    </main>
  );
}
