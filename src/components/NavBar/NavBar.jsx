//import { useState } from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="header-container">
      <div id="name-container">
        <a id="name-link" href="/">
          Clara Fanget
        </a>
      </div>
      <div id="navbar-container">
        <div className="navbar-items">
          <a className="navbar-link" href="/">
            Accueil
          </a>
        </div>
        <div className="navbar-items">
          <a className="navbar-link" href="/projets">
            Projets
          </a>
        </div>
        {/* <div className="navbar-items">
          <Link className="navbar-link" to="/about">
            À propos
          </Link>
        </div> */}
        <div className="navbar-items">
          <a className="navbar-link" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
