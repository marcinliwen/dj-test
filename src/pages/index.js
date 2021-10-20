import * as React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Header from '../components/header';
import Hero  from "../components/hero";
import Contactform from '../components/contactform'
import { StaticImage } from "gatsby-plugin-image";
import Mouse from "../assets/Mouse.svg"
import Arrow from '../assets/Arrow1.svg';
import Play from "../assets/Play.svg"

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
      <section id="about" className="home-about">
        <div className="about-img">
        <StaticImage 
          src='../images/home-about.png'
          alt="O mnier"
          placeholder="blurred"
          layout="fullWidth"
          className="home-about-img"
          />  
        </div>
        <div className="about-text">
          <h2>O mnie</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
          Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
          </p>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a><Arrow /> <span>sprawdź ofertę</span></a>
        </div>
      </section>
      <section id="films" className="films-wrapper">
        <div className="film">
        <StaticImage 
          src='../images/home-film.png'
          alt="film z imprezy"
          placeholder="blurred"
          layout="fullWidth"
          
          />  
        </div>
        <div className="films-desc">
          <div className="films-title">
            <h2>Zobacz <br/>jak pracujemy</h2>
            <h3 className="line-before">film z imprezy</h3>
          </div>
          <button className="play-film line-after">
            <Play className="icon-gold"/>
            <span>odtwórz film</span>
          </button>
        </div>
      </section>
      <section id="artists" className="artists" >
        <div className="artists-item">
          <div className="artists-img">
            <StaticImage 
              src='../images/home-artist.png'
              alt="Nasi artyści"
              placeholder="blurred"
              layout="fullWidth"
            />  
          </div>       
          <div className="artists-desc">
            <h3>Joanna Kowalska</h3>
            <span className="sub-title">Wokalistka</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a className="section-more"><Arrow className="icon-white"/> <span className='sub-title'>poznaj naszych artystów</span></a>

          </div>

        </div>        
        <div className="artists-title">
          <h2>Artyści</h2>
        </div>
        
      </section>
     
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