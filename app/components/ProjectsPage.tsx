"use client";
import examGif from "@/app/components/ExamlyGif.gif";
import p2 from "@/app/components/Exam.png";
import journeyGif from "@/app/components/JourneyGif.gif";
import p1 from "@/app/components/Journey.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

function ProjectsPage() {
  const [isHoveredExam, setIsHoveredExam] = useState(false);
  const [isHoveredJourney, setIsHoveredJourney] = useState(false);

  return (
    <section
      id="projects"
      className="min-h-screen max-w-4xl mx-auto px-4 space-y-2"
    >
      <div className="space-y-2">
        <h1 className="text-blue-500 text-sm font-bold ">PORTFOLIO</h1>
        <p className="font-bold ">
          Each project is a unique piece of development
        </p>
      </div>
      <div className="md:px-10 flex md:flex-row flex-col gap-8 items-center">
        <div
          className="flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-zinc-900 cursor-pointer"
          onMouseEnter={() => setIsHoveredExam(true)}
          onMouseLeave={() => setIsHoveredExam(false)}
        >
          <Image
            src={isHoveredExam ? examGif : p2}
            alt="p1"
            width={1200}
            height={800}
            quality={100}
            className="w-[400px] md:w-[500px] md:h-[300px] object-contain"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-center text-2xl font-bold mb-4">Examly✒️</h1>
          <p className="text-center text-gray-600">
            Built for educators who want to modernize their testing process.
            This secure examination platform lets teachers create, grade, and
            analyze student performance digitally, while admins manage users
            across the school. It eliminates paper-based tech exams, making
            assessment faster and more insightful for everyone involved.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <strong>PHP</strong>
            <strong>REACT</strong>
          </div>
          <div className="flex justify-center gap-10 mt-6">
            <a
              href="https://github.com/BOmarB/School_Exams_App"
              className="md:text-base text-sm text-gray-700 gap-1 flex hover:underline"
              target="_blank"
            >
              Code <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://examly.xo.je"
              className=" md:text-base text-sm text-gray-700 gap-1 flex hover:underline" target="_blank"
            >
              Live Demo <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-10 md:p-10 flex md:flex-row flex-col gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-center text-2xl font-bold mb-4">Journey🛄</h1>
          <p className="text-center text-gray-600">
            {
              "Built for curious people who hate decision fatigue. Pick any topic like, Medieval history, AI, detective stories and get three instant recommendations: a movie, a book, and a game. It's that simple. No endless scrolling, just one search and three ways to dive in."
            }
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <strong>LARAVEL</strong>
            <strong>REACT</strong>
          </div>
          <div className="flex justify-center gap-10 mt-6">
            <a
              href="https://github.com/BOmarB"
              className="md:text-base text-sm text-gray-700 gap-1 flex hover:underline"
              target="_blank"
            >
              Code <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://journey.page.gd/?i=1"
              className="text-gray-700 md:text-base text-sm gap-1 flex hover:underline" target="_blank"
            >
              Live Demo <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        <div
          className="flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-gray-900 cursor-pointer"
          onMouseEnter={() => setIsHoveredJourney(true)}
          onMouseLeave={() => setIsHoveredJourney(false)}
        >
          <Image
            src={isHoveredJourney ? journeyGif : p1}
            alt="p1"
            width={1300}
            height={800}
            quality={100}
            className="w-[400px] md:w-[500px]  md:h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
