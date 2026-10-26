function ProjectCard({
  title,
  description,
  github,
  demo,
  imgSrc,
  icon1,
  icon2,
  icon3,
  icon4,
}) {

  const technologies=[
    {src:icon1, name:"HTML"},
    {src:icon2, name:"CSS"},
    {src:icon3, name:"JavaScript"},
    {src:icon4, name:"React"},
  ].filter((tech) => tech.src)
  return (
    <article className="card">
      <div className="card-img">
        <img src={imgSrc} alt={`${title} project preview`} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="icons" aria-label="Technologies used">
          {technologies.map((tech)=>(
            <img 
              key={tech.name}
              src={tech.src}
              alt={tech.name}
              title={tech.name}
              className="icon"
            />

          ))}
        </div>

        <div className="card-links">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >Live Demo ↗
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
