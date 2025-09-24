import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer-container">
      <div className="footer-section-container">
        <div className="title-footer-section-container">Portfolio</div>
        <div className="content-footer-section-container">
          © Developpé par Clara Fanget. Tous droits réservés
        </div>
      </div>
      <div className="footer-section-container">
        <div className="title-footer-section-container">Liens rapides</div>
        <div className="link-footer-section-container">
          <Link className="link-footer" to="/projets">
            Projets
          </Link>
          <Link className="link-footer" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-section-container">
        <div className="title-footer-section-container">Contact</div>
        <div className="icons-footer-section-container">
          <Link to="https://github.com/ClaraFanget">
            <FaGithub className="link-footer" />
          </Link>
          <Link to="https://www.linkedin.com/in/clara-fanget-94045029b/">
            <FaLinkedin className="link-footer" />
          </Link>
          <Link to="mailto:clara.fanget@ensc.fr">
            <FaEnvelope className="link-footer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
