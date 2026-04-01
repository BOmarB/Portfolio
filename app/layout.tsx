import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from 'next/font/google';
import "./globals.css";

const syne = Syne({ 
  subsets: ['latin'], 
  weight: ['700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});

const dmMono = DM_Mono({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Omar Bouazzaoui — Full-Stack Developer',
  description: 'Full-stack web developer based in Azrou, Morocco. Building with React, Next.js, Laravel, and PHP.',
  openGraph: {
    title: 'Omar Bouazzaoui — Full-Stack Developer',
    description: 'Portfolio of Omar Bouazzaoui',
    url: 'https://portfolio-bomarb.vercel.app',
    siteName: 'Omar.dev',
    images: [
      {
        url: '/DSC_0025.jpg',
        width: 1200,
        height: 630,
        alt: 'Omar Bouazzaoui',
      },
    ],
  },
};

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-bg text-text font-sans selection:bg-amber/30 selection:text-text antialiased">
        <div className="noise-overlay" />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
