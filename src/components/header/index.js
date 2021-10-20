import React from "react"
import './header.css'
import { Link } from "gatsby";
import Social from '../social'

export default function Header( {pageName, heroImg} ) {
  return (
    <header className="line-after">
      <div className="menu-burger">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <Link to ="/" className="page-title">Piotr <span className="color-second">Szymański</span></Link>
      <Social />
    </header>
  )
}