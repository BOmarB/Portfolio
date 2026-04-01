"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Faster, snappier spring for the dot
  const dotSpringConfig = { damping: 20, stiffness: 800, mass: 0.5 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Slower, more fluid spring for the ring
  const ringSpringConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
// ... existing target detection logic
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('interactive');
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 border-2 border-white/40 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-amber rounded-full shadow-[0_0_12px_rgba(245,166,35,0.9)] pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.6 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
