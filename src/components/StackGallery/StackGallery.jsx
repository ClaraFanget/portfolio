import StackCard from "../StackCard/StackCard";
import Subtitle from "../Subtitle/Subtitle";
import "./StackGallery.css";
import stack from "./stack.json";

export default function StackGallery({ type }) {
  return (
    <div id="stack-display-component">
      <Subtitle title={type} />
      <div id="stack-display-container">
        {stack
          .filter((tech) => tech.type == type)
          .map((tech, index) => (
            <StackCard key={index} nom={tech.nom} logo={tech.logo} />
          ))}
      </div>
    </div>
  );
}
