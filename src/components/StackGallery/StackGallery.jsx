import StackCard from "../StackCard/StackCard";
import "./StackGallery.css";
import stack from "./stack.json";

export default function StackGallery({ type }) {
  return (
    <div id="stack-display-container">
      {stack
        .filter((tech) => tech.type == type)
        .map((tech) => (
          <StackCard nom={tech.nom} logo={tech.logo} />
        ))}
    </div>
  );
}
