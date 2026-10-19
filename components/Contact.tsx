"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-40 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-[5vw]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-end gap-5 mb-16 md:mb-24"
        >
          <span className="font-syne font-extrabold text-5xl md:text-7xl leading-none text-terracotta">03</span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl uppercase leading-none text-text">Contact</h2>
        </motion.div>

        <div className="max-w-4xl flex flex-col items-start md:items-center text-left md:text-center gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-syne font-extrabold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-text"
          >
            Let&apos;s make something
            <br />
            <span className="text-stroke">worth showing off.</span>
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            href="mailto:bouazzaouiomar21@gmail.com"
            className="font-sans text-xl md:text-3xl font-medium text-terracotta underline decoration-terracotta/40 decoration-2 underline-offset-8 transition-[text-decoration-color] hover:decoration-terracotta"
            style={{ overflowWrap: 'anywhere' }}
          >
            bouazzaouiomar21@gmail.com
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 text-muted font-mono text-xs uppercase tracking-[0.25em]"
          >
            <MapPin size={14} className="text-sage" />
            Azrou, Morocco — open to remote work
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;