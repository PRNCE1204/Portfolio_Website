import React, { useEffect, useRef } from 'react';

const SnowflakeCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const handleResize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const numFlakes = 100;
    const flakes = Array.from({ length: numFlakes }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      vy: Math.random() * 1.2 + 0.4,
      vx: Math.random() * 0.6 - 0.3
    }));
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.beginPath();
      
      for (let i = 0; i < numFlakes; i++) {
        const f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        
        f.y += f.vy;
        f.x += f.vx;
        
        if (f.y > canvas.height) {
          flakes[i] = {
            x: Math.random() * canvas.width,
            y: -10,
            r: f.r,
            vy: f.vy,
            vx: f.vx
          };
        }
        if (f.x > canvas.width || f.x < 0) {
          f.x = Math.random() * canvas.width;
        }
      }
      
      ctx.fill();
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 w-full h-full" />;
};

const CornerSnowmanLeft = () => {
  return (
    <svg viewBox="0 0 160 220" className="w-32 sm:w-48 md:w-64 lg:w-72 h-auto drop-shadow-2xl relative z-20 transform hover:scale-105 transition-all duration-300">
      {/* Stick Arm Left */}
      <path 
        d="M 55 130 L 15 110 M 35 120 L 20 125 M 35 120 L 28 110" 
        stroke="#4a2c11" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Stick Arm Right */}
      <path 
        d="M 105 130 L 145 95 M 125 110 L 140 115 M 125 110 L 132 95" 
        stroke="#4a2c11" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Base snowball */}
      <circle cx="80" cy="175" r="35" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M 52 190 Q 80 205 108 190" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
      
      {/* Middle snowball */}
      <circle cx="80" cy="120" r="26" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M 58 131 Q 80 142 102 131" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
      
      {/* Head snowball */}
      <circle cx="80" cy="72" r="18" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
      
      {/* Eyes & smile */}
      <circle cx="73" cy="70" r="2" fill="#1e293b" />
      <circle cx="87" cy="70" r="2" fill="#1e293b" />
      <path d="M 73 80 Q 80 86 87 80" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cheek */}
      <circle cx="68" cy="77" r="2.5" fill="#fda4af" opacity="0.8" />
      {/* Nose */}
      <polygon points="78,74 92,76 78,79" fill="#f97316" />

      {/* Buttons */}
      <circle cx="80" cy="110" r="3" fill="#1e293b" />
      <circle cx="80" cy="122" r="3" fill="#1e293b" />
      <circle cx="80" cy="134" r="3" fill="#1e293b" />

      {/* Scarf */}
      <path d="M 64 88 C 64 88 74 94 80 94 C 86 94 96 88 96 88 C 99 87 99 92 95 93 C 89 95 83 96 80 96 C 77 96 71 95 65 93 C 61 92 61 87 64 88 Z" fill="#ff2a2a" stroke="#b91c1c" strokeWidth="1" />
      <path d="M 78 94 L 84 115 L 75 115 Z" fill="#b91c1c" />

      {/* Santa Hat */}
      <path d="M 64 60 C 64 60 74 48 80 48 C 86 48 96 60 96 60 Z" fill="#ff2a2a" />
      <path d="M 92 57 Q 105 62 102 68" fill="none" stroke="#ff2a2a" strokeWidth="6" strokeLinecap="round" />
      <circle cx="103" cy="69" r="4.5" fill="white" /> {/* Puffball */}
      <rect x="61" y="57" width="38" height="6" rx="3" fill="white" /> {/* White hat base */}
    </svg>
  );
};

const CornerSnowmanRight = () => {
  return (
    <svg viewBox="0 0 160 220" className="w-32 sm:w-48 md:w-64 lg:w-72 h-auto drop-shadow-2xl relative z-20 transform hover:scale-105 transition-all duration-300">
      {/* Stick Arm Left */}
      <path 
        d="M 55 130 L 15 95 M 35 110 L 20 115 M 35 110 L 28 95" 
        stroke="#4a2c11" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Stick Arm Right */}
      <path 
        d="M 105 130 L 145 110 M 125 120 L 140 125 M 125 120 L 132 110" 
        stroke="#4a2c11" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Base snowball */}
      <circle cx="80" cy="175" r="35" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M 52 190 Q 80 205 108 190" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Middle snowball */}
      <circle cx="80" cy="120" r="26" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M 58 131 Q 80 142 102 131" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Head snowball */}
      <circle cx="80" cy="72" r="18" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
      
      {/* Eyes & smile */}
      <circle cx="73" cy="70" r="2" fill="#1e293b" />
      <circle cx="87" cy="70" r="2" fill="#1e293b" />
      <path d="M 73 80 Q 80 86 87 80" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cheek */}
      <circle cx="92" cy="77" r="2.5" fill="#fda4af" opacity="0.8" />
      {/* Nose */}
      <polygon points="82,74 68,76 82,79" fill="#f97316" />

      {/* Buttons */}
      <circle cx="80" cy="110" r="3" fill="#1e293b" />
      <circle cx="80" cy="122" r="3" fill="#1e293b" />
      <circle cx="80" cy="134" r="3" fill="#1e293b" />

      {/* Scarf */}
      <path d="M 64 88 C 64 88 74 94 80 94 C 86 94 96 88 96 88 C 99 87 99 92 95 93 C 89 95 83 96 80 96 C 77 96 71 95 65 93 C 61 92 61 87 64 88 Z" fill="#ff2a2a" stroke="#b91c1c" strokeWidth="1" />
      <path d="M 82 94 L 76 115 L 85 115 Z" fill="#b91c1c" />

      {/* Santa Hat */}
      <path d="M 64 60 C 64 60 74 48 80 48 C 86 48 96 60 96 60 Z" fill="#ff2a2a" />
      <path d="M 68 57 Q 55 62 58 68" fill="none" stroke="#ff2a2a" strokeWidth="6" strokeLinecap="round" />
      <circle cx="57" cy="69" r="4.5" fill="white" /> {/* Puffball */}
      <rect x="61" y="57" width="38" height="6" rx="3" fill="white" /> {/* White hat base */}
    </svg>
  );
};

const logoMap = {
  // Languages
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  
  // Frontend
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Redux Toolkit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  
  // Backend & DB
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  
  // Real-time
  "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  "WebSockets": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/socketdotio.svg",
  "JWT Auth": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/jsonwebtokens.svg",
  "OAuth 2.0": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/auth0.svg",
  "Razorpay API": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/razorpay.svg",
  
  // Tools
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "Google Colab": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/googlecolab.svg",
  "Kaggle": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/kaggle.svg",
  "Overleaf": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/overleaf.svg",
  "Vercel": "https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/vercel.svg"
};

const Skills = () => {
  const allSkills = [
    "C", "C++", "Python", "JavaScript",
    "React.js", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3",
    "Node.js", "Express.js", "MongoDB",
    "Socket.io", "WebSockets", "JWT Auth", "OAuth 2.0", "Razorpay API",
    "Git", "GitHub", "VS Code", "Google Colab", "Kaggle", "Overleaf", "Vercel"
  ];

  return (
    <section 
      id="skills"
      className="relative bg-red-700 py-24 pb-48 md:pb-64 px-6 md:px-12 w-full overflow-hidden text-white border-t-8 border-black"
    >
      {/* Canvas Snowfall overlay */}
      <SnowflakeCanvas />

      {/* Hanging Snowflake Ornaments */}
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none z-10 select-none overflow-hidden h-40">
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="w-full h-full">
          {/* Left hanging ornaments */}
          <line x1="50" y1="0" x2="50" y2="40" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <g transform="translate(50, 50) scale(0.6)" fill="none" stroke="white" strokeWidth="3">
            <circle cx="0" cy="0" r="3" fill="white" />
            <path d="M 0 -20 L 0 20 M -20 0 L 20 0 M -14 -14 L 14 14 M -14 14 L 14 -14" />
            <path d="M -5 -10 L 0 -15 L 5 -10 M -5 10 L 0 15 L 5 10 M -10 -5 L -15 0 L -10 5 M 10 -5 L 15 0 L 10 5" />
          </g>

          <line x1="120" y1="0" x2="120" y2="70" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <g transform="translate(120, 82) scale(0.8)" fill="none" stroke="white" strokeWidth="3">
            <circle cx="0" cy="0" r="3" fill="white" />
            <path d="M 0 -20 L 0 20 M -20 0 L 20 0 M -14 -14 L 14 14 M -14 14 L 14 -14" />
            <path d="M -5 -10 L 0 -15 L 5 -10 M -5 10 L 0 15 L 5 10 M -10 -5 L -15 0 L -10 5 M 10 -5 L 15 0 L 10 5" />
          </g>

          <line x1="200" y1="0" x2="200" y2="30" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <g transform="translate(200, 40) scale(0.5)" fill="none" stroke="white" strokeWidth="3">
            <circle cx="0" cy="0" r="3" fill="white" />
            <path d="M 0 -20 L 0 20 M -20 0 L 20 0 M -14 -14 L 14 14 M -14 14 L 14 -14" />
            <path d="M -5 -10 L 0 -15 L 5 -10 M -5 10 L 0 15 L 5 10 M -10 -5 L -15 0 L -10 5 M 10 -5 L 15 0 L 10 5" />
          </g>

          {/* Right hanging ornaments */}
          <line x1="800" y1="0" x2="800" y2="30" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <g transform="translate(800, 40) scale(0.5)" fill="none" stroke="white" strokeWidth="3">
            <circle cx="0" cy="0" r="3" fill="white" />
            <path d="M 0 -20 L 0 20 M -20 0 L 20 0 M -14 -14 L 14 14 M -14 14 L 14 -14" />
            <path d="M -5 -10 L 0 -15 L 5 -10 M -5 10 L 0 15 L 5 10 M -10 -5 L -15 0 L -10 5 M 10 -5 L 15 0 L 10 5" />
          </g>

          <line x1="880" y1="0" x2="880" y2="70" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <g transform="translate(880, 82) scale(0.8)" fill="none" stroke="white" strokeWidth="3">
            <circle cx="0" cy="0" r="3" fill="white" />
            <path d="M 0 -20 L 0 20 M -20 0 L 20 0 M -14 -14 L 14 14 M -14 14 L 14 -14" />
            <path d="M -5 -10 L 0 -15 L 5 -10 M -5 10 L 0 15 L 5 10 M -10 -5 L -15 0 L -10 5 M 10 -5 L 15 0 L 10 5" />
          </g>

          <line x1="950" y1="0" x2="950" y2="40" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <g transform="translate(950, 50) scale(0.6)" fill="none" stroke="white" strokeWidth="3">
            <circle cx="0" cy="0" r="3" fill="white" />
            <path d="M 0 -20 L 0 20 M -20 0 L 20 0 M -14 -14 L 14 14 M -14 14 L 14 -14" />
            <path d="M -5 -10 L 0 -15 L 5 -10 M -5 10 L 0 15 L 5 10 M -10 -5 L -15 0 L -10 5 M 10 -5 L 15 0 L 10 5" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-20 flex flex-col items-center">
        
        {/* Centered Header Content */}
        <div data-aos="fade-up" className="text-center flex flex-col items-center mb-6">
          <div className="inline-block border-2 border-white/40 rounded-full px-6 py-2.5 text-sm md:text-base text-white font-black shadow-md bg-white/10 uppercase tracking-widest font-heading mb-6">
            Technical Stack
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-widest leading-none mb-6"
            style={{ textShadow: '1px 1px 0px #000, 2px 2px 0px #000, 3px 3px 0px #000, 4px 4px 0px #000, 5px 5px 0px #000' }}
          >
            My Skills
          </h2>
        </div>

        {/* Responsive Grid of Individual Mini Snowballs */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-10 gap-x-6 justify-items-center w-full -mt-4 px-4 max-w-4xl">
          {allSkills.map((skill, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 40}
              className="flex flex-col items-center cursor-pointer group text-center"
            >
              {/* Mini Snowball Container */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white bg-gradient-to-br from-white via-zinc-50 to-zinc-200 shadow-[0_10px_22px_rgba(0,0,0,0.3),inset_0_4px_12px_rgba(255,255,255,1),inset_0_-4px_12px_rgba(0,0,0,0.12)] flex items-center justify-center p-2 sm:p-3 transform group-hover:scale-115 group-hover:-translate-y-2 transition-all duration-350 relative z-10">
                {/* Gloss high shine inside the mini snowball */}
                <div className="absolute top-1 left-3 right-3 h-3 bg-white/50 rounded-full blur-[1px] pointer-events-none"></div>
                <div className="absolute bottom-1.5 right-3 w-3 h-3 bg-white/20 rounded-full blur-[1.5px] pointer-events-none"></div>
                
                {logoMap[skill] ? (
                  <img 
                    src={logoMap[skill]} 
                    alt={skill} 
                    className="w-full h-full object-contain filter group-hover:drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <span className="text-[10px] sm:text-xs font-black text-zinc-700">{skill.substring(0, 2)}</span>
                )}
              </div>
              
              {/* Skill Name Centered Below Snowball */}
              <span className="text-[10px] sm:text-xs font-heading font-black text-white mt-3 tracking-wide max-w-[72px] sm:max-w-[88px] leading-tight break-words group-hover:text-red-200 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                {skill}
              </span>
            </div>
          ))}
        </div>
        
      </div>

      {/* Bottom Snow Hill, Trees, Cozy House, and Deer Silhouettes */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 select-none overflow-hidden h-72 md:h-96">
        <svg viewBox="0 0 1000 240" preserveAspectRatio="none" className="w-full h-full">
          {/* Single Solid Snow Earth Ground */}
          <path d="M 0,165 Q 250,140 500,170 T 1000,150 L 1000,240 L 0,240 Z" fill="white" />

          {/* White Pine Tree on the Left (Shifted slightly to the right, firmly grounded) */}
          <g fill="white" transform="translate(195, 72) scale(0.8)">
            <polygon points="50,0 20,40 80,40" />
            <polygon points="50,20 10,65 90,65" />
            <polygon points="50,45 0,95 100,95" />
            <rect x="45" y="95" width="10" height="15" fill="white" />
          </g>

          {/* Cozy Cottage House (Adjusted down to embed fully inside the snow hill, leaving no red gap) */}
          <g fill="white" transform="translate(460, 109) scale(0.85)">
            {/* Chimney */}
            <rect x="25" y="10" width="8" height="20" />
            {/* Chimney Smoke */}
            <path d="M 29,8 Q 33,2 29,-4 Q 25,-10 29,-16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            {/* Roof */}
            <polygon points="50,20 10,45 90,45" />
            {/* House Base */}
            <rect x="18" y="45" width="64" height="40" />
            {/* Door (Cutout color matching background red-700) */}
            <rect x="42" y="60" width="16" height="25" fill="#c53030" />
            {/* Windows */}
            <rect x="28" y="55" width="10" height="10" fill="#c53030" />
            <rect x="62" y="55" width="10" height="10" fill="#c53030" />
          </g>

          {/* White Pine Trees on the Right (Lowered further to sit deeply in the snow) */}
          <g fill="white" transform="translate(590, 114) scale(0.6)">
            <polygon points="50,0 20,40 80,40" />
            <polygon points="50,20 10,65 90,65" />
            <polygon points="50,45 0,95 100,95" />
            <rect x="45" y="95" width="10" height="15" fill="white" />
          </g>
          
          <g fill="white" transform="translate(645, 93) scale(0.8)">
            <polygon points="50,0 20,40 80,40" />
            <polygon points="50,20 10,65 90,65" />
            <polygon points="50,45 0,95 100,95" />
            <rect x="45" y="95" width="10" height="15" fill="white" />
          </g>

          {/* Reindeer (Deer) Silhouettes */}
          {/* Left Deer (Perfectly grounded to touch the snow curve at y=122) */}
          <g fill="white" transform="translate(330, 122) scale(0.42)">
            <ellipse cx="60" cy="50" rx="25" ry="15" />
            <rect x="42" y="55" width="3" height="30" rx="1.5" />
            <rect x="52" y="55" width="3" height="30" rx="1.5" />
            <rect x="68" y="55" width="3" height="30" rx="1.5" />
            <rect x="76" y="55" width="3" height="30" rx="1.5" />
            <path d="M 75 42 L 90 15 L 98 22 L 80 50 Z" />
            <ellipse cx="96" cy="18" rx="10" ry="7" transform="rotate(-15 96 18)" />
            <path d="M 88 12 Q 82 2 86 8 Z" />
            <path d="M 94 12 Q 90 2 85 4 Q 82 2 76 6 M 92 10 Q 82 -6 88 -2" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 37 40 Q 32 32 39 44 Z" />
          </g>

          {/* Right Deer */}
          <g fill="white" transform="translate(730, 156) scale(0.35)">
            <ellipse cx="60" cy="50" rx="25" ry="15" />
            <rect x="42" y="55" width="3" height="30" rx="1.5" />
            <rect x="52" y="55" width="3" height="30" rx="1.5" />
            <rect x="68" y="55" width="3" height="30" rx="1.5" />
            <rect x="76" y="55" width="3" height="30" rx="1.5" />
            <path d="M 75 42 L 90 15 L 98 22 L 80 50 Z" />
            <ellipse cx="96" cy="18" rx="10" ry="7" transform="rotate(-15 96 18)" />
            <path d="M 88 12 Q 82 2 86 8 Z" />
            <path d="M 94 12 Q 90 2 85 4 Q 82 2 76 6 M 92 10 Q 82 -6 88 -2" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 37 40 Q 32 32 39 44 Z" />
          </g>
        </svg>
      </div>

      {/* Two Corner Waving Snowmen with Two Stick Hands */}
      <div className="absolute bottom-0 left-0 md:left-4 z-20">
        <CornerSnowmanLeft />
      </div>
      <div className="absolute bottom-0 right-0 md:right-4 z-20">
        <CornerSnowmanRight />
      </div>

    </section>
  );
};

export default Skills;
