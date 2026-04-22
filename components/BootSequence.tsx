"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showProgress, setShowProgress] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Custom tailored to your specific engineering identity
  const lines = [
    "[BIOS] Initializing system...",
    "[BIOS] Memory check: 16384 MB OK",
    "[KERNEL] Loading kernel modules...",
    "[NET] Establishing encrypted tunnel...",
    "[NET] TLS 1.3 handshake complete ✓",
    "[AUTH] Verifying identity...",
    "[AUTH] Biometric scan: PASSED ✓",
    "[SYS] Loading user profile: mylavaram_sai@portfolio",
    "[SYS] Mounting /dev/projects...",
    "[SYS] Mounting /dev/skills...",
    "[OK] All systems nominal."
  ];

  useEffect(() => {
    let delay = 0;
    
    // Staggered programmatic typing effect
    lines.forEach((_, index) => {
      delay += Math.random() * 200 + 100; // Physics: random delay between 100-300ms
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, delay);
    });

    // Reveal progress bar slightly after text finishes
    setTimeout(() => {
      setShowProgress(true);
    }, delay + 400);

    // Trigger the violent exit animation after progress bar fills
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800); // 800ms gives Framer Motion time to complete the blur exit
    }, delay + 1600); 
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.15, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Heavy cinematic easing
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-4 md:p-8"
        >
          {/* RESPONSIVE CONTAINER: Scales perfectly from 320px to 4K */}
          <div className="w-full max-w-2xl font-mono text-[11px] sm:text-sm md:text-base text-[var(--matrix-green)] flex flex-col items-start space-y-1 sm:space-y-1.5">
            
            <div className="mb-4 text-[10px] sm:text-xs md:text-sm tracking-widest opacity-80 uppercase w-full">
              MYLAVARAM_SAI@PORTFOLIO - SYSTEM BOOT V2.0
              <div className="w-full h-[1px] bg-[var(--matrix-green)] opacity-30 mt-2"></div>
            </div>

            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={line.includes("✓") || line.includes("[OK]") ? "font-bold" : ""}
              >
                {line}
              </motion.div>
            ))}

            {showProgress && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full mt-8 pt-4"
              >
                <div className="flex items-center gap-2 font-bold mb-2">
                  <span className="animate-pulse">{">"}</span> ACCESS GRANTED
                </div>
                {/* The Loading Bar */}
                <div className="w-full h-1 sm:h-1.5 bg-white/10 relative overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute top-0 left-0 h-full bg-[var(--matrix-green)] shadow-[0_0_10px_#00ff41]"
                  />
                </div>
              </motion.div>
            )}
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}