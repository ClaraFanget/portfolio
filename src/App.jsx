//import { useState } from 'react'

import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import RotatingWords from "./components/RotatingWords/RotatingWords";

import "./App.css";
import LinkButton from "./components/LinkButton/LinkButton";

export default function App() {
  return (
    <div>
      <NavBar />
      <div id="animation-container">
        <RotatingWords />
        <div id="job-container">
          Je suis à la recherche d'un stage de 6 mois en tant que développeuse
          full-stack à Paris, à partir de février 2026
        </div>
        <div id="buttons-container">
          <LinkButton link="/contact" nom="Me contacter" />
          <LinkButton link="/contact" nom="Me contacter" />
        </div>
      </div>
      <div id="projets-en-cours-container">
        <div id="projets-en-cours">Mes projets en cours</div>
      </div>
    </div>
  );
}
