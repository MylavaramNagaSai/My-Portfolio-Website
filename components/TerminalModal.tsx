"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TermIcon, Monitor, Command } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

type OS = "linux" | "windows" | "mac" | null;

const COMMAND_DB: Record<string, string> = {
  whoami: "mylavaram_sai\nRole: Infrastructure & Security Engineer\nClearance: ROOT_LEVEL",
  ls: "projects/   certs/   skills.txt   CodeQuantum.exe   deploy.sh   network_logs.pcap",
  dir: "Volume in drive C is ROOT_SYS\n Directory of C:\\Users\\mylavaram_sai\n\n04/21/2026  14:43    <DIR>          projects\n04/21/2026  14:43    <DIR>          certs\n1 File(s)         4,096 bytes",
  cat: "Usage: cat [filename]\nTry 'cat skills.txt'",
  "cat skills.txt": "[ ENCRYPTED PAYLOAD ] -> Decrypting...\nSkills: AWS, Azure, GCP, Kubernetes, Docker, Terraform, CI/CD, Offensive Security, Blue Teaming, Python, Go.",
  ping: "Pinging 8.8.8.8 with 32 bytes of data:\nReply from 8.8.8.8: bytes=32 time=14ms TTL=117\nReply from 8.8.8.8: bytes=32 time=12ms TTL=117\nReply from 8.8.8.8: bytes=32 time=13ms TTL=117\nPing statistics for 8.8.8.8:\n    Packets: Sent = 3, Received = 3, Lost = 0 (0% loss)",
  nmap: "Starting Nmap 7.93 ( https://nmap.org ) at 2026-04-21\nNmap scan report for target.sys (192.168.1.100)\nHost is up (0.00013s latency).\nNot shown: 996 closed tcp ports\nPORT    STATE SERVICE\n22/tcp  open  ssh\n80/tcp  open  http\n443/tcp open  https\n8080/tcp open http-proxy\n\nNmap done: 1 IP address (1 host up) scanned in 1.42 seconds",
  docker: "Usage: docker [OPTIONS] COMMAND\n\nManagement Commands:\n  container   Manage containers\n  image       Manage images\n  network     Manage networks\n  volume      Manage volumes\n\nRun 'docker ps' to see active containers.",
  "docker ps": "CONTAINER ID   IMAGE                COMMAND                  CREATED         STATUS         PORTS                                       NAMES\n9b2a7f3c1d5e   codequantum_api:v2   \"python manage.py...\"   2 days ago      Up 2 days      0.0.0.0:8000->8000/tcp, :::8000->8000/tcp   cq_backend\n4f8e9a2b1c3d   nginx:alpine         \"/docker-entrypoi...\"   2 days ago      Up 2 days      0.0.0.0:80->80/tcp, :::80->80/tcp           cq_proxy",
  kubectl: "kubectl controls the Kubernetes cluster manager.\n\nBasic Commands:\n  get       Display one or many resources\n  describe  Show details of a specific resource or group of resources\n  logs      Print the logs for a container in a pod",
  "kubectl get pods": "NAME                                READY   STATUS    RESTARTS   AGE\nauth-service-7f8d9b4c-2x9v4         1/1     Running   0          5d\ninfrastructure-node-5c4b8f-1a2b     1/1     Running   0          5d\nsecurity-monitor-daemon-v2          1/1     Running   0          5d",
  terraform: "Usage: terraform [global options] <subcommand> [args]\n\nThe most common commands are:\n  init        Prepare your working directory for other commands\n  validate    Check whether the configuration is valid\n  plan        Show changes required by the current configuration\n  apply       Create or update infrastructure",
  aws: "AWS CLI command execution...\n{ \n  \"UserId\": \"AIDAJQABLZS4A3QDU576Q\", \n  \"Account\": \"123456789012\", \n  \"Arn\": \"arn:aws:iam::123456789012:user/mylavaram_sai\" \n}",
  systemctl: "UNIT                      LOAD   ACTIVE SUB     DESCRIPTION\nssh.service               loaded active running OpenBSD Secure Shell server\ndocker.service            loaded active running Docker Application Container Engine\nnginx.service             loaded active running A high performance web server\nufw.service               loaded active exited  Uncomplicated firewall",
  htop: "CPU[|||||||||||||||||      34.2%]   Tasks: 142, 1251 thr; 1 running\nMem[||||||||||||||| 8.42G/15.9G]   Load average: 1.22 1.05 0.98\nSwp[                       0K/0K]   Uptime: 45 days, 12:34:01",
  ipconfig: "Windows IP Configuration\n\nEthernet adapter Ethernet 1:\n\n   Connection-specific DNS Suffix  . : localdomain\n   IPv4 Address. . . . . . . . . . . : 192.168.1.144\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . . . : 192.168.1.1",
  ifconfig: "eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.1.144  netmask 255.255.255.0  broadcast 192.168.1.255\n        inet6 fe80::a00:27ff:fe4e:66a1  prefixlen 64  scopeid 0x20<link>\n        ether 08:00:27:4e:66:a1  txqueuelen 1000  (Ethernet)",
  clear: "CLEAR_TERMINAL",
  exit: "EXIT_TERMINAL",
  netstat: "Active Internet connections (w/o servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State      \ntcp        0      0 192.168.1.144:443       104.18.2.161:443        ESTABLISHED\ntcp        0      0 192.168.1.144:22        192.168.1.50:54321      ESTABLISHED",
  sudo: "mylavaram_sai is not in the sudoers file. This incident will be reported.",
  python: "Python 3.11.4 (main, Jun  7 2023, 10:13:09) [GCC 12.2.0] on linux\nType \"help\", \"copyright\", \"credits\" or \"license\" for more information.\n>>> _",
  ssh: "Usage: ssh [options] user@hostname\nEstablishing secure tunnel... Connection refused. (Firewall rule actively blocking inbound).",
  chmod: "chmod: changing permissions of 'deploy.sh': Operation permitted.\n[+] File permissions successfully escalated to 777.",
  grep: "Usage: grep [OPTION]... PATTERNS [FILE]...\nTry 'grep --help' for more information.",
  ps: "  PID TTY          TIME CMD\n14233 pts/0    00:00:00 bash\n14256 pts/0    00:00:00 ps\n 1102 ?        00:45:12 docker-daemon\n  890 ?        00:02:11 nginx",
  kill: "kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]",
  curl: "curl: try 'curl --help' or 'curl --manual' for more information\nOr try 'curl -I https://codequantum.com' to view headers.",
  wget: "wget: missing URL\nUsage: wget [OPTION]... [URL]...",
  history: "1  whoami\n2  nmap -sV localhost\n3  docker ps\n4  kubectl get pods\n5  cat skills.txt\n6  history",
};

export default function TerminalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [os, setOs] = useState<OS>(null);
  const [history, setHistory] = useState<{ command: string; output: string | React.ReactNode }[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const getPrompt = () => {
    if (os === "windows") return "C:\\Users\\mylavaram_sai> ";
    if (os === "mac") return "mylavaram_sai@MacBook-Pro ~ % ";
    return "root@kali:~# ";
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (cleanCmd === "clear") { setHistory([]); return; }
    if (cleanCmd === "exit") { handleClose(); return; }

    let output: string | React.ReactNode = "Command not found. Type 'help' for a list of available commands.";
    
    if (cleanCmd === "help") {
      output = (
        <div className="flex flex-col gap-1 mt-2">
          <span className="text-white/50 mb-2">Available commands (Click to execute):</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
            {Object.keys(COMMAND_DB).filter(k => k !== "clear" && k !== "exit").map((c) => (
              <span 
                key={c} 
                onClick={() => { setInput(c); setTimeout(() => handleCommand(c), 100); }}
                className="text-[var(--matrix-green)] hover:text-white hover:underline cursor-pointer transition-colors"
              >
                {c}
              </span>
            ))}
            <span onClick={() => handleCommand("clear")} className="text-yellow-400 hover:text-white cursor-pointer">clear</span>
            <span onClick={() => handleCommand("exit")} className="text-red-400 hover:text-white cursor-pointer">exit</span>
          </div>
        </div>
      );
    } else if (COMMAND_DB[cleanCmd]) {
      output = COMMAND_DB[cleanCmd];
    }

    setHistory((prev) => [...prev, { command: getPrompt() + cmd, output }]);
    setInput("");
  };

  const handleClose = () => {
    setOs(null);
    setHistory([]);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      >
        <motion.div 
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[70vh]"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-white/10">
            <div className="flex items-center gap-2">
              <TermIcon size={16} className="text-white/50" />
              <span className="text-xs font-mono text-white/50">
                {os === null ? "Select Environment" : `Terminal - ${os.toUpperCase()}`}
              </span>
            </div>
            <button onClick={handleClose} className="text-white/50 hover:text-red-500 transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* OS Selector */}
          {os === null ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-8">
              <h2 className="text-2xl font-mono text-white">Select Environment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl place-items-stretch">
                
                {/* Magnetic Buttons added here */}
                <MagneticWrapper>
                  <button onClick={() => setOs("linux")} className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-[var(--matrix-green)]/10 hover:border-[var(--matrix-green)]/50 transition-all group">
                    <TermIcon size={48} className="text-white/50 group-hover:text-[var(--matrix-green)]" />
                    <span className="font-mono font-bold text-white/80 group-hover:text-[var(--matrix-green)]">Linux (Bash)</span>
                  </button>
                </MagneticWrapper>

                <MagneticWrapper>
                  <button onClick={() => setOs("windows")} className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all group">
                    <Monitor size={48} className="text-white/50 group-hover:text-blue-500" />
                    <span className="font-mono font-bold text-white/80 group-hover:text-blue-500">Windows (CMD)</span>
                  </button>
                </MagneticWrapper>

                <MagneticWrapper>
                  <button onClick={() => setOs("mac")} className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/20 transition-all group">
                    <Command size={48} className="text-white/50 group-hover:text-white" />
                    <span className="font-mono font-bold text-white/80 group-hover:text-white">macOS (Zsh)</span>
                  </button>
                </MagneticWrapper>

              </div>
            </div>
          ) : (
            /* Actual Terminal Interface */
            <div className="flex-1 p-4 font-mono text-sm overflow-y-auto" onClick={() => document.getElementById("term-input")?.focus()}>
              <div className="text-white/50 mb-4">
                System initialized. Type <span className="text-[var(--matrix-green)] font-bold">'help'</span> to see available commands.
              </div>
              
              {history.map((entry, i) => (
                <div key={i} className="mb-4">
                  <div className="text-white">{entry.command}</div>
                  <div className="text-[var(--matrix-green)] whitespace-pre-wrap mt-1">
                    {entry.output}
                  </div>
                </div>
              ))}

              <div className="flex items-center">
                <span className="text-white mr-2">{getPrompt()}</span>
                <input
                  id="term-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
                  className="flex-1 bg-transparent border-none outline-none text-[var(--matrix-green)] w-full"
                  autoFocus
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}