import React, { useRef, useState } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  User,
  Calendar,
  BookOpen,
  Briefcase,
  Download,
  Send,
  Star,
  Users,
  Zap,
  ChevronDown
} from 'lucide-react';
import emailjs from '@emailjs/browser';

import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, EDUCATIONS, STATS, PROJECTS } from './data';
import SectionHeading from './components/SectionHeading';
import SkillBar from './components/SkillBar';
import TypingText from './components/TypingText';

const App: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',  // Replace with your Template ID
      form.current,
      'YOUR_PUBLIC_KEY'    // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert('Message sent! ✅');
      setSending(false);
      form.current?.reset();
    }, () => {
      alert('Error sending message 😢');
      setSending(false);
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen bg-[#121212] selection:bg-green-500 selection:text-black rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden scroll-smooth">

      {/* Decorative Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <nav className="sticky top-0 z-50 bg-[#121212]/80 backdrop-blur-md px-8 py-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          {/* LOGO / NAME LINK */}
          <a href="#hero" className="text-xl font-medium tracking-tight hover:text-green-500 transition-colors cursor-pointer">
            {PERSONAL_INFO.firstName}{' '}
            <span className="font-bold">{PERSONAL_INFO.lastName}</span>
          </a>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-green-500 transition-colors">About</a>
            <a href="#work" className="hover:text-green-500 transition-colors">Work</a>
            <a href="#experience" className="hover:text-green-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-green-500 transition-colors">Contact</a>
          </div>

          <button className="hidden md:block bg-white text-black text-xs font-black uppercase px-6 py-2 rounded-full hover:bg-green-500 transition-colors">
            Hire Me
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-16 pb-12 space-y-32">

        {/* HERO */}
        <section id="hero" className="relative mt-8 md:mt-12 mb-24 md:mb-32 flex justify-center items-center">
          <div className="w-full max-w-6xl relative flex flex-col lg:flex-row items-center justify-center">

            {/* IMAGE */}
            <div className="w-full lg:w-[65%] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl bg-[#1e1e1e]">
              <img
                src="images/image2.jpg"
                alt="Workspace"
                className="w-full h-[280px] sm:h-[400px] lg:h-[550px] object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="
              w-full lg:w-[65%]
              bg-[#1a1a1a]/95 backdrop-blur-sm
              p-6 sm:p-8 md:p-10 lg:p-12
              rounded-[24px] md:rounded-[32px]
              shadow-2xl z-10
              mt-[-60px] sm:mt-[-80px]
              lg:mt-0 lg:ml-[-15%] xl:ml-[-10%]
              border border-white/10
            ">
              <div className="flex flex-col gap-6">

                <div className="text-green-500 text-xs font-black uppercase tracking-[0.3em] bg-green-500/5 px-4 py-2 rounded-full w-fit border border-green-500/20">
                  <span className="text-white/70 mr-2">I build</span>
                  <TypingText text="modern web solutions!" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                      {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
                    </h1>
                    <p className="text-green-500 font-bold tracking-[0.25em] text-[10px] uppercase pt-2">
                      {PERSONAL_INFO.role}
                    </p>
                  </div>

                  <div className="flex gap-4 text-gray-400">
                    <a href={`https://github.com/${PERSONAL_INFO.github}`} className="hover:text-green-500"><Github size={20} /></a>
                    <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} className="hover:text-green-500"><Linkedin size={20} /></a>
                    <a href={`https://twitter.com/${PERSONAL_INFO.twitter}`} className="hover:text-green-500"><Twitter size={20} /></a>
                    <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} className="hover:text-green-500"><Instagram size={20} /></a>
                  </div>
                </div>

                <p className="text-gray-400">
                  Based in <span className="text-white font-semibold">{PERSONAL_INFO.location}</span>.
                  I craft <span className="text-white font-semibold">high-performance</span> digital products
                  that balance clean design with usability.
                </p>

                <div className="flex gap-4">
                  <a
                    href="/assets/myresume_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-7 py-3 bg-green-500 text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300"
                  >
                    <Download size={16} /> RESUME
                  </a>

                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 border border-white/30 text-white rounded-full font-bold hover:bg-white/10"
                  >
                    Contact
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        {/* About Section */}
        <section id="about" className="scroll-mt-32 mt-24 mb-24 relative overflow-visible">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            <span className="text-[#3ba638]">Ab</span>out me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-center h-screen">

            {/* LEFT: INFO CARD - wider to almost touch image */}
            <div className="lg:col-span-8 xl:col-span-9 bg-[#1a1a1a] p-6 sm:p-8 md:p-12 rounded-[24px] md:rounded-3xl relative h-full flex flex-col justify-center">

              {/* Mobile/Tablet Image */}
              <div className="lg:hidden w-full mb-8 rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5">
                <img
                  src="images/image1.jpg"
                  alt="Sageer Ahmed"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="max-w-3xl space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>{PERSONAL_INFO.summary}</p>
                <p>
                  I'm dedicated to staying at the forefront of the industry by integrating AI and modern DevOps practices into my workflow.
                  Currently pursuing a degree at <span className="text-white font-bold">{PERSONAL_INFO.study}</span>, I balance academic excellence with real-world freelance projects.
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-6 sm:gap-x-12 pt-6 sm:pt-8">
                  {[
                    { icon: MapPin, label: "Location", value: "Gilgit, PK" },
                    { icon: Calendar, label: "Age", value: "18" },
                    { icon: User, label: "Nationality", value: "Pakistan" },

                    { icon: Briefcase, label: "Employment", value: "Available for Hire" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 sm:gap-4 group">
                      <div className="p-2 sm:p-1 bg-[#3ba638]/10 rounded-lg group-hover:bg-[#3ba638]/20 transition-colors">
                        <item.icon className="text-[#3ba638] w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500 font-bold block text-[9px] sm:text-[10px] uppercase tracking-widest">{item.label}</span>
                        <span className="text-white font-bold text-[11px] sm:text-sm">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE CARD - vertically centered */}
            <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 justify-end items-center h-full">
              <div className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#252525] transform hover:scale-105 transition-all duration-500">
                <img
                  src="images/image1.jpg"
                  alt="Sageer Ahmed Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>


        {/* Stats Section */}
        <section id="stats" className="mt-20 px-4 sm:px-8 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-[#1a1a1a] p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-white/5 text-center hover:border-green-500/30 transition-all group relative overflow-hidden">
                {/* Top line indicator - hidden on mobile, visible on md+ */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                  {stat.icon === 'Star' && <Star className="text-green-500 group-hover:rotate-12 transition-transform" size={16} />}
                  {stat.icon === 'Users' && <Users className="text-green-500 group-hover:rotate-12 transition-transform" size={16} />}
                  {stat.icon === 'Calendar' && <Calendar className="text-green-500 group-hover:rotate-12 transition-transform" size={16} />}
                  {stat.icon === 'Zap' && <Zap className="text-green-500 group-hover:rotate-12 transition-transform" size={16} />}
                </div>

                <h3 className="text-gray-500 text-[8px] xs:text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1 sm:mb-2">
                  {stat.label}
                </h3>

                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </section>


        {/* Tech Stack Section */}
        <section id="stack" className="scroll-mt-32">
          <SectionHeading>Core tech stack</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="space-y-8">
                <h3 className="text-xl font-black text-white flex items-center space-x-3">
                  <div className="w-8 h-1 bg-green-500"></div>
                  <span>{cat.title}</span>
                </h3>
                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <SkillBar key={sIdx} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="scroll-mt-32">
          <SectionHeading>My work</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <a
                key={idx}
                href={project.link}       // Link to open on click
                target="_blank"           // Open in new tab
                rel="noopener noreferrer" // Security best practice
                className="group relative rounded-[2rem] overflow-hidden border border-white/5 shadow-xl aspect-[4/3] cursor-pointer bg-[#1a1a1a] block"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-2xl font-black text-white mb-3">{project.title}</h4>
                  <span className="inline-flex items-center space-x-2 text-green-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Case Study</span>
                    <ChevronDown size={14} className="-rotate-90" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>



        {/* Experience & Education Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <section id="education" className="scroll-mt-32">
            <SectionHeading>Education</SectionHeading>
            <div className="space-y-12 relative border-l-2 border-white/5 ml-4 pl-10">
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[51px] top-1 w-5 h-5 bg-[#121212] rounded-full border-4 border-white/10 group-hover:border-green-500 transition-colors"></div>
                  <div className="flex flex-col space-y-4">
                    <span className="text-[10px] font-black px-4 py-1.5 bg-white/5 text-white/60 group-hover:bg-green-500 group-hover:text-black rounded-full w-fit transition-colors">{edu.period}</span>
                    <h3 className="text-2xl font-black text-white leading-tight">{edu.degree}</h3>
                    <p className="text-green-500 text-xs font-bold uppercase tracking-wider">{edu.institution}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-32">
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-12 relative border-l-2 border-white/5 ml-4 pl-10">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[51px] top-1 w-5 h-5 bg-[#121212] rounded-full border-4 border-white/10 group-hover:border-green-500 transition-colors"></div>
                  <div className="flex flex-col space-y-4">
                    <span className="text-[10px] font-black px-4 py-1.5 bg-white/5 text-white/60 group-hover:bg-green-500 group-hover:text-black rounded-full w-fit transition-colors">{exp.period}</span>
                    <h3 className="text-2xl font-black text-white leading-tight">{exp.role}</h3>
                    <p className="text-green-500 text-xs font-bold uppercase tracking-wider">{exp.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tech.split(',').map((t, i) => (
                          <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 text-white/40 rounded-md">{t.trim()}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

       {/* Contact Section */}

 {/* Contact Section */}
        <section
          id="contact"
          className="relative bg-[#1a1a1a] rounded-[3rem] overflow-hidden shadow-2xl scroll-mt-32"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
          <div className="relative px-10 pt-14 pb-20 md:px-20 md:pt-20 md:pb-32">
            <SectionHeading>Get in touch</SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

              {/* LEFT */}
              <div className="space-y-10">
                <p className="text-gray-400 text-xl leading-relaxed font-medium">
                  Have an innovative idea? Let's turn it into reality. I'm always open to discussing new projects and creative opportunities.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: MapPin,
                      value: PERSONAL_INFO.location,
                      href: `https://www.google.com/maps/search/${encodeURIComponent(PERSONAL_INFO.location)}`,
                    },
                    { icon: Mail, value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                    { icon: Github, value: `@${PERSONAL_INFO.github}`, href: `https://github.com/${PERSONAL_INFO.github}` },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-6 group cursor-pointer"
                    >
                      <div className="bg-[#121212] p-4 rounded-2xl border border-white/5 group-hover:border-green-500 group-hover:bg-green-500/10 transition-all">
                        <item.icon className="text-green-500" size={24} />
                      </div>
                      <span className="text-gray-300 text-lg font-bold group-hover:text-white transition-colors">
                        {item.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* RIGHT (FORM) */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-[#121212] p-10 md:p-12 rounded-[2.5rem] border border-white/5 space-y-8 shadow-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                      Your Name
                    </label>
                    <input
                      name="name"
                      className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-green-500 outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-green-500 outline-none"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-green-500 outline-none resize-none"
                    placeholder="Your Message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-green-500 text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition"
                >
                  {sending ? 'Sending...' : 'Push Message'}
                </button>
              </form>

            </div>
          </div>

          {/* MAP STRIP */}
          <a
            href="https://www.google.com/maps/place/Hunza,+Gilgit-Baltistan,+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-52 sm:h-64 cursor-pointer border-t border-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1600"
              alt="Map"
              className="w-full h-full object-cover opacity-30 grayscale brightness-50"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#121212] p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl animate-bounce">
                <MapPin className="w-8 h-8 text-[#3ba638]" />
              </div>
            </div>
          </a>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-10 py-16 border-t border-white/5 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-white font-black text-lg tracking-tighter">
                {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
              </p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} Designed with passion
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <a href="https://github.com/sageerify" className="text-gray-500 hover:text-green-500 transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/sageer-ahmed-28b704321" className="text-gray-500 hover:text-green-500 transition-colors"><Linkedin size={20} /></a>
              <a href="https://x.com/sageerify" className="text-gray-500 hover:text-green-500 transition-colors"><Twitter size={20} /></a>
              <a href="https://instagram.com/sageerify" className="text-gray-500 hover:text-green-500 transition-colors"><Instagram size={20} /></a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex flex-col items-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              <ChevronDown className="rotate-180 mb-2 group-hover:-translate-y-1 transition-transform" size={16} />
              <span>Top</span>
            </button>
          </div>
        </footer>

        {/* Vertical Scroll Indicator */}
        <div className="fixed bottom-12 right-12 hidden xl:flex flex-col items-center space-y-6">
          <div className="w-[2px] h-32 bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-green-500 origin-top animate-[scroll_3s_linear_infinite]"></div>
          </div>
          <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] font-black text-gray-600">Explore</span>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: scaleY(0); transform-origin: top; }
            50% { transform: scaleY(1); transform-origin: top; }
            51% { transform: scaleY(1); transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }
        `}</style>

      </main>
    </div>
  );
};

export default App;