import "./LinkButton.css";

export default function LinkButton({ link, nom }) {
  return (
    <div className="link-container">
      <a className="link-attribute" href={link}>
        {nom}
      </a>
    </div>
  );
}
