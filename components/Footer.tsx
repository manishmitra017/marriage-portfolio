'use client';

import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-[#2d1a24] dark:bg-[#0f0008] text-center">
      <div className="max-w-4xl mx-auto">
        <p className="font-script text-3xl text-blush-300 mb-3">Rituparna &amp; Soumya</p>
        <div className="flex items-center justify-center gap-2 text-blush-400/60 text-sm font-sans mb-4">
          <span>Made with</span>
          <FiHeart size={12} className="text-blush-500" />
          <span>for Rituparna &amp; Soumya&apos;s special journey</span>
        </div>
        <p className="font-sans text-xs text-blush-600/50">© {year} — All rights reserved</p>
      </div>
    </footer>
  );
}
