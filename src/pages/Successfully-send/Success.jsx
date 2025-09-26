import NavBar from "../../components/NavBar/NavBar";
import "./Success.css";
import Footer from "../../components/Footer/Footer";
import LinkButton from "../../components/LinkButton/LinkButton";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Success() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);
  return (
    <div>
      <NavBar />
      <div className="contact-page-container">
        <div className="contact-text-container">Me contacter</div>
        <div id="success-container">
          <div id="gif-container">
            <img id="gif" src="/portfolio/assets/img/success.mp4"></img>
          </div>
          <div id="message-success-container">
            {" "}
            Votre message a bien été envoyé !
          </div>
          <div id="message-redirection-container">
            {" "}
            Vous allez être redirigé automatiquement dans {countdown} secondes
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
