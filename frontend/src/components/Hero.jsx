import React from 'react';
import mainMyself from '../assets/mainmyself.png';

const Hero = () => {

  return (
    <section id="home" className="relative w-full h-[95vh] md:h-[115vh] mt-20 md:mt-24 overflow-hidden bg-black">
      {/* Background Photo */}
      <img
        src={mainMyself}
        alt="Main Myself"
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-16 pt-24 md:pt-48 md:pb-0 md:px-8 flex flex-col items-start justify-end md:justify-start text-left w-full">

        {/* Left Side: Name and Roles */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Name */}
          <h1
            data-aos="fade-up"
            className="text-white text-5xl md:text-7xl font-heading font-black mb-3 tracking-tight uppercase"
          >
            TANDEL PRINCE
          </h1>

          {/* Roles */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-black text-sm md:text-lg font-heading font-bold tracking-widest uppercase drop-shadow-md"
          >
            AI Engineer & Software Developer Engineer
          </p>

          {/* Social Links Row */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center gap-4 mt-6 z-30"
          >
            {/* GitHub */}
            <a
              href="https://github.com/PRNCE1204"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-[#121212]/80 border border-white/10 text-zinc-400 hover:text-white hover:border-[#ff2a2a]/60 hover:bg-[#ff2a2a]/5 hover:shadow-[0_4px_20px_rgba(255,42,42,0.15)] flex items-center justify-center transition-all duration-300 hover:scale-105"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tandelprince1204/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-[#121212]/80 border border-white/10 text-zinc-400 hover:text-white hover:border-[#ff2a2a]/60 hover:bg-[#ff2a2a]/5 hover:shadow-[0_4px_20px_rgba(255,42,42,0.15)] flex items-center justify-center transition-all duration-300 hover:scale-105"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-black hover:text-white hover:bg-[#ff2a2a] border border-white hover:border-[#ff2a2a] font-black uppercase tracking-wider text-xs transition-all duration-350 hover:scale-105 shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_20px_rgba(255,42,42,0.4)]"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
