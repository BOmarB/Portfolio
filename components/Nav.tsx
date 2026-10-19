"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const probe = window.scrollY + window.innerHeight * 0.35;
      const sections = ['home', 'skills', 'projects', 'contact'];

      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= probe) {
          current = section;
        }
      }
      setActiveSegment(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-[5vw] h-16 md:h-20 flex items-center justify-between gap-4">
        <Link href="/" className="font-syne font-extrabold text-lg sm:text-xl md:text-2xl text-text flex items-center shrink-0">
          Omar<span className="text-terracotta">.</span>dev
        </Link>

        <ul className="flex items-center gap-3 sm:gap-5 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                onClick={() => setActiveSegment(link.id)}
                className={`nav-link relative inline-block font-sans text-[11px] sm:text-xs md:text-sm font-medium transition-colors duration-200 hover:text-terracotta ${
                  activeSegment === link.id ? 'active text-terracotta' : 'text-muted'
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