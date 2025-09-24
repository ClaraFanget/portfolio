//import { useState } from 'react'
import { Link } from "react-router-dom";
import "./ProjetCard.css";
import StackDetail from "../StackChips/StackChips";

export default function ProjetCard({ img, nom, description, stack, lien }) {
  return (
    <div id="projet-container">
      <div id="img-container">
        <img id="img-projet" src={img} />
      </div>
      <div id="info-projet-container">
        <div id="nom-container">{nom}</div>
        <div id="description-container">{description}</div>
        <div id="stack-container">
          {stack.map((item, index) => (
            <StackDetail key={index} detail={item} />
          ))}
        </div>
      </div>
      {/* <LinkButton
        link="https://software-performing.art"
        nom="Découvrir le projet"
      /> */}
      {lien && (
        <a
          id="en-savoir-plus-button"
          href={lien}
          target="_blank"
          rel="noopener noreferrer"
        >
          Découvrir le projet
        </a>
      )}
    </div>
  );
}
