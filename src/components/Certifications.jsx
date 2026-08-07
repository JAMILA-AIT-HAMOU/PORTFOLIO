import certification1 from "../assets/certification/Responsive..cert.png"
import certification2 from "../assets/certification/JavaScript...cert.png"
import certification3 from "../assets/certification/Frontend...cert.png"

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        <div className="cert-card">
          <h3>Responsive Web Design</h3>
          <p>freeCodeCamp — 2025</p>
          <img src={certification1} alt="Responsive Web Design certification" className="cert1" />
          <a 
            href="https://www.freecodecamp.org/certification/JAMILAAITHAMOU/responsive-web-design" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Credential
          </a>
        </div>

        <div className="cert-card">
          <h3>Javascript Algorithms & Data Structures</h3>
          <p>freeCodeCamp — 2025</p>
          <img src={certification2} alt="Javascript Algorithms & Data Structures certification" />
          <a 
            href="https://www.freecodecamp.org/certification/JAMILAAITHAMOU/javascript-algorithms-and-data-structures-v8" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Credential
          </a>
        </div>

        <div className="cert-card">
          <h3>Front-End Development Libraries</h3>
          <p>freeCodeCamp — 2026</p>
          <img src={certification3} alt="Front-End Development Libraries certification" />
          <a 
            href="https://www.freecodecamp.org/certification/jamilaaithamou/front-end-development-libraries-v9" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Credential
          </a>
        </div>

      </div>
    </section>
  );
}
export default Certifications;
