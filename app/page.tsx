'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import {
  ceremonyPhotos,
  receptionPhotos,
  portraitPhotos,
  preWeddingPhotos,
} from '@/utils/galleryData';

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* Hero / cover */}
      <Hero />

      {/* Our Story timeline */}
      <OurStory />

      {/* Ceremony gallery */}
      <GallerySection
        id="ceremony"
        title="The Ceremony"
        subtitle="Every promise made, every tear of joy — captured forever."
        emoji="💍"
        photos={ceremonyPhotos}
        columns={3}
        bg="cream"
      />

      {/* Reception gallery */}
      <GallerySection
        id="reception"
        title="The Reception"
        subtitle="Celebrations, dancing, and memories that will last a lifetime."
        emoji="🥂"
        photos={receptionPhotos}
        columns={3}
        bg="white"
      />

      {/* Portraits gallery */}
      <GallerySection
        id="portraits"
        title="Portraits"
        subtitle="Just the two of them — love in every frame."
        emoji="🌸"
        photos={portraitPhotos}
        columns={2}
        bg="cream"
      />

      {/* Pre-wedding gallery */}
      <GallerySection
        id="pre-wedding"
        title="Pre-Wedding"
        subtitle="The story that led to forever."
        emoji="✨"
        photos={preWeddingPhotos}
        columns={3}
        bg="white"
      />

      <Footer />
    </main>
  );
}
