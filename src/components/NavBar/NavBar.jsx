//import { useState } from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css";


export default function NavBar() {
  return (
    <div id="navbar-container">
      <div className="navbar-items">
        <Link to="/projets">Projets</Link>
      </div>
      <div className="navbar-items">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-items">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
