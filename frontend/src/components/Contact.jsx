import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleFocus = (field) => setFocusedInput(field);
  const handleBlur = () => setFocusedInput(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/PRNCE1204",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tandelprince1204/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="contact" 
      className="bg-[#050505] w-full min-h-screen relative overflow-hidden flex items-center py-32 px-6 md:px-12 border-t-8 border-black font-sans"
    >
      {/* Abstract Background Artwork */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:50px_50px] opacity-45 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff2a2a]/3 blur-[140px] pointer-events-none" />
      
      {/* Decorative Grid Line watermark */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none select-none z-0">
        <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
          <path d="M10 50 h80 M50 10 v80" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Heading & Contact info (5 cols) */}
          <div data-aos="fade-right" className="lg:col-span-5 flex flex-col items-start">
            
            <div className="inline-block border-2 border-[#ff2a2a] rounded-full px-5 py-1.5 text-xs text-white font-black shadow-sm bg-white/5 uppercase tracking-widest font-heading mb-6">
              Get in Touch
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tight uppercase mb-6">
              Let's create <br />
              something <br />
              <span className="text-[#ff2a2a]" style={{ textShadow: '0 0 20px rgba(255,42,42,0.2)' }}>extraordinary.</span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base font-semibold leading-relaxed max-w-sm mb-10">
              Have an idea, publication feedback, or full-stack opportunity? Drop a message, and I'll respond as soon as possible.
            </p>



            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2a2a] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#ff2a2a] hover:shadow-[0_4px_15px_rgba(255,42,42,0.4)] transition-all duration-350"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Right Column: Modern High-Impact Form Card (7 cols) */}
          <div 
            data-aos="fade-left"
            className="lg:col-span-7 w-full bg-zinc-900/40 border-2 border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative"
          >
            {/* Soft decorative glow behind the form card */}
            <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-[#ff2a2a]/5 blur-3xl pointer-events-none" />

            <form className="space-y-8 w-full">
              
              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* First Name */}
                <div className="relative flex flex-col">
                  <label 
                    htmlFor="firstName" 
                    className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                      focusedInput === 'firstName' ? 'text-[#ff2a2a]' : 'text-zinc-400'
                    }`}
                  >
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                    placeholder="Prince" 
                    className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-600 font-semibold"
                  />
                </div>

                {/* Last Name */}
                <div className="relative flex flex-col">
                  <label 
                    htmlFor="lastName" 
                    className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                      focusedInput === 'lastName' ? 'text-[#ff2a2a]' : 'text-zinc-400'
                    }`}
                  >
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                    placeholder="Tandel" 
                    className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-600 font-semibold"
                  />
                </div>

              </div>

              {/* Email */}
              <div className="relative flex flex-col">
                <label 
                  htmlFor="email" 
                  className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                    focusedInput === 'email' ? 'text-[#ff2a2a]' : 'text-zinc-400'
                  }`}
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  placeholder="tandelprince2006@gmail.com" 
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-600 font-semibold"
                />
              </div>

              {/* Message */}
              <div className="relative flex flex-col">
                <label 
                  htmlFor="message" 
                  className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                    focusedInput === 'message' ? 'text-[#ff2a2a]' : 'text-zinc-400'
                  }`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  placeholder="How can I help you today?" 
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-600 font-semibold resize-none"
                ></textarea>
              </div>

              {/* Permission Checkbox */}
              <div className="flex items-start gap-3 text-xs text-zinc-400 font-medium">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[#ff2a2a] focus:ring-[#ff2a2a] focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "#ff2a2a" }}
                />
                <label htmlFor="permission" className="cursor-pointer leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Submission Button */}
              <button 
                type="submit" 
                className="w-full px-8 py-4 rounded-xl bg-[#ff2a2a] hover:bg-white text-white hover:text-black font-black uppercase tracking-wider shadow-[0_4px_20px_rgba(255,42,42,0.3)] hover:shadow-none transition-all duration-350 flex items-center justify-center gap-3 group"
              >
                Send Message
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
