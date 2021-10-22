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
        <li><a>KONTAKT</a></li>          
        <li><a>BLOG</a></li>          
        <li><a>STREFA KLIENTA</a></li>
        </ul>
    </nav>
  )
}