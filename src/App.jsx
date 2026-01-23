import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink,
  Code2, Server, Database, User, BookOpen, Award, Send, Trophy, Sun, Moon, FileText
} from 'lucide-react';
import { personalInfo, skills, projects, certifications, achievements, testimonials } from './data';
import { Quote } from 'lucide-react';

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
const Navbar = ({ theme, toggleTheme }) => {
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
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed w-full z-50 pt-6 transition-all duration-500">
      <div className="container mx-auto px-6 flex justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center gap-8 px-6 py-3 rounded-full border border-[var(--glass-border)] transition-all duration-500 shadow-xl ${scrolled
            ? 'bg-[var(--glass-bg)] backdrop-blur-xl border-primary-color/30'
            : 'bg-[var(--glass-bg)] backdrop-blur-md'
            }`}
        >
          <a href="#" className="text-xl font-bold font-heading text-[var(--text-primary)] tracking-tight mr-4">
            Mukul<span className="text-primary-color">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary-color/10 text-[var(--text-secondary)] hover:text-primary-color transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-primary-color to-primary-glow text-white text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-color/20">
              Get In Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-secondary)]"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-[var(--text-primary)] hover:text-primary-color" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 md:hidden glass-card !p-6 flex flex-col gap-4 text-center border-primary-color/20"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-primary-color transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 btn btn-primary justify-center text-xs"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
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
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-4 leading-[1.1] tracking-tight">
            I build <span className="text-gradient">fast, modern</span><br /> web apps.
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-primary-color/10 border border-primary-color/20 text-primary-color text-sm font-bold tracking-wide">
              {personalInfo.role}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-surface-color border border-[var(--glass-border)] text-[var(--text-secondary)] text-sm font-medium">
              React | Node | MongoDB
            </span>
            <span className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-bold tracking-wide flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Work
            </span>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-[var(--text-secondary)] text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            I'm <span className="text-[var(--text-primary)] font-bold">{personalInfo.name}</span>. {personalInfo.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary px-8 py-4 shadow-[0_0_20px_rgba(56,189,248,0.4)]">View Projects</a>
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline px-8 py-4 border-[var(--glass-border)] text-[var(--text-primary)] hover:border-primary-color flex items-center gap-2">
              <FileText size={20} /> Resume
            </a>
            <a href="#contact" className="btn btn-outline px-8 py-4 border-[var(--glass-border)] text-[var(--text-primary)] hover:border-primary-color">Contact Me</a>
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

// --- Stats Component ---
const Stats = () => {
  return (
    <section className="py-10 border-y border-[var(--glass-border)] bg-[var(--surface-color)]/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]"><span className="text-gradient">About Me</span></h2>
          <div className="glass-card text-left p-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              I'm a passionate <strong className="text-[var(--text-primary)]">MERN stack developer</strong> currently pursuing my B.Tech in Computer Science Engineering at <span className="text-secondary-color">Parul University (2022-2026)</span>.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
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
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--text-primary)]">Skills & <span className="text-gradient">Technologies</span></h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="glass-card hover:border-primary-color/50 !bg-[var(--glass-bg)] backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary-color/10 rounded-xl text-primary-color">
                    <skillGroup.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, translateY: -2 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-primary-color/10 hover:border-primary-color/30 transition-all cursor-default group/skill"
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.iconId}`}
                        alt={skill.name}
                        className="w-5 h-5 object-contain filter grayscale group-hover/skill:grayscale-0 transition-all"
                      />
                      <span className="text-sm font-medium text-gray-400 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
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
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = projects.filter(project =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">Featured <span className="text-gradient">Projects</span></h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${filter === cat
                  ? 'bg-primary-color text-white shadow-lg shadow-primary-color/30'
                  : 'bg-[var(--surface-color)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-primary-color/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card group overflow-hidden"
              >
                {/* Project Image */}
                <div className="h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-white/5 relative group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-color/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-xs py-2 px-4 shadow-lg scale-0 group-hover/img:scale-100 transition-transform delay-100">Live Demo</a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-black/50 text-white border-white/20 text-xs py-2 px-4 scale-0 group-hover/img:scale-100 transition-transform delay-200">GitHub</a>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-color/10 text-secondary-color uppercase tracking-wider">{project.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => {
                    const tagIconMap = {
                      "React": "react",
                      "Node.js": "nodejs",
                      "MongoDB": "mongodb",
                      "Git": "git",
                      "Next.js": "nextjs",
                      "Python": "python",
                      "Tailwind CSS": "tailwind",
                      "JavaScript": "js",
                      "PostgreSQL": "postgres",
                      "Firebase": "firebase"
                    };
                    const iconId = tagIconMap[tag];
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1.5 px-3 py-1 bg-primary-color/10 border border-primary-color/20 text-primary-color rounded-full text-[10px] font-bold uppercase tracking-wider transition-all hover:bg-primary-color/20"
                      >
                        {iconId && (
                          <img
                            src={`https://skillicons.dev/icons?i=${iconId}`}
                            alt={tag}
                            className="w-3 h-3 object-contain"
                          />
                        )}
                        {tag}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Component ---
const Testimonials = () => {
  return (
    <section className="section-padding bg-[var(--surface-color)]/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--text-primary)]">What People <span className="text-gradient">Say</span></h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card relative p-8"
            >
              <Quote className="absolute top-6 right-6 text-primary-color/20" size={48} />
              <p className="text-lg text-[var(--text-secondary)] italic mb-6 relative z-10">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-color to-secondary-color flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">{testimonial.name}</h4>
                  <p className="text-xs text-secondary-color uppercase tracking-wider">{testimonial.role}</p>
                </div>
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
    <section id="education" className="section-padding relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[var(--text-primary)]">
            <BookOpen className="text-secondary-color" /> Education
          </h2>
          <div className="space-y-8">
            {personalInfo.education.map((edu, idx) => (
              <div key={idx} className="glass-card pl-8 relative border-l-4 border-l-primary-color rounded-none rounded-r-xl border-y border-r border-[var(--glass-border)]">
                <div className="absolute left-[-11px] top-6 w-5 h-5 bg-primary-color rounded-full border-4 border-[var(--bg-color)]"></div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{edu.institution}</h3>
                <p className="text-[var(--text-secondary)] mt-1 mb-2">{edu.degree}</p>
                <span className="text-sm text-secondary-color font-mono">{edu.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[var(--text-primary)]">
            <Award className="text-yellow-500" /> Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" key={idx} className="glass-card flex items-center justify-between group hover:translate-x-2 transition-transform">
                <div className="flex items-center gap-4">
                  <Award size={24} className="text-yellow-500" />
                  <span className="font-medium text-lg text-[var(--text-primary)]">{cert.title}</span>
                </div>
                <ExternalLink size={18} className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[var(--text-primary)]">
            <Trophy className="text-orange-500" /> Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, idx) => (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer" key={idx} className="glass-card flex items-center justify-between group hover:translate-x-2 transition-transform border-orange-500/20">
                <div className="flex items-center gap-4">
                  <Trophy size={24} className="text-orange-500" />
                  <span className="font-medium text-lg text-[var(--text-primary)]">{achievement.title}</span>
                </div>
                <ExternalLink size={18} className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
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
    formData.append("access_key", "69123efb-4c59-496c-aff9-fc242e2ceef5");

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
            <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Let's Connect</h3>
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 glass-card !p-0 flex items-center justify-center text-primary-color shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-[var(--text-primary)] hover:text-primary-color transition-colors">{personalInfo.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 glass-card !p-0 flex items-center justify-center text-secondary-color shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-lg font-medium text-[var(--text-primary)] hover:text-secondary-color transition-colors">{personalInfo.phone}</a>
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
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline mx-auto border-[var(--glass-border)] text-[var(--text-primary)]">Send Another</button>
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
                      <label className="text-sm text-[var(--text-secondary)]">Your Name</label>
                      <input name="name" required type="text" className="w-full bg-[var(--surface-color)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-primary-color focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[var(--text-secondary)]">Your Email</label>
                      <input name="email" required type="email" className="w-full bg-[var(--surface-color)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-primary-color focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[var(--text-secondary)]">Your Message</label>
                    <textarea name="message" required rows="4" className="w-full bg-[var(--surface-color)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-primary-color focus:outline-none transition-colors" placeholder="Hello..." />
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
    <footer className="py-8 border-t border-[var(--glass-border)] bg-[var(--bg-color)] text-center text-[var(--text-secondary)] text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="text-xs mt-2 text-[var(--text-secondary)]/60">Made with React + Tailwind</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition-colors">LinkedIn</a>
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition-colors">Resume</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-color transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

// --- Modern Background Enhancement ---
const Background = ({ theme }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Mesh Layers */}
      <div className="bg-mesh" />
      <div className="bg-grid" />

      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-color/${theme === 'dark' ? '10' : '5'} blur-[120px] rounded-full`}
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-color/${theme === 'dark' ? '10' : '5'} blur-[120px] rounded-full`}
      />

      {/* Mouse Spotlight */}
      <div
        className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, ${theme === 'dark' ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.05)'}, transparent 80%)`
        }}
      />

      {/* Noise / Grain Overlay */}
      <div className="grain" />
    </div>
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
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10"></div>
    </div>
  );
};

// --- Main App ---
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen text-[var(--text-primary)] selection:bg-primary-color/30 transition-colors duration-500">
      <Background theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <TechMarquee />
      <Skills />
      <Projects />
      <Education />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
