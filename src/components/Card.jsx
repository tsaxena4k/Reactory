import { Link } from "react-router-dom";

function Cards({ title, description, imageUrl, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card shadow-lg" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" />
        <div className="card-body">
          <h5 classNameName="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
