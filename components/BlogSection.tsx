"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const blogPosts = [
  {
    title: "Cyber Recon Scanner: My Python-based Open-Source Tool",
    excerpt: "An in-depth look at the development and features of Cyber Recon Scanner, a custom-built tool designed to automate the reconnaissance phase for ethical hackers and penetration testers.",
    link: "#",
    locked: false
  },
  {
    title: "TryHackMe Walkthrough: OWASP Top 10 2025 – Insecure Data Handling",
    excerpt: "A hands-on walkthrough of the OWASP Top 10 2025 Insecure Data Handling room on TryHackMe, exploring real-world vulnerabilities and defensive strategies.",
    link: "#",
    locked: true
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// BUTTERY SMOOTH LOAD PHYSICS
const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.8 } 
  }
};

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.46-.53 6.22-1.17 6.22-.66 0-1.17-2.76-1.17-6.22s.51-6.22 1.17-6.22c.64 0 1.17 2.76 1.17 6.22"/>
  </svg>
);

export default function BlogSection() {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 relative z-10 text-white">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-16"
      >
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-mono font-bold text-[var(--matrix-green)] mb-3 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
          [ PERSONAL LOGS / BLOG ]
        </motion.h2>
        <motion.div variants={itemVariants} className="text-sm font-mono text-[var(--matrix-green)]/60 tracking-widest">
          // Auto-synced from Medium
        </motion.div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-8"
      >
        {blogPosts.map((post, index) => (
          <motion.a 
            key={index}
            href={post.link}
            variants={itemVariants}
            // BUTTERY SMOOTH HOVER PHYSICS
            whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }}
            // UNIVERSAL DEEP GLASS SHADER
            className="group relative w-full block bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:bg-[#050505]/80 hover:border-[var(--matrix-green)]/80 hover:shadow-[0_0_40px_rgba(0,255,65,0.2),inset_0_0_20px_rgba(0,255,65,0.05)] will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--matrix-green)]/0 via-[var(--matrix-green)]/5 to-[var(--matrix-green)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start md:items-center gap-4">
                <div className="bg-white/90 text-black p-1.5 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  <MediumIcon />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-mono text-white/95 leading-tight flex items-center gap-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  {post.title}
                  {post.locked && <Lock size={16} className="text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]" />}
                </h3>
              </div>

              <p className="text-sm md:text-base font-mono text-white/60 leading-relaxed pl-1 md:pl-12 text-justify">
                {post.excerpt}
              </p>

              <div className="pt-2 pl-1 md:pl-12">
                <span className="font-mono text-sm font-bold text-[var(--matrix-green)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
                  Read on Medium →
                </span>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-1 h-0 bg-[var(--matrix-green)] transition-all duration-300 group-hover:h-full shadow-[0_0_10px_rgba(0,255,65,1)]"></div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}