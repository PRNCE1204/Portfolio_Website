import React, { useState } from 'react';
import primedineMockup from '../assets/FoodZone.png';
import voiceaiMockup from '../assets/logo.png';

const Projects = () => {
  const [activePrimeDineTab, setActivePrimeDineTab] = useState('customer');

  const primedineTabs = {
    customer: {
      title: "Customer View",
      bullets: [
        "Browse the menu, add items to a cart, and select a table before ordering.",
        "Live order tracker (via Socket.io) updates cooking and service states in real-time.",
        "Secure PIN check-in confirms table sitting to prevent ordering mismatches.",
        "Event booking reservation system with budget-tailored package selections.",
        "Integrated payment gateways for card and UPI checkouts directly inside the app."
      ]
    },
    kitchen: {
      title: "Kitchen View",
      bullets: [
        "Real-time kitchen order ticket dashboard displaying item counts, prep priority, and target tables.",
        "Single-click order state updates (preparing, cooked) synced instantly to the customer's tracker.",
        "Eliminated manual shouting and paper tickets using real-time Socket.io state synchronization."
      ]
    },
    owner: {
      title: "Owner/Admin View",
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
      subtitle: "SaaS Platform for Embeddable Voice Assistants",
      duration: "Ongoing",
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
      subtitle: "Restaurant Ordering & Table Management System",
      duration: "2024",
      techStack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      mockup: primedineMockup,
      github: "https://github.com/PRNCE1204/PrimeDine",
      live: "https://prime-dine.vercel.app/"
    }
  };

  return (
    <section 
      id="projects"
      className="bg-zinc-50 py-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t-8 border-black bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px]"
    >
      {/* Background Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#ff2a2a]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#ff2a2a]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center flex flex-col items-center mb-20">
          <div className="inline-block border-2 border-[#ff2a2a] rounded-full px-6 py-2 text-xs md:text-sm text-[#ff2a2a] font-black shadow-sm bg-[#ff2a2a]/5 uppercase tracking-widest font-heading mb-6">
            Featured Works
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-heading font-black text-black uppercase tracking-widest leading-none mb-4"
            style={{ textShadow: '1px 1px 0px #fff, 2px 2px 0px #fff, 3px 3px 0px #fff, 4px 4px 0px #ff2a2a, 5px 5px 0px #000' }}
          >
            Projects
          </h2>
        </div>

        {/* Side-by-Side Grid Layout */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
          
          {/* Card 1: Voice AI */}
          <div className="bg-white border-4 border-black rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
            <div>
              {/* Mockup Frame */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#ff2a2a] bg-white flex items-center justify-center p-6 shadow-md mb-6">
                <img 
                  src={projectsList.voiceai.mockup} 
                  alt={projectsList.voiceai.title} 
                  className="select-none transition-transform duration-500 max-h-full max-w-[60%] object-contain"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-heading font-black text-black leading-none">
                    {projectsList.voiceai.title}
                  </h3>
                  <span className="text-xs font-black uppercase tracking-wider text-zinc-500">
                    {projectsList.voiceai.duration}
                  </span>
                </div>
                <p className="text-sm font-bold text-zinc-500 mb-4">
                  {projectsList.voiceai.subtitle}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectsList.voiceai.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 text-[10px] font-black uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet details */}
                <ul className="space-y-3.5 text-zinc-700 text-sm leading-relaxed font-medium">
                  {projectsList.voiceai.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions / Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 border-t border-zinc-100 pt-6 mt-6">
              <a
                href={projectsList.voiceai.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-white hover:bg-black text-black hover:text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-350"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                GitHub Code
              </a>
              <a
                href={projectsList.voiceai.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-[#ff2a2a] hover:bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-350"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>

          {/* Card 2: PrimeDine */}
          <div className="bg-white border-4 border-black rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
            <div>
              {/* Mockup Frame */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#ff2a2a] bg-white flex items-center justify-center p-6 shadow-md mb-6">
                <img 
                  src={projectsList.primedine.mockup} 
                  alt={projectsList.primedine.title} 
                  className="select-none transition-transform duration-500 max-h-full max-w-[70%] object-contain"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-heading font-black text-black leading-none">
                    {projectsList.primedine.title}
                  </h3>
                  <span className="text-xs font-black uppercase tracking-wider text-zinc-500">
                    {projectsList.primedine.duration}
                  </span>
                </div>
                <p className="text-sm font-bold text-zinc-500 mb-4">
                  {projectsList.primedine.subtitle}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectsList.primedine.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 text-[10px] font-black uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tab Switchers */}
                <div className="flex flex-wrap gap-2 border-b border-zinc-200 pb-3 mb-5">
                  {Object.keys(primedineTabs).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActivePrimeDineTab(tabKey)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                        activePrimeDineTab === tabKey
                          ? 'bg-[#ff2a2a] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black'
                          : 'bg-zinc-100 text-zinc-600 hover:text-black border border-zinc-200'
                      }`}
                    >
                      {primedineTabs[tabKey].title}
                    </button>
                  ))}
                </div>

                {/* Active Tab Bullet List */}
                <div className="min-h-[160px]">
                  <ul className="space-y-3.5 text-zinc-700 text-sm leading-relaxed font-medium">
                    {primedineTabs[activePrimeDineTab].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Actions / Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 border-t border-zinc-100 pt-6 mt-6">
              <a
                href={projectsList.primedine.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-white hover:bg-black text-black hover:text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-350"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                GitHub Code
              </a>
              <a
                href={projectsList.primedine.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] text-center justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-[#ff2a2a] hover:bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-350"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
