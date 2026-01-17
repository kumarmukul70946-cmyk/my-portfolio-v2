import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink,
  Code2, Server, Database, User, BookOpen, Award, Send, Trophy
} from 'lucide-react';
import { personalInfo, skills, projects, certifications, achievements } from './data';

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(3,0,20,0.8)] backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-heading text-white tracking-wider">
          Mukul<span className="text-primary-color">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary-color transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-sm px-6 py-2">Get In Touch</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-primary-color" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary-color"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="bg-blob w-96 h-96 bg-purple-600 top-20 left-0 blur-[120px] opacity-20 animate-pulse"></div>
      <div className="bg-blob w-96 h-96 bg-teal-500 bottom-0 right-0 blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <motion.div variants={fadeInUp} className="text-secondary-color font-mono tracking-[0.3em] uppercase text-sm mb-4">MERN Stack Developer</motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
            Design. Code.<br />
            <span className="text-gradient">Innovate</span>.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            I'm <span className="text-white font-bold">{personalInfo.name}</span>. {personalInfo.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary px-8 py-4 shadow-[0_0_20px_rgba(124,58,237,0.4)]">My Projects</a>
            <a href="#contact" className="btn btn-outline px-8 py-4">Hire Me</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[480px] md:h-[480px]">
            {/* Dynamic Glow Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-color to-secondary-color rounded-full opacity-30 blur-[80px] animate-pulse"></div>

            {/* Decorative Ring */}
            <div className="absolute -inset-4 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/5 bg-[#0a0a0a] shadow-2xl group">
              <img
                src={personalInfo.image}
                alt={personalInfo.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Floating Social Icons */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass-card !p-0 flex items-center justify-center hover:bg-primary-color/20 text-white hover:text-primary-color border border-white/10 rounded-2xl transition-all shadow-xl"><Github size={24} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass-card !p-0 flex items-center justify-center hover:bg-blue-600/20 text-white hover:text-blue-500 border border-white/10 rounded-2xl transition-all shadow-xl"><Linkedin size={24} /></a>
              <a href={`mailto:${personalInfo.email}`} className="w-14 h-14 glass-card !p-0 flex items-center justify-center hover:bg-red-500/20 text-white hover:text-red-500 border border-white/10 rounded-2xl transition-all shadow-xl"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-t from-primary-color to-transparent"></div>
      </motion.div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="text-gradient">About Me</span></h2>
          <div className="glass-card text-left p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate <strong className="text-white">MERN stack developer</strong> currently pursuing my B.Tech in Computer Science Engineering at <span className="text-secondary-color">Parul University (2022-2026)</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I love building responsive web applications and solving complex problems. I'm experienced in <span className="text-primary-color">HTML, CSS, JavaScript, React.js, Node.js, and MongoDB</span>, with a strong focus on clean code and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Skills Component ---
const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & <span className="text-gradient">Technologies</span></h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="glass-card hover:border-primary-color/50 !bg-white/2 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary-color/10 rounded-xl text-primary-color">
                    <skillGroup.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-primary-color/10 hover:border-primary-color/30 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Projects Component ---
const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured <span className="text-gradient">Projects</span></h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card group"
            >
              {/* Project Image */}
              <div className="h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-white/5 relative group/img">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-color/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <project.icon size={48} className="text-white drop-shadow-lg" />
                </div>
              </div>

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-secondary-color animate-pulse"></span>
                    <span className="text-xs font-medium text-secondary-color tracking-widest uppercase">Live Project</span>
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors"><ExternalLink size={20} /></a>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 bg-primary-color/20 text-primary-color rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Education & Certs Component ---
const Education = () => {
  return (
    <section id="education" className="section-padding bg-[#050505]">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-secondary-color" /> Education
          </h2>
          <div className="space-y-8">
            {personalInfo.education.map((edu, idx) => (
              <div key={idx} className="glass-card pl-8 relative border-l-4 border-l-primary-color rounded-none rounded-r-xl border-y border-r border-white/5">
                <div className="absolute left-[-11px] top-6 w-5 h-5 bg-primary-color rounded-full border-4 border-[#0a0a0a]"></div>
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="text-gray-400 mt-1 mb-2">{edu.degree}</p>
                <span className="text-sm text-secondary-color font-mono">{edu.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-yellow-500" /> Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" key={idx} className="glass-card flex items-center justify-between group hover:translate-x-2 transition-transform">
                <div className="flex items-center gap-4">
                  <Award size={24} className="text-yellow-500" />
                  <span className="font-medium text-lg">{cert.title}</span>
                </div>
                <ExternalLink size={18} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-orange-500" /> Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, idx) => (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer" key={idx} className="glass-card flex items-center justify-between group hover:translate-x-2 transition-transform border-orange-500/20">
                <div className="flex items-center gap-4">
                  <Trophy size={24} className="text-orange-500" />
                  <span className="font-medium text-lg">{achievement.title}</span>
                </div>
                <ExternalLink size={18} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact Component ---
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    // You can get your own Access Key at https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="bg-blob w-96 h-96 bg-purple-900 bottom-0 left-0 blur-[150px] opacity-20"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In <span className="text-gradient">Touch</span></h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 text-lg">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 glass-card !p-0 flex items-center justify-center text-primary-color shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium hover:text-primary-color transition-colors">{personalInfo.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 glass-card !p-0 flex items-center justify-center text-secondary-color shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-lg font-medium hover:text-secondary-color transition-colors">{personalInfo.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline mx-auto">Send Another</button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Your Name</label>
                      <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary-color focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Your Email</label>
                      <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary-color focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Your Message</label>
                    <textarea name="message" required rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary-color focus:outline-none transition-colors" placeholder="Hello..." />
                  </div>

                  <button disabled={isSubmitting} className="w-full btn btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black text-center text-gray-500 text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

// --- Tech Marquee ---
const TechMarquee = () => {
  const techs = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", "Tailwind CSS", "Git", "Next.js", "REST APIs"];

  return (
    <div className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap relative">
      <div className="flex animate-[marquee_30s_linear_infinite] gap-20 items-center">
        {[...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black text-white/10 uppercase tracking-tighter hover:text-primary-color transition-colors duration-500 cursor-default">
            {tech}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg-color to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg-color to-transparent z-10"></div>
    </div>
  );
};

// --- Main App ---
function App() {
  return (
    <div className="min-h-screen text-white relative bg-mesh bg-grid">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
