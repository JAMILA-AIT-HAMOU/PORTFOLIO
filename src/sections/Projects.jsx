


import ProjectsCategoreyCard from "../components/ProjectCategoryCard";

import dashboardScreenShot from "../assets/projectsScreen/React Analytics Dashboard.png"
import dentalScreenshot from "../assets/projectsScreen/Dental-website.png"

function Projects(){
      return(
            <section id="projects">
                  <h2>Projects</h2>
                        <div className="project-categories">
                              <ProjectsCategoreyCard
                                    title="Build From Scratch"
                                    description=""
                                    image={dashboardScreenShot}
                                    link="?page=build"
                                    buttonText="View Projects"
                              />

                              <ProjectsCategoreyCard
                                    title="Redesigns Websites"
                                    description=""
                                    image={dentalScreenshot}
                                    link="?page=redesigns"
                                    buttonText="Explore Redesigns"
                              />
                        </div>
            </section>
      )
}

export default Projects