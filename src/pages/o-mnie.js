import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Opinions from "../components/opinions";
import Contactform from "../components/contactform";
import { StaticImage } from "gatsby-plugin-image";
import Mouse from "../assets/Mouse.svg";
import Arrow from "../assets/Arrow1.svg";
import Play from "../assets/Play.svg";
import Spotify from "../assets/spotify.svg"

const Omnie = () => {
  return (
    <Layout>
      <Hero className="on-hero">
        <StaticImage
          src="../images/hero-about.png"
          alt="O mnie"
          placeholder="blurred"
          layout="fullWidth"
          className="hero"
        />
        <Header pageName="home" />
        <div className="hero-title subpage">
          <h2>O mnie</h2>
          <h3 className="line-before">poznaj lorem ipsum</h3>
        </div>
      </Hero>
      <section className="home-about about-border">
        <div className="about-img">
          <StaticImage
            src="../images/about-1.png"
            alt="Początki"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
        <div className="about-text about-border">
          <h2>Początki</h2>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className="about-second">
      <div className="about-text about-border">
          <h2>Lorem ipsum</h2>
          <span className="text-second">Dolor sit amet</span>
          <Arrow className="arrow-down icon-white arrow-sub-title" />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="about-second-img">
          <StaticImage
            src="../images/about-second.png"
            alt="Lorem ipsum"
            placeholder="blurred"
            layout="fullWidth"
            className="home-about-img"
          />
        </div>
      </section>
      <section id="opinions" className="artists opinions" >
        <Opinions />
        <div className="artists-title">
          <h2>Opinie</h2>
        </div>

      </section>
      <section className="spotify">
        <div className="section-title">
          <h2>Spotify</h2>
          <h3>moja playlista</h3>
          <Spotify className="icon-white"/>
          <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.</p>
        </div>
        <div className="spotify-list">
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbdb0pN4lBTfO?utm_source=generator&amp;theme=0" width="100%" height="380" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
      </section>
      <Contactform />
    </Layout>
  );
};

export default Omnie;
