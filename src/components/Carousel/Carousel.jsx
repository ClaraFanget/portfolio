import { useRef, useEffect } from "react";
import "./Carousel.css";

export default function Carousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ici tu pourras ajouter un scroll auto si tu veux
  }, []);

  const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "React Native",
    "Express.js",
    "Node.js",
    "Python",
    "C#",
    "MongoDB",
    ".NET 6",
    "ASP.NET Core",
    "Entity Framework Core",
    "GitHub",
  ];

  return (
    <div ref={containerRef} id="carousel-container">
      <ul id="carousel-list">
        {items.map((tech, i) => (
          <li key={`main-${i}`} className="item-carousel-list">
            {tech}
          </li>
        ))}
        {/* duplication pour l’effet boucle */}
        {items.map((tech, i) => (
          <li key={`clone-${i}`} className="item-carousel-list">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
