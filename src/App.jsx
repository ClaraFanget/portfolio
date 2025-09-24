import NavBar from "./components/NavBar/NavBar";
import RotatingWords from "./components/RotatingWords/RotatingWords";

import "./App.css";
import LinkButton from "./components/LinkButton/LinkButton";
import Footer from "./components/Footer/Footer";

import projets from "./projets.json";
import ProjetCard from "./components/ProjetCard/ProjetCard";

import StackGallery from "./components/StackGallery/StackGallery";

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
      <div id="stack-component-container">
        <div className="gallery-component">
          <StackGallery type="front" />
          <StackGallery type="back" />
        </div>
        <div className="gallery-component">
          <StackGallery type="tools" />
        </div>
      </div>
      <div id="projets-en-cours-container">
        <div id="title-projets-en-cours">Mes projets en cours</div>
        <div className="projets-container">
          {projets
            .filter((projet) => !projet.termine)
            .map((projet, index) => (
              <ProjetCard
                key={index}
                img={projet.img}
                nom={projet.nom}
                description={projet.description}
                stack={projet.stack}
              />
            ))}
        </div>
        <LinkButton nom="Voir tous mes projets" link="to/projets" />
      </div>
      <Footer />
    </div>
  );
}
