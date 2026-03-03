import logo from "../assets/logo.jpg"

function Navbar() {
  return (
    <nav>
      <a href="#"><img src={logo} alt="Jamila's logo" className="logo"/></a>
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
