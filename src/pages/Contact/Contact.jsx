import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../../components/NavBar/NavBar";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <NavBar />
      <div id="contact-page-container">
        <div id="contact-text-container">Me contacter</div>
        <div id="contact-container">
          <div id="info-perso-container">
            <div id="localisation-container">Paris, France</div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div id="form-container">
              <div id="name-utilisateur-container">
                <div className="name-utilisateur-souscontainer">
                  <label>Nom</label>
                  <input
                    className="form-input"
                    type="text"
                    name="nom"
                    required
                  />
                </div>
                <div className="name-utilisateur-souscontainer">
                  <label>Prénom</label>
                  <input
                    className="form-input"
                    type="text"
                    name="prenom"
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
                <textarea className="form-input" name="message" required />
              </div>

              <input id="envoyer-bouton" type="submit" value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
