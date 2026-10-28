function ProjectsCategoreyCard({
  title,
  description,
  image,
  link,
  buttonText,
}) {


  return (
    <article className="category-card">
      <div className="category-card-img">
        <img src={image} alt={`${title} preview`} />
      </div>

      <div className="category-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        

        <a className="category-card-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >{buttonText}
          
        </a>
      </div>
    </article>
  );
}
export default ProjectsCategoreyCard;
