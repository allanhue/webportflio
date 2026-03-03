import React from "react";
import { motion } from "framer-motion";

function Cert() {
  const skillCategories = [
    {
      title: "Programming & Languages",
      skills: [
        "Python (Pandas, NumPy, Matplotlib, Scikit-learn)",
        "JavaScript",
        "SQL (PostgreSQL, Query Optimization)",
        "Go (Goroutines, Web Services)"
      ],
    },
    {
      title: "Frameworks & Platforms",
      skills: [ 
        "Frontend: TypeScript, Tailwind CSS",
        "Backend: Go, FastAPI",
        "Zoho Ecosystem: Zoho Catalyst, Suite ERP",
        "Cloud: GCP",
      ],
    },
    {
      title: "Specializations & Practices",
      skills: [
        "Data Science: Cleaning, Analysis, Visualization (Matplotlib, Seaborn, Plotly, Scikit-learn)",
        "DevOps: Git/GitHub, Docker, CI/CD ",
        "AI/ML: Predictive Modeling,Scikit-learn (Learning)",
        "Soft Skills: Agile Collaboration, Problem-Solving, Communication",
      ],
    },
  ];

  return (
    <div
      className="container"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      {/* Intro Section */}
      <motion.div
        className="intro-section card"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          padding: "1.5rem",
          backgroundColor: "var(--background)",
          borderRadius: "12px",
          border: "1px solid var(--border-color)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            color: "var(--text-primary)",
            fontSize: "1.2rem",
            fontWeight: 500,
            marginBottom: "0.5rem",
          }}
        >
          Data Science Practitioner | Advancing AI in Healthcare & FinTech
        </p>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          Skilled in transforming data insights into scalable business solutions
          through modern engineering and machine learning practices.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            whileHover={{ y: -5 }}
            style={{
              backgroundColor: "var(--background)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
            }}
          >
            <h3
              style={{
                color: "var(--accent)",
                fontSize: "1.3rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {category.title}
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "1.2rem",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
              }}
            >
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "0.6rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cert;
