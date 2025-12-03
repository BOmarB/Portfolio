"use client";
import React from "react";

import { TiThMenu } from "react-icons/ti";

import { IoClose } from "react-icons/io5";

function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <nav className="fixed z-50 w-full flex bg-white justify-between p-4">
      <div>
        <h1 className="font-black">Omar.dev</h1>
      </div>
      <div className="hidden md:flex text-sm gap-4 font-bold">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="md:hidden " onClick={() => setOpenMenu(!openMenu)}>
        <TiThMenu size={25} />
      </button>
      {openMenu && (
        <nav className="fixed flex justify-center items-center inset-0 z-[100] bg-white text-sm  font-bold">
          <button
            className="md:hidden absolute top-4 right-4"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <IoClose size={35} />
          </button>
          <div className="flex  ">
            <ul className="">
            <li className="">
              <a href="#home">Home</a>
              <a href="#about" className=" ">
                About
              </a>
              <a href="#projects" className="block ">
                Projects
              </a>
              <a href="#contact" className="block ">
                Contact
              </a>
            </li></ul>
          </div>
        </nav>
      )}
    </nav>
  );
}

export default Navbar;
