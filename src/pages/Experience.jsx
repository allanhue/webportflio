import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Redian Software Global",
      period: "2025 - Present",
      details: [
        "Design and deploy custom  solutions using Catalyst,Creator backend and APIs.",
        "Integrate saas applications with third-party APIs (Payment gateways, Google Workspace, Custom Apps, Etims Integration) to enhance data synchronization.",
        "Develop RESTful APIs for Zoho extensions, improving client reporting capabilities.",
        "Build payroll systems via zoho creator and  automation scripting  in Saas applications and erp systems",
        "Collaborate with cross-functional teams in Agile projects, delivering applications on schedule.",
        "Optimize code quality through peer reviews and CI/CD best practices (GitHub Actions).",
      ],
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Fiverr",
      period: "Aug 2024 - Present",
      details: [
        "Built  full-stack web apps (React/Node.js) with 95% client satisfaction, including an e-commerce solution optimized for peak loads.",
        "Enhanced code efficiency using AI-assisted optimization (GitHub Copilot for debugging).",
        "Implemented responsive UI/UX with Tailwind CSS, improving mobile conversion and experience.",
        "Automated client workflows through custom API integrations (Daraja API, Firebase).",
        "Maintained a 100% project delivery rate using Git/GitHub for version control and versioned releases.",
      ],
    },
  ];

  return (
    <div
      className="container"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      <br />
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            style={{
              backgroundColor: "var(--background)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "1.5rem 1.8rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.4rem",
                color: "var(--accent)",
                marginBottom: "0.5rem",
              }}
            >
              {exp.title}
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1rem",
                fontWeight: 500,
              }}
            >
              {exp.company} <span style={{ color: "var(--accent)" }}>|</span>{" "}
              {exp.period}
            </p>

            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "1.2rem",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                fontSize: "1rem",
              }}
            >
              {exp.details.map((point, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "0.6rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
