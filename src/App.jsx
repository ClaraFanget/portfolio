import NavBar from "./components/NavBar/NavBar";
import RotatingWords from "./components/RotatingWords/RotatingWords";

import "./App.css";
import LinkButton from "./components/LinkButton/LinkButton";
import Footer from "./components/Footer/Footer";

import projets from "./projets.json";
import ProjetCard from "./components/ProjetCard/ProjetCard";

import StackGallery from "./components/StackGallery/StackGallery";
import Title from "./components/Title/Title";
import ScrollToAnchor from "./components/ScrollToAnchor";

export default function App() {
  return (
    <div>
      <ScrollToAnchor />
      <NavBar />
      <div id="accueil-container">
        <div id="animation-container">
          <RotatingWords />
          <div id="job-container">
            Je suis à la recherche d'un stage de 6 mois en tant que développeuse
            full-stack à Paris, à partir de février 2026
          </div>
          <div id="buttons-container">
            <LinkButton link="/contact" nom="Me contacter" />
            <LinkButton
              link="/#projets-en-cours-container"
              nom="Mes projets en cours"
            />
          </div>
        </div>
        <img id="mouse-img" src="/portfolio/assets/img/mouse.png" />
      </div>

      <div id="ma-stack-container">
        <Title title={"Ma stack"} />
        <div id="stack-component-container">
          <div className="gallery-component">
            <StackGallery type="Front-End" />
            <StackGallery type="Back-End" />
          </div>
          <div className="gallery-component">
            <StackGallery type="Outils" />
          </div>
        </div>
      </div>

      <div id="projets-en-cours-container">
        <Title title="Mes projets en cours" />
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
        <LinkButton nom="Voir tous mes projets" link="/projets" />
      </div>
      <Footer />
    </div>
  );
}
