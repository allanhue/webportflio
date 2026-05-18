import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import '../css/footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* <div className="footer-section">
            <p className="footer-tagline">Data Practitioner</p>
            <a className="footer-cta" href="mailto:allanmwangi329@gmail.com">
              Let's Work Together
            </a>
          </div> */}

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-social">
              <a href="https://github.com/allanhue" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/allan-mwangi-626902302/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:allanmwangi329@gmail.com" className="social-icon" title="Email" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Allan Mwangi. All rights reserved.
          </p>
          <button className="scroll-to-top" onClick={scrollToTop} title="Back to top" aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
