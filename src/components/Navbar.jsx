import {useEffect, useState} from "react"
import logo from "../assets/logo.jpg"
import { FaHandSparkles, FaCheckCircle } from "react-icons/fa";


function Navbar() {

  const [isScrolled, setIsScrolled]=useState(false)
  const [isCardOpen, setIsCardOpen]=useState(false)
//handleScroll
  useEffect (()=>{
    const handleScroll=()=>{
      const scrolled=window.scrollY>120;
      setIsScrolled(scrolled)

      if (!scrolled){
        setIsCardOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll,{
      passive: true,
    })
    handleScroll();
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

//handleCardOpen

  const showCard=!isScrolled || isCardOpen;
  const handleLogoClick= (event)=>{
    if (isScrolled){
      event.preventDefault();
      setIsCardOpen((prev)=>!prev)
    }
  }

  return (
    <nav>
      <div className="logo-container">
        
        <a href="#" onClick={handleLogoClick}>
          <img src={logo} alt="Jamila's logo" className="logo"/>
        </a>
        <div className={`connector ${!showCard ? "connector-hidden" : ""}`}></div>
        <div className={`hiring-card ${!showCard ? "hiring-card-hidden":""}`}
        aria-hidden={!showCard}>
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
            tabIndex={showCard ? 0 : -1}
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
