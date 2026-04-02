import React, { useState, useEffect } from "react";
import "../css/style.css";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import photo from "../assets/passport allan.jpg";
import {
  FaEnvelope,
  FaCode,
  FaRocket,
  FaCertificate,
  FaGraduationCap,
  FaServer,
} from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiC,
  SiTypescript,
  SiPostgresql,
  SiFastapi,
  SiSupabase,
  SiScikitlearn,
  SiRender,
  SiGo,
  SiR,
  SiGooglecloud,
  SiDebian,
} from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

/* Typewriter Component */
function TypeWriter({ text, speed = 80, delay = 400 }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const startTyping = () => {
      let i = 0;
      intervalId = setInterval(() => {
        setDisplayed(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
          setTimeout(() => setShowCursor(false), 800);
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <>
      {displayed}
      {showCursor && <span className="typewriter-cursor">|</span>}
    </>
  );
}

/* Animated Number */
function Num({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 200,
    config: { tension: 120, friction: 14 },
  });
  return <animated.span>{number.to((val) => Math.floor(val))}</animated.span>;
}

/* Home Component */
function Home() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    // { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    // { name: "R", icon: SiR, color: "#276DC3" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    // { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Debian", icon: SiDebian, color: "#A81D33" },
    // { name: "Render Cloud", icon: SiRender, color: "#46E3B7" },
    // { name: "Zoho Deluge", icon: FaServer, color: "#FF4F00" },
  ];

  const projects = [
    {
      name: "Project Management System",
      tech: "Golang, TypeScript, PostgreSQL, Tailwind CSS",
      status: "Completed",
      link: "https://project-manager-one-delta.vercel.app/",
    },
    {
      name: "Car Dealership E-Commerce",
      tech: "React, Redux, Node.js, Tailwind CSS",
      status: "Completed",
    },
    {
      name: "WhatsApp Integration",
      tech: "Zoho Deluge, REST API, JavaScript, Python",
      status: "In Progress",
    },
  ];
  
  const stats = [
    { icon: FaGraduationCap, number: 2, label: "Years of Experience", color: "#3b82f6" },
    { icon: FaCode, number: 5, label: "Projects Completed", color: "#10b981" },
    { icon: FaCertificate, number: 7, label: "Certifications Earned", color: "#f59e0b" },
    { icon: FaRocket, number: 4, label: "Technologies Mastered", color: "#ef4444" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="home-container"
    >
      {/*  Hero Section  */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="greeting">
              <span className="wave">🧑‍💻</span>
              <h1>
                Hi, I'm{" "}
                <span className="name-highlight">
                  <TypeWriter text="Allan" delay={600} speed={100} />
                </span>
              </h1>
            </div>

            <h2 className="title">
              <TypeWriter
                text="Software Engineer & Zoho/Odoo Developer"
                delay={1500}
                speed={70}
              />
            </h2>

            <p className="bio">
              Developing skills in software engineering and data science .
            </p>

            <div className="status-indicator">
              <div className="status-dot"></div>
              <span>Open to new opportunities</span>
            </div>

            <div className="cta-buttons">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
              >
                <FaRocket /> View My Work
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img
                src={photo}
                alt="Allan Mwangi"
                className="profile-image"
                loading="lazy"
              />
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                className={`stat-card ${hovered === i ? "hovered" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -5 }}
                style={{ "--accent-color": stat.color }}
              >
                <div className="stat-icon">
                  <Icon />
                </div>
                <div className="stat-number">
                  <Num n={stat.number} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h3>Tech Stack</h3>
        <div className="skills-grid">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
            <motion.div
              key={skill.name}
              className="skill-badge"
              style={{ "--skill-color": skill.color }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="skill-icon" aria-hidden="true" />
              <span>{skill.name}</span>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects-preview">
        <div className="section-header">
          <h3>Recent Projects</h3>
          <a
            href="#projects"
            className="view-all"
            onClick={(e) => {
              e.preventDefault();
              navigate("/projects");
            }}
          >
            View All <HiOutlineExternalLink />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i }}
              whileHover={{ y: -5 }}
            >
              <div className="project-header">
                <h4>{p.name}</h4>
                <a
                  href={p.link || "#"}
                  className={`project-link ${p.link ? "" : "disabled"}`}
                  target={p.link ? "_blank" : undefined}
                  rel={p.link ? "noreferrer" : undefined}
                  aria-label={
                    p.link ? `Open ${p.name}` : `No link available for ${p.name}`
                  }
                  onClick={(e) => {
                    if (!p.link) e.preventDefault();
                  }}
                >
                  <HiOutlineExternalLink />
                </a>
                <span
                  className={`status ${p.status.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="project-tech">{p.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* contact section */}
      <section className="quick-contact">
        <div className="contact-card">
          <motion.a
            href="mailto:allanmwangi329@gmail.com"
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope /> Email Me
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
