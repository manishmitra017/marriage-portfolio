'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import GallerySection from '@/components/GallerySection';
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
      <Navigation />

      {/* Hero / cover */}
      <Hero />

      {/* Our Story timeline */}
      <OurStory />

      {/* Ashirwad Blessings gallery */}
      <GallerySection
        id="ashirwad-blessings"
        title="The Blessings"
        subtitle="One by one, elders placed their hands and hearts — each ashirwad a prayer for forever."
        emoji="🙏"
        photos={blessingPhotos}
        columns={3}
        bg="cream"
      />

      {/* Couple moments gallery */}
      <GallerySection
        id="couple"
        title="Rituparna & Soumya"
        subtitle="Garlands exchanged, smiles that lit up the room — a love story in every frame."
        emoji="💐"
        photos={couplePhotos}
        columns={2}
        bg="white"
      />

      {/* Signing & formalities */}
      <GallerySection
        id="signing"
        title="The Signing"
        subtitle="Pen met paper, elders witnessed, and promises were sealed — the formalities of forever."
        emoji="✍️"
        photos={signingPhotos}
        columns={3}
        bg="cream"
      />

      {/* Family gallery */}
      <GallerySection
        id="family"
        title="Family & Loved Ones"
        subtitle="Two families became one — surrounded by love, laughter, and blessings."
        emoji="👨‍👩‍👧‍👦"
        photos={familyPhotos}
        columns={3}
        bg="cream"
      />

      {/* Feast gallery */}
      <GallerySection
        id="feast"
        title="The Feast"
        subtitle="Biryani, smiles, and celebrations on the terrace — because no Bengali ceremony is complete without good food."
        emoji="🍛"
        photos={feastPhotos}
        columns={2}
        bg="white"
      />

      <Footer />
    </main>
  );
}
