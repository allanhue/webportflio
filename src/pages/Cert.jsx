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
        "Erp Ecosystem: Zoho",
        "Cloud: GCP",
      ],
    },
    {
      title: "Specializations & Practices",
      skills: [
        "Data Science / ML: Cleaning, Analysis, Visualization (Matplotlib, Seaborn, Plotly, Scikit-learn)",
        "DevOps: Git/GitHub, CI/CD ",
        // "AI/ML: Predictive Modeling,Scikit-learn (Learning)",
        "Interest: Data Engineering, AI/ML Research",
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
