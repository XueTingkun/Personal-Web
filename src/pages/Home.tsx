import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  BrainCircuit, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Menu, 
  X,
  ChevronRight,
  Terminal
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "AI Auditing Workflow Design",
      time: "2025.02 - 2025.06",
      company: "China Mobile (Zhuhai Branch)",
      problem: "Traditional auditing processes were manual, slow, and prone to errors, especially for complex OCR tasks in telecommunications.",
      data: "Internal auditing datasets, processed via privatized deployment to ensure data security.",
      approach: "Designed and deployed local AI workflows using Dify. Implemented DeepSeek-7B and Qwen2.5-VL with RAG for automated OCR auditing.",
      outcome: "Achieved significant automation in complex OCR auditing and improved overall auditing accuracy and efficiency.",
      contribution: "Led the design of the AI workflow, managed local model deployment, and integrated RAG with knowledge bases.",
      tags: ["LLM", "Dify", "RAG", "DeepSeek", "Qwen"],
      link: "https://github.com/XueTingkun/Personal-Web"
    },
    {
      title: "Q-learning Dungeon Battle",
      time: "2024",
      company: "Personal Project",
      problem: "Creating an engaging 2D top-down shooter game with custom mechanics and AI enemy behavior trained via Reinforcement Learning.",
      data: "Custom grid-based environment (28x18) with dynamic obstacles and state-space representation.",
      approach: "Developed using Python and Pygame. Implemented a Deep Q-Network (DQN) using PyTorch for the enemy AI, combined with rule-based chase policies. Features WASD movement and mouse-aiming.",
      outcome: "Successfully built a functional game with real-time AI decision-making, collision detection, and a robust HP/UI system.",
      contribution: "Sole developer - handled RL environment design, DQN training, and core game logic implementation.",
      tags: ["Python", "Pygame", "Reinforcement Learning", "DQN", "PyTorch"],
      link: "https://github.com/XueTingkun/Qlearning-dungeon-battle"
    },
    {
      title: "Computer Vision Group Project",
      time: "2025",
      company: "Lingnan University (Group)",
      problem: "Developing a robust computer vision system to solve complex image recognition or detection tasks within a collaborative environment.",
      data: "Utilized large-scale image datasets tailored for the specific vision task, ensuring high diversity and representativeness.",
      approach: "Collaboratively implemented state-of-the-art deep learning models (e.g., CNNs/YOLO) and optimized the processing pipeline for real-time performance.",
      outcome: "Delivered a high-accuracy vision system with a user-friendly interface and well-documented code structure.",
      contribution: "Acted as Product Manager to define requirements, led the UI development, and conducted comprehensive code reviews to ensure system reliability.",
      tags: ["Computer Vision", "UI Development", "Code Review", "Product Management"]
    },
    {
      title: "Delay APP - Google Computational Thinking Competition",
      time: "2024",
      problem: "Enhancing user productivity through optimized task management and computational thinking principles.",
      approach: "Applied computational thinking to software design and task scheduling algorithms.",
      outcome: "Awarded National 2nd Prize in the Google & SCUT Computational Thinking Competition.",
      contribution: "Core developer and architect of the application logic.",
      tags: ["Python", "Algorithm", "UX Design"]
    },
    {
      title: "Baseband Processing & AI Simulation",
      time: "2024.08",
      company: "Guangdong SeerTech Network Tech Co., Ltd.",
      problem: "Need for efficient simulation and implementation of AI algorithms on hardware (FPGA/Chips) for baseband processing.",
      data: "Synthetic and real-world signal datasets for baseband simulation.",
      approach: "Used System Verilog for simulation and development. Analyzed hardware constraints for AI algorithm implementation.",
      outcome: "Successfully developed simulation products and validated AI algorithm feasibility on specific hardware platforms.",
      contribution: "Assisted in product testing and conducted feasibility analysis for AI on hardware.",
      tags: ["FPGA", "System Verilog", "Hardware AI", "Simulation"]
    }
  ];

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Python", "SQL", "C++", "STM32", "FPGA", "System Verilog", "PyTorch", "Oracle"]
    },
    {
      title: "AI & Data Science",
      icon: <BrainCircuit className="w-5 h-5" />,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Generative AI (AIGC)", "RAG", "LLM Deployment"]
    },
    {
      title: "Business & Tools",
      icon: <Database className="w-5 h-5" />,
      skills: ["Dify", "DeepSeek/Qwen", "Technical Pre-sales", "B2B Communication", "Problem Framing", "Data Visualization"]
    }
  ];

  const honors = [
    "National 2nd Prize, Google & SCUT Computational Thinking Competition",
    "Grade A (Excellent), CUHK Fintech & Business Application Program",
    "3rd Prize, 19th Guangdong Youth Robotics Competition",
    "1st Prize & Best Construction Award, 1st Zhuhai Youth Robotics Competition"
  ];

  return (
    <div className="scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">TX</div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Tingkun Xue</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.href.substring(1) ? 'text-blue-600' : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-md"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-600 font-semibold mb-4 tracking-wider uppercase text-sm">Hello, I'm Tingkun Xue</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              AI Engineer seeking opportunities in <span className="text-blue-600">AI implementation</span> & business analytics
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
              M.Sc. student at Lingnan University specializing in Generative AI, Computer Vision, and Business Intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['Data Analytics', 'Machine Learning', 'Python', 'SQL', 'Generative AI'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                View My Work <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-8 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900/50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="text-blue-600" /> About Me
              </h2>
              <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-4">
                <p>
                  I am currently pursuing my Master of Science in Artificial Intelligence and Business Analytics at Lingnan University, Hong Kong. 
                  My academic journey has been driven by a passion for bridging the gap between advanced AI technologies and real-world business value.
                </p>
                <p>
                  With a background in Electronic Information Engineering, I possess a strong technical foundation in Python, C++, and hardware simulation. 
                  My recent experience as an AI Engineer Intern at China Mobile involved designing privatized AI auditing workflows using LLMs and RAG, 
                  where I successfully automated complex OCR processes.
                </p>
                <p>
                  I thrive in environments where I can apply computational thinking to solve intricate problems. My goal is to leverage my skills in 
                  Generative AI and data analytics to drive innovation and efficiency in the business sector.
                </p>
              </div>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Education
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <span className="font-semibold">M.Sc. AIBA</span><br/>
                      Lingnan University, HK (2025-26)
                    </li>
                    <li>
                      <span className="font-semibold">B.Eng. EE</span><br/>
                      Hanshan Normal Univ (2021-25)
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> Key Awards
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>Google & SCUT Comp: 2nd Prize</li>
                    <li>CUHK Fintech Program: Grade A</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-2xl">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20portrait%20of%20a%20young%20Asian%20male%20AI%20engineer%2C%20wearing%20smart%20casual%20attire%2C%20modern%20tech%20office%20background%20with%20subtle%20AI%20network%20elements%2C%20professional%20lighting%2C%20clean%20composition&image_size=square_hd" 
                  alt="Tingkun Xue"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Skills</h2>
            <p className="text-zinc-600 dark:text-zinc-400">A comprehensive overview of my technical and business capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900/50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Showcasing my work in AI, hardware, and algorithmic problem solving</p>
            </div>
            <div className="hidden sm:block">
              <a href="https://github.com/XueTingkun" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold flex items-center gap-2 hover:underline">
                View all on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="grid gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-8">
                  {idx === 0 ? <BrainCircuit className="w-24 h-24 text-blue-600/20" /> : idx === 1 ? <Terminal className="w-24 h-24 text-blue-600/20" /> : <Code2 className="w-24 h-24 text-blue-600/20" />}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent"></div>
                </div>
                
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">{project.company || "Competition"}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-zinc-500">{project.time}</span>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-blue-600 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/title inline-flex items-center gap-2">
                      <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 mb-6 text-zinc-300 group-hover/title:text-blue-600 transition-colors" />
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                  )}
                  
                  <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mb-2">The Problem</h4>
                      <p className="text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    
                    {project.data && (
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mb-2">Data Source</h4>
                        <p className="text-sm leading-relaxed">{project.data}</p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mb-2">Approach & Impact</h4>
                      <p className="text-sm leading-relaxed">{project.approach}</p>
                      <p className="text-sm leading-relaxed mt-2 font-medium text-zinc-800 dark:text-zinc-200">{project.outcome}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Download My Full Resume</h2>
                <p className="text-blue-100 mb-0 max-w-md">
                  Get a detailed look at my experience, projects, and academic background in a professional format.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                  <Download className="w-5 h-5" /> Download CV (EN)
                </button>
                <button className="px-8 py-4 bg-blue-700 text-white border border-blue-500 rounded-xl font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                  <Download className="w-5 h-5" /> 下载简历 (CN)
                </button>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-950 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              <p className="text-zinc-400 mb-12 text-lg">
                I'm always open to discussing new opportunities, AI research, or business collaborations.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:border-blue-600 transition-colors">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-xl font-medium">13802670337@139.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:border-blue-600 transition-colors">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-xl font-medium">+86 13802670337 / +852 84955037</p>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/XueTingkun" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/tingkun-xue" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase">Name</label>
                    <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-blue-600 outline-none transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase">Email</label>
                    <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-blue-600 outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase">Subject</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-blue-600 outline-none transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase">Message</label>
                  <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-blue-600 outline-none transition-colors resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                  Send Message <MessageSquare className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
            <p>© 2026 Tingkun Xue. Built for Lingnan University AIBA Individual Project.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
