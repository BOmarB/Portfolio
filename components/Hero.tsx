"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Github, MoveDown } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-[40%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-[5vw] lg:pl-[8vw] lg:pr-0 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 md:gap-12 lg:gap-20 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-5 md:gap-6 lg:gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full border border-teal/10 bg-teal/5"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-teal animate-pulse-slow" />
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-teal">Available for work</span>
          </motion.div>

          <div className="flex flex-col max-w-full overflow-visible">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne font-extrabold text-[clamp(2rem,6vw,2.5rem)] leading-[0.9] text-text whitespace-nowrap"
            >
              OMAR
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-syne font-extrabold text-[clamp(2rem,6vw,1.5rem)] leading-[0.9] text-stroke uppercase whitespace-nowrap"
            >
              BOUAZZAOUI
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base lg:text-lg text-muted font-sans max-w-md leading-relaxed"
          >
            Full-Stack Web Developer <br className="hidden sm:block" />
            Based in <span className="text-amber font-bold">Azrou, Morocco.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 md:gap-4 pt-4 md:pt-2"
          >
            <Magnetic>
              <a 
                href="#projects" 
                className="btn-primary flex items-center gap-2 bg-amber text-bg px-5 py-3 md:px-7 md:py-3.5 rounded-lg font-semibold text-xs md:text-sm group"
              >
                View My Work
                <ArrowRight size={16} className="md:size-[18px] transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://github.com/BOmarB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border-2 text-text px-5 py-3 md:px-7 md:py-3.5 rounded-lg font-semibold text-xs md:text-sm hover:bg-white/5 transition-colors"
              >
                <Github className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                GitHub
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative lg:block flex justify-center lg:justify-end pr-0 lg:pr-12"
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-[240px] h-[300px] sm:w-[280px] sm:h-[340px] md:w-[320px] md:h-[400px] rounded-[20px] overflow-hidden border border-border-2 group shadow-2xl"
          >
            <Image 
              src="/DSC_0025.jpg" 
              alt="Omar Bouazzaoui" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Amber gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber/20 to-transparent pointer-events-none" />
            
            {/* Floating Tag */}
            <div className="absolute top-4 right-4 bg-bg-3/80 border border-border-2 rounded-md px-2.5 py-1 md:px-3 md:py-1.5 backdrop-blur-md">
              <span className="text-[9px] md:text-[10px] font-mono text-text uppercase tracking-wider">Full-Stack</span>
            </div>
          </motion.div>
          
          {/* Decorative aura behind image */}
          <div className="absolute -inset-4 bg-amber/5 blur-2xl rounded-full -z-10" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-[5vw] flex items-center gap-3 text-text font-mono text-[10px] uppercase tracking-[0.2em]"
      >
        <span className="font-bold">Scroll</span>
        <MoveDown size={14} className="animate-bounce-y text-amber" />
      </motion.div>
    </section>
  );
};

export default Hero;

