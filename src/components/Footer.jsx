import {FaGithub, FaLinkedin, FaEnvelope, FaTwitter} from "react-icons/fa"

function Footer(){
  return(
    <footer style={{padding: "40px 0", textAlign:"center", marginTop:"60px"}}>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/jamila-ait-hamou-810b10336/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/JAMILA-AIT-HAMOU/" target="_blank"><FaGithub /></a>
        <a href="mailto:a.hamou.jamila@gmail.com"><FaEnvelope /></a>
        <a href="https://x.com/JAMILAX129629" target="_blank"><FaTwitter /></a>

      </div>
      © {new Date().getFullYear()} Jamila Ait Hamou — Built with React
    </footer>
  )
}

export default Footer