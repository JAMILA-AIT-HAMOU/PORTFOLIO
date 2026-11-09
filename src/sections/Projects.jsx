


import ProjectsCategoreyCard from "../components/ProjectCategoryCard";

import buildFromScratchImg from "../assets/projectsScreen/BuildFromScratch.png"
import redesignsProjects from  "../assets/projectsScreen/RedesignProjects.png"

function Projects(){
      return(
            <section id="projects">
                  <h2>Projects</h2>
                        <div className="project-categories">
                              <ProjectsCategoreyCard
                                    title="Build From Scratch"
                                    description=""
                                    image={buildFromScratchImg}
                                    link="?page=build"
                                    buttonText="View Projects"
                              />

                              <ProjectsCategoreyCard
                                    title="Redesigns Websites"
                                    description=""
                                    image={redesignsProjects}
                                    link="?page=redesigns"
                                    buttonText="Explore Redesigns"
                              />
                        </div>
            </section>
      )
}

export default Projects