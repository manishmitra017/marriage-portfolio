'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = [
  'home',
  'our-story',
  'ashirwad-blessings',
  'couple',
  'signing',
  'family',
  'portraits',
  'feast',
];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b,
          );
          setActiveSection(best.target.id);
        }
      },
      { threshold: [0.15, 0.4], rootMargin: '-80px 0px -35% 0px' },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
