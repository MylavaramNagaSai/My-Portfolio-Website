"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, CheckCircle2, X } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

// Custom SVGs
const GithubIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const MediumIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.46-.53 6.22-1.17 6.22-.66 0-1.17-2.76-1.17-6.22s.51-6.22 1.17-6.22c.64 0 1.17 2.76 1.17 6.22"/></svg>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowPopup(true); // Trigger the popup
        (e.target as HTMLFormElement).reset(); // Clear the form
        // Auto-close popup after 6 seconds
        setTimeout(() => setShowPopup(false), 6000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 text-white">
      
      {/* --- THE SUCCESS POPUP MODAL --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-10 right-10 z-50"
          >
            <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-[var(--matrix-green)] rounded-xl shadow-[0_0_30px_rgba(0,255,65,0.2)] p-6 w-[350px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--matrix-green)] shadow-[0_0_10px_var(--matrix-green)]"></div>
              
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--matrix-green)]/10 p-2 rounded-full border border-[var(--matrix-green)]/30 text-[var(--matrix-green)]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-mono font-bold text-[var(--matrix-green)] text-sm tracking-widest mb-1">TRANSMISSION SECURED</h4>
                  <p className="font-mono text-xs text-white/70 leading-relaxed">
                    Payload delivered. A secure confirmation receipt has been dispatched to your provided email node.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-16"
      >
        <motion.div variants={itemVariants} className="text-xs font-mono text-[var(--matrix-green)]/60 mb-4 tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--matrix-green)] animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]"></span>
          {">"} ssh root@contact.mylavaram
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-mono font-bold text-[var(--matrix-green)] mb-4 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.4)] tracking-tight">
          [ SECURE CONTACT CHANNEL ]
        </motion.h2>
        <motion.p variants={itemVariants} className="text-white/60 font-mono text-sm text-center max-w-xl">
          System standing by for contact. Fill out the form below or connect via secure networks.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* LEFT COLUMN: THE FORM */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 w-full"
        >
          <motion.div 
            variants={itemVariants} 
            className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] will-change-transform"
          >
            {/* Form Header */}
            <div className="bg-black/60 border-b border-white/10 px-5 py-4 flex items-center gap-4">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_rgba(255,189,46,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_rgba(39,201,63,0.5)]"></div>
              </div>
              <span className="font-mono text-xs text-white/50 tracking-widest">~/contact/compose_message.sh</span>
            </div>

            {/* The Form Body */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-sm font-bold text-white/90 tracking-widest flex items-center gap-2">
                  <span className="text-[var(--matrix-green)]">{">"}</span> IDENTIFIER_
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Enter your designation..." 
                  className="bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--matrix-green)] focus:ring-1 focus:ring-[var(--matrix-green)] focus:bg-white/[0.05] transition-all duration-300 shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-sm font-bold text-white/90 tracking-widest flex items-center gap-2">
                  <span className="text-[var(--matrix-green)]">{">"}</span> RETURN_ADDRESS_
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="your.node@network.com" 
                  className="bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--matrix-green)] focus:ring-1 focus:ring-[var(--matrix-green)] focus:bg-white/[0.05] transition-all duration-300 shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-sm font-bold text-white/90 tracking-widest flex items-center gap-2">
                  <span className="text-[var(--matrix-green)]">{">"}</span> PAYLOAD_
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  placeholder="Inject secure transmission here..." 
                  className="bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--matrix-green)] focus:ring-1 focus:ring-[var(--matrix-green)] focus:bg-white/[0.05] transition-all duration-300 shadow-inner resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`mt-4 w-full font-mono font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 border ${
                  submitError
                  ? "bg-red-500/20 border-red-500 text-red-400"
                  : "bg-transparent border-[var(--matrix-green)]/50 text-[var(--matrix-green)] hover:bg-[var(--matrix-green)] hover:text-black hover:border-[var(--matrix-green)] hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] shadow-[0_0_15px_rgba(0,255,65,0.1)]"
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">ENCRYPTING & TRANSMITTING...</span>
                ) : submitError ? (
                  <span>TRANSMISSION FAILED - RETRY</span>
                ) : (
                  <>
                    <Send size={18} className="group-hover:animate-bounce" />
                    <span>EXECUTE TRANSMISSION</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: NETWORKS & INFO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-mono text-sm font-bold text-white/50 tracking-widest mb-5">// SECURE NETWORKS</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "GitHub", desc: "// connect", icon: GithubIcon, link: "https://github.com/MylavaramNagaSai" },
                { name: "LinkedIn", desc: "// connect", icon: LinkedinIcon, link: "#" },
                { name: "Medium", desc: "// connect", icon: MediumIcon, link: "#" },
                { name: "Email", desc: "// connect", icon: Mail, link: "mailto:mylavaramnagasaei@gmail.com" }
              ].map((net, i) => (
                <MagneticWrapper key={i}>
                  <a 
                    href={net.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block w-full bg-white/[0.02] backdrop-blur-2xl border border-white/5 hover:border-[var(--matrix-green)]/60 rounded-xl p-5 transition-all duration-500 hover:bg-[var(--matrix-green)]/5 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] will-change-transform"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-white/60 group-hover:text-[var(--matrix-green)] group-hover:scale-110 transition-all duration-300">
                        <net.icon />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-sm font-bold text-white/90 group-hover:text-white transition-colors">{net.name}</span>
                        <span className="font-mono text-[10px] text-white/40 group-hover:text-[var(--matrix-green)]/70 transition-colors">{net.desc}</span>
                      </div>
                    </div>
                  </a>
                </MagneticWrapper>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 hover:border-[var(--matrix-green)]/30 rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] mt-2 transition-colors duration-500"
          >
            <h3 className="font-mono text-sm font-bold text-white/50 tracking-widest mb-6">// CONNECTION_INFO</h3>
            
            <div className="flex flex-col gap-4 font-mono text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2 items-start text-white/60">
                <span className="text-white/40">protocol:</span>
                <span className="text-white/90">TLS 1.3 / E2E encrypted</span>
              </div>
              
              <div className="grid grid-cols-[120px_1fr] gap-2 items-start text-white/60">
                <span className="text-white/40">response_time:</span>
                <span className="text-white/90">{"<"} 24 hours</span>
              </div>
              
              <div className="grid grid-cols-[120px_1fr] gap-2 items-center text-white/60 pt-2 border-t border-white/10 mt-1">
                <span className="text-white/40">status:</span>
                <span className="text-[var(--matrix-green)] font-bold flex items-center gap-2 drop-shadow-[0_0_5px_rgba(0,255,65,0.4)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--matrix-green)] animate-pulse shadow-[0_0_8px_rgba(0,255,65,1)]"></span>
                  AVAILABLE FOR HIRE
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}