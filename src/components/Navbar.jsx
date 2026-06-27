import logo from "../assets/logo.jpg"
import { FaHandSparkles } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        
        <a href="#">
          <img src={logo} alt="Jamila's logo" className="logo"/>
        </a>
        <div className="connector"></div>
        <div className="hiring-card">
          <div className="avatar">
            <FaHandSparkles />
          </div>
          <h4>Hello!</h4>
          <p>Available for <br /> <span>new projects</span></p>
          <div className="feature">
            <FaCheckCircle className="check-icon"/>
            Responsive Websites
          </div>
          <div className="feature">
            <FaCheckCircle className="check-icon"/>
            React Applications
          </div>
          <a 
            href="https://www.fiverr.com/s/yvKkXoV"
            target="_blank"
            rel="noopener noreferrer"
            className="hiring-btn"
          >
            Hire Me
          </a>

        </div>
      </div>
      <ul>
        <li onClick={()=>document.getElementById("skills").scrollIntoView({behavior: "smooth"})} >Skills</li>
        <li onClick={()=>document.getElementById("projects").scrollIntoView({behavior: "smooth"})} >Projects</li>
        <li onClick={()=>document.getElementById("certifications").scrollIntoView({behavior: "smooth"})} >Certifications</li>
        <li onClick={()=>document.getElementById("contact").scrollIntoView({behavior: "smooth"})} >Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
