//import { useState } from 'react'

import NavBar from "../../components/NavBar/NavBar";
import ProjetCard from "../../components/ProjetCard/ProjetCard";
import projets from "../../projets.json";
import "./Projets.css";

export default function Projets() {
  return (
    <div>
      <NavBar />
      <div id="page-projets-container">
        <div id="description-page-container">
          <div id="nom-page">Projets</div>
          <div id="description-page">
            Voici un aperçu de l'ensemble de mes projets, aussi bien en
            développement web, mobile, fullstack qu'IA.
          </div>
        </div>
        <div id="projets-container">
          {projets.map((projet, index) => (
            <ProjetCard
              key={index}
              img={projet.img}
              nom={projet.nom}
              description={projet.description}
              stack={projet.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
