import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import HomeArtists from "../components/homeartists";
import Contactform from "../components/contactform";
import { StaticImage } from "gatsby-plugin-image";
import Mouse from "../assets/Mouse.svg";
import Arrow from "../assets/Arrow1.svg";
import Play from "../assets/Play.svg";
import Gallery from "../assets/Gallery.svg"

const Oferta = () => {
  return (
    <Layout>
      <Hero className="">
        <StaticImage
          src="../images/oferta-hero.png"
          alt="Oferta"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
        />
        <Header pageName="home" />
        <div className="hero-title subpage">
          <h2>Ofertas</h2>
          <h3 className="line-before">poznaj lorem ipsum</h3>
        </div>
      </Hero>
      <section  className="films-wrapper">
        <div className="film">
          <StaticImage
            src="../images/oferta-1.png"
            alt="film z imprezy"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="film-icons">
           <button className="play-film line-after">
            <Play className="icon-gold" />
            <span>odtwórz film</span>
          </button>
          <button className="play-film line-after">
            <Gallery className="icon-gold" />
            <span>Galeria zdjęć</span>
          </button>
        </div>
        </div>
        <div className="films-desc ">
          <div className="films-title about-text bg-none">
            <h2>Wesela</h2>
            <span className="text-second">Dolor sit amet</span>
            <Arrow className="arrow-down icon-white arrow-sub-title" />
            <p>
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </section>
      <section  className="films-wrapper">
        <div className="film">
          <StaticImage
            src="../images/home-film.png"
            alt="film z imprezy"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="film-icons">
           <button className="play-film line-after">
            <Play className="icon-gold" />
            <span>odtwórz film</span>
          </button>
          <button className="play-film line-after">
            <Gallery className="icon-gold" />
            <span>Galeria zdjęć</span>
          </button>
        </div>
        </div>
        <div className="films-desc ">
          <div className="films-title about-text bg-none">
            <h2>Eventy</h2>
            <span className="text-second">Dolor sit amet</span>
            <Arrow className="arrow-down icon-white arrow-sub-title" />
            <p>
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </section>
      <section  className="films-wrapper">
        <div className="film">
          <StaticImage
            src="../images/oferta-3.png"
            alt="film z imprezy"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="film-icons">
           <button className="play-film line-after">
            <Play className="icon-gold" />
            <span>odtwórz film</span>
          </button>
          <button className="play-film line-after">
            <Gallery className="icon-gold" />
            <span>Galeria zdjęć</span>
          </button>
        </div>
        </div>
        <div className="films-desc ">
          <div className="films-title about-text bg-none">
            <h2>Imprezy okolicznościowe</h2>
            <span className="text-second">Dolor sit amet</span>
            <Arrow className="arrow-down icon-white arrow-sub-title" />
            <p>
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </section>
      <Contactform />
    </Layout>
  );
};

export default Oferta;
