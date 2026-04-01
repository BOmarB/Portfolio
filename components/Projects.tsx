"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Examly',
      description: 'Built for educators who want to modernize their testing process. This secure examination platform lets teachers create, grade, and analyze student performance digitally, while admins manage users across the school. It eliminates paper-based tech exams, making assessment faster and more insightful for everyone involved.',
      stack: ['PHP', 'React'],
      github: 'https://github.com/BOmarB/School_Exams_App',
      live: 'https://examly.xo.je',
      image: '/Exam.png'
    },
    {
      id: 2,
      name: 'Journey',
      description: 'Built for curious people who hate decision fatigue. Pick any topic — medieval history, AI, detective stories — and get three instant recommendations: a movie, a book, and a game. No endless scrolling, just one search and three ways to dive in.',
      stack: ['Laravel', 'React'],
      github: 'https://github.com/BOmarB',
      live: 'https://journey.page.gd/?i=1',
      image: '/Journey.png'
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-[1100px] mx-auto px-[5vw]">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16 font-mono text-xs uppercase tracking-widest"
        >
          <span className="text-amber">02 /</span>
          <span className="text-muted font-bold">Projects</span>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(245, 166, 35, 0.08), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="project-card group relative grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] bg-bg-2 rounded-xl md:rounded-2xl overflow-hidden hover:ring-amber/30 transition-all duration-300 shadow-2xl shadow-black/50"
    >
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background }}
      />

      {/* Image Side */}
      <div className="relative h-60 sm:h-72 md:h-80 lg:h-full overflow-hidden bg-bg-3/50 flex items-center justify-center p-4 md:p-6 z-10">
        <motion.div 
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="project-image object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-3/20 to-transparent pointer-events-none" />
      </div>

      {/* Info Side */}
      <div className="p-6 md:p-10 lg:p-12 flex flex-col gap-6 z-10">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech: string) => (
            <span 
              key={tech}
              className="text-[9px] md:text-[10px] font-mono text-teal border border-teal/20 rounded px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="font-syne font-bold text-2xl md:text-3xl text-text">
          {project.name}
        </h3>

        <p className="font-sans text-xs sm:text-sm md:text-base text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-amber text-sm font-semibold hover:underline group/link"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted text-sm hover:text-text hover:underline transition-colors"
          >
            <Github size={14} />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
