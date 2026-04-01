"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Laravel',    color: 'var(--amber)' },
    { name: 'React',      color: 'var(--teal)' },
    { name: 'PHP',        color: 'var(--amber)' },
    { name: 'Next.js',    color: 'var(--teal)' },
    { name: 'JavaScript', color: 'var(--amber)' },
    { name: 'Tailwind',   color: 'var(--teal)' },
    { name: 'HTML5',      color: 'var(--amber)' },
    { name: 'CSS3',       color: 'var(--teal)' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as any,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-[5vw]">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16 font-mono text-xs uppercase tracking-widest"
        >
          <span className="text-amber">01 /</span>
          <span className="text-muted font-bold">About</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          {/* Decorative Braces */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block text-amber font-syne font-extrabold text-7xl md:text-8xl opacity-20 -mt-2 md:-mt-4 leading-none"
          >
            &#123; &#125;
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 md:gap-10"
          >
            <motion.p 
              variants={itemVariants}
              className="font-sans text-lg md:text-2xl text-muted leading-relaxed max-w-2xl"
            >
              I&apos;m Omar. I enjoy building robust, scalable applications from the ground up. 
              Focused on crafting efficient APIs and solid architectures that evolve based 
              on performance metrics and real-world usage. Always deploying.
            </motion.p>

            <div className="flex flex-col gap-6">
              <motion.h4 
                variants={itemVariants}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-text font-bold"
              >
                Tech Stack
              </motion.h4>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={{
                      hidden: { opacity: 0, y: -100, rotate: index % 2 === 0 ? -15 : 15 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                        rotate: 0,
                          transition: { 
                            type: "spring", 
                          stiffness: 260, 
                          damping: 15,
                          delay: 0.2 + (index * 0.05)
                          } 
                        }
                      }}
                      whileHover={{ 
                      scale: 1.05, 
                      rotate: index % 2 === 0 ? 5 : -5,
                        transition: { type: "spring", stiffness: 400, damping: 10 } 
                      }}
                    style={{ borderColor: skill.color }}
                    className="skill-tag bg-bg-2 border-2 rounded-lg px-4 py-2 font-mono text-[13px] text-text shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] transition-shadow"
                    >
                      {skill.name}
                    </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
