"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.8 } }
};

// Custom SVGs for Socials
const GithubIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const MediumIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.46-.53 6.22-1.17 6.22-.66 0-1.17-2.76-1.17-6.22s.51-6.22 1.17-6.22c.64 0 1.17 2.76 1.17 6.22"/></svg>;

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = ['about', 'skills', 'certs', 'profiles', 'blog', 'contact'];

  return (
    <footer className="w-full border-t border-white/10 bg-[#020202] relative z-20 mt-12">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* COLUMN 1: IDENTITY */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="font-mono text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[var(--matrix-green)] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">{">_"}</span> 
              mylavaram_sai@portfolio
            </div>
            <p className="font-mono text-sm text-white/60 leading-relaxed max-w-[300px]">
              Infrastructure & Security Engineer.<br/>
              Securing systems, one vulnerability at a time.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[
                { icon: GithubIcon, link: "https://github.com/MylavaramNagaSai" },
                { icon: LinkedinIcon, link: "#" },
                { icon: MediumIcon, link: "#" }
              ].map((social, index) => (
                <MagneticWrapper key={index}>
                  <motion.a 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/40 backdrop-blur-2xl border border-white/10 text-white/60 hover:text-[var(--matrix-green)] hover:border-[var(--matrix-green)]/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-colors duration-300"
                  >
                    <social.icon />
                  </motion.a>
                </MagneticWrapper>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: QUICK LINKS */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="font-mono text-sm font-bold text-white/50 tracking-widest">// QUICK LINKS</h3>
            <ul className="flex flex-col gap-3 font-mono text-sm items-start">
              {quickLinks.map((link) => (
                <li key={link}>
                  <MagneticWrapper>
                    <a 
                      href={`#${link}`} 
                      className="text-white/70 hover:text-[var(--matrix-green)] hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all duration-300 flex items-center gap-2 group w-fit py-1 px-2 -ml-2 rounded-md"
                    >
                      <span className="opacity-0 group-hover:opacity-100 text-[var(--matrix-green)] absolute -left-2 transition-all duration-300">{">"}</span>
                      <span className="relative">{link}</span>
                    </a>
                  </MagneticWrapper>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: ORGANIZED SYSTEM STATUS & SIGNATURE */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="font-mono text-sm font-bold text-white/50 tracking-widest">// SYSTEM STATUS</h3>
            
            {/* GRID ALIGNMENT FOR PERFECT ORGANIZATION */}
            <div className="flex flex-col gap-3 font-mono text-sm">
              <div className="flex items-center gap-3 text-white/90 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--matrix-green)] animate-pulse shadow-[0_0_10px_rgba(0,255,65,1)]"></span>
                All systems operational
              </div>
              
              <div className="grid grid-cols-[100px_1fr] gap-2 items-center text-white/60">
                <span className="text-white/40">Location:</span>
                <span className="text-white/90">India</span>
              </div>
              
              <div className="grid grid-cols-[100px_1fr] gap-2 items-center text-white/60">
                <span className="text-white/40">Available:</span>
                <span className="text-[var(--matrix-green)] drop-shadow-[0_0_5px_rgba(0,255,65,0.4)]">Freelance & Full-time</span>
              </div>
              
              <div className="grid grid-cols-[100px_1fr] gap-2 items-center text-white/60">
                <span className="text-white/40">Built with:</span>
                <span className="flex items-center gap-1.5"><span className="text-cyan-400">⚛️</span> React + Next.js</span>
              </div>
              
              {/* ALIGNED DIGITAL SIGNATURE SECTION */}
              <div className="mt-5 pt-6 border-t border-white/10 flex flex-col gap-4 w-full">
                <h3 className="font-mono text-sm font-bold text-white/50 tracking-widest uppercase">// Built By</h3>
                
                <MagneticWrapper>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    /* Continuous TopNav-style float animation */
                    animate={{ y: [0, -4, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      opacity: { duration: 0.5 }
                    }}
                    /* Smooth magnetic hover */
                    whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                    className="group relative flex items-center justify-center gap-3 bg-black/40 backdrop-blur-2xl border border-[var(--matrix-green)]/40 px-6 py-3.5 rounded-full cursor-crosshair overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,255,65,0.4),inset_0_0_20px_rgba(0,255,65,0.15)] hover:border-[var(--matrix-green)] hover:bg-[#0a0a0a] transition-all duration-500 will-change-transform w-fit"
                  >
                    {/* Glowing Nav Dot */}
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--matrix-green)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--matrix-green)] shadow-[0_0_8px_rgba(0,255,65,1)]"></span>
                    </span>
                    
                    {/* Name Text */}
                    <span className="font-mono text-sm font-bold tracking-widest text-white/90 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10">
                      MYLAVARAM NAGA SAI
                    </span>
                  </motion.div>
                </MagneticWrapper>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM ROW: COPYRIGHT & EASTER EGG */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <motion.div variants={itemVariants} className="font-mono text-xs text-white/40">
            © 2026 Mylavaram Naga Sai. All rights reserved.
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="hidden md:block font-mono text-xs text-white/40 mr-4">
              <span className="text-[var(--matrix-green)]">$</span> echo "Thanks for visiting"_
            </div>
            
            <MagneticWrapper>
              <button 
                onClick={scrollToTop}
                className="group flex items-center justify-center w-12 h-12 bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-[var(--matrix-green)] rounded-xl font-mono text-[var(--matrix-green)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
                title="Return to top"
              >
                <div className="flex flex-col items-center justify-center gap-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <ChevronUp size={16} className="text-white/60 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold leading-none">{">_"}</span>
                </div>
              </button>
            </MagneticWrapper>
          </motion.div>
        </motion.div>

      </div>
    </footer>
  );
}