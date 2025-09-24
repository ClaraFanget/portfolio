import "./StackCard.css";

export default function StackCard({ nom, logo }) {
  return (
    <div id="stack-container">
      <img src={logo} className="photo-stack" />
      <div className="nom-stack-container">{nom}</div>
    </div>
  );
}
