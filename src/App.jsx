import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Terminal, BookOpen, User, Briefcase, Award, Code, Monitor } from 'lucide-react';
import Yusuf from './assets/yusuf-pixel.png';
import Project1Image from './assets/weather-forum.jpeg';
import Project2Image from './assets/nobetciEczane.png';
import Project5Image from './assets/ecommerce3D.png';
import Project6Image from './assets/Artificial-Intelligence-Supported-Fire-Detection-System.png';

const PixelPortfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/yusuf-osmanoglu-/' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/Yusuf-Osmanoglu' },
    { name: 'Medium', icon: <BookOpen size={20} />, url: 'https://medium.com/@YusufOsmanoglu' },
  ];
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", 
    "Node.js", "Express.js", "NestJS", "PostgreSQL", "Docker", "Supabase"
  ];

  return (
    <div className="min-h-screen bg-[#2b2b2b] font-mono text-[#e0e0e0] selection:bg-[#4caf50] selection:text-black pb-12">
      {/* Import Pixel Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        .font-pixel { font-family: 'VT323', monospace; }
        .pixel-border {
          box-shadow: -4px 0 0 0 black, 4px 0 0 0 black, 0 -4px 0 0 black, 0 4px 0 0 black;
          margin: 4px;
        }
        .retro-shadow {
          box-shadow: 4px 4px 0px 0px #000000;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
          background-size: 100% 4px;
          position: fixed;
          pointer-events: none;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 50;
        }
        /* Özel Pixel Art Efekti - Yüklenen fotoyu pixelleştirir */
        .pixel-art-converter {
          image-rendering: pixelated; 
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          filter: contrast(1.1) brightness(0.9) grayscale(0.2); /* Retro hava */
        }
      `}</style>

      {/* CRT Scanline Effect */}
      <div className="scanline"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-[#383838] border-b-4 border-black p-4 mb-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="font-pixel text-3xl text-[#4caf50] animate-pulse">
            YUSUF_OSMANOĞLU.EXE
          </div>
          <div className="flex gap-4 text-sm md:text-xl font-pixel">
            {['home', 'projects', 'resume'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase px-2 hover:text-[#4caf50] transition-colors ${activeTab === tab ? 'text-[#4caf50] underline decoration-wavy' : ''}`}
              >
                [{tab}]
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="space-y-12 animate-in fade-in zoom-in duration-300">
            {/* Hero Section */}
            <section className="bg-[#e0e0e0] text-black p-8 border-4 border-black retro-shadow relative">
              <div className="absolute -top-3 -right-3 bg-[#ff5252] border-2 border-black w-6 h-6 flex items-center justify-center text-white text-xs hover:bg-red-600 cursor-pointer">X</div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-[#383838] border-4 border-black flex items-center justify-center overflow-hidden relative group">
                  {/* Avatar Image */}
                  {/* ÖNEMLİ: Kendi fotoğrafınızı kullanmak için aşağıdaki src kısmını kendi dosya yolunuzla değiştirin (örn: src="/benim-fotom.jpg") */}
                  {/* En iyi pixel sonucu için fotoğrafınızı 64x64 veya 128x128 boyutunda yüklemeniz önerilir. */}
                  <img 
                    src={Yusuf}
                    alt="Yusuf Pixel Avatar" 
                    className="w-full h-full object-cover pixel-art-converter"
                  />
                  
                  {/* Hover ipucu */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs text-center p-2 font-pixel transition-opacity">
                    SRC GÜNCELLE: /public/me.png
                  </div>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h1 className="font-pixel text-5xl md:text-7xl leading-none">YUSUF OSMANOĞLU</h1>
                  <div className="font-pixel text-2xl md:text-3xl text-[#383838] h-8 flex items-center justify-center md:justify-start gap-2">
                    <Terminal size={24} />
                    <span>{typedText}</span><span className="animate-ping">_</span>
                  </div>
                  <p className="font-sans text-sm md:text-base max-w-lg mt-4 leading-relaxed font-bold">
                    I develop user-friendly, high-performance web applications using modern web technologies such as React.js and Node.js.
                  </p>
                  
                  <div className="flex gap-4 justify-center md:justify-start mt-6 pt-4 border-t-2 border-black border-dashed">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 border-2 border-black hover:bg-[#4caf50] hover:text-white transition-all retro-shadow bg-white text-black"
                        title={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Marquee Style */}
            <section className="border-4 border-[#4caf50] bg-black p-6 retro-shadow">
              <h2 className="font-pixel text-3xl mb-4 text-[#4caf50] border-b-2 border-[#4caf50] border-dashed inline-block">
                SKILLS:
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="font-pixel text-xl px-3 py-1 bg-[#383838] border-2 border-[#808080] hover:border-[#4caf50] hover:text-[#4caf50] cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

             {/* Contact Info Compact */}
             <section className="flex flex-col md:flex-row gap-4">
               <div className="flex-1 bg-[#383838] border-4 border-black p-4 flex items-center gap-4 retro-shadow">
                 <div className="bg-[#4caf50] p-2 border-2 border-black text-black"><Mail /></div>
                 <div>
                   <div className="font-pixel text-xl text-[#a0a0a0]">EMAIL</div>
                   <div className="text-sm font-bold">yusufosmanoglu2003@outlook.com</div>
                 </div>
               </div>
               <div className="flex-1 bg-[#383838] border-4 border-black p-4 flex items-center gap-4 retro-shadow">
                 <div className="bg-[#4caf50] p-2 border-2 border-black text-black"><MapPin /></div>
                 <div>
                   <div className="font-pixel text-xl text-[#a0a0a0]">LOCATION</div>
                   <div className="text-sm font-bold">İstanbul, Beşiktaş</div>
                 </div>
               </div>
             </section>
          </div>
        )}

  {/* PROJECTS TAB */}
  {activeTab === 'projects' && (
          <div className="space-y-8 animate-in slide-in-from-right duration-300">
            <h2 className="font-pixel text-4xl text-center text-[#ffeb3b] mb-8">
              &lt;PROJECTS /&gt;
            </h2>

            {/* Project 5: Placeholder */}
            <div
              className="bg-[#e0e0e0] text-black border-4 border-black retro-shadow p-0 overflow-hidden group cursor-pointer"
              role="button"
              tabIndex={0}
              title="Open Project 5 on GitHub"
              onClick={() => window.open('https://havadankadire.com', '_blank')}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://github.com/Yusuf-Osmanoglu', '_blank'); }}
            >
              <div className="bg-[#383838] p-2 border-b-4 border-black flex justify-between items-center">
                <span className="font-pixel text-xl text-white"> havadankadire.com</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="font-pixel text-3xl font-bold uppercase">Weather Forum</h3>
                    <p className="font-bold text-sm">Role: Full Stack</p>
                    <p className="text-sm border-l-4 border-[#4caf50] pl-3 py-1">
                      As a freelance full-stack developer on this project, I developed a dynamic weather platform that displays weather data from across Turkey, allows users to share city-based comments and media, and enables admin/moderator announcements to be published.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      {['TypeScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize'].map(tag => (
                        <span key={tag} className="bg-black text-white px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 min-h-[150px] p-3">
                    <div className="w-full h-full max-h-[220px] flex items-center justify-center bg-white/60 border-2 border-black pixel-border retro-shadow p-1">
                      <span className="font-pixel text-gray-500"><img src={Project1Image} alt="" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Placeholder */}
            <div
              className="bg-[#e0e0e0] text-black border-4 border-black retro-shadow p-0 overflow-hidden group cursor-pointer"
              role="button"
              tabIndex={0}
              title="Open Project 3 on GitHub"
              onClick={() => window.open('https://acil-nobetci-eczane.vercel.app', '_blank')}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://acil-nobetci-eczane.vercel.app', '_blank'); }}
            >
              <div className="bg-[#383838] p-2 border-b-4 border-black flex justify-between items-center">
                <span className="font-pixel text-xl text-white">acil-nobetci-eczane.vercel.app</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="font-pixel text-3xl font-bold uppercase">Pharmacy on Duty</h3>
                    <p className="font-bold text-sm">Role: Front/Full Stack</p>
                    <p className="text-sm border-l-4 border-blue-600 pl-3 py-1">
                      A web application that allows users to quickly find the nearest on-duty pharmacies based on their location
                      Real-time data updates with current on-duty pharmacy information
                      Easy to use with a user-friendly interface
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      {['Next.js', 'Node.js', 'Tailwind CSS', 'API'].map(tag => (
                        <span key={tag} className="bg-black text-white px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 min-h-[150px] p-3">
                    <div className="w-full h-full max-h-[220px] flex items-center justify-center bg-white/60 border-2 border-black pixel-border retro-shadow p-1">
                      <span className="font-pixel text-gray-500"><img src={Project2Image} alt="" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 1: Rooki Chess */}
            <div
              className="bg-[#e0e0e0] text-black border-4 border-black retro-shadow p-0 overflow-hidden group cursor-pointer"
              role="button"
              tabIndex={0}
              title="Open Project 1 on GitHub"
              onClick={() => window.open('https://github.com/Yusuf-Osmanoglu/Yusuf-Osmanoglu-Seesaw-', '_blank')}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://github.com/Yusuf-Osmanoglu/Yusuf-Osmanoglu-Seesaw-', '_blank'); }}
            >
              <div className="bg-[#383838] p-2 border-b-4 border-black flex justify-between items-center">
                <span className="font-pixel text-xl text-white">Yusuf-Osmanoglu-Seesaw</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="font-pixel text-3xl font-bold uppercase">Seesaw Simulation</h3>
                    <p className="font-bold text-sm">Full Stack Developer</p>
                    <p className="text-sm border-l-4 border-[#4caf50] pl-3 py-1">
                      This project is an interactive, fully responsive web-based simulation demonstrating the physics of torque and balance on a seesaw. Built entirely with Pure JavaScript (Vanilla JS), HTML, and CSS, it allows users to visually experiment with weight distribution and equilibrium on both desktop and mobile devices.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      {['JavaScript', 'HTML', 'CSS'].map(tag => (
                        <span key={tag} className="bg-black text-white px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 min-h-[150px] p-3">
                    <div className="w-full h-full max-h-[220px] flex items-center justify-center bg-white/60 border-2 border-black pixel-border retro-shadow p-1">
                      <span className="font-pixel text-gray-500">(Photo Will Be Added Soon)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Kazancı Holding */}
            <div
              className="bg-[#e0e0e0] text-black border-4 border-black retro-shadow p-0 overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              title="Open Project 2 on GitHub"
              onClick={() => window.open('https://github.com/Yusuf-Osmanoglu/Kafe-Menu', '_blank')}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://github.com/Yusuf-Osmanoglu/Kafe-Menu', '_blank'); }}
            >
              <div className="bg-[#383838] p-2 border-b-4 border-black flex justify-between items-center">
                <span className="font-pixel text-xl text-white">Kafe-Menu</span>
                 <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></div>
                </div>
              </div>
              <div className="p-6">
                 <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="font-pixel text-3xl font-bold uppercase">Kafe Menu</h3>
                    <p className="font-bold text-sm">Front End Developer</p>
                    <p className="text-sm border-l-4 border-blue-600 pl-3 py-1">
                      A mobile-friendly Next.js application that allows you to present your cafe/restaurant menu to customers via QR code, with content management via Google Sheets.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      {['TypeScript', 'Next.js', 'API'].map(tag => (
                        <span key={tag} className="bg-black text-white px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                   <div className="flex-1 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 min-h-[150px] p-3">
                    <div className="w-full h-full max-h-[220px] flex items-center justify-center bg-white/60 border-2 border-black pixel-border retro-shadow p-1">
                      <span className="font-pixel text-gray-500">(Photo Will Be Added Soon)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 6: Placeholder */}
                <div
                  className="bg-[#e0e0e0] text-black border-4 border-black retro-shadow p-0 overflow-hidden group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  title="Open Project 6 on GitHub"
                  onClick={() => window.open('https://github.com/Yusuf-Osmanoglu/ecommerce3D', '_blank')}
                  onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://github.com/Yusuf-Osmanoglu/ecommerce3D', '_blank'); }}
                >
                  <div className="bg-[#383838] p-2 border-b-4 border-black flex justify-between items-center">
                    <span className="font-pixel text-xl text-white">ecommerce3D</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 space-y-4">
                        <h3 className="font-pixel text-3xl font-bold uppercase">3D E-commerce</h3>
                        <p className="font-bold text-sm">Role: Frontend / UI</p>
                        <p className="text-sm border-l-4 border-[#4caf50] pl-3 py-1">
                          My new project for those who want to bring 3D models to life on the web: A 3D Model Viewer Component with React and Three.js!
                          This prototype project provides a starting point that will allow you to easily integrate .glb extension 3D models into your websites, especially in the field of e-commerce or product visualization.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-bold">
                          {['React.js', 'Tailwind CSS', 'Three.js', 'React Three Fiber'].map(tag => (
                            <span key={tag} className="bg-black text-white px-2 py-1">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 min-h-[150px] p-3">
                        <div className="w-full h-full max-h-[220px] flex items-center justify-center bg-white/60 border-2 border-black pixel-border retro-shadow p-1">
                          <span className="font-pixel text-gray-500"><img src={Project5Image} alt="" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Project 4: Placeholder */}
            <div
              className="bg-[#e0e0e0] text-black border-4 border-black retro-shadow p-0 overflow-hidden group cursor-pointer"
              role="button"
              tabIndex={0}
              title="Open Project 4 on GitHub"
              onClick={() => window.open('https://medium.com/@YusufOsmanoglu/yapay-zeka-destekli-erken-yangın-tespit-sistemi-de7fa291b745', '_blank')}
              onKeyDown={(e) => { if (e.key === 'Enter') window.open('https://medium.com/@YusufOsmanoglu/yapay-zeka-destekli-erken-yangın-tespit-sistemi-de7fa291b745', '_blank'); }}
            >
              <div className="bg-[#383838] p-2 border-b-4 border-black flex justify-between items-center">
                <span className="font-pixel text-xl text-white">Artificial-Intelligence-Supported-Fire-Detection-System</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full border border-black"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="font-pixel text-3xl font-bold uppercase">Artificial Intelligence Supported Fire Detection System</h3>
                    <p className="font-bold text-sm">Role: Frontend</p>
                    <p className="text-sm border-l-4 border-blue-600 pl-3 py-1">
                      I'm Taking Action Against Forest Fires with Technology!
                      I've detailed the project I've been working on for a long time on Medium:
                      “Fire Detective: Satellite-Based Artificial Intelligence-Powered Fire Detection System”
                      What is the Project Aiming to Achieve?
                      To minimize losses to nature and human life by detecting forest fires early.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      {['React', 'Tailwind', 'Machine Learning'].map(tag => (
                        <span key={tag} className="bg-black text-white px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                   <div className="flex-1 flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 min-h-[150px] p-3">
                    <div className="w-full h-full max-h-[220px] flex items-center justify-center bg-white/60 border-2 border-black pixel-border retro-shadow p-1">
                      <span className="font-pixel text-gray-500"><img src={Project6Image} alt="" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
              </div>
            )}

        {/* RESUME TAB */}
        {activeTab === 'resume' && (
          <div className="animate-in slide-in-from-bottom duration-300">
             <div className="bg-[#e0e0e0] text-black border-4 border-black retro-shadow p-8 relative">
                {/* Paper decorative holes */}
                <div className="absolute left-4 top-0 bottom-0 w-8 border-r-2 border-dashed border-gray-400 flex flex-col justify-evenly py-4">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 rounded-full bg-[#2b2b2b] mx-auto"></div>)}
                </div>

                <div className="pl-12">
                   <header className="border-b-4 border-black pb-6 mb-6">
                      <h2 className="font-pixel text-4xl">RESUME_V1.0</h2>
                      <p className="font-bold mt-2 text-gray-600">Generated by System</p>
                   </header>

                   <div className="space-y-8">
                      {/* Experience */}
                      <section>
                         <h3 className="font-pixel text-2xl bg-black text-white inline-block px-2 mb-4">EXPERIENCE</h3>
                         <div className="space-y-6">
                            <div className="relative border-l-4 border-black pl-4">
                               <div className="absolute -left-[10px] top-0 w-4 h-4 bg-[#ff5252] border-2 border-black"></div>
                               <h4 className="font-bold text-xl">Rooki Chess</h4>
                               <div className="text-sm font-bold text-gray-600 mb-2">Full Stack Developer</div>
                               <ul className="list-disc pl-4 text-sm space-y-1">
                                  <li>Technologies: Next.js, TypeScript, Tailwind CSS, Node.js, NestJs, PostgreSQL, Supabase,
                                    Docker</li>
                                  <li>Frontend: Using Next.js and TypeScript, I developed the frontend for a chess-themed
                                    children's game. During this process, I implemented various features such as leaderboards,
                                    loading pages, badge achievements, notification panels, a success page, a chat page, and a
                                    store page.</li>
                                  <li>Backend: I developed RESTful APIs using NestJS, PostgreSQL, and Supabase in a
                                    microservices architecture to manage authentication, announcements, comments, and user
                                    uploads. In this context, I created APIs and microservices for the Game Pass system and
                                    similar systems.</li>
                                  <li>I created images for microservice architecture applications using Docker and contributed to
                                    the testing and deployment processes by managing their containers.</li>
                               </ul>
                            </div>
                            <div className="relative border-l-4 border-black pl-4">
                               <div className="absolute -left-[10px] top-0 w-4 h-4 bg-[#ff5252] border-2 border-black"></div>
                               <h4 className="font-bold text-xl">Kazancı Holding</h4>
                               <div className="text-sm font-bold text-gray-600 mb-2">Front End Developer</div>
                               <ul className="list-disc pl-4 text-sm space-y-1">
                                  <li>On Kazancı Holding's e-commerce site, I developed critical components such as “cart
                                    module” and “checkout page” using “React.js”. I added form validation and dynamic data
                                    updates for a user-friendly experience. I increased page performance with optimized API
                                    integrations
                                  </li>
                                  <li>I supported data visualization processes by developing a “dashboard interface” integrated
                                    into the company's SAP system. I designed components that automate workflows using
                                    “JavaScript”.
                                  </li>
                               </ul>
                            </div>
                         </div>
                      </section>

                      {/* Education */}
                      <section>
                         <h3 className="font-pixel text-2xl bg-black text-white inline-block px-2 mb-4">EDUCATION</h3>
                         <div className="grid md:grid-cols-2 gap-4">
                            <div className="border-2 border-black p-3 bg-white">
                               <div className="font-bold">Istanbul University</div>
                               <div className="text-xs text-gray-600">Management Information Systems</div>
                               <div className="text-xs mt-1">2025 - 2028</div>
                            </div>
                            <div className="border-2 border-black p-3 bg-white">
                               <div className="font-bold">Istanbul Topkapi University</div>
                               <div className="text-xs text-gray-600">Computer Programming</div>
                               <div className="text-xs mt-1">GPA: 2.8 | 2022 - 2024</div>
                            </div>
                         </div>
                      </section>

                      {/* Certifications */}
                       <section>
                         <h3 className="font-pixel text-2xl bg-black text-white inline-block px-2 mb-4">CERTIFICATES</h3>
                         <div className="flex flex-wrap gap-2 text-sm font-bold">
                            <span className="border-b-2 border-black">Patika (Frontend & Backend)</span>
                            <span className="border-b-2 border-black">Istanbul Tech (Cloud Workshop)</span>
                         </div>
                      </section>
                   </div>
                </div>
             </div>
          </div>
        )}

      </main>

      <footer className="fixed bottom-0 w-full bg-[#383838] border-t-4 border-black p-2 text-center text-xs font-pixel z-40">
        <p>SYSTEM STATUS: ONLINE | © 2025 YUSUF OSMANOĞLU</p>
      </footer>
    </div>
  );
};

export default PixelPortfolio;