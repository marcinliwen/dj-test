import React from "react"
import { Link } from "gatsby";
import './navbar.css';


export default function Navbar() {
  return (
    <nav>
        <ul>
        <li><Link to="/o-mnie">O MNIE</Link></li>           
        <li><Link to="/artysci">ARTYŚCI</Link></li>          
        <li><Link to="/oferta">OFERTA</Link></li>           
        <li><Link to="/atrakcje">ATRAKCJE</Link></li>           
        <li><Link to="/zdjecia-i-filmy">ZDJĘCIA I FILMY</Link></li>
        <li><Link to="/faq">FAQ</Link></li>           
        <li><Link to="/kontakt">KONTAKT</Link></li>          
        <li><Link to="/blog">BLOG</Link></li>          
        <li><Link to="/">STREFA KLIENTA</Link></li>
        </ul>
    </nav>
  )
}