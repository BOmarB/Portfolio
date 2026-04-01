"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-[5vw]">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16 font-mono text-xs uppercase tracking-widest"
        >
          <span className="text-amber">03 /</span>
          <span className="text-muted font-bold">Contact</span>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
            className="font-syne font-bold text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.2] md:leading-[1.1] text-text px-4"
          >
            Let&apos;s build <br />
            something together<span className="text-amber">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="font-sans text-muted text-base md:text-lg leading-relaxed max-w-lg px-6"
          >
            Have a project in mind or just want to say hi? <br className="hidden sm:block" />
            Drop me an email — I read every message.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="w-full flex justify-center px-6"
          >
            <a 
              href="mailto:bouazzaouiomar21@gmail.com"
              className="btn-primary group relative flex items-center justify-center gap-3 md:gap-4 bg-amber text-bg px-6 py-4 md:px-10 md:py-5 rounded-xl font-mono text-[11px] md:text-sm font-semibold tracking-wide transition-all duration-300 w-full md:w-auto overflow-hidden"
            >
              <span className="truncate">bouazzaouiomar21@gmail.com</span>
              <ArrowRight className="size-4 md:size-[18px] transition-transform group-hover:translate-x-1 shrink-0" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-2 text-text font-mono text-[10px] uppercase tracking-[0.2em] mt-8 font-bold"
          >
            <MapPin size={12} className="text-amber" />
            <span>Azrou, Morocco</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
