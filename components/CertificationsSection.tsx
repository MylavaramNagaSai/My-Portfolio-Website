"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";
import { Award, ShieldCheck, Code, Database, Server, Cloud, Globe } from "lucide-react";

// INDIVIDUAL VIBRANT COLORS RESTORED FOR HACKERRANK
const certCategories = [
  {
    title: "Cisco Certifications (22)",
    certs: [
      { name: "CCNA R&S Connecting Networks (Letter)", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING CONNECTING NETWORKS LETTER_page_1.jpg" },
      { name: "CCNA R&S Connecting Networks", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING CONNECTING NETWORKS_page_1.jpg" },
      { name: "CCNA R&S Intro to Networks (Letter)", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING INTRODUCTION TO NETWORKS LETTER_page_1.jpg" },
      { name: "CCNA R&S Intro to Networks", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING INTRODUCTION TO NETWORKS_page_1.jpg" },
      { name: "CCNA R&S Essentials (Letter)", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING ROUTING AND SWITCHING ESSENTIALS LETTER _page_1.jpg" },
      { name: "CCNA R&S Essentials", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING ROUTING AND SWITCHING ESSENTIALS_page_1.jpg" },
      { name: "CCNA R&S Scaling Networks (Letter)", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING SCALING NETWORKS LETTER_page_1.jpg" },
      { name: "CCNA R&S Scaling Networks", icon: Server, color: "text-cyan-400", img: "/certs/CCNA ROUTING AND SWITCHING SCALING NETWORKS_page_1.jpg" },
      { name: "CCNA R&S Connecting Networks (Badge)", icon: ShieldCheck, color: "text-red-400", img: "/certs/CCNA_R-S-_Connecting_Networks_certificate_nagasai709352-gmail-com_7220987c-1293-4801-9b3c-8a6ca1e0b60a_page_1.jpg" },
      { name: "CCNA R&S Intro to Networks (Badge)", icon: ShieldCheck, color: "text-red-400", img: "/certs/CCNA_R-S-_Introduction_to_Networks_certificate_nagasai709352-gmail-com_16336543-9f50-4057-bd33-a7a8db6db331_page_1.jpg" },
      { name: "CCNA R&S Essentials (Badge)", icon: ShieldCheck, color: "text-red-400", img: "/certs/CCNA_R-S-_Routing_and_Switching_Essentials_certificate_nagasai709352-gmail-com_45106f34-e598-4ac3-8841-1ab31ecb71bc_page_1.jpg" },
      { name: "CCNA R&S Scaling Networks (Badge)", icon: ShieldCheck, color: "text-red-400", img: "/certs/CCNA_R-S-_Scaling_Networks_certificate_nagasai709352-gmail-com_b78905a1-7678-4f5e-afc4-4969f4cf0000_page_1.jpg" },
      { name: "IT Essentials (Letter)", icon: Server, color: "text-green-400", img: "/certs/CISCO IT ESSENTIALS LETTER_page_1.jpg" },
      { name: "IT Essentials", icon: Server, color: "text-green-400", img: "/certs/CISCO IT ESSENTIALS_page_1.jpg" },
      { name: "Learning Transcript (Pg 1)", icon: Award, color: "text-yellow-400", img: "/certs/CISCO LEARNING TRANSCRIPT_page_1.jpg" },
      { name: "Learning Transcript (Pg 2)", icon: Award, color: "text-yellow-400", img: "/certs/CISCO LEARNING TRANSCRIPT_page_2.jpg" },
      { name: "Cyber Threat Management (Badge)", icon: ShieldCheck, color: "text-purple-400", img: "/certs/Cyber_Threat_Management_certificate_nagasai709352-gmail-com_3ca4e7b9-9375-4b6d-a54c-8f6ad8ca49be_page_1.jpg" },
      { name: "Cyber Threat Management Update", icon: ShieldCheck, color: "text-purple-400", img: "/certs/CyberThreatManagementUpdate20250905-32-61ddsw_page_1.jpg" },
      { name: "Endpoint Security Update", icon: ShieldCheck, color: "text-purple-400", img: "/certs/EndpointSecurityUpdate20250909-32-xi77ot_page_1.jpg" },
      { name: "I2CS Update", icon: Server, color: "text-cyan-400", img: "/certs/I2CSUpdate20250902-32-sffqx0_page_1.jpg" },
      { name: "IT Essentials (Badge)", icon: Server, color: "text-green-400", img: "/certs/IT_Essentials_certificate_nagasai709352-gmail-com_96811535-78ba-4565-b098-982163c00cef_page_1.jpg" },
      { name: "Networking Basics Update", icon: Server, color: "text-cyan-400", img: "/certs/NetworkingBasicsUpdate20250902-32-qpyu56_page_1.jpg" }
    ]
  },
  {
    title: "HackerRank Certifications (16)",
    certs: [
      { name: "C# Basic", icon: Code, color: "text-purple-500", img: "/certs/c_sharp_basic certificate_page_1.jpg" },
      { name: "CSS", icon: Globe, color: "text-blue-500", img: "/certs/css certificate_page_1.jpg" },
      { name: "Frontend Developer (React)", icon: Globe, color: "text-cyan-400", img: "/certs/frontend_developer_react certificate_page_1.jpg" },
      { name: "Golang Basic", icon: Code, color: "text-sky-400", img: "/certs/golang_basic certificate_page_1.jpg" },
      { name: "Golang Intermediate", icon: Code, color: "text-sky-500", img: "/certs/golang_intermediate certificate_page_1.jpg" },
      { name: "Java Basic", icon: Code, color: "text-orange-500", img: "/certs/java_basic_page_1.jpg" },
      { name: "JavaScript Basic", icon: Code, color: "text-yellow-400", img: "/certs/javascript_basic certificate_page_1.jpg" },
      { name: "Problem Solving Basic", icon: Award, color: "text-emerald-400", img: "/certs/problem_solving_basic certificate_page_1.jpg" },
      { name: "Problem Solving Intermediate", icon: Award, color: "text-emerald-500", img: "/certs/problem_solving_intermediate certificate_page_1.jpg" },
      { name: "React Basic", icon: Globe, color: "text-cyan-400", img: "/certs/react_basic certificate_page_1.jpg" },
      { name: "REST API Intermediate", icon: Database, color: "text-rose-500", img: "/certs/rest_api_intermediate certificate_page_1.jpg" },
      { name: "Software Engineer", icon: Server, color: "text-indigo-400", img: "/certs/software_engineer certificate_page_1.jpg" },
      { name: "Software Engineer Intern", icon: Server, color: "text-indigo-300", img: "/certs/software_engineer_intern certificate_page_1.jpg" },
      { name: "SQL Advanced", icon: Database, color: "text-blue-600", img: "/certs/sql_advanced certificate_page_1.jpg" },
      { name: "SQL Basic", icon: Database, color: "text-blue-300", img: "/certs/sql_basic certificate_page_1.jpg" },
      { name: "SQL Intermediate", icon: Database, color: "text-blue-400", img: "/certs/sql_intermediate certificate_page_1.jpg" }
    ]
  },
  {
    title: "Codingame Accreditations (6)",
    certs: [
      { name: "Basics of C", icon: Code, color: "text-blue-500", img: "/certs/Basics of C_page_1.jpg" },
      { name: "C Mastery", icon: Code, color: "text-blue-500", img: "/certs/C_page_1.jpg" },
      { name: "C++ Mastery", icon: Code, color: "text-blue-500", img: "/certs/C++_page_1.jpg" },
      { name: "Java Programming", icon: Code, color: "text-red-400", img: "/certs/Java_page_1.jpg" },
      { name: "Python Development", icon: Code, color: "text-yellow-400", img: "/certs/Python_page_1.jpg" },
      { name: "Coding Speed", icon: Cloud, color: "text-pink-400", img: "/certs/Coding Speed_page_1.jpg" }
    ]
  },
  {
    title: "Google & EduSkills (5)",
    certs: [
      { name: "Google AI & Ads", icon: Globe, color: "text-yellow-500", img: "/certs/Google_AI_ADS_page_1.jpg" },
      { name: "Google Certification", icon: Award, color: "text-yellow-500", img: "/certs/Mylavaram_Sai_page_1.jpg" },
      { name: "EduSkills AICTE", icon: Award, color: "text-indigo-400", img: "/certs/Mylavaram Naga Sai_24JNF00041_AICTE_page_1.jpg" },
      { name: "EduSkills APSCHE (1)", icon: Award, color: "text-sky-300", img: "/certs/Mylavaram Naga Sai_24JNF00041_APSCHE (1)_page_1.jpg" },
      { name: "EduSkills APSCHE", icon: Award, color: "text-sky-300", img: "/certs/Mylavaram Naga Sai_24JNF00041_APSCHE_page_1.jpg" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
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
}as const;

export default function CertificationsSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 text-white">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-12"
      >
        <motion.div variants={itemVariants} className="text-xs font-mono text-[var(--matrix-green)]/60 mb-4 tracking-widest">
          {">"} ls -la /var/credentials/certificates --all
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-mono font-bold text-[var(--matrix-green)] mb-2 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
          [ ACCREDITATION VAULT ]
        </motion.h2>
      </motion.div>

      <div className="space-y-12">
        {certCategories.map((category, catIndex) => (
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
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
              {category.certs.map((cert, certIndex) => (
                <motion.div 
                  key={certIndex} 
                  variants={itemVariants}
                  whileHover={{ zIndex: 50 }}
                  className="relative z-0" 
                >
                  <MagneticWrapper>
                    <motion.div 
                      initial="initial"
                      whileHover="hover"
                      className="group relative w-[280px] h-[140px] bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-2xl flex flex-col items-center justify-center cursor-crosshair shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-500 hover:border-[var(--matrix-green)]/60 hover:bg-[var(--matrix-green)]/5 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] will-change-transform"
                    >
                      <motion.div 
                        variants={{
                          initial: { opacity: 1, scale: 1 },
                          hover: { opacity: 0, scale: 0.9 }
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center justify-center gap-2 absolute inset-0 z-10 p-4"
                      >
                        <cert.icon className={`${cert.color} drop-shadow-[0_0_8px_currentColor] group-hover:drop-shadow-[0_0_15px_currentColor] group-hover:scale-110 transition-all duration-500`} size={32} />
                        <span className="font-mono text-sm font-bold text-white/80 tracking-tight group-hover:text-white transition-colors duration-500 text-center px-2">
                          {cert.name}
                        </span>
                      </motion.div>

                      <motion.div 
                        variants={{
                          initial: { 
                            opacity: 0, 
                            scale: 0.4,
                            y: "-50%", 
                            x: "-50%",
                            filter: "blur(10px)",
                            pointerEvents: "none"
                          },
                          hover: { 
                            opacity: 1, 
                            scale: 1,
                            y: "-50%", 
                            x: "-50%",
                            filter: "blur(0px)",
                            pointerEvents: "auto",
                            transition: { 
                              type: "spring", 
                              stiffness: 350,
                              damping: 25,
                              mass: 0.4
                            }
                          }
                        }}
                        className="absolute top-1/2 left-1/2 w-[340px] h-[240px] md:w-[750px] md:h-[530px] z-50 rounded-xl bg-[#080808] border border-[var(--matrix-green)] shadow-[0_40px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(0,255,65,0.4)] overflow-hidden"
                      >
                        <img 
                          src={cert.img} 
                          alt={cert.name} 
                          className="w-full h-full object-contain p-2 md:p-4"
                          style={{ imageRendering: "high-quality" }} 
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] pointer-events-none"></div>
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