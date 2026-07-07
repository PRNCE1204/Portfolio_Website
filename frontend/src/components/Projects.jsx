import React, { useState } from 'react';
import { motion } from 'framer-motion';
import primedineMockup from '../assets/FoodZone.png';
import voiceaiMockup from '../assets/logo.png';

const Projects = () => {
  const [activePrimeDineTab, setActivePrimeDineTab] = useState('customer');

  const primedineTabs = {
    customer: {
      title: "CUSTOMER_UI",
      bullets: [
        "Browse the menu, add items to a cart, and select a table before ordering.",
        "Live order tracker (via Socket.io) updates cooking and service states in real-time.",
        "Secure PIN check-in confirms table sitting to prevent ordering mismatches.",
        "Event booking reservation system with budget-tailored package selections.",
        "Integrated payment gateways for card and UPI checkouts directly inside the app."
      ]
    },
    kitchen: {
      title: "KITCHEN_SYS",
      bullets: [
        "Real-time kitchen order ticket dashboard displaying item counts, prep priority, and target tables.",
        "Single-click order state updates (preparing, cooked) synced instantly to the customer's tracker.",
        "Eliminated manual shouting and paper tickets using real-time Socket.io state synchronization."
      ]
    },
    owner: {
      title: "ADMIN_CNTL",
      bullets: [
        "Interactive floor map with colored table status indicating occupancy, bill statuses, and pending cleanings.",
        "Menu editor, price configurator, and database manager for catalog updates.",
        "Staff emergency alert system for instant communication across the floor.",
        "Revenue analytics dashboard displaying sales statistics, top items, and invoice logs."
      ]
    }
  };

  const projectsList = {
    voiceai: {
      id: "voiceai",
      title: "Voice AI Agent",
      codename: "CORE_VOICE_v1.0",
      subtitle: "SaaS Platform for Embeddable Voice Assistants",
      duration: "ONGOING",
      status: "STABLE",
      techStack: ["React 19", "Node.js", "Express.js", "Socket.io", "MongoDB", "Gemini API", "Voyage AI", "Razorpay API"],
      mockup: voiceaiMockup,
      github: "https://github.com/PRNCE1204/VoiceAiAgent",
      live: "https://voice-ai-agent-nu.vercel.app/",
      bullets: [
        "SaaS platform enabling business owners to build and deploy voice bots on their sites with a single embeddable script.",
        "Low-latency voice proxy streaming browser audio to Gemini Multimodal Live API via WebSockets/Socket.io.",
        "Document RAG pipelines converting PDF, DOCX, and website crawls into similarity vectors in MongoDB.",
        "Configuration dashboard customizing voice profiles, custom prompts, themes, and playgrounds.",
        "Secure JWT credentials, Razorpay usage-based limits, and email OTP validations."
      ]
    },
    primedine: {
      id: "primedine",
      title: "PrimeDine Platform",
      codename: "REST_SYS_v2.4",
      subtitle: "Restaurant Ordering & Table Management System",
      duration: "2024",
      status: "ONLINE",
      techStack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      mockup: primedineMockup,
      github: "https://github.com/PRNCE1204/PrimeDine",
      live: "https://prime-dine.vercel.app/"
    }
  };

  return (
    <section 
      id="projects"
      className="bg-[#050508] py-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t-4 border-[#ff2a2a]"
    >
      {/* Custom Scopes CSS for Cyber Dashboard */}
      <style dangerouslySetInnerHTML={{__html: `
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(255, 42, 42, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 42, 42, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        @keyframes scanline-anim {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(220px); }
        }
        .scan-line {
          animation: scanline-anim 3.5s linear infinite;
        }
      `}} />

      {/* Cybernetic Grid & Neon Ambient Accents */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#ff2a2a]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#ff2a2a]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Robotic Section Header */}
        <div data-aos="fade-up" className="flex flex-col items-center mb-20">
          <div className="font-mono text-xs text-[#ff2a2a] tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            SYS.STATUS // ACTIVE_PORTFOLIO_DB
          </div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-widest text-center relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 opacity-20 blur-lg" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#ff2a2a] to-transparent mt-4" />
        </div>

        {/* Side-by-Side Multi-Console Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
          
          {/* Card 1: Voice AI Console */}
          <div className="w-full bg-[#0a0a0f]/95 border-2 border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between hover:border-[#ff2a2a]/60 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] transition-all duration-500">
            {/* HUD Panel Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#ff2a2a]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ff2a2a]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff2a2a]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ff2a2a]" />

            <div>
              {/* Top Screen Bar */}
              <div className="flex justify-between items-center border-b border-zinc-800/80 pb-4 mb-6 font-mono text-[10px] text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] animate-pulse" />
                  <span>SYS_DISP: MOD_01</span>
                </div>
                <div>ID: {projectsList.voiceai.codename}</div>
              </div>

              {/* Mockup Frame with scanning laser */}
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-zinc-800/80 bg-[#060609] flex items-center justify-center p-4 group mb-6">
                {/* Corner Crosshairs */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                
                {/* Laser Scanner */}
                <div className="absolute inset-x-0 h-[2px] bg-[#ff2a2a]/60 shadow-[0_0_10px_#ff2a2a] scan-line pointer-events-none z-10" />

                <img 
                  src={projectsList.voiceai.mockup} 
                  alt={projectsList.voiceai.title} 
                  className="select-none transition-all duration-500 max-h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,42,42,0.1)] group-hover:scale-105 max-w-[45%]"
                />
              </div>

              {/* Info Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-heading font-black text-white leading-none">
                    {projectsList.voiceai.title}
                  </h3>
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded border border-[#ff2a2a]/30 text-[#ff2a2a] bg-[#ff2a2a]/5">
                    {projectsList.voiceai.duration}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-zinc-500 tracking-wider mb-4">
                  {projectsList.voiceai.subtitle}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {projectsList.voiceai.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded bg-[#ff2a2a]/5 border border-[#ff2a2a]/10 text-zinc-300 font-mono text-[9px] uppercase tracking-wider"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>

                {/* Project Specs */}
                <ul className="space-y-3 text-zinc-300 text-xs leading-relaxed font-sans">
                  {projectsList.voiceai.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-[#ff2a2a] mt-0.5 flex-shrink-0 text-[10px] font-bold">
                        {`>`}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions / Buttons */}
            <div className="flex flex-wrap items-center gap-3 border-t border-zinc-800/80 pt-6 mt-6">
              <a
                href={projectsList.voiceai.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider bg-transparent hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 hover:border-white transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                GIT_CODE
              </a>
              <a
                href={projectsList.voiceai.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider bg-[#ff2a2a] hover:bg-white text-white hover:text-black border border-[#ff2a2a] hover:border-white transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.25)]"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                LIVE_SYS
              </a>
            </div>
          </div>

          {/* Card 2: PrimeDine Console */}
          <div className="w-full bg-[#0a0a0f]/95 border-2 border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between hover:border-[#ff2a2a]/60 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] transition-all duration-500">
            {/* HUD Panel Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#ff2a2a]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ff2a2a]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff2a2a]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ff2a2a]" />

            <div>
              {/* Top Screen Bar */}
              <div className="flex justify-between items-center border-b border-zinc-800/80 pb-4 mb-6 font-mono text-[10px] text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] animate-pulse" />
                  <span>SYS_DISP: MOD_02</span>
                </div>
                <div>ID: {projectsList.primedine.codename}</div>
              </div>

              {/* Mockup Frame with scanning laser */}
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-zinc-800/80 bg-[#060609] flex items-center justify-center p-4 group mb-6">
                {/* Corner Crosshairs */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-zinc-700 pointer-events-none">[+]</div>
                
                {/* Laser Scanner */}
                <div className="absolute inset-x-0 h-[2px] bg-[#ff2a2a]/60 shadow-[0_0_10px_#ff2a2a] scan-line pointer-events-none z-10" />

                <img 
                  src={projectsList.primedine.mockup} 
                  alt={projectsList.primedine.title} 
                  className="select-none transition-all duration-500 max-h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,42,42,0.1)] group-hover:scale-105 max-w-[60%]"
                />
              </div>

              {/* Info Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-heading font-black text-white leading-none">
                    {projectsList.primedine.title}
                  </h3>
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded border border-zinc-800 text-zinc-500">
                    {projectsList.primedine.duration}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-zinc-500 tracking-wider mb-4">
                  {projectsList.primedine.subtitle}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {projectsList.primedine.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded bg-[#ff2a2a]/5 border border-[#ff2a2a]/10 text-zinc-300 font-mono text-[9px] uppercase tracking-wider"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>

                {/* Interactive Sub-System view selector switcher */}
                <div className="flex flex-wrap gap-1.5 border-b border-zinc-800/80 pb-3 mb-4">
                  {Object.keys(primedineTabs).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActivePrimeDineTab(tabKey)}
                      className={`px-2.5 py-1 rounded font-mono text-[9px] uppercase tracking-widest transition-all duration-300 ${
                        activePrimeDineTab === tabKey
                          ? 'bg-[#ff2a2a] text-white shadow-[0_0_8px_rgba(255,42,42,0.3)] border border-[#ff2a2a]'
                          : 'bg-zinc-950 text-zinc-500 hover:text-zinc-300 border border-zinc-900'
                      }`}
                    >
                      {primedineTabs[tabKey].title}
                    </button>
                  ))}
                </div>

                {/* Active Tab Bullet List */}
                <div className="min-h-[150px]">
                  <ul className="space-y-3 text-zinc-300 text-xs leading-relaxed font-sans">
                    {primedineTabs[activePrimeDineTab].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-[#ff2a2a] mt-0.5 flex-shrink-0 text-[10px] font-bold">
                          {`>`}
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Actions / Buttons */}
            <div className="flex flex-wrap items-center gap-3 border-t border-zinc-800/80 pt-6 mt-6">
              <a
                href={projectsList.primedine.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider bg-transparent hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 hover:border-white transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                GIT_CODE
              </a>
              <a
                href={projectsList.primedine.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider bg-[#ff2a2a] hover:bg-white text-white hover:text-black border border-[#ff2a2a] hover:border-white transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.25)]"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                LIVE_SYS
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
