//import { useState } from 'react'
import { Link } from "react-router-dom";
import "./ProjetCard.css";
import StackDetail from "../StackDetail/StackDetail";

export default function ProjetCard({ img, nom, description, stack }) {
  console.log(img);
  console.log(nom);
  console.log(description);
  console.log(stack);

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
      <div id="en-savoir-plus-button">En savoir plus</div>
    </div>
  );
}
