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
  title: 'Our Wedding — A Love Story',
  description:
    'A beautiful collection of moments from our wedding day. Explore our ceremony, reception, portraits, and pre-wedding memories.',
  keywords: ['wedding', 'marriage', 'photo gallery', 'love story', 'wedding photos'],
  openGraph: {
    title: 'Our Wedding — A Love Story',
    description: 'Celebrating our special day — a gallery of cherished memories.',
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
