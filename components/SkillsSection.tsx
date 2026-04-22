"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";
import { 
  ShieldAlert, Radar, ScanSearch, Zap, 
  Network, Router, Shield, Activity, 
  Globe, Unlock, AlertTriangle, Bug, 
  Cloud, Server, HardDrive, RefreshCw, 
  Code, Layers, Smartphone, Pointer, 
  Cpu, Braces, TerminalSquare, Code2, 
  Users, Briefcase, TrendingUp, BarChart, 
  Languages, MessageCircle, Mic, BookOpen, 
  Flag, Settings, Wrench, Lightbulb 
} from "lucide-react";

const skillCategories = [
  {
    title: "Offensive Security & Pentesting",
    skills: [
      { name: "Ethical Hacking", icon: ShieldAlert, color: "text-red-500", neon: "Kali Linux & Payload Execution" },
      { name: "Network Scanning", icon: Radar, color: "text-orange-500", neon: "N-Map Sync & Info Gathering" },
      { name: "Vulnerability Assessment", icon: ScanSearch, color: "text-yellow-500", neon: "Qualys, Nessus & Mitigation" },
      { name: "Payload Injection", icon: Zap, color: "text-blue-500", neon: "Intruder Attacks & Exploits" }
    ]
  },
  {
    title: "Infrastructure & Network Engineering",
    skills: [
      { name: "GPON/EPON Architecture", icon: Network, color: "text-cyan-400", neon: "BSNL Hardware Setup & Config" },
      { name: "VLAN Tagging & Routing", icon: Router, color: "text-sky-400", neon: "Cisco Tech & Subnetting" },
      { name: "Firewall Management", icon: Shield, color: "text-emerald-400", neon: "Security Policies & Zones" },
      { name: "ISP Consolidation", icon: Activity, color: "text-indigo-400", neon: "Dual Connections & Loop Detection" }
    ]
  },
  {
    title: "Web & Application Security",
    skills: [
      { name: "Web App Exploitation", icon: Globe, color: "text-pink-500", neon: "PortSwigger & Burp Suite" },
      { name: "Authentication Bypass", icon: Unlock, color: "text-purple-400", neon: "Access Control Vulnerabilities" },
      { name: "OWASP Mitigation", icon: AlertTriangle, color: "text-orange-400", neon: "Top 10 Threat Modeling" },
      { name: "Bug Bounty Hunting", icon: Bug, color: "text-green-500", neon: "HackerOne & HTB Diagnostics" }
    ]
  },
  {
    title: "Cloud & System Administration",
    skills: [
      { name: "AWS Cloud Solutions", icon: Cloud, color: "text-sky-300", neon: "Architecture & Provisioning" },
      { name: "System Administration", icon: Server, color: "text-slate-300", neon: "Linux Terminal Mastery" },
      { name: "CPE Tunneling", icon: HardDrive, color: "text-cyan-500", neon: "Global Access Infrastructure" },
      { name: "Disaster Recovery", icon: RefreshCw, color: "text-emerald-500", neon: "Business Continuity Planning" }
    ]
  },
  {
    title: "Front-End UI/UX Development",
    skills: [
      { name: "React.js Ecosystem", icon: Code, color: "text-cyan-400", neon: "Hooks, State & Components" },
      { name: "CSS Architectures", icon: Layers, color: "text-blue-400", neon: "Flexbox & Grid Mastery" },
      { name: "Mobile Optimization", icon: Smartphone, color: "text-pink-400", neon: "320px - 425px Viewports" },
      { name: "UI Tap Physics", icon: Pointer, color: "text-purple-400", neon: "Framer Motion Animations" }
    ]
  },
  {
    title: "Software Engineering & DSA",
    skills: [
      { name: "Algorithmic Problem Solving", icon: Cpu, color: "text-orange-500", neon: "LeetCode & CodeChef Daily" },
      { name: "Advanced Data Structures", icon: Braces, color: "text-yellow-400", neon: "Trees, Graphs & Matrices" },
      { name: "C/C++ Programming", icon: TerminalSquare, color: "text-blue-500", neon: "Memory Management & Pointers" },
      { name: "Java Development", icon: Code2, color: "text-red-400", neon: "Object-Oriented Design" }
    ]
  },
  {
    title: "Leadership & Sales Strategy",
    skills: [
      { name: "Team Management", icon: Users, color: "text-amber-500", neon: "HDB Finance Leadership" },
      { name: "Sales Strategy & CRM", icon: Briefcase, color: "text-emerald-500", neon: "Cross-selling & Upselling" },
      { name: "Market Competitor Analysis", icon: TrendingUp, color: "text-blue-400", neon: "Research & Consultation" },
      { name: "Performance Reporting", icon: BarChart, color: "text-purple-400", neon: "Data-Driven Processing" }
    ]
  },
  {
    title: "Linguistic Capabilities",
    skills: [
      { name: "English", icon: Languages, color: "text-sky-300", neon: "Professional / Fluent" },
      { name: "Telugu", icon: MessageCircle, color: "text-orange-400", neon: "Native / Bilingual" },
      { name: "Hindi", icon: Mic, color: "text-green-400", neon: "Conversational" },
      { name: "Technical Documentation", icon: BookOpen, color: "text-slate-300", neon: "Reporting & Structuring" }
    ]
  },
  {
    title: "Leisure Pursuits & Tech Hobbies",
    skills: [
      { name: "Capture The Flag (CTF)", icon: Flag, color: "text-red-500", neon: "PicoCTF & TryHackMe" },
      { name: "Homelab Tinkering", icon: Settings, color: "text-gray-400", neon: "Server & Network Testing" },
      { name: "Hardware & PC Builds", icon: Wrench, color: "text-yellow-500", neon: "Custom Rigs & Diagnostics" },
      { name: "Cybersecurity Research", icon: Lightbulb, color: "text-[var(--matrix-green)]", neon: "Staying Ahead of the Curve" }
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
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
}as const;

export default function SkillsSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 text-white py-0">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-20"
      >
        <motion.div variants={itemVariants} className="text-xs font-mono text-[var(--matrix-green)]/60 mb-4 tracking-widest">
          {">"} nmap --skill-scan --comprehensive localhost
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-mono font-bold text-[var(--matrix-green)] mb-2 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
          [ COMPREHENSIVE SKILL MATRIX ]
        </motion.h2>
      </motion.div>

      <div className="space-y-24">
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <h3 className="text-xl md:text-2xl font-mono font-bold text-white flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <span className="text-[var(--matrix-green)]">{">"}</span> {category.title}
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.div key={skillIndex} variants={itemVariants}>
                  <MagneticWrapper>
                    <motion.div 
                      initial="initial"
                      whileHover="hover"
                      // OUTLINE FIX: Added permanent border-[var(--matrix-green)]/40 and a subtle default shadow
                      className="relative w-[280px] h-[140px] bg-black/20 backdrop-blur-3xl border border-[var(--matrix-green)]/40 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-[0_0_15px_rgba(0,255,65,0.1)] transition-all duration-300 hover:bg-black/40 hover:border-[var(--matrix-green)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4),inset_0_0_15px_rgba(0,255,65,0.2)]"
                    >
                      <motion.div 
                        variants={{
                          initial: { opacity: 1, y: 0, scale: 1 },
                          hover: { opacity: 0, y: -20, scale: 0.8 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-center gap-4 absolute inset-0"
                      >
                        <skill.icon className={`${skill.color} drop-shadow-[0_0_10px_currentColor]`} size={36} />
                        <span className="font-mono text-sm font-bold text-white tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] text-center px-4">
                          {skill.name}
                        </span>
                      </motion.div>

                      <motion.div 
                        variants={{
                          initial: { opacity: 0, y: 20, scale: 0.8 },
                          hover: { opacity: 1, y: 0, scale: 1 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center absolute inset-0 px-6 text-center"
                      >
                        <span className="font-mono text-[13px] leading-relaxed font-black text-[var(--matrix-green)] drop-shadow-[0_0_15px_rgba(0,255,65,0.8)] tracking-widest uppercase">
                          {skill.neon}
                        </span>
                      </motion.div>

                    </motion.div>
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