import React from "react"
import './header.css'
import { Link } from "gatsby";
import Social from '../social';
import Navbar from "../navbar";
import Close from "../../assets/close.svg";


export default function Header( {pageName, heroImg} ) {

  const [menu, setMenu] = React.useState(false);
  const toggleHamburger =()=>{setMenu(!menu)}

  React.useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    if(menu){document.body.classList.add('menu-open')}
    else{document.body.classList.remove('menu-open')}
  });
  return (
    <header className="line-after">
      <div role="button" className="menu-burger" onClick={() => toggleHamburger() } onKeyDown={() => toggleHamburger()}>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <Link to ="/" className="page-title">Piotr <span className="color-second">Szymański</span></Link>
      <Social />
      <div className={`menu-wrapper  ${menu? 'open': ''}`}>
        <button className="close-btn" onClick={() => toggleHamburger() } onKeyDown={() => toggleHamburger()}> 
        <Close style={{ width: "45px", height: "45px" }} /></button>
        <Navbar />
        <Social />
        <div className="menu-back"></div>

      </div>
    </header>
  )
}