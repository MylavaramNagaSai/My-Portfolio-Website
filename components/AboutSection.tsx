"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Cloud, Shield, TerminalSquare, Lock, Download, Mail, User } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
} as const; // <--- Add this exactly here

// The Biometric Decryption Image Component
const BiometricProfile = () => {
  const [phase, setPhase] = useState(0); // 0: Hack, 1: Sketch/Draw, 2: Color/Live
  const [glitchText, setGlitchText] = useState("AWAITING_PAYLOAD");
  
  // SCROLL DETECTION: Create a reference and track when it enters the viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // CRITICAL: Do not start the hacking timers until the component is scrolled into view!
    if (!isInView) return;

    // Phase 0: Hacker Scramble Effect
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const target = "DECRYPTING_BIOMETRICS";
    let iter = 0;
    
    const scramble = setInterval(() => {
      setGlitchText(target.split("").map((c, i) => {
        if (i < iter) return c;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      iter += 1/2;
      if (iter > target.length) clearInterval(scramble);
    }, 40);

    // Timeline triggers
    const t1 = setTimeout(() => setPhase(1), 2000); // Start Sketch
    const t2 = setTimeout(() => setPhase(2), 4000); // Full Resolution

    return () => { clearInterval(scramble); clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]); // Re-run this effect when isInView turns true

  return (
    <MagneticWrapper>
      {/* Attach the ref here so the browser knows when to trigger the animation */}
      <div ref={ref} className="relative w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center cursor-crosshair">
        
        {/* PHASE 0: Hacking Terminal */}
        <AnimatePresence>
          {phase === 0 && (
            <motion.div 
              exit={{ opacity: 0, scale: 0.8 }} 
              className="absolute inset-0 bg-black/80 rounded-full border border-[var(--matrix-green)]/30 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,255,65,0.2)]"
            >
              <div className="font-mono text-[var(--matrix-green)] text-xs md:text-sm text-center px-4 tracking-widest drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]">
                {glitchText}
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PHASE 1: The Hand-Drawn Laser Circle */}
        {phase >= 1 && (
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100">
            <motion.circle
              cx="50" cy="50" r="49"
              fill="none"
              stroke="var(--matrix-green)"
              strokeWidth="1.5"
              strokeDasharray="310"
              initial={{ strokeDashoffset: 310 }}
              animate={{ strokeDashoffset: phase === 1 ? 0 : 310 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]"
            />
          </svg>
        )}

        {/* PHASE 1 & 2: The Image Payload */}
        <motion.div
          className="absolute inset-1 rounded-full overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            // MAKE SURE this matches your exact image name in the public folder
            src="/profile.jpg" 
            alt="Mylavaram Sai"
            // object-top added from previous fix
            className="w-full h-full object-cover object-top"
            initial={{ filter: "grayscale(100%) contrast(150%) brightness(1.2)" }}
            animate={{ 
              filter: phase === 2 
                ? "grayscale(0%) contrast(100%) brightness(100%)" 
                : "grayscale(100%) contrast(150%) brightness(1.2)",
              scale: phase === 2 ? 1 : 1.05
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

      </div>
    </MagneticWrapper>
  );
};


export default function AboutSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 text-white">
      
      <div className="flex items-center w-full mb-16 opacity-50">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[var(--matrix-green)]"></div>
        <div className="px-4 font-mono text-[10px] text-[var(--matrix-green)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--matrix-green)] animate-pulse"></span>
          {"> cat /etc/about.conf"}
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[var(--matrix-green)]"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-mono font-bold text-[var(--matrix-green)] mb-2 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
          [ Infrastructure & Security Engineer: Mylavaram Sai ]
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col"
        >
          <motion.div variants={itemVariants} className="relative rounded-t-3xl border border-white/10 border-t-white/30 bg-black/20 backdrop-blur-3xl overflow-hidden flex flex-col items-center justify-center py-12 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_0%,transparent_70%)]" />
            
            <BiometricProfile />
            
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 backdrop-blur-3xl border border-white/10 border-t-0 p-6 rounded-b-3xl relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--matrix-green)]/70 to-transparent"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[var(--matrix-green)] font-bold tracking-widest text-lg drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">STATUS: ACTIVE</div>
              <div className="text-white/60 font-mono text-[10px] tracking-widest uppercase drop-shadow-sm">
                // CLASS: ROOT_ADMIN | INFRA_SEC
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-8 flex flex-col gap-10"
        >
          <div className="space-y-4">
            <motion.h3 variants={itemVariants} className="text-xl font-mono font-bold text-white flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <span className="text-[var(--matrix-green)]">{">"}</span> PSYCHE & METHODOLOGY_
            </motion.h3>
            <motion.p variants={itemVariants} className="text-white/95 leading-relaxed font-medium text-sm md:text-base text-justify drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
              Elite Infrastructure & Security Engineer specializing in architecting resilient cloud environments, 
              deploying offensive security measures, and forging unbreakable automation pipelines. 
              Experienced in bridging the critical gap between System Administration and Full-Stack Engineering. 
              Driven by a mandate to systematically identify vulnerabilities, harden architectures, and establish 
              Zero Trust frameworks across distributed networks.
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.h3 variants={itemVariants} className="text-xl font-mono font-bold text-white flex items-center gap-2 mb-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <span className="text-[var(--matrix-green)]">{">"}</span> CORE DIRECTIVES_
            </motion.h3>
            
            <div className="flex flex-col gap-4">
              {[
                { icon: <Cloud className="text-blue-400" size={20} />, text: "Cloud Architecture & Infrastructure Scaling" },
                { icon: <Shield className="text-red-400" size={20} />, text: "Offensive Security & VAPT Analysis" },
                { icon: <TerminalSquare className="text-purple-400" size={20} />, text: "CI/CD Pipeline Automation & Tooling" },
                { icon: <Lock className="text-yellow-400" size={20} />, text: "Zero Trust Threat Modeling & Mitigation" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="bg-black/20 backdrop-blur-2xl border border-white/20 border-t-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] p-4 rounded-2xl flex items-center gap-5 hover:bg-[var(--matrix-green)]/15 hover:border-[var(--matrix-green)]/60 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all duration-300 group cursor-default"
                >
                  <div className="p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/20 group-hover:border-[var(--matrix-green)]/70 group-hover:shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all">
                    {item.icon}
                  </div>
                  <span className="font-mono text-sm md:text-base text-white font-bold tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
            <MagneticWrapper>
              <button className="bg-[var(--matrix-green)] hover:bg-[#00ff41] text-black font-black font-mono px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.6)] transition-all">
                <Download size={18} />
                Download Dossier
              </button>
            </MagneticWrapper>
            
            <MagneticWrapper>
              <button className="bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 hover:border-white/60 text-white font-bold font-mono px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                <Mail size={18} />
                Establish Contact
              </button>
            </MagneticWrapper>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}