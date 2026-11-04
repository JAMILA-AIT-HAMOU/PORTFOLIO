import "./RedesignProjects.css"
import LallaKhadija from "../assets/RedesignScreen/Lalla-khadija.png"
import LallaKhadijaOriginal from "../assets/RedesignScreen/Lalla-khadija-original.png"
import LallaKhadijaRedesign from "../assets/RedesignScreen/Lalla-khadija-redesign.png"

import HTMLIcon from "../assets/stack/HTML.png"
import CSSIcon from "../assets/stack/CSS.png"
import JavaScriptIcon from "../assets/stack/JavaScript.png"
import ReactIcon from "../assets/stack/React.png"


function RedesignProjects(){
  return(
    <section id="redesign-projects" className="redesign-page">
      <h2>Website Redesigns</h2>
      <div className="redesign-header">
        <p className="redesigns-intro">
          Reimagining existing websites with modern design, improved usability, and responsive experiences.
        </p>
      </div>

      <div className="redesign-cards">

        

        <article className="redesign-card">
          <h2 className="redesign-title">Lalla Khadija's Sweets &amp; Goodies</h2>

          <div className="redesign-main">
            <div className="redesign-image">
              <img src={LallaKhadija} alt="Lalla khadija's Sweets and Goodies website redesign" />
              <p className="project-type">
                INDEPENDENT CONCEPT REDESIGN
              </p>
            </div>
            <div className="redesign-content">
              <p className="redesign-description">
                A website redesign concept for a Moroccan sweets business, focused on creating a more modern, elegant, and mobile-friendly experience while preserving the brand's identity.
              </p>

              <h3>Key Improvements</h3>
              <ul className="redesign-features">
                <li>Responsive layout for mobile and desktop</li>
                <li>Clearer product presentation and navigation</li>
                <li>Improved user experience and contact flow</li>
                <li>Elegant design inspired by Moroccan sweets</li>
              </ul>
              <div className="redesign-tech">
                <span><img src={ReactIcon} alt="ReactIcon" /></span>
                <span><img src={JavaScriptIcon} alt="JavaScriptIcon" /></span>
                <span><img src={CSSIcon} alt="CSSIcon" /></span>
                <span><img src={HTMLIcon} alt="HTMLIcon" /></span>
              </div>
              <div className="redesign-actions">
                <a href="https://www.lallakhadijasweets.com/" target="_blank" rel="noopener noreferrer">Live Website↗</a>

                <a href="https://github.com/JAMILA-AIT-HAMOU/Lalla-Khadija-Website" target="_blank" rel="noopener noreferrer">Source Code↗</a>

                <a href="https://lalla-khadija-website.vercel.app" target="_blank" rel="noopener noreferrer">Redesign Website↗</a>
              </div>
            </div>
          </div>
          <div className="redesign-comparison">
            <div className="comparison-image">
              <img src={LallaKhadijaOriginal} alt="Original Lalla Khadija website" />
              <span>ORIGINAL WEBSITE</span>
            </div>
            <div className="comparison-image">
              <img src={LallaKhadijaRedesign} alt="Redesigned Lalla Khadija Website" />
              <span>MY REDESIGN</span>
            </div>
          </div>
        </article>
      </div>

    </section>
  )
}


export default RedesignProjects;