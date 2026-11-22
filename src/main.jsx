import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Send,
  Server,
  Smartphone,
  Sparkles,
  Sun,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";

import "./styles.css";

/* =========================================================
   PERSONAL LINKS
========================================================= */

const GITHUB = "https://github.com/sumit18ade";
const LINKEDIN = "https://www.linkedin.com/in/sumitade3755";
const LEETCODE = "https://leetcode.com/u/5qVkMzkpQ7/";
const HACKERRANK = "https://www.hackerrank.com/profile/sumitade324";
const DOMAIN = "https://sumit18x.dev";
const EMAIL = "sumitade324@gmail.com";

/* =========================================================
   HERO IMAGES
   Put these inside:
   public/images/
========================================================= */

const heroImages = [
  "/images/hero-1.jpeg",
  "/images/hero-2.jpeg",
  "/images/hero-3.jpeg",
  "/images/hero-4.jpeg",
  "/images/hero-5.jpeg",
  "/images/hero-6.jpeg",
  "/images/hero-7.jpeg",
];

/* =========================================================
   PROJECTS — ONLY 6 FEATURED PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Credit Scoring Model",
    category: "AI / ML",
    eyebrow: "Machine Learning • Data",
    description:
      "Machine-learning based credit risk prediction system built using financial data, preprocessing, model training and prediction workflows.",
    stack: ["Python", "Pandas", "Scikit-learn", "Joblib", "Streamlit"],
    github:
      "https://github.com/sumyaopratar123/CodeAlpha_CreditScoringModel",
    live: "#",
  },

  {
    number: "02",
    title: "AarogyaConnect",
    category: "MERN + AI",
    eyebrow: "Healthcare • AI • Maps",
    description:
      "Smart healthcare platform combining hospital discovery, AI-assisted healthcare workflows, location services and multilingual experiences.",
    stack: ["React", "Node.js", "Express", "AI/ML", "Google Maps"],
    github:
      "https://github.com/sumyaopratar123/AarogyaConnect",
    live: "https://aarogya-connect-beige.vercel.app/",
  },

  {
    number: "03",
    title: "JobSensei",
    category: "AI / Career",
    eyebrow: "Career • Resume • AI",
    description:
      "AI-powered career assistant designed for resume analysis, skill-gap discovery, improvement suggestions and personalized career guidance.",
    stack: ["React", "Node.js", "Express", "AI/ML", "Database"],
    github:
      "https://github.com/sumyaopratar123/Job-Sensai-main",
    live: "https://job-sensei-main.vercel.app/",
  },

  {
    number: "04",
    title: "Connectify",
    category: "MERN Stack",
    eyebrow: "Social • Full-Stack",
    description:
      "Full-stack social networking platform with authentication, profiles, connections, REST APIs and database-driven application architecture.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github:
      "https://github.com/sumyaopratar123/connectify",
    live: "https://connectify-1-30uw.onrender.com/",
  },

  {
    number: "05",
    title: "TravelBharat",
    category: "Full-Stack",
    eyebrow: "Travel • Services • APIs",
    description:
      "Modern travel platform focused on discovery, service workflows, API integration and production-ready client/server architecture.",
    stack: ["React", "Node.js", "Express", "REST APIs", "Vercel"],
    github:
      "https://github.com/sumyaopratar123/TravelBharat",
    live: "https://client-bice-iota-13.vercel.app/",
  },

  {
    number: "06",
    title: "Teacher Copilot",
    category: "AI / EdTech",
    eyebrow: "Education • AI",
    description:
      "AI-enabled teaching assistant concept for multigrade classrooms with lesson planning, worksheets, assessments and learning-gap workflows.",
    stack: ["React", "Python", "AI/ML", "Automation", "Data"],
    github: GITHUB,
    live: "#",
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const stackGroups = [
  {
    title: "MERN STACK",
    icon: <Code2 size={22} />,
    items: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
      "Next.js",
    ],
  },

  {
    title: "APP DEVELOPMENT",
    icon: <Smartphone size={22} />,
    items: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "React Native",
      "Firebase",
      "REST APIs",
      "Mobile UI",
      "Navigation",
    ],
  },

  {
    title: "AI / ML",
    icon: <BrainCircuit size={22} />,
    items: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Computer Vision",
      "AI APIs",
      "Streamlit",
    ],
  },

  {
    title: "DATA ANALYTICS",
    icon: <BarChart3 size={22} />,
    items: [
      "Data Analysis",
      "Pandas",
      "NumPy",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Data Visualization",
      "Dashboards",
    ],
  },

  {
    title: "CLOUD & DEVOPS",
    icon: <Cloud size={22} />,
    items: [
      "Vercel",
      "Render",
      "Git",
      "GitHub",
      "Deployment",
      "Environment Variables",
      "APIs",
      "Cloud Fundamentals",
    ],
  },

  {
    title: "DSA & CS FUNDAMENTALS",
    icon: <Terminal size={22} />,
    items: [
      "Data Structures",
      "Algorithms",
      "C++",
      "Java",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const experience = [
  {
    year: "SEP 2026 — PRESENT",
    tag: "INTERNSHIP · MACHINE LEARNING",
    title: "Machine Learning Intern",
    company: "CodeAlpha",
    description:
      "Selected as a Machine Learning Intern at CodeAlpha. Working with Python, data preprocessing, exploratory data analysis, machine learning algorithms, model evaluation and deployment. Completed practical ML work including a Credit Scoring Model using Logistic Regression, Decision Tree, Random Forest and Streamlit.",
    icon: <BrainCircuit size={21} />,
  },
  {
    year: "SEP 2026",
    tag: "INTERNSHIP · ARTIFICIAL INTELLIGENCE",
    title: "Artificial Intelligence Intern",
    company: "CodeAlpha",
    description:
      "Selected for the CodeAlpha AI Internship and gained hands-on exposure to Artificial Intelligence and Machine Learning through practical Python-based projects and real-world problem solving.",
    icon: <Sparkles size={21} />,
  },
  {
    year: "SEP 2026 — PRESENT",
    tag: "INTERNSHIP · MERN STACK",
    title: "MERN Stack Intern",
    company: "Unified Mentor Private Limited",
    description:
      "Selected as a MERN Stack Intern for a 3-month internship program. Building practical full-stack applications using MongoDB, Express.js, React.js, Node.js, REST APIs and modern development workflows.",
    icon: <Layers3 size={21} />,
  },
  {
    year: "AUG 2025 — SEP 2025",
    tag: "INTERNSHIP · BUSINESS DEVELOPMENT",
    title: "Business Development Intern",
    company: "Tare Zameen Foundation",
    description:
      "Completed a Business Development Internship with exposure to professional communication, collaboration, social media engagement and contribution to social-impact initiatives.",
    icon: <BriefcaseBusiness size={21} />,
  },
  {
    year: "2026",
    tag: "LEADERSHIP · TRAINING & PLACEMENT CELL",
    title: "Internship Coordinator",
    company: "Training & Placement Cell · D.Y. Patil College of Engineering & Technology, Kolhapur",
    description:
      "Serving as an Internship Coordinator with the Training & Placement Cell at DYPCET Kolhapur, supporting internship-related coordination, student communication and placement-cell activities.",
    icon: <Network size={21} />,
  },
  {
    year: "2025 — PRESENT",
    tag: "LEADERSHIP · HACKATHONS",
    title: "Hackathon & Technical Leadership",
    company: "Various Hackathons & Technical Events",
    description:
      "Participating in hackathons and technical events, working on problem statements, rapid prototyping, team collaboration, presentations and building practical technology solutions across domains.",
    icon: <Zap size={21} />,
  },
  {
    year: "2024 — 2028",
    tag: "EDUCATION · COMPUTER SCIENCE",
    title: "B.Tech Computer Science Engineering",
    company: "D.Y. Patil College of Engineering & Technology, Kolhapur",
    description:
      "Computer Science Engineering student developing skills across software engineering, Full-Stack development, AI/ML, Data Analytics, Data Science, cloud technologies, DSA and core computer science fundamentals.",
    icon: <GraduationCap size={21} />,
  },
];

/* =========================================================
   DOMAIN COUNTER
========================================================= */

const domains = [
  "MERN Development",
  "AI / ML",
  "Data Analytics",
  "Data Science",
  "App Development",
  "Cloud Computing",
  "Automation",
  "Computer Vision",
  "EdTech",
  "Healthcare Tech",
  "Travel Tech",
  "Career Tech",
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  /* -------------------------------------------------------
     AUTO SLIDER
  ------------------------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* -------------------------------------------------------
     SCROLL
  ------------------------------------------------------- */

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  /* -------------------------------------------------------
     SLIDER
  ------------------------------------------------------- */

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  /* -------------------------------------------------------
     FORM
  ------------------------------------------------------- */

  const handleFormSubmit = () => {
    setFormStatus("Sending your message...");
  };

  return (
    <div className={dark ? "app dark" : "app light"}>

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="navbar">

        <button
          className="brand"
          onClick={() => scrollTo("home")}
          aria-label="Go home"
        >
          <span className="brand-box">SA</span>

          <span className="brand-name">
            SUMIT<span>18X</span>
          </span>
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("stack")}>STACK</button>
          <button onClick={() => scrollTo("work")}>WORK</button>
          <button onClick={() => scrollTo("experience")}>
            EXPERIENCE
          </button>
          <button onClick={() => scrollTo("contact")}>
            CONTACT
          </button>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>
        </nav>

        <div className="nav-actions">

          <button
            className="icon-button"
            onClick={() => scrollTo("contact")}
            aria-label="Contact"
          >
            <Mail size={18} />
          </button>

          <button
            className="icon-button"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>

      {/* ===================================================
          HERO
      =================================================== */}

      <main id="home">

        <section className="hero">

          <div className="hero-grid" />

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-top">
            <span className="status-dot" />
            FULL-STACK · AI/ML · DATA · APP · CLOUD · VIBE CODER
          </div>

          {/* NAME */}

          <div className="hero-heading">

            <div className="side-text left">
              <b>CODE</b>
              <span>BUILD</span>
              <span>DEPLOY</span>
              <span>LEARN</span>
              <span>REPEAT</span>
            </div>

            <div className="name-wrap">
              <h1>SUMIT</h1>
              <h1>ADE</h1>

              <span className="signature">
                Sumit Ade
              </span>
            </div>

            <div className="side-text right">
              <b>100+</b>
              <span>BUILDS</span>
              <span>IDEAS</span>
              <span>EXPERIMENTS</span>
              <span>DOMAINS</span>
            </div>

          </div>

          {/* =================================================
              7 PHOTO SHOWCASE
              CENTER FIXED + 3 LEFT + 3 RIGHT
          ================================================= */}

          <div className="showcase">

            <button
              className="slider-btn left-btn"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* LEFT FAR */}
            <div className="photo photo-left photo-left-3">
              <img
                src={
                  heroImages[
                    (activeImage + 4) % heroImages.length
                  ]
                }
                alt="Sumit"
              />
            </div>

            {/* LEFT MID */}
            <div className="photo photo-left photo-left-2">
              <img
                src={
                  heroImages[
                    (activeImage + 5) % heroImages.length
                  ]
                }
                alt="Sumit"
              />
            </div>

            {/* LEFT NEAR */}
            <div className="photo photo-left photo-left-1">
              <img
                src={
                  heroImages[
                    (activeImage + 6) % heroImages.length
                  ]
                }
                alt="Sumit"
              />
            </div>

            {/* CENTER FIXED BLAZER PHOTO */}
            <div className="main-photo">
              <div className="main-photo-ring" />

              <img
                src="/images/profile.jpeg"
                alt="Sumit Ade"
              />

              <div className="photo-glow" />
            </div>

            {/* RIGHT NEAR */}
            <div className="photo photo-right photo-right-1">
              <img
                src={
                  heroImages[
                    (activeImage + 1) % heroImages.length
                  ]
                }
                alt="Sumit"
              />
            </div>

            {/* RIGHT MID */}
            <div className="photo photo-right photo-right-2">
              <img
                src={
                  heroImages[
                    (activeImage + 2) % heroImages.length
                  ]
                }
                alt="Sumit"
              />
            </div>

            {/* RIGHT FAR */}
            <div className="photo photo-right photo-right-3">
              <img
                src={
                  heroImages[
                    (activeImage + 3) % heroImages.length
                  ]
                }
                alt="Sumit"
              />
            </div>

            <button
              className="slider-btn right-btn"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>

          </div>

          {/* HERO INTRO */}

          <div className="hero-intro">

            <h2>
              Hi, I'm <span>Sumit</span>, a Full-Stack Developer
              & AI/ML Enthusiast
            </h2>

            <p>
              Building real-world software with code, data,
              artificial intelligence and modern technology.
            </p>

          </div>

          {/* SOCIALS */}

          <div className="socials">

            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
            >
              <Mail size={17} />
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href={LEETCODE}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <Code2 size={17} />
            </a>

            <a
              href={HACKERRANK}
              target="_blank"
              rel="noreferrer"
              aria-label="HackerRank"
            >
              <Terminal size={17} />
            </a>

          </div>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              className="primary-btn"
              download
            >
              VIEW RESUME
              <ArrowUpRight size={16} />
            </a>

            <button
              className="secondary-btn"
              onClick={() => scrollTo("work")}
            >
              VIEW PROJECTS
              <ArrowDownRight size={16} />
            </button>

          </div>

          <div className="scroll-indicator">
            <span>↓</span>
            SCROLL TO EXPLORE
          </div>

        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section id="about" className="section about-section">

          <div className="section-number">
            01 / ABOUT
          </div>

          <div className="about-grid">

            <div>
              <span className="eyebrow">
                BUILDER · ENGINEER · LEARNER
              </span>

              <h2 className="section-title">
                Building across
                <span> code, data & AI.</span>
              </h2>
            </div>

            <div className="about-copy">

              <p className="lead">
                I'm <strong>Sumit Ganesh Ade</strong>, a Computer
                Science Engineering student focused on building
                practical software across Full-Stack Development,
                AI/ML, Data Analytics, App Development and Cloud.
              </p>

              <p>
                I enjoy taking an idea from a rough concept to a
                working product — designing interfaces, building
                APIs, connecting databases, training models,
                analyzing data and deploying applications.
              </p>

              <p>
                My portfolio represents an evolving collection of
                products, experiments, learning projects and
                technology explorations across multiple domains.
              </p>

              <div className="stats-row">

                <div className="stat">
                  <strong>100+</strong>
                  <span>BUILDS / EXPERIMENTS</span>
                </div>

                <div className="stat">
                  <strong>6+</strong>
                  <span>CORE DOMAINS</span>
                </div>

                <div className="stat">
                  <strong>2028</strong>
                  <span>EXPECTED GRADUATION</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            STACK
        ================================================= */}

        <section id="stack" className="section stack-section">

          <div className="section-number">
            02 / MY STACK
          </div>

          <div className="section-heading-row">

            <div>

              <span className="eyebrow">
                TECHNOLOGIES · TOOLS · SKILLS
              </span>

              <h2 className="section-title">
                My <span>technical stack.</span>
              </h2>

            </div>

            <p className="section-description">
              A growing technical toolkit across product
              development, intelligent systems, data and cloud.
            </p>

          </div>

          <div className="stack-grid">

            {stackGroups.map((group) => (

              <article
                className="stack-card"
                key={group.title}
              >

                <div className="stack-card-top">

                  <div className="stack-icon">
                    {group.icon}
                  </div>

                  <span>
                    {String(group.items.length).padStart(2, "0")}
                  </span>

                </div>

                <h3>{group.title}</h3>

                <div className="stack-items">

                  {group.items.map((item) => (

                    <span key={item}>
                      <i />
                      {item}
                    </span>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =================================================
            WORK
        ================================================= */}

        <section id="work" className="section work-section">

          <div className="section-number">
            03 / SELECTED WORK
          </div>

          <div className="work-heading">

            <div>

              <span className="eyebrow">
                SELECTED BUILDS
              </span>

              <h2 className="section-title">
                Six projects.
                <span> Many domains.</span>
              </h2>

            </div>

            <div className="project-counter">
              <strong>100+</strong>
              <span>BUILDS / EXPERIMENTS</span>
            </div>

          </div>

          <div className="domain-strip">

            {domains.map((domain) => (
              <span key={domain}>
                <i />
                {domain}
              </span>
            ))}

          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-card-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                <div className="project-icon">
                  <Code2 size={25} />
                </div>

                <span className="project-eyebrow">
                  {project.eyebrow}
                </span>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-stack">

                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}

                </div>

                <div className="project-links">

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={15} />
                      CODE
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Globe2 size={15} />
                      LIVE
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                </div>

              </article>

            ))}

          </div>

          <div className="work-footer">

            <span>
              100+ builds / experiments across various domains
            </span>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE GITHUB
              <ArrowUpRight size={15} />
            </a>

          </div>

        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-number">
            04 / EXPERIENCE
          </div>

          <div className="section-heading-row">

            <div>

              <span className="eyebrow">
                LEARNING · BUILDING · SHIPPING
              </span>

              <h2 className="section-title">
                The journey
                <span> so far.</span>
              </h2>

            </div>

            <p className="section-description">
              Experience built through internships, projects,
              technical learning and continuous experimentation.
            </p>

          </div>

          <div className="timeline">

            {experience.map((item, index) => (

              <article
                className="timeline-item"
                key={`${item.year}-${item.title}`}
              >

                <div className="timeline-year">
                  {item.year}
                </div>

                <div className="timeline-line">
                  <span />
                </div>

                <div className="timeline-content">

                  <div className="timeline-icon">
                    {item.icon}
                  </div>

                  <div>

                    <div className="timeline-meta">
                      <span>{item.tag}</span>
                      <span>{item.company}</span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-glow" />

          <div className="section-number">
            05 / CONTACT
          </div>

          <div className="contact-heading">

            <span className="eyebrow">
              HAVE AN IDEA? / NEED A DEVELOPER?
            </span>

            <h2>
              LET'S
              <span> BUILD IT.</span>
            </h2>

            <p>
              Looking for an intern, developer, collaborator or
              someone to help turn an idea into a real product?
              Send me a message.
            </p>

          </div>

          <div className="contact-grid">

            {/* LEFT INFO */}

            <div className="contact-info">

              <div className="contact-card">

                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <span>EMAIL</span>

                  <a href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </div>

              </div>

              <div className="contact-card">

                <div className="contact-card-icon">
                  <Globe2 size={22} />
                </div>

                <div>
                  <span>WEBSITE</span>

                  <a
                    href={DOMAIN}
                    target="_blank"
                    rel="noreferrer"
                  >
                    sumit18x.dev
                  </a>
                </div>

              </div>

              <div className="contact-card">

                <div className="contact-card-icon">
                  <Linkedin size={22} />
                </div>

                <div>
                  <span>LINKEDIN</span>

                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me ↗
                  </a>
                </div>

              </div>

              <div className="availability">

                <span className="availability-dot" />

                <div>
                  <strong>
                    AVAILABLE FOR OPPORTUNITIES
                  </strong>

                  <p>
                    Internships · Freelance · Projects ·
                    Collaboration
                  </p>
                </div>

              </div>

            </div>

            {/* FORM */}

            <form
              className="contact-form"
              action="https://formsubmit.co/sumitade324@gmail.com"
              method="POST"
              onSubmit={handleFormSubmit}
            >

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact — Sumit18X"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="form-row">

                <label>
                  <span>YOUR NAME</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>

                <label>
                  <span>EMAIL ADDRESS</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

              </div>

              <label>
                <span>COMPANY / ORGANIZATION</span>

                <input
                  type="text"
                  name="company"
                  placeholder="Company or organization"
                />
              </label>

              <label>
                <span>SUBJECT</span>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project / Internship / Collaboration"
                  required
                />
              </label>

              <label>
                <span>MESSAGE</span>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your idea, project or opportunity..."
                  required
                />
              </label>

              <button
                type="submit"
                className="submit-button"
              >
                <Send size={17} />

                {formStatus || "SEND MESSAGE"}

                <ArrowUpRight size={16} />
              </button>

              <small className="form-note">
                Your message will be sent directly to
                {` ${EMAIL}`}.
              </small>

            </form>

          </div>

        </section>

      </main>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer>

        <div className="footer-brand">
          <span className="brand-box">SA</span>

          <span>
            SUMIT<span>18X</span>
          </span>
        </div>

        <div className="footer-center">
          BUILT WITH CODE · DATA · AI
        </div>

        <div className="footer-links">

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>

          <a href={`mailto:${EMAIL}`}>
            EMAIL
          </a>

        </div>

      </footer>

    </div>
  );
}

/* =========================================================
   RENDER
========================================================= */

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);