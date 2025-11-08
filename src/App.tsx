import React, { useState, useEffect } from 'react';

import { Code, Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';
import profilePic from './assets/professional-pic.jpg';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';



export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { category: 'Languages', items: ['PHP', 'JavaScript', 'SQL'] },
    { category: 'Frameworks', items: ['Laravel', 'Yii', 'React', 'RestAPI', 'MetaAPi', 'nodejs'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind'] },
    { category: 'Database', items: ['MySQL', 'PostgreSQL'] }
  ];
  const experience = [
    {
      company: "Kanexy Private Limited",
      role: "Junior Php Developer",
      duration: "2022 - 2024",
      responsibilities: [
        "Developing web-based applications and scalable APIs.",
        "Collaborating with cross-functional teams to gather requirements and deliver solutions.",
        "Maintaining code quality and optimizing application performance.",
        "Handling real-time project enhancements and production fixes."
      ]
    },
    {
      company: "Esteticanow",
      role: "Full Stack Developer",
      duration: "2025 - present",
      responsibilities: [
        "Developed admin panel, CRM system, and vendor management dashboards.",
        "Implemented REST APIs and improved system performance.",
        "Designed responsive UI with Tailwind CSS and Bootstrap.",
        "Optimized database structures and improved operational workflow."
      ]
    }
  ];


  const projects = [
    {
      title: 'Client Management System',
      description: 'A dynamic web application for tracking client records, assigning departmental tasks, and monitoring progress with real-time status updates.',
      KeyContributions: 'Built secure login and role-based access control for multiple departments,Designed dynamic task assignment and status monitoring modules.Implemented deadline reminders and internal communication logs Optimized database queries for fast and scalable performance.',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      color: 'from-blue-500 to-cyan-500',
      image: pic1,
      url: 'https://esteticanow.com'
    },
    {
      title: 'School Attendance System',
      description: 'Automated attendance tracking solution for schools with login roles, attendance reports, and dashboard analytics.',
      KeyContributions: 'Developed attendance marking and reporting interface.Implemented user roles for teachers, admins, and principals.Designed attendance summary dashboards and export features.Improved overall data accuracy and reduced manual errors.',
      tech: ['Laravel', 'PHP', 'JavaScript'],
      color: 'from-purple-500 to-pink-500',
      image: pic2,
      url: 'https://app.esteticanow.com'
    },
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'An online shopping application with cart, checkout, product management, and secure payment gateway integration.',
    //   tech: ['React', 'Laravel', 'MySQL'],
    //   color: 'from-orange-500 to-red-500',
    //   image: '/assets/ecommerce.png',
    //   url: 'https://accuwisetech.com' // sample e-commerce live link from resume
    // },
    {
      title: 'Estetica Admin Panel Application',
      description: 'Developed the centralized admin panel for Esteticas Salon, Spa, and Clinic Appointment Booking Platform. The dashboard enables the organization to manage vendor accounts, services, staff schedules, customer appointments, and subscription plans across multiple branches. The system provides clean UI controls, analytics widgets, and secure data access to improve operational efficiency.',
      tech: ['Yii2', 'Tailwind CSS', 'REST API'],
      color: 'from-teal-500 to-lime-500',
      image: pic3,
      url: 'https://twgpost.in'
    },
    {
      title: 'Estetica Vendor CRM Application (Yii2 Framework)',
      description: 'Designed and enhanced the CRM module used by Salon, Spa, and Clinic vendors to manage their customer relationships and daily operations. The CRM supports lead tracking, appointment follow-ups, service history, customer communication, and sales pipeline visibility.',
      KeyContributions: 'Developed lead acquisition and follow-up scheduling workflows for salon/spa clients.Implemented customer service history tracking and communication logging.Created dashboard to monitor vendor performance metrics, bookings, and conversions.Improved usability with search filters, pagination, and optimized database queries.Enabled CRM integration with the Estetica booking platform for seamless customer experience.',
      tech: ['Yii2', 'MySQL', 'jQuery'],
      color: 'from-indigo-500 to-blue-600',
      image: pic4,
      url: 'https://app.esteticanow.com'
    }
  ];



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Branding */}
            <div className="flex items-center space-x-3">
              <img src={profilePic} className="w-10 h-10 rounded-full border border-purple-400/40 shadow" />

              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Vinay Mallipudi Software Engineer
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-800/50 rounded-md transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5 rounded-full animate-pulse"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
              <Code size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Vinay</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Full Stack Software Engineer focused on building reliable, scalable, and maintainable web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {[
              "HTML", "CSS", "JavaScript", "AJAX", "jQuery", "PHP",
              "Laravel", "MySQL", "Yii", "REST API", "Meta API",
              "Node JS", "Bootstrap"
            ].map((skill, index) => (
              <span
                key={index}
                onClick={() => scrollToSection("skills")}
                className="cursor-pointer px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/50 backdrop-blur-sm hover:scale-110 hover:border-cyan-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate web developer with hands-on experience in building responsive, user-friendly web applications. I thrive on turning complex ideas into elegant, working solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in both backend logic and frontend UI, I create seamless full-stack experiences that users love. My focus is on writing clean, maintainable code and staying current with the latest technologies.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/50 hover:scale-110 transition-transform">
                  <Github size={24} />
                </a>
                <a href="#" className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/50 hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quick Facts</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>2+ years of development experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>10+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Full-stack development specialist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Agile & collaborative team player</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-white">
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white underline decoration-cyan-400 decoration-4">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-purple-500/30 p-6 rounded-xl hover:border-cyan-400 transition-all"
              >
                <div className="flex justify-between flex-wrap mb-3">
                  <h3 className="text-2xl text-cyan-400 font-semibold">{exp.company}</h3>
                  <p className="text-gray-300">{exp.duration}</p>
                </div>

                <p className="text-purple-300 font-medium mb-4">{exp.role}</p>

                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {project.KeyContributions && (
                    <p className="text-gray-300 mb-4 whitespace-pre-line">
                      {project.KeyContributions}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I’m always open to discussing new projects, product ideas, or collaboration opportunities.
            Whether you need a full stack solution, backend API development, or UI enhancements, I bring a
            focus on clean architecture, performance, and scalability. Let’s work together to turn your vision
            into a high-quality, impactful product.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/50 hover:border-cyan-400 transition-all hover:scale-105"
            >
              <Mail size={24} className="text-cyan-400" />
              <span className="text-lg">vinaymallipudi43@gmail.com</span>
            </a>
            <a
              href="tel:yourphone"
              className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/50 hover:border-purple-400 transition-all hover:scale-105"
            >
              <Phone size={24} className="text-purple-400" />
              <span className="text-lg">9848132081</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center border-t border-purple-500/30">
        <p className="text-gray-400">
          © 2024 Vinay Mallipudi Software Engineer Portfolio. Built with React & Tailwind CSS
        </p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}