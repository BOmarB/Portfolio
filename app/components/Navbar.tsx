'use client'
import React from "react";
import Link from "next/link";

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
      <button className="md:hidden " onClick={() => setOpenMenu(!openMenu)}>|||</button>
      { openMenu && <nav className="fixed inset-0 z-[100] bg-white text-sm gap-4 font-bold">
        <button className="md:hidden absolute top-4 right-4" onClick={() => setOpenMenu(!openMenu)}>X</button>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>}
    </nav>
  );
}

export default Navbar;
