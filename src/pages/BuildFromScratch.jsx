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


function BuildFromScratch(){
  return(
    <section id="projects">
      <h2>Projects Built From Scratch</h2>
      <div>
            <ProjectCard
                  imgSrc={screenShot7}
                  title="React Analytics Dashboard"
                  description="A responsive analytics dashboard built with React, featuring interactive charts, dark mode, activity tracking, search and filtering, and collapsible sidebar." 
                  github="https://github.com/JAMILA-AIT-HAMOU/Dashboard-Page"
                  demo="https://jamila-ait-hamou.github.io/Dashboard-Page/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>

                  <ProjectCard
                  imgSrc={screenShot5}
                  title="Dental Prosthetist Website"
                  description="A responsive portfolio websie for a dental protsthetist, designed to showcase professional services and work." 
                  github="https://github.com/JAMILA-AIT-HAMOU/PORTFOLIO-PROTHESISTE-DENTAIRE" 
                  demo="https://jamila-ait-hamou.github.io/PORTFOLIO-PROTHESISTE-DENTAIRE/#"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}/>

                  <ProjectCard
                  imgSrc={screenShot2}
                  title="Currency Converter"
                  description="A React application that converts currencies using  exchange rates fetched from an external API." 
                  github="https://github.com/JAMILA-AIT-HAMOU/Currency-Converter" 
                  demo="https://jamila-ait-hamou.github.io/Currency-Converter/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>
            
            <ProjectCard
                  imgSrc={screenShot1}
                  title="Memory Card Game"
                  description="A React memory game where players flip cards to find matching pairs, with game state managed through React hooks."
                  github="https://github.com/JAMILA-AIT-HAMOU/Memory-Card-Game" 
                  demo="https://jamila-ait-hamou.github.io/Memory-Card-Game/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>

            
            
            <ProjectCard
                  imgSrc={screenShot3}
                  title="Event RSVP Form"
                  description="A responsive event registration form with user input handling and form validation." 
                  github="https://github.com/JAMILA-AIT-HAMOU/Event-RSVP-Form" 
                  demo="https://jamila-ait-hamou.github.io/Event-RSVP-Form/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  icon3={JavaScriptIcon}
                  icon4={ReactIcon}/>

            <ProjectCard
                  imgSrc={screenShot6}
                  title="EcoBrew Product Landing Page"
                  description="A responsive product landing page built with HTML and CSS, using CSS Grid to create a clean, modern layout." 
                  github="https://github.com/JAMILA-AIT-HAMOU/EcoBrew-landing-page" 
                  demo="https://jamila-ait-hamou.github.io/EcoBrew-landing-page/"
                  icon1={HTMLIcon}
                  icon2={CSSIcon}
                  />

            <ProjectCard
                  imgSrc={screenShot4}
                  title="Tic Tac Toe Game"
                  description="A classic Tic-Tac-Toe game featuring turn-based gameplay and win detection." 
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

export default BuildFromScratch;