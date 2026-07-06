import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import mainMyself2 from '../assets/mainmyself2.png';

const About = () => {
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Dynamic quadratic curve that bends and stretches as the badge is dragged
  const lanyardPath = useTransform([dragX, dragY], ([x, y]) => {
    return `M 140 0 Q 140 ${64 + y / 2} ${140 + x} ${128 + y}`;
  });

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string (Stretching SVG) */}
            <svg 
              className="absolute -top-32 left-1/2 transform -translate-x-1/2 overflow-visible z-0 pointer-events-none"
              width="280" 
              height="160"
            >
              <motion.path
                d={lanyardPath}
                stroke="black"
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Lanyard clip (Moves with drag) */}
            <motion.div 
              style={{ x: dragX, y: dragY }}
              className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)] pointer-events-none"
            />
            
            {/* Badge Card (Elastic Spring Drag) */}
            <motion.div 
              drag
              style={{ x: dragX, y: dragY }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.6}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
              initial={{ rotate: -3 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              whileTap={{ cursor: 'grabbing' }}
              className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 cursor-grab select-none border-[12px] border-white"
            >
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={mainMyself2} 
                  alt="Profile" 
                  className="w-full h-full object-cover scale-125 pointer-events-none"
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-6xl font-heading font-black text-black tracking-tight mb-6">Hello!</h2>
          <div className="text-base md:text-xl font-medium mb-12 leading-relaxed max-w-3xl text-white/95">
            I'm <span className="bg-black text-white px-3 py-1 rounded-md text-lg md:text-xl font-heading font-black tracking-wide uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mx-1.5 inline-block transform -rotate-1">Prince Tandel</span>,
            an <span className="text-black font-extrabold">AI Engineer & Software Developer Engineer</span> and <span className="text-black font-extrabold">Computer Science undergraduate</span> at Nirma University, with a strong interest in building scalable web applications, AI-powered products, and real-time systems.
          </div>

          {/* Achievements Container */}
          <div className="mt-8 flex flex-col gap-6 w-full">
            <div className="self-start mb-4">
              <h3 
                className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-widest"
                style={{ textShadow: '1px 1px 0px #000, 2px 2px 0px #000, 3px 3px 0px #000, 4px 4px 0px #000, 5px 5px 0px #000' }}
              >
                Achievements
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Card 1 */}
              <div 
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative bg-white text-black p-5 pt-12 pb-12 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col items-center text-center border-[6px] border-white hover:scale-105 transition-all duration-300 min-h-[220px]"
              >
                {/* Top Wave SVG */}
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-10 pointer-events-none">
                  <path d="M 0 0 L 100 0 L 100 6 Q 60 6 50 13 Q 40 18 0 18 Z" fill="#ff2a2a" />
                  <path d="M 47 15 Q 60 6 100 6 L 100 12 Q 60 12 47 15 Z" fill="black" />
                </svg>

                {/* Content Icon */}
                <div className="p-2.5 rounded-full bg-black text-white shadow-md mb-4 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <p className="text-gray-800 text-xs md:text-sm font-bold leading-relaxed px-2 font-sans">
                  Presented research papers at 2 international conferences (IEEE VTC 2025, CITS 2025).
                </p>

                {/* Bottom Bar SVG */}
                <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-8 pointer-events-none">
                  <path d="M 8 3 L 92 3 C 94 3 94 6 92 6 L 8 6 Z" fill="black" />
                  <path d="M 0 8 L 100 8 L 100 12 L 0 12 Z" fill="#ff2a2a" />
                </svg>
              </div>

              {/* Card 2 */}
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative bg-white text-black p-5 pt-12 pb-12 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col items-center text-center border-[6px] border-white hover:scale-105 transition-all duration-300 min-h-[220px]"
              >
                {/* Top Wave SVG */}
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-10 pointer-events-none">
                  <path d="M 0 0 L 100 0 L 100 6 Q 60 6 50 13 Q 40 18 0 18 Z" fill="#ff2a2a" />
                  <path d="M 47 15 Q 60 6 100 6 L 100 12 Q 60 12 47 15 Z" fill="black" />
                </svg>

                {/* Content Icon */}
                <div className="p-2.5 rounded-full bg-black text-white shadow-md mb-4 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3-3h-15a3 3 0 0 1 3-3m9 6v-3.75m-9 3.75v-3.75m9 0h-9m9 0V9a4.5 4.5 0 1 0-9 0v6M9 9a3 3 0 0 1 6 0v6" />
                  </svg>
                </div>

                <p className="text-gray-800 text-xs md:text-sm font-bold leading-relaxed px-2 font-sans">
                  Selected for Smart India Hackathon (SIH) in 2024 & 2025; ranked among Top 25 of 80+ teams at institutional level.
                </p>

                {/* Bottom Bar SVG */}
                <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-8 pointer-events-none">
                  <path d="M 8 3 L 92 3 C 94 3 94 6 92 6 L 8 6 Z" fill="black" />
                  <path d="M 0 8 L 100 8 L 100 12 L 0 12 Z" fill="#ff2a2a" />
                </svg>
              </div>

              {/* Card 3 */}
              <div 
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative bg-white text-black p-5 pt-12 pb-12 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col items-center text-center border-[6px] border-white hover:scale-105 transition-all duration-300 min-h-[220px]"
              >
                {/* Top Wave SVG */}
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-10 pointer-events-none">
                  <path d="M 0 0 L 100 0 L 100 6 Q 60 6 50 13 Q 40 18 0 18 Z" fill="#ff2a2a" />
                  <path d="M 47 15 Q 60 6 100 6 L 100 12 Q 60 12 47 15 Z" fill="black" />
                </svg>

                {/* Content Icon */}
                <div className="p-2.5 rounded-full bg-black text-white shadow-md mb-4 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>

                <p className="text-gray-800 text-xs md:text-sm font-bold leading-relaxed px-2 font-sans">
                  Solved 500+ DSA problems on LeetCode and Codeforces. Secured Rank 451 in ACPC (Admission Committee for Professional Courses).
                </p>

                {/* Bottom Bar SVG */}
                <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-8 pointer-events-none">
                  <path d="M 8 3 L 92 3 C 94 3 94 6 92 6 L 8 6 Z" fill="black" />
                  <path d="M 0 8 L 100 8 L 100 12 L 0 12 Z" fill="#ff2a2a" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
