function ProjectCard({
  title,
  descreption,
  github,
  demo,
  imgSrc,
  icon1,
  icon2,
  icon3,
  icon4,
}) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{descreption}</p>
      <div className="card-items">
        <div className="link">
          <a href={github} target="_blank">
            GitHub
          </a>
          <a href={demo} target="_blank">
            Live Demo
          </a>
        </div>
        <div className="icons">
          {icon1 && <img src={icon1} alt="HTML" className="icon" />}
          {icon2 && <img src={icon2} alt="CSS" className="icon" />}
          {icon3 && <img src={icon3} alt="JavaScript" className="icon" />}
          {icon4 && <img src={icon4} alt="React" className="icon" />}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
