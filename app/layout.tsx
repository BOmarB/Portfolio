import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "Omar bouazzaoui full stack Developer",
  description: "Portfolio showcasing Next.js, React, and Laravel projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
