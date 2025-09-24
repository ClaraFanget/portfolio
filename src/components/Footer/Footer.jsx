import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./Footer.css";

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
          <a className="link-footer" href="/projets">
            Projets
          </a>
          <a className="link-footer" href="/contact">
            Contact
          </a>
        </div>
      </div>
      <div className="footer-section-container">
        <div className="title-footer-section-container">Contact</div>
        <div className="icons-footer-section-container">
          <a href="https://github.com/ClaraFanget">
            <FaGithub className="link-footer" />
          </a>
          <a href="https://www.linkedin.com/in/clara-fanget-94045029b/">
            <FaLinkedin className="link-footer" />
          </a>
          <a href="mailto:clara.fanget@ensc.fr">
            <FaEnvelope className="link-footer" />
          </a>
        </div>
      </div>
    </div>
  );
}
