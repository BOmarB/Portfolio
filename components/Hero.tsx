"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, MoveDown } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-24"
    >
      <div className="w-full max-w-[1200px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-8 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-sage/25 bg-sage/5"
          >
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse-slow" />
            <span className="text-[11px] md:text-xs font-mono uppercase tracking-wider text-sage">
              Available for work
            </span>
          </motion.div>

          <h1 className="mt-8 md:mt-10 font-syne">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="block font-extrabold text-[clamp(3.5rem,12vw,2.5rem)] leading-[0.9] tracking-tight text-text"
            >
              OMAR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="block font-extrabold text-[clamp(2.4rem,8.5vw,3rem)] leading-[0.95] tracking-tight text-stroke select-none"
            >
              BOUAZZAOUI
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            className="mt-8 md:mt-10 text-base md:text-lg text-muted max-w-md leading-relaxed"
          >
            Full-stack web developer based in{" "}
            <span className="text-text font-medium">Azrou, Morocco</span>. I
            build reliable, thoughtful tools that people actually enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="btn-primary group inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-bg"
            >
              View my work
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://github.com/BOmarB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border-2 px-7 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-text/5"
            >
              <Github size={15} />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="relative flex flex-col items-center lg:items-end"
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
            <div className="relative rounded-3xl overflow-hidden border border-border-2 aspect-[4/5] bg-bg-2">
              <Image
                src="/DSC_0025.jpg"
                alt="Omar Bouazzaoui"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Omar Bouazzaoui —{" "}
            <span className="text-terracotta">Azrou, Morocco</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-[5vw] flex flex-col gap-2.5"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Scroll
        </span>
        <MoveDown size={16} className="text-terracotta animate-bounce-y" />
      </motion.div>
    </section>
  );
};

export default Hero;
