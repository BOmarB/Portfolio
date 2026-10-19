import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-[5vw] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-sans text-[13px] text-muted">
          © {new Date().getFullYear()} Omar Bouazzaoui
        </span>
        <a
          href="mailto:bouazzaouiomar21@gmail.com"
          className="font-sans text-[13px] text-muted transition-colors hover:text-terracotta"
        >
          bouazzaouiomar21@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;