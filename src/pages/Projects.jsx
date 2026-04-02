import React, { useState, useEffect } from 'react';
import '../css/style.css';

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTiny, setIsTiny] = useState(false);

  // Detect small and very small screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      setIsTiny(window.matchMedia('(max-width: 480px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      title: "Financial Fraud Detection",
      description:
        "Kaggle competition project using Python to identify money laundering patterns in 50k+ transaction records. Achieved 92% accuracy with Random Forest model.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Numpy", "Data Visualization"],
      githubLink: "https://github.com/allanhue/data-vizualisation",
      liveLink: "https://www.kaggle.com/datasets",
      status: "Completed"
    },
    {
      title: "SaaS Product Featuring CRM and Transaction Management",
      description:
        "A comprehensive SaaS platform integrating CRM and transaction management functionalities using FastAPI (Python) and React JavaScript frontend for automation.",
      technologies: ["Python", "NeonDB", "JavaScript", "PostgreSQL"],
      status: "In Development"
    },
    {
      title: "Developer Portfolio Website",
      description:
        "A dynamic showcase of my full-stack capabilities, built with React and modern CSS. Features responsive design, project case studies, and dark/light theme toggle.",
      technologies: ["React", "TailwindCSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/allanhue/LatestportfolioBennie",
      liveLink: "#",
      status: "Live"
    }
  ];

  return (
    <div
      className="container"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isTiny ? '0.8rem' : isMobile ? '1.2rem' : '2rem'
      }}
    >
  

      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: isTiny ? '0.95rem' : '1.05rem',
          marginBottom: '3rem',
          textAlign: 'center',
          lineHeight: '1.6'
        }}
      >
        A showcase of my development projects — from application development to data science solutions.
      </p>

      <div
        className="skills-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isTiny ? '1rem' : '1.5rem'
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="card animate-fade-in"
            style={{
              animationDelay: `${index * 0.1}s`,
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: isTiny ? '1rem' : isMobile ? '1.25rem' : '2rem',
              boxShadow: '0 2px 10px var(--shadow-color)',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Title & Status */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}
            >
              <h2
                style={{
                  color: 'var(--accent)',
                  fontSize: isTiny ? '1.1rem' : '1.4rem',
                  margin: 0
                }}
              >
                {project.title}
              </h2>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  backgroundColor:
                    project.status === 'Live'
                      ? 'var(--accent)'
                      : project.status === 'Completed'
                      ? '#28a745'
                      : '#ffc107',
                  color: 'var(--background)'
                }}
              >
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: isTiny ? '0.9rem' : '1rem',
                marginBottom: '1.5rem'
              }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem'
                }}
              >
                Technologies:
              </h4>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: '0.3rem 0.6rem',
                      backgroundColor: 'var(--card-bg)',
                      color: 'var(--accent)',
                      borderRadius: '6px',
                      fontSize: isTiny ? '0.75rem' : '0.85rem',
                      border: '1px solid var(--border-color)',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '1rem'
              }}
            >
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: isTiny ? '0.6rem 1rem' : '0.75rem 1.5rem',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--background)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    fontSize: isTiny ? '0.85rem' : '0.9rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(100, 255, 218, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  View Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: isTiny ? '0.6rem 1rem' : '0.75rem 1.5rem',
                    border: '2px solid var(--accent)',
                    color: 'var(--accent)',
                    backgroundColor: 'transparent',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    fontSize: isTiny ? '0.85rem' : '0.9rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'var(--accent)';
                    e.target.style.color = 'var(--background)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--accent)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
