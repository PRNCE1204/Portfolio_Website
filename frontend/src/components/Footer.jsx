import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [permissionChecked, setPermissionChecked] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields (First Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    if (!permissionChecked) {
      setStatus('error');
      setStatusMessage('Please check the permission box to submit your message.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        setPermissionChecked(false);

        // Auto-reset state back to 'idle' after 8 seconds
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 8000);
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage('Unable to reach the server. Please verify the backend is running and try again.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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

  const navLinks = [
    { label: "Home", url: "#" },
    { label: "About", url: "#about" },
    { label: "Skills", url: "#skills" },
    { label: "Experience", url: "#experience" },
    { label: "Projects", url: "#projects" },
    { label: "Contact", url: "#contact" }
  ];

  return (
    <footer 
      id="contact"
      className="bg-[#050505] text-[#d4d4d4] pt-32 pb-12 w-full relative overflow-hidden font-sans border-t-8 border-black bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:50px_50px]"
    >
      {/* Background styling elements */}
      <div className="absolute inset-0 bg-[#000]/20 z-0" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#ff2a2a]/2.5 blur-[150px] pointer-events-none" />

      {/* 1. Contact Form Segment */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column (5 cols) */}
          <div data-aos="fade-right" className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-block border-2 border-[#ff2a2a] rounded-full px-5 py-1.5 text-xs text-white font-black shadow-sm bg-white/5 uppercase tracking-widest font-heading mb-6">
              Get in Touch
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tight uppercase mb-6">
              Let's create <br />
              something <br />
              <span className="text-[#ff2a2a]" style={{ textShadow: '0 0 20px rgba(255,42,42,0.2)' }}>extraordinary.</span>
            </h2>

            <p className="text-zinc-355 text-sm md:text-base font-semibold leading-relaxed max-w-sm mb-10">
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
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2a2a] flex items-center justify-center text-zinc-355 hover:text-white hover:bg-[#ff2a2a] hover:shadow-[0_4px_15px_rgba(255,42,42,0.4)] transition-all duration-350"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols, shifted to far right of slot) */}
          <div 
            data-aos="fade-left"
            className="lg:col-span-7 w-full lg:max-w-[540px] lg:ml-auto bg-zinc-900/40 border-2 border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative min-h-[460px] flex flex-col justify-center"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center space-y-6 py-6">
                {/* Glowing checkmark circle */}
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] animate-pulse">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wider">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-sm font-semibold leading-relaxed px-2">
                    Thank you. Your email has been delivered successfully. Prince will respond shortly!
                  </p>
                </div>

                <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                  Form will auto-reset in a few seconds...
                </div>

                <button
                  onClick={() => {
                    setStatus('idle');
                    setStatusMessage('');
                  }}
                  className="px-6 py-3 rounded-xl bg-[#ff2a2a] hover:bg-white text-white hover:text-black font-black uppercase tracking-wider text-xs transition-all duration-350 shadow-[0_4px_15px_rgba(255,42,42,0.3)] hover:shadow-none"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  
                  {/* First Name */}
                  <div className="relative flex flex-col">
                    <label 
                      htmlFor="firstName" 
                      className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        focusedInput === 'firstName' ? 'text-[#ff2a2a]' : 'text-zinc-355'
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
                      className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-500 font-semibold"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative flex flex-col">
                    <label 
                      htmlFor="lastName" 
                      className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        focusedInput === 'lastName' ? 'text-[#ff2a2a]' : 'text-zinc-355'
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
                      className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-500 font-semibold"
                    />
                  </div>

                </div>

                {/* Email */}
                <div className="relative flex flex-col">
                  <label 
                    htmlFor="email" 
                    className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                      focusedInput === 'email' ? 'text-[#ff2a2a]' : 'text-zinc-355'
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
                    className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-500 font-semibold"
                  />
                </div>

                {/* Message */}
                <div className="relative flex flex-col">
                  <label 
                    htmlFor="message" 
                    className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors duration-300 ${
                      focusedInput === 'message' ? 'text-[#ff2a2a]' : 'text-zinc-355'
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
                    className="w-full bg-white/5 border border-white/10 focus:border-[#ff2a2a] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-1 focus:ring-[#ff2a2a] transition-all duration-300 placeholder-zinc-500 font-semibold resize-none"
                  ></textarea>
                </div>

                {/* Permission Checkbox */}
                <div className="flex items-start gap-3 text-xs text-zinc-355 font-medium">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    checked={permissionChecked}
                    onChange={(e) => setPermissionChecked(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[#ff2a2a] focus:ring-[#ff2a2a] focus:ring-offset-transparent cursor-pointer" 
                    style={{ accentColor: "#ff2a2a" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer leading-snug">
                    I give permission to contact me at this email address.
                  </label>
                </div>

                {/* Status Message Notification */}
                {statusMessage && (
                  <div className={`p-4 rounded-xl border backdrop-blur-md text-sm font-semibold transition-all duration-300 ${
                    status === 'success' 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                      : status === 'error'
                        ? 'bg-red-500/10 border-red-500/30 text-red-400'
                        : 'bg-white/5 border-white/10 text-zinc-300'
                  }`}>
                    <div className="flex items-center gap-2">
                      {status === 'success' ? (
                        <svg className="w-5 h-5 shrink-0 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                      )}
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}

                {/* Submission Button */}
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={`w-full px-8 py-4 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-3 group transition-all duration-350 ${
                    status === 'sending'
                      ? 'bg-[#ff2a2a]/50 text-white/50 cursor-not-allowed'
                      : 'bg-[#ff2a2a] hover:bg-white text-white hover:text-black shadow-[0_4px_20px_rgba(255,42,42,0.3)] hover:shadow-none'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      Sending message...
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 2. Full-Width Solid White Divider (Increased thickness to 3px) */}
      <div className="w-full h-[3px] bg-white relative z-10" />

      {/* 3. Bottom Footer Navigation & Watermark Segment */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-16 pb-12 flex flex-col gap-16">
        
        {/* Footer Navigation Segment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#" className="text-white text-3xl font-heading font-black tracking-tighter">
              Prince<span className="text-[#ff2a2a]">.</span>
            </a>
            <p className="text-zinc-400 text-sm font-semibold max-w-xs leading-relaxed">
              AI Engineer & Software Developer SDE. Building intelligent systems, full-stack applications, and research architectures.
            </p>
            {/* Contact Details */}
            <div className="flex flex-col gap-2 text-sm font-bold text-zinc-300">
              <a href="mailto:tandelprince2006@gmail.com" className="hover:text-[#ff2a2a] transition-colors duration-300 flex items-center gap-2.5">
                <span className="text-xs">✉️</span> tandelprince2006@gmail.com
              </a>
              <a href="tel:+918849819915" className="hover:text-[#ff2a2a] transition-colors duration-300 flex items-center gap-2.5">
                <span className="text-xs">📞</span> +91 8849819915
              </a>
            </div>
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-300 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open for full-time roles & research
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-sm md:text-base uppercase tracking-widest text-[#ff2a2a] font-black font-heading">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.url}
                    className="text-zinc-355 hover:text-white text-sm font-bold transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-4">
            <h4 className="text-sm md:text-base uppercase tracking-widest text-[#ff2a2a] font-black font-heading md:text-right w-full">
              Social Links
            </h4>
            <ul className="space-y-2 md:text-right w-full">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-355 hover:text-white text-sm font-bold transition-colors duration-300 relative group inline-block"
                  >
                    {social.name}
                    <span className="absolute -bottom-0.5 right-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle Segment: Giant Logo Watermark with Increased Brightness */}
        <div className="w-full flex justify-center items-center pb-2 border-b border-white/5 overflow-hidden select-none pointer-events-none">
          <h2 
            className="text-[7vw] leading-none font-heading font-black tracking-tighter uppercase text-white/5"
            style={{ 
              textShadow: '1px 1px 0px rgba(255,255,255,0.01)',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.06)'
            }}
          >
            prince tandel
          </h2>
        </div>

        {/* Bottom Segment: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-zinc-400 text-xs font-semibold font-mono text-center sm:text-left">
            &copy; {new Date().getFullYear()} Prince Tandel. Handcrafted with passion.
          </div>
          
          {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2a2a] text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white shadow-lg flex items-center justify-center transition-all duration-350 hover:scale-105 group"
            title="Back to Top"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
