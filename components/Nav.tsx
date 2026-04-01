"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSegment(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-[5vw] h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="font-syne font-extrabold text-xl md:text-2xl text-text flex items-center shrink-0">
          Omar<span className="text-amber">.</span>dev
        </Link>

        <ul className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className={`nav-link relative font-sans text-xs md:text-sm font-medium transition-colors duration-200 ${
                  activeSegment === link.id ? 'text-amber' : 'text-muted hover:text-text'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
