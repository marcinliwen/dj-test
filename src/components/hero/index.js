import React from "react"
import './hero.css'
import { StaticImage } from "gatsby-plugin-image"


export default function Hero({ children }) {
  return (
    <div className="hero-wrapper" style={{width: '100%'}}>
      {children}
    </div>
  )
}