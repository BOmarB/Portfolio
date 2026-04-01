"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-border py-12 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-[5vw] flex items-center justify-between">
        <span className="font-sans text-[13px] text-muted">
          © {new Date().getFullYear()} Omar Bouazzaoui
        </span>
        <span className="font-sans text-[13px] text-muted">
          Omar.dev
        </span>
      </div>
    </footer>
  );
};

export default Footer;
