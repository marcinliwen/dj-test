import * as React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Header from '../components/header';
import Hero  from "../components/hero";
import Contactform from '../components/contactform'
import { StaticImage } from "gatsby-plugin-image";
import Mouse from "../assets/Mouse.svg"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero>  
        <StaticImage 
          src='../images/hero-home.png'
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
          />      
        <Header pageName="home"  />
        <div className="hero-title">
          <h2>Muzyczne doświadczenia</h2>
          <h3 className="line-before">w każdym stylu</h3>
        </div>
        <div className="more-wrapper">
          <button className="line-after"><Mouse fill="#C2A353"/> <span>Dowiedz się więcej</span></button>
        </div>
      </Hero>
      
      <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Contactform />
    </Layout>
  )
}

export default IndexPage


export const HomePage = graphql`
  query {
    fileName: file(relativePath: { eq: "images/hero-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`