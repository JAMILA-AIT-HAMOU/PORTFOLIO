import profile from "../assets/profile.jpg"

function Hero(){
  return (
    <section className="hero"> 
      <div className="hero-content">
        
        <div className="hero-image">
          <img src={profile} alt="Jamila Ait Hamou" />
        </div>
        
        <div className="hero-text">
          <h1>Jamila Ait Hamou</h1>
          <h3>Front-End Developer</h3>
          <p>Focused on building responsive and user-friendly web applications with React and JavaScript.</p>
          <button onClick={()=>{
            document.getElementById("projects").scrollIntoView({behavior:"smooth"})
          }}>View Projects</button>
            
          <a href="./Jamila_Ait_Hamou_Frontend_Developer.pdf"
          download
           className="download-btn">Download CV</a>
         
        </div>
      </div>
    </section>
  )
}
export default Hero;