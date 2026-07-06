import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, children, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-85 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 md:p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-850'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-3 tracking-tight font-heading transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        <div className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-600'
        }`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="education"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1100px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white uppercase tracking-wider font-heading">
            My Education
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative font-heading">
            My academic timeline and milestones
            {/* Hand-drawn arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            A comprehensive look at my schooling, grades, and ongoing university education at Nirma University.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1100px] pointer-events-none z-0" 
          viewBox="0 0 1000 1100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 650,150 C 400,250 200,350 300,550 C 400,750 750,750 700,900" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
          />

          {/* Mask to reveal the dashed path based on scroll */}
          <mask id="path-mask">
            <motion.path 
              d="M 650,150 C 400,250 200,350 300,550 C 400,750 750,750 700,900" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          {/* The actual dashed line that gets revealed */}
          <path 
            d="M 650,150 C 400,250 200,350 300,550 C 400,750 750,750 700,900" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="black" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <TagCard 
            number="01"
            title="Class X Education"
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          >
            <div className="flex flex-col gap-1.5">
              <p><span className="font-bold">School:</span> Seth R.J.J. High School</p>
              <p><span className="font-bold">Marks:</span> 555 / 600 (92.50%)</p>
              <p><span className="font-bold">Rank:</span> 1st Rank in school class</p>
              <p><span className="font-bold">Passing Year:</span> May 2021</p>
            </div>
          </TagCard>

          <TagCard 
            number="02"
            title="Class XII - Science"
            className="md:absolute md:top-[380px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          >
            <div className="flex flex-col gap-1.5">
              <p><span className="font-bold">School:</span> Seth R.J.J. High School, Valsad</p>
              <p><span className="font-bold">Marks:</span> 561 / 650 (86.31%)</p>
              <p><span className="font-bold">Rank:</span> 2nd Rank in class</p>
              <p><span className="font-bold">ACPC Rank:</span> 451</p>
              <p><span className="font-bold">Passing Year:</span> March 2023</p>
            </div>
          </TagCard>

          <TagCard 
            number="03"
            title="Nirma University"
            className="md:absolute md:top-[680px] md:right-[5%] lg:right-[10%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          >
            <div className="flex flex-col gap-2 w-full">
              <p><span className="font-bold">Degree:</span> B.Tech in Computer Science</p>
              <p><span className="font-bold">Duration:</span> 2023 - 2027</p>
              
              <div className="border-t border-current/25 pt-3 mt-1 w-full overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="opacity-80 border-b border-current/15">
                      <th className="pb-1 font-bold">Semester</th>
                      <th className="pb-1 font-bold text-center">SGPA</th>
                      <th className="pb-1 font-bold text-right">CGPA</th>
                    </tr>
                  </thead>
                  <tbody className="font-semibold">
                    <tr><td className="py-1">Semester I</td><td className="py-1 text-center">9.29</td><td className="py-1 text-right">9.29</td></tr>
                    <tr className="opacity-90"><td className="py-1">Semester II</td><td className="py-1 text-center">9.50</td><td className="py-1 text-right">9.38</td></tr>
                    <tr><td className="py-1">Semester III</td><td className="py-1 text-center">8.71</td><td className="py-1 text-right">9.15</td></tr>
                    <tr className="opacity-90"><td className="py-1">Semester IV</td><td className="py-1 text-center">9.17</td><td className="py-1 text-right">9.15</td></tr>
                    <tr><td className="py-1">Semester V</td><td className="py-1 text-center">8.67</td><td className="py-1 text-right">9.04</td></tr>
                    <tr className="opacity-90"><td className="py-1">Semester VI</td><td className="py-1 text-center">9.00</td><td className="py-1 text-right">9.03</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TagCard>

          {/* Hand-drawn end text */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="600"
            className="hidden md:block absolute top-[980px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            Present Day
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
