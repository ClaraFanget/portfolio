//import { useState } from 'react'
import { Link } from "react-router-dom";
import "./ProjetCard.css";
import StackDetail from "../StackChips/StackChips";
import LinkButton from "../LinkButton/LinkButton";

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
        <Link id="en-savoir-plus-button" to={lien}>
          Découvrir le projet
        </Link>
      )}
    </div>
  );
}
