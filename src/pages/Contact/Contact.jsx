import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../../components/NavBar/NavBar";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [active, setActive] = useState(false);
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    setActive(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          navigate("/success");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setActive(false);
        }
      );
  };

  return (
    <div>
      <NavBar />
      <div className="contact-page-container">
        <div className="contact-text-container">Me contacter</div>
        <div id="contact-container">
          <div id="info-perso-container">
            <div id="localisation-container">Paris, France</div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div id="form-container">
              <div id="name-utilisateur-container">
                <div className="name-utilisateur-souscontainer">
                  <label>Prénom</label>
                  <input
                    className="form-input"
                    type="text"
                    name="prenom"
                    required
                  />
                </div>
                <div className="name-utilisateur-souscontainer">
                  <label>Nom</label>
                  <input
                    className="form-input"
                    type="text"
                    name="nom"
                    required
                  />
                </div>
              </div>

              <div id="email-utilisateur-container">
                <label>Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div id="message-container">
                <label>Message</label>
                <textarea
                  className="form-input-message"
                  name="message"
                  required
                />
              </div>

              <input
                id={active ? "bouton-active-style" : "bouton-default-style"}
                type="submit"
                value={active ? "Envoi..." : "Envoyer"}
                onClick={(e) => {
                  if (active) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
