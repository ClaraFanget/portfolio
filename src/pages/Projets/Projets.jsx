//import { useState } from 'react'

import { useRef, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ProjetCard from "../../components/ProjetCard/ProjetCard";
import projets from "../../projets.json";
import "./Projets.css";

export default function Projets() {
  const projetFiltresContainer = useRef(null);
  const [filtre, setFiltre] = useState("Tous");

  const projetsFiltres = projets
    .filter((projet) => filtre === "Tous" || projet.type === filtre)
    .map((projet, index) => (
      <ProjetCard
        key={index}
        img={projet.img}
        nom={projet.nom}
        description={projet.description}
        stack={projet.stack}
        lien={projet.lien}
      />
    ));

  return (
    <div>
      <NavBar />
      <div id="page-projets-container">
        <div id="description-page-container">
          <div id="nom-page">Projets</div>
          <div id="description-page">
            Voici un aperçu de l'ensemble de mes projets.
          </div>
        </div>
        <div id="projets-filtres-container">
          <div id="filtres-container">
            <Filter
              nom="Tous"
              actif={filtre === "Tous"}
              onClick={() => setFiltre("Tous")}
            />
            <Filter
              nom="Front-end"
              actif={filtre === "Front-end"}
              onClick={() => setFiltre("Front-end")}
            />
            <Filter
              nom="Back-end"
              actif={filtre === "Back-end"}
              onClick={() => setFiltre("Back-end")}
            />
            <Filter
              nom="Full-stack"
              actif={filtre === "Full-stack"}
              onClick={() => setFiltre("Full-stack")}
            />
          </div>
          <div ref={projetFiltresContainer} className="projets-container">
            {projetsFiltres}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
