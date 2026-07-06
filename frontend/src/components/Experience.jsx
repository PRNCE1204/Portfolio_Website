import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ResearchProjectCard = ({ name, description, status }) => {
  return (
    <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:border-red-500/20 transition-all duration-300 group/proj flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-6 bg-[#ff2a2a] rounded-full group-hover/proj:scale-y-125 transition-transform duration-300" />
          <h4 className="text-lg font-heading font-black text-white group-hover/proj:text-[#ff2a2a] transition-colors duration-300">
            {name}
          </h4>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>
      <div className="inline-flex self-start px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
        {status}
      </div>
    </div>
  );
};

const ExperienceCard = ({ role, duration, organization, client, techStack, projects, descriptions, links, isResearch, index }) => {
  return (
    <div 
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      className="w-full relative flex gap-8 md:gap-12 group/card"
    >
      {/* Central/Left Timeline Node Ball */}
      <div className="absolute left-[17px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-20 flex flex-col items-center">
        <div className="w-9 h-9 rounded-full border-4 border-zinc-950 bg-zinc-900 flex items-center justify-center group-hover/card:border-[#ff2a2a] group-hover/card:bg-white transition-all duration-500 shadow-lg shadow-black/50">
          {isResearch ? (
            <svg className="w-3.5 h-3.5 text-zinc-400 group-hover/card:text-[#ff2a2a] transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-zinc-400 group-hover/card:text-[#ff2a2a] transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          )}
        </div>
      </div>

      {/* Grid Layout: Left Year Tag (Desktop) / Right Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-12 pl-12 md:pl-0">
        
        {/* Left Side: Duration & Org (Desktop Right-aligned, Mobile Left-aligned) */}
        <div className={`flex flex-col justify-start md:pt-1.5 ${
          index % 2 === 0 ? 'md:text-right md:items-end' : 'md:order-2 md:text-left md:items-start'
        }`}>
          <span className="text-xs uppercase tracking-widest text-[#ff2a2a] font-black font-heading mb-1.5">
            {duration}
          </span>
          <h4 className="text-xl md:text-2xl font-heading font-black text-white leading-tight">
            {organization}
          </h4>
          {client && (
            <p className="text-sm text-zinc-400 mt-1">
              Client: <span className="text-white font-bold">{client}</span>
            </p>
          )}
        </div>

        {/* Right Side: The Card Content (Desktop Swapped based on index) */}
        <div className={`${
          index % 2 === 0 ? 'md:order-2' : 'md:text-right'
        }`}>
          <div className="relative rounded-3xl border-2 border-[#ff2a2a] bg-zinc-900/25 p-6 md:p-8 hover:border-red-400 hover:bg-zinc-900/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.25)] transition-all duration-500">
            
            {/* Glowing Accent Corner Indicator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ff2a2a]/10 to-transparent blur-xl pointer-events-none rounded-tr-3xl" />
            
            <h3 className="text-xl md:text-2xl font-heading font-black text-white mb-2 leading-tight">
              {role}
            </h3>

            {/* Tech Stack tags */}
            {techStack && (
              <div className="flex flex-wrap gap-2 mb-5">
                {techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Research Papers details */}
            {isResearch && projects && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-left">
                {projects.map((proj, idx) => (
                  <ResearchProjectCard 
                    key={idx}
                    name={proj.name}
                    description={proj.description}
                    status={proj.status}
                  />
                ))}
              </div>
            )}

            {/* Work experience descriptions */}
            {!isResearch && descriptions && (
              <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed text-left font-medium">
                {descriptions.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Links / Action Buttons */}
            {links && (
              <div className="flex flex-wrap items-center gap-3 mt-6 border-t border-white/5 pt-5">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                      link.type === 'github'
                        ? 'bg-white/5 hover:bg-white text-white hover:text-black border border-white/10'
                        : 'bg-[#ff2a2a] hover:bg-white text-white hover:text-black shadow-[0_4px_14px_rgba(255,42,42,0.3)] hover:shadow-none'
                    }`}
                  >
                    {link.type === 'github' ? (
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const glowLength = useTransform(pathLength, [0.1, 0.9], [0, 1]);

  const experiences = [
    {
      role: "Undergraduate Research Intern",
      duration: "May 4 – Jul 5, 2026",
      organization: "Institute of Technology, Nirma University, Ahmedabad",
      isResearch: true,
      projects: [
        {
          name: "DiabSecure",
          description: "Federated-TinyML Privacy-Preserving Framework for Diabetes Risk Assessment using Blockchain",
          status: "Accepted at IEEE CITS 2025"
        },
        {
          name: "DriveShield",
          description: "FL-Based Jamming Attack Detection Framework for V2X Communication under 6G",
          status: "Accepted at IEEE VTC 2025"
        }
      ],
      links: [
        {
          type: "github",
          label: "Research GitHub",
          url: "https://github.com/PRNCE1204/Research-Papers"
        }
      ]
    },
    {
      role: "Full-Stack Developer",
      duration: "Jun 2026 – Jul 2026",
      organization: "AICORE SYSTEM",
      client: "AI Infowave (AI/Tech Consulting Company)",
      techStack: ["React.js", "Node.js", "Express.js"],
      isResearch: false,
      descriptions: [
        "Independently built and delivered a full company website (frontend + backend) for an AI/tech consulting firm to showcase services and expertise to clients.",
        "Developed a responsive frontend with React.js and a Node.js/Express.js backend handling site logic, forms, and dynamic content.",
        "Integrated an AI-powered chatbot to handle visitor queries and guide clients through company services.",
        "Managed the project end-to-end, from requirements gathering to deployment of a production-ready site."
      ],
      links: [
        {
          type: "github",
          label: "Source Code",
          url: "https://github.com/PRNCE1204/aiinfowaves"
        },
        {
          type: "external",
          label: "Live Demo",
          url: "https://www.aiinfowave.com/"
        }
      ]
    }
  ];

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="bg-black py-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t-8 border-[#ff2a2a]"
    >
      {/* Background Styling: Mesh Grid + Radial Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:45px_45px] opacity-40 z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-gradient-to-b from-red-950/20 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-72 h-72 rounded-full bg-[#ff2a2a]/2 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center flex flex-col items-center mb-24">
          <div className="inline-block border-2 border-[#ff2a2a] rounded-full px-6 py-2 text-xs md:text-sm text-white font-black shadow-sm bg-white/5 uppercase tracking-widest font-heading mb-6">
            My Professional Timeline
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-widest leading-none mb-4"
            style={{ textShadow: '1px 1px 0px #000, 2px 2px 0px #000, 3px 3px 0px #000, 4px 4px 0px #ff2a2a, 5px 5px 0px #000' }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline Content Block */}
        <div className="relative w-full flex flex-col gap-20">
          
          {/* Central Vertical Timeline Line (Dashed Base + Glowing Red fill) */}
          <div className="absolute left-[34px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 pointer-events-none z-0">
            {/* Base line */}
            <div className="w-full h-full bg-white/10 rounded-full" />
            
            {/* Scroll-animated bright red glow overlay line */}
            <motion.div 
              style={{ scaleY: glowLength }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#ff2a2a] via-[#ff4d4d] to-[#ff2a2a] origin-top rounded-full shadow-[0_0_12px_rgba(255,42,42,0.8)]"
            />
          </div>

          {/* Render Timeline Cards */}
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              role={exp.role}
              duration={exp.duration}
              organization={exp.organization}
              client={exp.client}
              techStack={exp.techStack}
              projects={exp.projects}
              descriptions={exp.descriptions}
              links={exp.links}
              isResearch={exp.isResearch}
              index={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
