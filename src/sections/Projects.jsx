import ProjectCard from "../components/ProjectCard";

function Projects(){
  return(
    <section id="projects">
    
      <h2>Projects</h2>
      <ProjectCard
            title="Memory Card Game"
            descreption="React memory game with timer, sound effects, and win/lose logic."
            github="https://github.com/JAMILA-AIT-HAMOU/Memory-Card-Game" 
            demo="https://jamila-ait-hamou.github.io/Memory-Card-Game/"/>

      <ProjectCard
            title="Currency Converter"
            descreption="API-based app that converts currency in real time." 
            github="https://github.com/JAMILA-AIT-HAMOU/Currency-Converter" 
            demo="https://jamila-ait-hamou.github.io/Currency-Converter/"/>
      
      <ProjectCard
            title="Event RSVP Form"
            descreption="Interactive form built with JavaScript." 
            github="https://github.com/JAMILA-AIT-HAMOU/Event-RSVP-Form" 
            demo="https://jamila-ait-hamou.github.io/Event-RSVP-Form/"/>
    </section>
  )
}
export default Projects;