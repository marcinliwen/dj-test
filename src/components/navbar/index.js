import React from "react"
import { Link } from "gatsby";
import './navbar.css';


export default function Navbar() {
  return (
    <nav>
        <ul>
        <li><Link to="/o-mnie">O MNIE</Link></li>           
        <li><a>ARTYŚCI</a></li>          
        <li><a>OFERTA</a></li>           
        <li><a>ATRAKCJE</a></li>           
        <li><a>ZDJĘCIA I FILMY</a></li>
        <li><a>FAQ</a></li>           
        <li><a>KONTAKT</a></li>          
        <li><a>BLOG</a></li>          
        <li><a>STREFA KLIENTA</a></li>
        </ul>
    </nav>
  )
}