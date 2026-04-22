"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";
import { 
  Code2, Terminal, ShieldAlert, Bug, 
  Cloud, Server, Hexagon, Globe, 
  Cpu, ExternalLink, Zap
} from "lucide-react";

// ORIGINAL VIBRANT COLORS RESTORED
const platformCategories = [
  {
    title: "Algorithms & Competitive Programming",
    platforms: [
      { name: "LeetCode", link: "https://leetcode.com/u/Mylavaram_Naga_Sai/", icon: Code2, color: "text-yellow-500" },
      { name: "CodeChef", link: "https://www.codechef.com/users/mylavaramsai", icon: Hexagon, color: "text-orange-400" },
      { name: "HackerRank", link: "https://www.hackerrank.com/profile/mylavaramsai", icon: Cpu, color: "text-green-500" },
      { name: "Codeforces", link: "https://codeforces.com/profile/mylavaramsai", icon: Globe, color: "text-blue-500" },
      { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/mylavaramsai/", icon: Code2, color: "text-emerald-400" },
      { name: "CodeWars", link: "https://www.codewars.com/users/mylavaramsai", icon: Terminal, color: "text-red-500" },
      { name: "AtCoder", link: "https://atcoder.jp/users/MylavaramSaei", icon: Globe, color: "text-gray-300" },
      { name: "Naukri Code 360", link: "https://www.naukri.com/code360/profile/07092fec-d271-4659-aa05-45eed25d34e2", icon: Cpu, color: "text-blue-400" }
    ]
  },
  {
    title: "Offensive Security & CTFs",
    platforms: [
      { name: "HackTheBox", link: "#", icon: Bug, color: "text-[var(--matrix-green)]" },
      { name: "TryHackMe", link: "#", icon: Terminal, color: "text-[var(--matrix-green)]" },
      { name: "HackerOne", link: "#", icon: ShieldAlert, color: "text-white" },
      { name: "PortSwigger", link: "#", icon: Globe, color: "text-orange-500" },
      { name: "PicoCTF", link: "#", icon: Hexagon, color: "text-purple-500" }
    ]
  },
  {
    title: "Development & Hackathons",
    platforms: [
      { name: "GitHub", link: "https://github.com/MylavaramNagaSai", icon: Globe, color: "text-white" },
      { name: "Devpost", link: "https://devpost.com/mylavaramnagasaei", icon: Hexagon, color: "text-cyan-400" },
      { name: "CodinGame", link: "https://www.codingame.com/profile/19737c7fc7cf4e09e875d62768f3f4970872376", icon: Code2, color: "text-yellow-400" }
    ]
  },
  {
    title: "Enterprise Cloud & Networks",
    platforms: [
      { name: "Cisco", link: "#", icon: Server, color: "text-cyan-500" },
      { name: "AWS Skills Build", link: "#", icon: Cloud, color: "text-orange-400" },
      { name: "Fortinet Cloud", link: "#", icon: ShieldAlert, color: "text-red-500" },
      { name: "Qualys", link: "#", icon: Server, color: "text-blue-400" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.8 } 
  }
};

export default function ProfilesSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 text-white">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-10" 
      >
        <motion.div variants={itemVariants} className="text-xs font-mono text-[var(--matrix-green)]/60 mb-4 tracking-widest">
          {">"} ping -c all active_platforms
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-mono font-bold text-[var(--matrix-green)] mb-6 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
          [ COMMAND CENTERS & PROFILES ]
        </motion.h2>
      </motion.div>

      <div className="space-y-12">
        {platformCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-mono font-bold text-white flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <span className="text-[var(--matrix-green)]">{">"}</span> {category.title}
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
              {category.platforms.map((platform, platIndex) => (
                <motion.div key={platIndex} variants={itemVariants}>
                  <MagneticWrapper>
                    <motion.a 
                      href={platform.link}
                      target={platform.link !== "#" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                      className="group relative w-[280px] h-[100px] bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-2xl flex items-center px-6 cursor-pointer overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[var(--matrix-green)]/60 hover:bg-[var(--matrix-green)]/5 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] block will-change-transform"
                    >
                      <div className="relative z-10 flex items-center gap-4 w-full">
                        <div className="bg-black/30 p-3 rounded-lg border border-white/5 group-hover:border-[var(--matrix-green)]/50 transition-colors duration-500">
                          {/* ICON MAINTAINS ORIGINAL COLOR AND GLOWS BRIGHTER ON HOVER */}
                          <platform.icon className={`${platform.color} drop-shadow-[0_0_5px_currentColor] group-hover:drop-shadow-[0_0_12px_currentColor] group-hover:scale-110 transition-all duration-500`} size={24} />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="font-mono text-sm font-bold text-white/80 tracking-wide group-hover:text-[var(--matrix-green)] transition-colors duration-500 truncate">
                            {platform.name}
                          </span>
                          <span className="text-[10px] text-white/30 font-mono tracking-widest mt-1 group-hover:text-[var(--matrix-green)]/70 transition-colors duration-500 flex items-center gap-1">
                            CONNECT <ExternalLink size={10} />
                          </span>
                        </div>
                      </div>

                      <div className="absolute left-0 top-0 w-1 h-full bg-[var(--matrix-green)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shadow-[0_0_15px_rgba(0,255,65,1)]"></div>
                    </motion.a>
                  </MagneticWrapper>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}