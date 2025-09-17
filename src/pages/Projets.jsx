//import { useState } from 'react'

import NavBar from "../components/NavBar/NavBar";
import ProjetCard from "../components/ProjetCard/ProjetCard";
import StackDetail from "../components/StackDetail/StackDetail";
import projets from "../projets.json";

export default function Projets() {
  return (
    <div>
      <NavBar />
      Page Projets
      {/* <ProjetCard /> */}
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
  );
}
