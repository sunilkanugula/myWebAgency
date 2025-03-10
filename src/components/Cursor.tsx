import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorColor, setCursorColor] = useState('white');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
      
      // Detect background color dynamically
      const bgColor = window.getComputedStyle(target).backgroundColor;
      const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];
      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      setCursorColor(brightness < 128 ? 'white' : 'black');
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
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{ backgroundColor: cursorColor }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-50"
        style={{ borderColor: cursorColor }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
          borderWidth: isPointer ? "3px" : "2px"
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8
        }}
      />
      {isPointer && (
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 border rounded-full pointer-events-none z-50 opacity-30"
          style={{ borderColor: cursorColor }}
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: isClicking ? 0.8 : 1.2
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            mass: 1
          }}
        />
      )}
    </>
  );
}
