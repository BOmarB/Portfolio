"use client";

import React from 'react';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Python', category: 'Scripting' },
  { name: 'HTML5 / CSS3', category: 'Fundamentals' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-36 md:py-44 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-[5vw]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-end gap-5 mb-12 md:mb-16"
        >
          <span className="font-syne font-extrabold text-6xl md:text-8xl leading-none text-terracotta">01</span>
          <h2 className="font-syne font-extrabold text-5xl md:text-7xl uppercase leading-none text-text">Skills</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-12 md:mb-16"
        >
          The tools I reach for every day — from database to deployment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
              className="group flex items-center justify-between gap-6 border-b border-border py-5 md:py-6 transition-colors hover:border-terracotta/40"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-syne font-bold text-2xl md:text-3xl text-text transition-all group-hover:text-terracotta md:group-hover:translate-x-1">
                  {skill.name}
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-sage">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;