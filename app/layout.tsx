import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Dancing_Script } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rituparna & Shoumo — Ashirwad Ceremony',
  description:
    'A beautiful collection of moments from Rituparna Guha & Shoumo Ghosh\'s Ashirwad ceremony in Kolkata. Blessings, garlands, family, and celebrations.',
  keywords: ['wedding', 'ashirwad', 'rituparna', 'shoumo', 'bengali wedding', 'kolkata'],
  openGraph: {
    title: 'Rituparna & Shoumo — Ashirwad Ceremony',
    description: 'The Ashirwad ceremony — blessings, love, and the beginning of forever.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${dancing.variable}`}
    >
      <body className="bg-ivory dark:bg-[#1a0f14] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
