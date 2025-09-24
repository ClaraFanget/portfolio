import "./Filter.css";

export default function Filter({ nom, actif, onClick }) {
  return (
    <div
      className={`filter-container${actif ? "-actif" : ""}`}
      onClick={onClick}
    >
      {nom}
    </div>
  );
}
