import React from "react";
import Image from "next/image";
import profile from "./DSC_0025.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiNextdotjs,
} from "react-icons/si";

function HomePage() {
  return (
    <section
      id="home"
      className="min-h-screen max-w-3xl grid grid-cols-1 md:grid-cols-2 items-center mx-auto py-20 p-4 md:px-8 "
    >
      <div className="">
        <h1 className="text-2xl md:text-4xl font-extrabold ">
          Full-Stack Web Developer 👋
        </h1>
        <p className="py-4 text-xs md:text-sm text-gray-500">
          {
            "Hi, I'm omar bouazzaoui Full-stack Developer based in Azrou, Morocco."
          }
        </p>
        <div className="flex gap-1 md:gap-2 md:pt-4">
          <a href="https://github.com/BOmarB" target="_blank">
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/omar-bouazzaoui-2870b8281/"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex justify-center  ">
        <Image
          src={profile}
          alt="Omar"
          width={300}
          height={300}
          className="rounded-full border-gray-900 border-2 md:border-4 border animate w-32 h-40 md:w-62 md:h-80"
          title="Omar Bouazzaoui"
        />
      </div>

      <div className="col-span-2 ">
        <pre className=" md:text-xl text-sm gap-1  font-semibold flex md:gap-8">
          <span className="pt-1 md:p-0">Teck Stack |</span>
          <SiLaravel className="text-[#F05340]" title="Laravel" size={40} />
          <SiReact className="text-[#1ef7df]" title="React" size={40} />
          <SiPhp className="text-[#474A8A]" title="Php" size={40} />
          <SiTailwindcss
            className="text-[#1ef7df]"
            title="Tailwindcss"
            size={40}
          />
          <SiHtml5 className="text-[#E34F26]" title="HTML5" size={40} />
          <SiNextdotjs className="text-[#000000]" title="Next.js" size={40} />
          <SiJavascript
            className="text-[#F7DF1E]"
            title="Javascript"
            size={40}
          />
          <SiCss3 className="text-[#1572B6]" title="CSS3" size={40} />
        </pre>
      </div>
    </section>
  );
}

export default HomePage;
