function ProjectCard({title,descreption, github, demo, imgSrc}){
  return(
    <div  className="card">
      <img src={imgSrc} alt={title} />
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