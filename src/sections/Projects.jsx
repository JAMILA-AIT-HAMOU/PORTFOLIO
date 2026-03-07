import ProjectCard from "../components/ProjectCard";
import screenShot1 from "../assets/projectsScreen/memory-card-game.png"
import screenShot2 from "../assets/projectsScreen/currency-converter.png"
import screenShot3 from "../assets/projectsScreen/event-rsvp-form.png"
import screenShot4 from "../assets/projectsScreen/tic-tac-toe.png"
import screenShot5 from "../assets/projectsScreen/dental-website.png"
import screenShot6 from "../assets/projectsScreen/ecobrew.png"
import HTMLIcon from "../assets/stack/HTML.png"
import CSSIcon from "../assets/stack/CSS.png"
import JavaScriptIcon from "../assets/stack/JavaScript.png"
import ReactIcon from "../assets/stack/React.png"

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
            demo="https://jamila-ait-hamou.github.io/Memory-Card-Game/"
            icon1={HTMLIcon}
            icon2={CSSIcon}
            icon3={JavaScriptIcon}
            icon4={ReactIcon}/>

      <ProjectCard
            imgSrc={screenShot5}
            title="Dental Prosthetist Website"
            descreption="A fully responsive portfolio website built from scratch using HTML and CSS." 
            github="https://github.com/JAMILA-AIT-HAMOU/PORTFOLIO-PROTHESISTE-DENTAIRE" 
            demo="https://jamila-ait-hamou.github.io/PORTFOLIO-PROTHESISTE-DENTAIRE/#"
            icon1={HTMLIcon}
            icon2={CSSIcon}
            icon3={JavaScriptIcon}/>
            
      

      <ProjectCard
            imgSrc={screenShot2}
            title="Currency Converter"
            descreption="API-based app that converts currency in real time." 
            github="https://github.com/JAMILA-AIT-HAMOU/Currency-Converter" 
            demo="https://jamila-ait-hamou.github.io/Currency-Converter/"
            icon1={HTMLIcon}
            icon2={CSSIcon}
            icon3={JavaScriptIcon}
            icon4={ReactIcon}/>
      
      <ProjectCard
            imgSrc={screenShot3}
            title="Event RSVP Form"
            descreption="Interactive form built with JavaScript." 
            github="https://github.com/JAMILA-AIT-HAMOU/Event-RSVP-Form" 
            demo="https://jamila-ait-hamou.github.io/Event-RSVP-Form/"
            icon1={HTMLIcon}
            icon2={CSSIcon}
            icon3={JavaScriptIcon}
            icon4={ReactIcon}/>

      <ProjectCard
            imgSrc={screenShot6}
            title="EcoBrew Product Landing Page"
            descreption="A modern product landing page built using HTML and CSS." 
            github="https://github.com/JAMILA-AIT-HAMOU/EcoBrew-landing-page" 
            demo="https://jamila-ait-hamou.github.io/EcoBrew-landing-page/"
            icon1={HTMLIcon}
            icon2={CSSIcon}
            />

      <ProjectCard
            imgSrc={screenShot4}
            title="Tic Tac Toe Game"
            descreption="Interactive game built with React." 
            github="https://github.com/JAMILA-AIT-HAMOU/Tic-Tac-Toe-Game" 
            demo="https://jamila-ait-hamou.github.io/Tic-Tac-Toe-Game/"
            icon1={HTMLIcon}
            icon2={CSSIcon}
            icon3={JavaScriptIcon}
            icon4={ReactIcon}/>
      </div>
    </section>
  )
}
export default Projects;