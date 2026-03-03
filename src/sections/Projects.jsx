import ProjectCard from "../components/ProjectCard";
import screenShot1 from "../assets/projectsScreen/memory-card-game.png"
import screenShot2 from "../assets/projectsScreen/currency-converter.png"
import screenShot3 from "../assets/projectsScreen/event-rsvp-form.png"

function Projects(){
  return(
    <section id="projects">
    
      <h2>Projects</h2>
      <div>
        
      <ProjectCard
            imgSrc={screenShot1}
            title="Memory Card Game"
            descreption="React memory game with timer, sound effects, and win/lose logic."
            github="https://github.com/JAMILA-AIT-HAMOU/Memory-Card-Game" 
            demo="https://jamila-ait-hamou.github.io/Memory-Card-Game/"/>

      <ProjectCard
            imgSrc={screenShot2}
            title="Currency Converter"
            descreption="API-based app that converts currency in real time." 
            github="https://github.com/JAMILA-AIT-HAMOU/Currency-Converter" 
            demo="https://jamila-ait-hamou.github.io/Currency-Converter/"/>
      
      <ProjectCard
            imgSrc={screenShot3}
            title="Event RSVP Form"
            descreption="Interactive form built with JavaScript." 
            github="https://github.com/JAMILA-AIT-HAMOU/Event-RSVP-Form" 
            demo="https://jamila-ait-hamou.github.io/Event-RSVP-Form/"/>
      </div>
    </section>
  )
}
export default Projects;