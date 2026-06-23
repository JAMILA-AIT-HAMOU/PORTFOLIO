import ProjectCard from "../components/ProjectCard";
import screenShot1 from "../assets/projectsScreen/Memory Card Game.png"
import screenShot2 from "../assets/projectsScreen/Currency Converter.png"
import screenShot3 from "../assets/projectsScreen/Event RSVP Form.png"
import screenShot4 from "../assets/projectsScreen/Tic-Tac-Toe-Game.png"
import screenShot5 from "../assets/projectsScreen/Dental-website.png"
import screenShot6 from "../assets/projectsScreen/Eco Brew Page.png"
import screenShot7 from "../assets/projectsScreen/React Analytics Dashboard.png"
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
                  imgSrc={screenShot7}
                  title="React Analytics Dashboard"
                  descreption="A responsive dashboard built with React featuring interactive charts, dark mode, activity tracking, search and filtering, and collapsible sidebar." 
                  github="https://github.com/JAMILA-AIT-HAMOU/Event-RSVP-Form" 
                  demo="https://jamila-ait-hamou.github.io/Dashboard-Page/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>

                  <ProjectCard
                  imgSrc={screenShot5}
                  title="Dental Prosthetist Website"
                  descreption="A responsive portfolio websie designed for a dental protsthetist to showcase servises and professional work." 
                  github="https://github.com/JAMILA-AIT-HAMOU/PORTFOLIO-PROTHESISTE-DENTAIRE" 
                  demo="https://jamila-ait-hamou.github.io/PORTFOLIO-PROTHESISTE-DENTAIRE/#"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}/>

                  <ProjectCard
                  imgSrc={screenShot2}
                  title="Currency Converter"
                  descreption="A React application that converts currencies in real time using an external exchange rate API" 
                  github="https://github.com/JAMILA-AIT-HAMOU/Currency-Converter" 
                  demo="https://jamila-ait-hamou.github.io/Currency-Converter/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>
            
            <ProjectCard
                  imgSrc={screenShot1}
                  title="Memory Card Game"
                  descreption="A React memory game where players flip cards to find matching pairs while managing game state and dynamic UI updates."
                  github="https://github.com/JAMILA-AIT-HAMOU/Memory-Card-Game" 
                  demo="https://jamila-ait-hamou.github.io/Memory-Card-Game/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>

            
            
            <ProjectCard
                  imgSrc={screenShot3}
                  title="Event RSVP Form"
                  descreption="A responsive event registration from that handles user input and form validation with a clean UI." 
                  github="https://github.com/JAMILA-AIT-HAMOU/Event-RSVP-Form" 
                  demo="https://jamila-ait-hamou.github.io/Event-RSVP-Form/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>

            <ProjectCard
                  imgSrc={screenShot6}
                  title="EcoBrew Product Landing Page"
                  descreption="A modern product landing page built using HTML and CSS using responsive layout techniques and CSS Grid." 
                  github="https://github.com/JAMILA-AIT-HAMOU/EcoBrew-landing-page" 
                  demo="https://jamila-ait-hamou.github.io/EcoBrew-landing-page/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  />

            <ProjectCard
                  imgSrc={screenShot4}
                  title="Tic Tac Toe Game"
                  descreption="A classic Tic Tac Toe game built with JavaScript featuring turn-based gameplay and win detection logic." 
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