
const Card = ({ project }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={project.img} alt={project.name} />
      </div>
      <div className="card-content">
        <p>{project.text}</p>
      </div>
      <div className="card-lien">
        <a className="btn btn-site" href={project.lien}>
          Site
        </a>
        <a className="btn btn-code" href={project.lien}>
          Code
        </a>
      </div>
    </div>
  );
};

export default Card;
