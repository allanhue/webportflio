import React, { useState, useEffect } from 'react';
import '../css/style.css';
import '../css/interests.css';
import { FaBrain, FaDatabase, FaChartLine, FaFlask } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Interests = () => {
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const interests = [
    {
      title: "Data Science",
      icon: FaBrain,
      description:
        "Experienced in data analysis, visualization and predictive modeling. Successfully completed Kaggle projects including financial fraud detection achieving 92% accuracy. Passionate about extracting meaningful insights from complex datasets.",
      focus: "Data Analysis, Predictive Modeling, Data Visualization",
      status: "Active",
      color: "#10b981",
      link: "https://www.kaggle.com/allanyengsnxmwas",
      linkText: "View Kaggle Profile"
    },
    {
      title: "Feature Engineering",
      icon: FaChartLine,
      description:
        "Specializing in feature engineering - on art  of transforming raw data into meaningful features that improve model performance. This is my primary area am developing into  where I combine domain knowledge with statistical techniques to create powerful predictive features.",
      focus: "Feature Selection, Transformation, Domain-Specific Features",
      status: "Specialization Focus",
      color: "#3b82f6"
    },
    // {
    //   title: "AI Engineering",
    //   icon: FaBrain,
    //   description:
    //     "Passionate about building intelligent systems and leveraging artificial intelligence to solve real-world problems. Continuously learning advanced AI techniques and staying updated with the latest developments in machine learning, deep learning and neural networks.",
    //   focus: "Deep Learning, Neural Networks, Model Optimization",
    //   status: "Active Learning",
    //   color: "#ff5555"
    // }
  ];

  // const learningGoals = [
  //   "Advanced feature engineering techniques for high-dimensional data",
  //   "Deep learning architectures for tabular data",
  //   "Model interpretability and explainability",
  //   "Production deployment of ML models",
  //   "Advanced statistics and probability theory"
  // ];

  return (
    <div
      className="container"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '1rem' : '2rem'
      }}
    >
 
      {/* <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: isMobile ? '1rem' : '1.1rem',
          marginBottom: '3rem',
          textAlign: 'center'
        }}
      >
        My journey spans Software Engineering, Data Science and AI Engineering, driven by continuous learning and innovation. I am continuously building expertise in feature engineering while expanding my knowledge across the ML/AI spectrum.
      </p> */}

      {/* Interests Grid */}
      <br />
      <br />
  
      <div
        className="interests-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isMobile ? '1rem' : '2rem',
          marginBottom: '3rem'
        }}
      >
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <div
              key={index}
              className="card animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: isMobile ? '1rem' : '2rem',
                boxShadow: '0 2px 10px var(--shadow-color)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: '1rem',
                  gap: isMobile ? '0.75rem' : '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      backgroundColor: `${interest.color}20`,
                      color: interest.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}
                  >
                    <Icon />
                  </div>
                  <h2
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: isMobile ? '1.2rem' : '1.4rem',
                      margin: 0
                    }}
                  >
                    {interest.title}
                  </h2>
                </div>

                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    backgroundColor:
                      interest.status === 'Active' || interest.status === 'Active Learning'
                        ? '#10b981'
                        : interest.status === 'Specialization Focus'
                        ? 'var(--accent)'
                        : '#f59e0b',
                    color: 'var(--background)'
                  }}
                >
                  {interest.status}
                </span>
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                {interest.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}
                >
                  Focus Areas:
                </h4>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}
                >
                  {interest.focus}
                </p>
              </div>

              {interest.link && (
                <a
                  href={interest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: isMobile ? '0.6rem 1rem' : '0.75rem 1.5rem',
                    backgroundColor: interest.color,
                    color: 'var(--background)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {interest.linkText} <HiOutlineExternalLink />
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* Learning Goals */}
    

      {/* Footer Focus */}
      <div className="card" style={{ marginTop: '2rem', textAlign: 'center', padding: isMobile ? '1rem' : '1.5rem' }}>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: isMobile ? '1rem' : '1.1rem',
            lineHeight: '1.8',
            margin: 0
          }}
        >
          <strong style={{ color: 'var(--accent)' }}>Current Focus:</strong> Diving deep into feature engineering
          techniques, applying them to real-world Kaggle competitions and continuously improving algorithmic
          problem-solving skills through LeetCode and hackerrank problems.
        </p>
      </div>
    </div>
  );
};

export default Interests;
