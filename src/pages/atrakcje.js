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

const Atrakcje = () => {
  return (
    <Layout>
      <Hero className="">
        <StaticImage
          src="../images/hero-atrakcje.png"
          alt="Atrakcje"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
        />
        <Header pageName="home" />
        <div className="hero-title subpage">
          <h2>Atrakcje</h2>
          <h3 className="line-before">poznaj lorem ipsum</h3>
        </div>
      </Hero>
      <section className="atractions">
        <div className="attractions-item">
          <StaticImage
            src="../images/atr-1.png"
            alt="Fotobudka"
            placeholder="blurred"
            layout="fullWidth"
          />

          <h4>Fotobudka</h4>
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
        <div className="attractions-item">
          <StaticImage
            src="../images/atr-2.png"
            alt="Ciężki dym"
            placeholder="blurred"
            layout="fullWidth"
          />

          <h4>Ciężki dym</h4>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała
            zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z
            mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych
            „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego:
            „tekst, tekst, tekst”.
          </p>
        </div>

        <div className="attractions-item">
          <StaticImage
            src="../images/atr-4.png"
            alt="Napis LOVE"
            placeholder="blurred"
            layout="fullWidth"
          />

          <h4>Napis LOVE</h4>
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
        <div className="attractions-item">
          <StaticImage
            src="../images/atr-3.png"
            alt="Dekoracja światłem"
            placeholder="blurred"
            layout="fullWidth"
          />

          <h4>Dekoracja światłem</h4>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała
            zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z
            mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych
            „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego:
            „tekst, tekst, tekst”.
          </p>
        </div>
      </section>
      <Contactform />
    </Layout>
  );
};

export default Atrakcje;
