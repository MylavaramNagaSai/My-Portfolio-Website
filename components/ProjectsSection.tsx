"use client";

import { motion } from "framer-motion";
import { ExternalLink, Cpu, Sparkles, Activity, Layers } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

// Bulletproof Custom GitHub Icon
const GithubIcon = ({ className, size = 18 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } }
};

export default function ProjectsSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 text-white">
      
      {/* SECTION HEADER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-16"
      >
        <motion.div variants={itemVariants} className="text-xs font-mono text-[var(--matrix-green)]/60 mb-4 tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--matrix-green)] animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]"></span>
          {">"} execute ./showcase_deployments.sh
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-mono font-bold text-[var(--matrix-green)] mb-4 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.4)] tracking-tight">
          [ PRIMARY DEPLOYMENTS ]
        </motion.h2>
      </motion.div>

      {/* CODE QUANTUM PROJECT CARD */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full relative group"
      >
        {/* Animated Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--matrix-green)]/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative w-full bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT SIDE: Project Info & Links */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative">
              {/* Subtle background tech pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,65,0.03)_0%,transparent_50%)] pointer-events-none"></div>

              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="bg-[var(--matrix-green)]/10 p-3 rounded-xl border border-[var(--matrix-green)]/30">
                  <Cpu className="text-[var(--matrix-green)] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Code Quantum</h3>
                  <p className="font-mono text-xs text-[var(--matrix-green)] tracking-widest uppercase mt-1">v2.0.4 // Active</p>
                </div>
              </motion.div>

              <motion.p variants={itemVariants} className="text-white/60 font-sans text-sm md:text-base leading-relaxed mb-8">
                An advanced, proprietary artificial intelligence interface engineered to rival enterprise models. Features real-time contextual processing, secure tunneling, and a highly optimized UI/UX architecture. 
                <br/><br/>
                <span className="text-white/80 font-semibold italic border-l-2 border-[var(--matrix-green)] pl-3 block">
                  Direct benchmark testing against Google Gemini 3.1 Pro confirms equivalent or superior response latency in specific coding environments.
                </span>
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
                {['React.js', 'Next.js', 'AI Integration', 'Node.js', 'TailwindCSS'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-md font-mono text-[10px] text-white/50 tracking-wider flex items-center gap-1.5">
                    <Layers size={10} className="text-[var(--matrix-green)]/70" /> {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                <MagneticWrapper>
                  <a 
                    href="https://github.com/your-username/code-quantum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 rounded-xl font-mono text-sm font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  >
                    <GithubIcon size={18} className="group-hover:scale-110 transition-transform" /> 
                    SOURCE CODE
                  </a>
                </MagneticWrapper>
                
                <MagneticWrapper>
                  <a 
                    href="https://codequantum.tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[var(--matrix-green)]/10 hover:bg-[var(--matrix-green)]/20 border border-[var(--matrix-green)]/50 hover:border-[var(--matrix-green)] rounded-xl font-mono text-sm font-bold text-[var(--matrix-green)] transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:shadow-[0_0_30px_rgba(0,255,65,0.3)]"
                  >
                    <Activity size={18} className="group-hover:animate-pulse" /> 
                    LAUNCH LIVE APP
                  </a>
                </MagneticWrapper>
              </motion.div>
            </div>

            {/* RIGHT SIDE: The Split-Screen Comparison Showcase */}
            <div className="lg:col-span-7 bg-[#050505] p-4 md:p-8 relative overflow-hidden flex flex-col items-center justify-center">
              
              <div className="w-full flex items-center justify-between mb-4 px-2">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={12} className="text-blue-400" /> Benchmark Comparison
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* The Cinematic A/B Frame */}
              <motion.div 
                variants={itemVariants}
                className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/10] grid grid-cols-2 gap-1 md:gap-2 bg-[#111] p-1.5 rounded-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              >
                
                {/* PANEL A: Code Quantum (Your App) */}
                <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border border-white/5 group">
                  <div className="absolute top-0 left-0 w-full p-2 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between pointer-events-none">
                    <span className="bg-black/60 backdrop-blur-md border border-[var(--matrix-green)]/30 text-[var(--matrix-green)] font-mono text-[8px] md:text-[10px] px-2 py-1 rounded shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                      CODE QUANTUM
                    </span>
                  </div>
                  
                  {/* REPLACE THIS WITH YOUR ACTUAL VIDEO OR IMAGE */}
                  {/* Example Video: <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"><source src="/quantum-demo.mp4" type="video/mp4" /></video> */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white/20 font-mono text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full border border-dashed border-[var(--matrix-green)]/30 flex items-center justify-center animate-spin-slow mb-2">
                      <Cpu size={20} className="text-[var(--matrix-green)]/50" />
                    </div>
                    [ Insert Quantum Media ]
                  </div>
                  
                  {/* Subtle scanline effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
                </div>

                {/* PANEL B: Gemini Reference */}
                <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border border-white/5 group">
                  <div className="absolute top-0 left-0 w-full p-2 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between pointer-events-none">
                    <span className="bg-black/60 backdrop-blur-md border border-blue-400/30 text-blue-400 font-mono text-[8px] md:text-[10px] px-2 py-1 rounded shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                      GEMINI 3.1 PRO
                    </span>
                  </div>
                  
                  {/* REPLACE THIS WITH YOUR ACTUAL VIDEO OR IMAGE */}
                  {/* Example Video: <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"><source src="/gemini-demo.mp4" type="video/mp4" /></video> */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] text-white/20 font-mono text-xs opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0">
                    <Sparkles size={24} className="text-blue-400/30 mb-2" />
                    [ Insert Gemini Media ]
                  </div>
                  
                </div>

              </motion.div>
              
              <div className="w-full text-center mt-4">
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">Live Dual-Node Capture Feed</p>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}