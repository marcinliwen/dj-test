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

const Artysci = () => {
  return (
    <Layout>
      <Hero>
        <StaticImage
          src="../images/artysci-hero.png"
          alt="Artyści"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
        />
        <Header pageName="home" />
        <div className="hero-title subpage">
          <h2>Artyści</h2>
          <h3 className="line-before">poznaj lorem ipsum</h3>
        </div>
      </Hero>
      <section className="home-about about-border art">
        <div className="about-img">
          <StaticImage
            src="../images/art-1.png"
            alt="Jan Kowalski"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
        <div className="about-text about-border">
          <h2>Jan Kowalski</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud 
          </p>
        </div>
      </section>
      <section className="home-about about-border art next left">
        <div className="about-img">
          <StaticImage
            src="../images/art-2.png"
            alt="Katarzyna Długa"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
        <div className="about-text about-border">
          <h2>Katarzyna Długa</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud 
          </p>
        </div>
      </section>
      <section className="home-about  next art">
        <div className="about-img">
          <StaticImage
            src="../images/art-1.png"
            alt="Jan Kowalski"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
        <div className="about-text about-border">
          <h2>Jan Kowalski</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud 
          </p>
        </div>
      </section>
      <section className="home-about about-border art next left">
        <div className="about-img">
          <StaticImage
            src="../images/art-2.png"
            alt="Katarzyna Długa"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
        <div className="about-text about-border">
          <h2>Katarzyna Długa</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud 
          </p>
        </div>
      </section>
      <section className="home-about about-border art next">
        <div className="about-img">
          <StaticImage
            src="../images/art-1.png"
            alt="Jan Kowalski"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
        <div className="about-text about-border">
          <h2>Jan Kowalski</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud 
          </p>
        </div>
      </section>
      <section className="home-about about-border art next left">
        <div className="about-img">
          <StaticImage
            src="../images/art-2.png"
            alt="Katarzyna Długa"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
        <div className="about-text about-border">
          <h2>Katarzyna Długa</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud 
          </p>
        </div>
      </section>
      <Contactform />
    </Layout>
  );
};
export default Artysci;
