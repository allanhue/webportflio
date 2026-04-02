import React from "react";
import photo from "../assets/passport allan.jpg";
import ContactForm from "../components/ContactForm";

function About() {
  return (

    <div
      className="container"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      {/*  About Section  */}
      <section
        className="about-section"
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <br />
        
        <img
          src={photo}
          alt="Allan Mwangi"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid var(--accent)",
            marginBottom: "1rem",
          }}
        />
        <h4 style={{ color: "var(--accent)", fontStyle: "italic" }}>
          Who am I?
        </h4>

        <div
          className="about"
          id="about"
          style={{
            textAlign: "left",
            marginTop: "1.5rem",
            lineHeight: "1.7",
            color: "var(--text-secondary)",
          }}
        >
          <p>
            I’m <strong>Allan Mwangi</strong>, a passionate{" "}
            <strong>Software Engineer</strong> and{" "}
            <strong>Data Science Practitioner</strong> with a focus on building
            data-driven and scalable solutions. Certified by{" "}
            <strong>IBM (Coursera)</strong> and <strong>Kaggle</strong>, I
            specialize in <strong>Python, JavaScript</strong> and{" "}
            <strong>cloud technologies</strong> within the Zoho ecosystem and GCP. I
            have hands-on experience designing intelligent systems and
            developing  applications that transform raw data into actionable insights.
          </p>

          <h3 style={{ color: "var(--accent)", marginTop: "1.5rem" }}>
            My Journey
          </h3>
          <p>
            My tech journey began with mastering <strong>Python</strong> and{" "}
            <strong>SQL</strong> through Kaggle. Later, I deepened my expertise
            in <strong>full-stack development</strong> using JavaScript,
            FastAPI and modern cloud architecture via IBM training. These
            foundations have allowed me to collaborate effectively in{" "}
            <strong>agile teams</strong> while staying ahead of industry trends.
            Today, I’m exploring the intersection of{" "}
            <strong>AI/ML applications</strong> and{" "}
            <strong>software engineering</strong>
          </p>

          <h3 style={{ color: "var(--accent)", marginTop: "1.5rem" }}>
            What Drives Me
          </h3>
          <p>
            I thrive in fast-paced environments whether it’s debugging
            late night code or optimizing  APIs. Outside of work, I’m a{" "}
            <strong>lifelong learner</strong>  enjoying reading documentation,
           <strong>articles</strong> contributing 
            to open-source projects on <strong>Kaggle</strong> and  tech forums. I also believe
            in the importance of balance  physical fitness fuels my discipline,
            focus and creativity.
          </p>

          <h3 style={{ color: "var(--accent)", marginTop: "1.5rem" }}>
            Why Work With Me
          </h3>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
              lineHeight: "1.8",
            }}
          >
            <li>
              <strong>End-to-end development expertise</strong> : from frontend
              to deployment.
            </li>
            <li>
              <strong>Data/AI proficiency</strong> : including  libraries like Pandas and frameworks like
              Scikit-learn.
            </li>
            <li>
              <strong>Collaborative mindset</strong> : comfortable in Git/GitHub
              workflows and Agile teams.
            </li>
            <li>
              <strong>Problem-solving focus</strong> : I build solutions, not
              just code.
            </li>
          </ul>

          <p>
            I bridge <strong>technical execution</strong> with{" "}
            <strong>innovative thinking</strong>  always driven by curiosity
            and impact. I’m excited to collaborate on projects that challenge me
            to grow while delivering measurable results.
          </p>

          <h4 style={{ marginTop: "1.5rem" }}>
            <strong>⭐ Check out my GitHub:</strong>{" "}
            <a
              href="https://github.com/allanhue"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              ALLANHUE
            </a>
          </h4>
        </div>
      </section>

      {/*  Contact Section */}
      <section
        className="contact-section"
        style={{
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border-color)",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
          Contact Me
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
            fontSize: "1rem",
          }}
        >
          Interested in working together or have a project idea? Let’s connect.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}

export default About;
