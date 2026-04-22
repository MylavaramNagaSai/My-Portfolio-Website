"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    
    if (boundingRect) {
      const { width, height, left, top } = boundingRect;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      // The 0.3 multiplier determines how strong the magnetic pull is
      setPosition({ x: x * 0.3, y: y * 0.3 }); 
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.div>
  );
}