"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ZoomIn, X } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects = [
  {
    id: '01',
    name: 'Examly',
    tag: 'Secure exam platform',
    stack: ['PHP', 'React'],
    description:
      'Built for educators who want to modernize their testing process. Teachers create, grade, and analyze student performance digitally, while admins manage users across the school. It eliminates paper-based tech exams, making assessment faster and more insightful for everyone involved.',
    github: 'https://github.com/BOmarB/School_Exams_App',
    image: '/Exam.png',
  },
  {
    id: '02',
    name: 'Journey',
    tag: 'Media recommendation tool',
    stack: ['Laravel', 'React'],
    description:
      'Built for curious people who hate decision fatigue. Pick any topic — medieval history, AI, detective stories — and get three instant recommendations: a movie, a book, and a game. No endless scrolling, just one search and three ways to dive in.',
    github: 'https://github.com/BOmarB',
    image: '/Journey.png',
  },
  {
    id: '03',
    name: 'Job Hunt Engine',
    tag: 'Automated job outreach',
    stack: ['Python', 'Gmail API'],
    description:
      'An automated job search and cold email outreach pipeline. It scrapes global and Moroccan job boards, filters for beginner-friendly roles, hunts down decision-maker emails, verifies them strictly, then sends personalized outreach with your CV attached — and tracks opens and replies.',
    github: 'https://github.com/BOmarB/job_hunt_engine',
    image: '/JobHunt.png',
  },
  {
    id: '04',
    name: 'Book Translator',
    tag: 'AI book translation',
    stack: ['Python', 'Gemini API'],
    description:
      'A desktop app that translates a whole PDF book into Arabic, French, or English — page by page — while keeping the original images, layout, and page numbers. Runs are resumable, so even a long book can be translated across several sessions.',
    github: 'https://github.com/BOmarB/BookTranslation',
    image: '/BookTranslator.png',
  },
];

type Project = (typeof projects)[number];

const Projects = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
    };

    window.addEventListener('keydown', onKeyDown);

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [activeImage]);

  return (
    <section id="projects" className="py-36 md:py-44 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-[5vw]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-end gap-5 mb-16 md:mb-24"
        >
          <span className="font-syne font-extrabold text-6xl md:text-8xl leading-none text-terracotta">02</span>
          <h2 className="font-syne font-extrabold text-5xl md:text-7xl uppercase leading-none text-text">Projects</h2>
        </motion.div>

        <div className="flex flex-col gap-28 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              flip={index % 2 === 1}
              onImageClick={() => setActiveImage({ src: project.image, alt: project.name })}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0b0908]/92 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.alt} preview`}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative w-full max-w-6xl h-[85vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({
  project,
  flip,
  onImageClick,
}: {
  project: Project;
  flip: boolean;
  onImageClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center group"
    >
      <span
        aria-hidden
        className={`hidden lg:block absolute -top-16 ${flip ? 'left-[-2rem]' : 'right-[-2rem]'} font-syne font-extrabold text-[13rem] leading-none text-stroke-soft select-none pointer-events-none`}
      >
        {project.id}
      </span>

      <div className={`relative ${flip ? 'lg:order-2' : ''}`}>
        <button
          type="button"
          onClick={onImageClick}
          aria-label={`View ${project.name} screenshot`}
          className="relative block w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-bg-2 shadow-lg cursor-zoom-in"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 90vw, 550px"
            className="object-contain p-3 md:p-5 transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <ZoomIn size={16} />
              View image
            </span>
          </span>
        </button>
      </div>

      <div className={`flex flex-col gap-6 ${flip ? 'lg:order-1 lg:items-end lg:text-right' : ''}`}>
        <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest">
          <span className="text-terracotta">{project.id}</span>
          <span className="text-muted">{project.tag}</span>
        </div>

        <h3 className="font-syne font-extrabold text-5xl md:text-7xl text-text leading-none">{project.name}</h3>

        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-sage/30 px-4 py-1.5 text-sm font-mono text-sage">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-7 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 font-medium text-terracotta hover:underline underline-offset-4"
          >
            <Github size={18} />
            <span className="text-lg">View source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;