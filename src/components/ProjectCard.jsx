function ProjectCard({title,descreption, github, demo}){
  return(
    <div  className="card">
      <h3>{title}</h3>
      <p>{descreption}</p>
      <div className="link">
        <a href={github} target="_blank">GitHub</a>
        <a href={demo} target="_blank">Live Demo</a>
      </div>
    </div>
  )
}
export default ProjectCard;