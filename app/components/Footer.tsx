import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const YEAR = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-6">
      <div className="flex justify-center md:justify-between px-4 items-center max-w-3xl mx-auto">
        <p className="font-bold text-xs md:text-sm tracking-tight">
          Copyright © {YEAR}. Omar Bouazzaoui
        </p>
        <div className="hidden md:flex gap-1 md:gap-2">
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
    </footer>
  );
}

export default Footer;
