import React from "react";
import "./contactform.css";
import Mail from "../../assets/Mail.svg";
import Phone from "../../assets/Phone.svg";
import Arrow from "../../assets/Arrow1.svg"

export default function Contactform() {
  return (
    <div className="from-wrapper">
      <div className="form-title">
        <h2>Masz pytania?</h2>
        <h3 style={{ color: "#fff" }} className="line-before">skontaktuj się z nami</h3>
      </div>
      <div className="contact-data">
        <div className='contact-data-name'>
          <p>Piotr Szymański</p>
        </div>
        <div className="contsct-data-icons">
          <Mail /> <Phone />
        </div>
        <div className="color-second contact-data-nums">
          <div>Tel.: +48 789 798 789 </div>
          <div>E-mail: kontakt@piotrszymanski.pl</div>
        </div>
      </div>
      <form className="form">
          <div className="form-item">
              
              <input id="name"  name="name" type="text" placeholder="Imię i nazwisko"/>
          </div>
          <div className="form-item">
              <input id="email"  name="email" type="email" placeholder="E-mail"/>
          </div>
          <div className="form-item">
              <input id="date"  name="date" type="text" placeholder="Data wydażenia"/>
          </div>
          <div className="form-item">
              <input id="place"  name="place" type="text" placeholder="Miejsce"/>
          </div>
          <div className="form-item">
              <input id="guests"  name="guests" type="number" placeholder="Liczba gości"/>
          </div>
          <div className="form-item">
              <textarea id="message"  name="message" type="text" placeholder="Terść wiadomości" rows="4"/>
          </div>
          <div className="submit">
              <input id="submit" type="submit" value="wyślij"/><Arrow />
          </div>
      </form>
    </div>
  );
}
