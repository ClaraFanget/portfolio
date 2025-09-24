import { Link } from "react-router-dom";
import "./LinkButton.css";

export default function LinkButton({ link, nom }) {
  return (
    <div className="link-container">
      <Link className="link-attribute" to={link}>
        {nom}
      </Link>
    </div>
  );
}
