import React from "react";
import Social from '../social';
import Navbar from "../navbar"
import "./footer.css";


export default function Footer() {
  return (
    <footer>
        <Social />
        <Navbar />
        <div className="footer-copyright">©2021 przez DJ Piotr Szymański. Wszelkie prawa zastrzeżone.</div>
    </footer>
  )
}