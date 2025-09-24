import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./RotatingWords.css";

const words = ["Front-end", "Back-end", "IA", "Full-stack"];

export default function RotatingWords() {
  const wordRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animation de sortie
      gsap.to(wordRef.current, {
        duration: 0.5,
        opacity: 0,
        y: 10,

        onComplete: () => {
          // Changer le mot
          setIndex((prev) => (prev + 1) % words.length);

          // Animation d'entrée
          gsap.fromTo(
            wordRef.current,
            { opacity: 0, y: -10, duration: 0.5 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="dev-container">
      Développeuse
      <div id="word-container" ref={wordRef}>
        {words[index]}
      </div>
    </div>
  );
}
