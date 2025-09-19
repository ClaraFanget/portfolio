//import { useState } from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="header-container">
      <div id="name-container">
        <Link id="name-link" to="/">
          Clara Fanget
        </Link>
      </div>
      <div id="navbar-container">
        <div className="navbar-items">
          <Link className="navbar-link" to="/">
            Accueil
          </Link>
        </div>
        <div className="navbar-items">
          <Link className="navbar-link" to="/projets">
            Projets
          </Link>
        </div>
        <div className="navbar-items">
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </div>
        <div className="navbar-items">
          <Link className="navbar-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
