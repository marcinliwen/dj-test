import React from "react"
import './hero.css'
import { StaticImage } from "gatsby-plugin-image"


export default function Hero({ className, children }) {
  return (
    <div className={`hero-wrapper ${className}`} style={{width: '100%'}}>
      {children}
    </div>
  )
}