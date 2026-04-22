"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Terminal } from "lucide-react";
import BootSequence from "@/components/BootSequence";
import NetworkBackground from "@/components/NetworkBackground";
import TopNav from "@/components/TopNav";
import TerminalModal from "@/components/TerminalModal";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProfilesSection from "@/components/ProfilesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection"; 
import FooterSection from "@/components/FooterSection";
import ProjectsSection from "@/components/ProjectsSection";

const MY_SKILLS = [
  "Founder of CodeQuantum AI", "React.js Architecture", "CSS Layouts & Flexbox", "Mobile Viewport Optimization",
  "UI Tap Physics & Animations", "Networking Foundations", "Cisco Technologies", "Global Tunneling Solutions",
  "IT Certifications Setup", "Sharma Soft Skills UI", "Responsive Design (320px+)", "Component Architecture"
];

// Custom SVGs
const GithubIcon = () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const WhatsAppIcon = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

const LiveTypewriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <span className="font-mono text-lg md:text-2xl text-[var(--matrix-green)] tracking-widest drop-shadow-[0_0_10px_rgba(0,255,65,0.8)] flex items-center justify-center">
      <span className="mr-3 opacity-50 select-none text-white">{">"}</span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-2.5 h-6 md:h-7 bg-[var(--matrix-green)] ml-1 shadow-[0_0_10px_rgba(0,255,65,1)]"
      />
    </span>
  );
};

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0);

  // --- NEW: LIQUID MOUSE TRACKING PHYSICS ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // The spring makes the spotlight smoothly trail the cursor instead of moving instantly
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    // Set initial position to center of screen to avoid snapping
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generates the reactive CSS gradient using the physics values
  const spotlightGradient = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(42, 42, 53, 0.8), transparent 80%)`;

  useEffect(() => {
    if (!bootComplete) return;
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % MY_SKILLS.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [bootComplete]);

  return (
    <main className="bg-black min-h-screen text-[var(--matrix-green)] relative selection:bg-[var(--matrix-green)] selection:text-black font-sans overflow-x-hidden">
      
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}

      {bootComplete && (
        <>
          <NetworkBackground />
          
          {/* BACKGROUND LAYER 1: The Ambient Wanderers (Slowly shifts everywhere else) */}
          <motion.div 
            className="fixed inset-0 pointer-events-none mix-blend-screen opacity-50 z-[1]"
            animate={{
              background: [
                "radial-gradient(circle at 10% 10%, #1c1c24 0%, transparent 60%)",
                "radial-gradient(circle at 90% 90%, #1c1c24 0%, transparent 60%)",
                "radial-gradient(circle at 10% 90%, #1c1c24 0%, transparent 60%)",
                "radial-gradient(circle at 90% 10%, #1c1c24 0%, transparent 60%)",
                "radial-gradient(circle at 10% 10%, #1c1c24 0%, transparent 60%)",
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* BACKGROUND LAYER 2: The Interactive Mouse Spotlight (Follows cursor) */}
          <motion.div 
            className="fixed inset-0 pointer-events-none mix-blend-screen z-[2]"
            style={{ background: spotlightGradient }}
          />

          <TopNav onTerminalOpen={() => setIsTerminalOpen(true)} />
          <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

          <div className="relative w-full flex flex-col z-10">
            
            <section id="main" className="min-h-screen w-full flex flex-col items-center justify-center relative py-12">
              <div className="flex flex-col items-center justify-center text-center space-y-8 px-4 w-full mt-10">
                
                <motion.h1 
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tighter cursor-crosshair flex flex-wrap justify-center relative z-10"
                >
                  {"Mylavaram_Sai".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: -20, scale: 1.2, filter: "blur(10px)", color: "#00ff41", textShadow: "0px 0px 20px rgba(0,255,100,0.8)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", color: "#ffffff", textShadow: "0px 0px 8px rgba(0,255,65,0.2)" }}
                      transition={{
                        delay: 0.5 + (index * 0.09),
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                        mass: 0.5,
                      }}
                      whileHover={{
                        color: "var(--matrix-green)",
                        textShadow: "0px 0px 30px rgba(0,255,65,0.8), 0px 0px 60px rgba(0,255,65,0.4)",
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
                      }}
                      className="inline-block transition-colors duration-500 will-change-transform"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>

                <div className="h-10 overflow-hidden flex items-center justify-center w-full">
                  <LiveTypewriter text={MY_SKILLS[skillIndex]} />
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex items-center gap-8 pt-6 text-white/50"
                >
                  {[
                    { icon: <GithubIcon />, link: "https://github.com/MylavaramNagaSai" },
                    { icon: <LinkedinIcon />, link: "https://www.linkedin.com/in/saimylavaram" },
                    { icon: <MailIcon />, link: "mailto:mylavaramnagasaei@gmail.com" },
                    { icon: <WhatsAppIcon />, link: "https://wa.me/918897988001" }
                  ].map((item, i) => (
                    <motion.a 
                      key={i}
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1, color: "rgba(0, 255, 65, 1)" }}
                      className="hover:drop-shadow-[0_0_15px_rgba(0,255,65,1)] transition-all duration-300 cursor-pointer"
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-12 flex flex-col items-center gap-4 text-[var(--matrix-green)]/70 text-[10px] uppercase tracking-widest font-mono"
              >
                <span>Scroll Sequence</span>
                <div className="w-[28px] h-[46px] rounded-full border-2 border-[var(--matrix-green)]/30 flex justify-center p-1.5 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                  <motion.div
                    animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 bg-[var(--matrix-green)] rounded-full shadow-[0_0_8px_rgba(0,255,65,1)]"
                  />
                </div>
              </motion.div>
            </section>

            <section id="about" className="w-full py-6 flex items-center justify-center">
              <AboutSection />
            </section>
            
            <section id="skills" className="w-full py-6 flex items-center justify-center">
              <SkillsSection />
            </section>

            <section id="certs" className="w-full py-6 flex items-center justify-center">
              <CertificationsSection />
            </section>

            <section id="profiles" className="w-full py-6 flex items-center justify-center">
              <ProfilesSection />
            </section>
            
            <section id="projects" className="w-full py-16 flex items-center justify-center"><ProjectsSection /></section>

            <section id="blog" className="w-full py-6 flex items-center justify-center">
              <BlogSection />
            </section>
            
            <section id="contact" className="w-full py-6 flex items-center justify-center">
              <ContactSection />
            </section>
            
          </div>
          
          <div className="relative z-10">
            <FooterSection />
          </div>
          
        </>
      )}
    </main>
  );
}