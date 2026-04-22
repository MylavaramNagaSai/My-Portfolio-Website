"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Terminal } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

// Added "blog" right before "projects"
const navLinks = ["main", "about", "skills", "certs", "profiles", "blog", "projects", "contact"];

export default function TopNav({ onTerminalOpen }: { onTerminalOpen: () => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <MagneticWrapper>
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // THE FIX: Massive 1.5s duration with a slow-glide cubic-bezier curve
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            // 1. The Wrapper: 1px padding acts as the border thickness. 
            // The drop shadow creates the ambient glow around the entire pill.
            className="relative p-[1.5px] rounded-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8),_0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.8),_0_0_40px_rgba(0,255,65,0.4)] transition-shadow duration-500"
          >
            {/* 2. THE CONTINUOUS EDGE LIGHT (Rotating Conic Gradient) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              // Expanding it way beyond the borders ensures corners don't get clipped while spinning
              className="absolute inset-[-100%] z-0"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.9) 15%, transparent 30%, transparent 50%, rgba(0,255,65,1) 65%, transparent 80%)"
              }}
            />

            {/* 3. THE INNER GLASS CORE: Sits on top of the light, leaving only the edge visible */}
            <div className="absolute inset-[1.5px] bg-black/40 backdrop-blur-3xl rounded-full z-10" />

            {/* 4. THE NAVIGATION CONTENT */}
            <nav className="relative z-20 px-6 py-3 flex items-center gap-6 md:gap-8 font-mono text-sm">
              
              {/* Clickable Terminal Branding */}
              <MagneticWrapper>
                <div 
                  onClick={onTerminalOpen}
                  className="text-[var(--matrix-green)] font-bold tracking-widest flex items-center gap-2 cursor-pointer hover:text-white transition-colors px-2 py-1 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]"
                >
                  <Terminal size={16} />
                  <span className="hidden sm:inline">mylavaram_sai@root</span>
                  <span className="sm:hidden">m_sai</span>
                </div>
              </MagneticWrapper>

              {/* Sharper Separator Line */}
              <div className="w-[1px] h-6 bg-white/10 hidden md:block shadow-[0_0_5px_rgba(255,255,255,0.2)]" />

              {/* Polished Magnetic Links */}
              <div className="hidden md:flex items-center gap-2 text-white/50 lowercase tracking-wider">
                {navLinks.map((link, index) => (
                  <MagneticWrapper key={link}>
                    <div 
                      className="relative px-4 py-2 cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="water-pill"
                          className="absolute inset-0 bg-[var(--matrix-green)]/20 rounded-full border border-[var(--matrix-green)]/50 shadow-[0_0_15px_rgba(0,255,65,0.4)]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <a 
                        href={`#${link}`} 
                        className={`relative z-10 transition-all duration-200 ${hoveredIndex === index ? "text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : link === "main" ? "text-[var(--matrix-green)] font-bold drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]" : "text-white/60 hover:text-white"}`}
                      >
                        {link === "main" ? `> ${link}` : link}
                      </a>
                    </div>
                  </MagneticWrapper>
                ))}
              </div>

              <div className="md:hidden text-[var(--matrix-green)] hover:text-white cursor-pointer transition-colors px-2">
                <Menu size={20} />
              </div>

            </nav>
          </motion.div>
        </MagneticWrapper>
      </div>
    </div>
  );
}